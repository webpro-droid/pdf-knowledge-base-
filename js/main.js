/**
 * 我的 PDF 知识库 — 主交互逻辑
 */

// ============ 工具 ============
function escapeHTML(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function showToast(msg, dur = 2500) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = typeof msg === 'string' ? msg : t(msg);
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), dur);
}

// ============ 渲染分类卡片 ============
function renderCategories() {
  const g = document.getElementById('categoryGrid');
  if (!g) return;
  g.innerHTML = CATEGORIES.filter(c => c.id !== 'all').map(c => `
    <a href="search.html?category=${c.id}" class="category-card">
      <span class="category-icon">${c.icon}</span>
      <div class="category-name">${catName(c.id)}</div>
      <div class="category-count">${getCategoryCount(c.id)} ${t('heroStatFiles')}</div>
    </a>
  `).join('');
}

// ============ 渲染 PDF 卡片 ============
function renderCard(r) {
  const cat = CATEGORIES.find(c => c.id === r.category);
  return `
    <div class="resource-card">
      <span class="card-badge">${cat?.icon || '📄'} ${catName(r.category)}</span>
      <h3 class="card-title">
        <a href="detail.html?id=${r.id}">${escapeHTML(r.title)}</a>
      </h3>
      <p class="card-desc">${escapeHTML(r.desc)}</p>
      <div class="card-meta">
        <span>📄 ${r.pages || '?'} ${t('detailPages')}</span>
        <span>💾 ${r.size || t('detailSize')}</span>
        <a href="detail.html?id=${r.id}" class="btn-download">${t('cardView')}</a>
      </div>
    </div>
  `;
}

function renderGrid(list, id) {
  const g = document.getElementById(id);
  if (!g) return;
  if (!list.length) {
    g.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><div class="empty-icon">📭</div><h3>${t('searchNoResult')}</h3><p>${t('searchEmpty')}</p></div>`;
    return;
  }
  // 每 4 张卡片插入一个广告卡片
  const items = [];
  list.forEach((r, i) => {
    items.push(renderCard(r));
    if ((i + 1) % 4 === 0 && i < list.length - 1) {
      items.push(`<div class="ad-card"><span class="ad-card-icon">📢</span>Google AdSense<br><small style="opacity:0.6">${t('adPlaceholder')}</small></div>`);
    }
  });
  g.innerHTML = items.join('');
}

// ============ 首页 ============
function initHome() {
  renderGrid(getNewResources(6), 'newResources');
  renderGrid([...RESOURCES], 'hotResources');

  const tt = document.getElementById('totalResources');
  if (tt) tt.textContent = RESOURCES.length;
  const tc = document.getElementById('totalCategories');
  if (tc) tc.textContent = CATEGORIES.length - 1;
}

// ============ 搜索页 ============
function initSearch() {
  const p = new URLSearchParams(location.search);
  const q = (p.get('q') || '').trim().toLowerCase();
  const cat = p.get('category') || 'all';

  const inp = document.getElementById('searchInput');
  if (inp) inp.value = p.get('q') || '';

  const bar = document.getElementById('filterBar');
  if (bar) {
    bar.innerHTML = CATEGORIES.map(c => `
      <button class="filter-chip ${c.id===cat?'active':''}" onclick="location.href='?category=${c.id}&q=${encodeURIComponent(p.get('q')||'')}'">${c.icon} ${catName(c.id)}</button>
    `).join('');
  }

  let list = RESOURCES;
  if (cat !== 'all') list = list.filter(r => r.category === cat);
  if (q) list = list.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.desc.toLowerCase().includes(q) ||
    (r.tags||[]).some(t => t.toLowerCase().includes(q))
  );

  const tEl = document.getElementById('resultTitle');
  if (tEl) {
    if (q && cat !== 'all') tEl.textContent = `「${catName(cat)}」${t('searchResultCat')}"${q}"${t('searchResultQuery')}`;
    else if (q) tEl.textContent = `"${q}" ${t('searchResultQuery')}`;
    else if (cat !== 'all') tEl.textContent = catName(cat);
    else tEl.textContent = t('searchResultAll');
  }
  const cnt = document.getElementById('resultCount');
  if (cnt) cnt.textContent = `${t('searchResultCount')} ${list.length} ${t('searchResultUnit')}`;

  renderGrid(list, 'resourceGrid');
}

// ============ 详情页 ============
function initDetail() {
  const id = parseInt(new URLSearchParams(location.search).get('id'));
  const r = RESOURCES.find(x => x.id === id);

  if (!r) {
    const dc = document.querySelector('.detail-container');
    if (dc) dc.innerHTML = `<div class="empty-state"><div class="empty-icon">😕</div><h3>${t('detailNotFound')}</h3><p><a href="index.html">${t('detailNotFoundHint')}</a></p></div>`;
    return;
  }

  const cat = CATEGORIES.find(c => c.id === r.category);
  const bc = document.getElementById('breadcrumb');
  if (bc) bc.innerHTML = `<a href="index.html">${t('detailBreadcrumb')}</a> <span>›</span> <a href="search.html?category=${r.category}">${catName(r.category)}</a> <span>›</span> ${r.title}`;

  const badge = document.getElementById('detailBadge');
  if (badge) badge.textContent = catName(r.category);

  const dt = document.getElementById('detailTitle');
  if (dt) dt.textContent = r.title;

  const dp = document.getElementById('detailPages');
  if (dp) dp.textContent = (r.pages || '?') + ' ' + t('detailPages');

  const ds = document.getElementById('detailSize');
  if (ds) ds.textContent = r.size || t('detailSize');

  const dd = document.getElementById('detailDesc');
  if (dd) dd.textContent = r.desc;

  const tagEl = document.getElementById('tagList');
  if (tagEl && r.tags) {
    tagEl.innerHTML = r.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
  }

  const fn = document.getElementById('pdfFileName');
  if (fn) fn.textContent = r.file || '未知文件';

  const dl = document.getElementById('btnDownload');
  if (dl) {
    dl.href = 'pdf/' + (r.file || '#');
    dl.addEventListener('click', e => {
      if (!r.file || r.file === '#') {
        e.preventDefault();
        showToast(t('toastNoFile'));
      }
    });
  }

  document.title = r.title + ' - ' + t('siteName');

  // ===== SEO: 动态更新 meta 标签 =====
  const baseUrl = 'https://lawoozhe123.github.io/pdf-knowledge-base-/';
  const pageUrl = `${baseUrl}detail.html?id=${r.id}`;
  const seoTitle = `${r.title} 免费下载 PDF — 我的 PDF 知识库`;
  const seoDesc = `${r.desc} 共 ${r.pages || '?'} 页，${r.size || ''}。免费下载 PDF 资料。`;
  const seoKeywords = [r.title, ...(r.tags||[]), catName(r.category), 'PDF下载', '免费PDF'].join(',');

  // 更新 title
  const titleEl = document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = seoTitle;
  document.title = seoTitle;

  // 更新 meta description
  const descEl = document.getElementById('pageDesc');
  if (descEl) descEl.setAttribute('content', seoDesc);

  // 更新 keywords
  const kwEl = document.getElementById('pageKeywords');
  if (kwEl) kwEl.setAttribute('content', seoKeywords);

  // 更新 canonical
  const canEl = document.getElementById('pageCanonical');
  if (canEl) canEl.setAttribute('href', pageUrl);

  // 更新 Open Graph
  const ogT = document.getElementById('ogTitle');
  if (ogT) ogT.setAttribute('content', seoTitle);
  const ogD = document.getElementById('ogDesc');
  if (ogD) ogD.setAttribute('content', seoDesc);
  const ogU = document.getElementById('ogUrl');
  if (ogU) ogU.setAttribute('content', pageUrl);

  // 更新 JSON-LD 结构化数据
  const ldEl = document.getElementById('jsonLd');
  if (ldEl) {
    const catLabel = catName(r.category);
    ldEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Book",
      "name": r.title,
      "description": r.desc,
      "url": pageUrl,
      "bookFormat": "EBook",
      "numberOfPages": r.pages,
      "inLanguage": "zh-CN",
      "keywords": (r.tags||[]).join(', '),
      "genre": catLabel,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "CNY",
        "availability": "https://schema.org/InStock"
      },
      "isPartOf": {
        "@type": "WebSite",
        "name": "我的 PDF 知识库",
        "url": baseUrl
      }
    });
  }

  const rel = RESOURCES.filter(x => x.id !== r.id && x.category === r.category).slice(0, 3);
  const rs = document.getElementById('relatedSection');
  if (rs && rel.length) {
    rs.style.display = 'block';
    renderGrid(rel, 'relatedResources');
  }
}

// ============ 搜索事件 ============
function bindSearch() {
  function go(inp) {
    const v = inp.value.trim();
    if (v) location.href = 'search.html?q=' + encodeURIComponent(v);
  }
  ['heroSearch','headerSearch','searchInput'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('keypress', e => { if (e.key==='Enter') go(el); });
  });
}

// ============ 回到顶部 ============
function initBTT() {
  const b = document.getElementById('backToTop');
  if (!b) return;
  window.addEventListener('scroll', () => b.classList.toggle('visible', scrollY > 400));
  b.addEventListener('click', () => scrollTo({top:0,behavior:'smooth'}));
}

// ============ 入口 ============
document.addEventListener('DOMContentLoaded', () => {
  // 语言切换按钮由 i18n.js 的 DOMContentLoaded 负责注入

  renderAllText();
  bindSearch();
  initBTT();

  const page = location.pathname.replace(/\/$/,'').split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') initHome();
  else if (page === 'search.html') initSearch();
  else if (page === 'detail.html') initDetail();
});
