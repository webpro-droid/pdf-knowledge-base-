/**
 * 我的 PDF 知识库 — 中英文翻译字典
 * 在这里改任何文字，对应语言会自动更新
 */

const I18N = {
  zh: {
    // 网站名称 & 通用
    siteName: '我的 PDF 知识库',
    siteDesc: '一个干净、好搜的 PDF 知识库。各类实用知识整理成 PDF，免费浏览下载。',
    siteKeywords: 'PDF下载,知识库,免费资料,技术文档,学习笔记',

    // Header
    navHome: '首页',
    navAll: '全部 PDF',
    navAbout: '关于',
    searchPlaceholder: '搜 PDF，如：菜谱、Python、简历模板...',

    // Hero
    heroTitle: '📄 各类知识，一搜即达',
    heroDesc: '技术文档、生活百科、学习笔记、工作资料——把知识整理成 PDF，方便浏览和下载',
    heroSearchPlaceholder: '搜一下你想了解的知识...',
    heroStatFiles: '份 PDF',
    heroStatCats: '个分类',

    // 分类区域
    sectionCategories: '📂 按分类浏览',
    sectionLatest: '🆕 最近更新',
    sectionAll: '📋 全部 PDF',
    viewAll: '查看全部 →',

    // 广告
    adPlaceholder: '📢 Google AdSense 广告位 — 上线后替换为你的广告代码',

    // Footer
    footerAbout: '关于本站',
    footerFAQ: '常见问题',
    footerCats: '分类',
    footerDisclaimer: '本站 PDF 均来源于网络收集与用户分享，仅供个人学习交流使用。如有侵权请联系删除。',
    footerCopyright: '© 2025 我的 PDF 知识库 | Powered by GitHub Pages',

    // 搜索页
    searchAll: '全部 PDF',
    searchBreadcrumb: '全部 PDF',
    searchFilterAll: '全部',
    searchResultAll: '全部 PDF',
    searchResultCat: '中关于',
    searchResultQuery: '的搜索结果',
    searchResultCount: '共',
    searchResultUnit: '份 PDF',
    searchNoResult: '暂无 PDF',
    searchNoResultHint: '试试换一个关键词或分类',
    searchEmpty: '快去 js/data.js 里添加你的 PDF 吧',

    // 详情页
    detailBreadcrumb: '首页',
    detailPages: '页',
    detailSize: '未知大小',
    detailDownload: '📥 下载 PDF',
    detailPrint: '🖨️ 打印',
    detailDescTitle: '📌 内容简介',
    detailClickToDownload: '点击上方「下载 PDF」按钮获取完整文件',
    detailFilePathHint: '提示：把真实的 PDF 文件放到 pdf/ 文件夹下，然后修改 js/data.js 里的 file 字段即可',
    detailRelated: '📌 同分类下的其他 PDF',
    detailNotFound: '未找到',
    detailNotFoundHint: '返回首页',

    // 关于页
    aboutTitle: '📄 关于这个知识库',
    aboutWhatTitle: '🎯 这是什么？',
    aboutWhatContent: '一个简洁的 PDF 知识库，把各种实用知识整理成 PDF，方便大家浏览和下载。',
    aboutScopeTitle: '📂 知识范围',
    aboutScopeContent: '技术文档、生活百科、学习笔记、工作资料、兴趣爱好、健康养生……只要是对别人有用的知识，都可以放进来。',
    aboutFAQTitle: '❓ 常见问题',
    aboutFAQDownload: 'PDF 怎么下载？',
    aboutFAQDownloadA: '点击任意 PDF 进入详情页，点击「下载 PDF」按钮即可。所有资料完全免费。',
    aboutFAQSubmit: '我想分享自己的 PDF，怎么投稿？',
    aboutFAQSubmitA: '欢迎！联系站长（联系方式见下方），把你的 PDF 发过来，审核后会收录到知识库中。',
    aboutFAQMakeMoney: '网站怎么赚钱？',
    aboutFAQMakeMoneyA: '通过页面上的 Google AdSense 广告获取收入，不影响用户免费使用。',
    aboutContactTitle: '📬 联系方式',
    aboutContactEmail: '📧 邮箱：替换为你的真实邮箱',
    aboutContactWechat: '💬 微信：替换为你的微信',
    aboutCopyrightTitle: '⚖️ 版权声明',
    aboutCopyrightContent: '本站 PDF 资料来源于网络收集与用户分享，仅供个人学习交流使用。如果侵犯了您的权益，请联系我们删除。',

    // 分类名称
    catAll: '全部',
    catTech: '技术文档',
    catLife: '生活百科',
    catStudy: '学习笔记',
    catWork: '工作资料',
    catHobby: '兴趣爱好',
    catHealth: '健康养生',
    catFinance: '理财经济',
    catOther: '其他',

    // PDF 卡片
    cardView: '查看',

    // Toast
    toastNoFile: '请先在 js/data.js 里填写真实的 PDF 文件名',
  },

  en: {
    // Site name & meta
    siteName: 'My PDF Knowledge Base',
    siteDesc: 'A clean, searchable PDF knowledge base. Practical knowledge organized as PDFs, free to browse and download.',
    siteKeywords: 'PDF download,knowledge base,free resources,tech docs,study notes',

    // Header
    navHome: 'Home',
    navAll: 'All PDFs',
    navAbout: 'About',
    searchPlaceholder: 'Search PDFs, e.g. recipes, Python, resume...',

    // Hero
    heroTitle: '📄 Knowledge at Your Fingertips',
    heroDesc: 'Tech docs, life guides, study notes, work templates — knowledge organized as PDFs for easy browsing',
    heroSearchPlaceholder: 'Search for knowledge...',
    heroStatFiles: 'PDFs',
    heroStatCats: 'Categories',

    // Sections
    sectionCategories: '📂 Browse by Category',
    sectionLatest: '🆕 Latest Updates',
    sectionAll: '📋 All PDFs',
    viewAll: 'View All →',

    // Ads
    adPlaceholder: '📢 Google AdSense Ad Slot — Replace with your ad code after launch',

    // Footer
    footerAbout: 'About',
    footerFAQ: 'FAQ',
    footerCats: 'Categories',
    footerDisclaimer: 'All PDFs are collected from the internet and user submissions, for personal learning only. Contact us for copyright issues.',
    footerCopyright: '© 2025 My PDF Knowledge Base | Powered by GitHub Pages',

    // Search page
    searchAll: 'All PDFs',
    searchBreadcrumb: 'All PDFs',
    searchFilterAll: 'All',
    searchResultAll: 'All PDFs',
    searchResultCat: 'in',
    searchResultQuery: 'results for',
    searchResultCount: 'Found',
    searchResultUnit: 'PDFs',
    searchNoResult: 'No PDFs found',
    searchNoResultHint: 'Try a different keyword or category',
    searchEmpty: 'Add your PDFs in js/data.js',

    // Detail page
    detailBreadcrumb: 'Home',
    detailPages: 'pages',
    detailSize: 'Unknown',
    detailDownload: '📥 Download PDF',
    detailPrint: '🖨️ Print',
    detailDescTitle: '📌 Description',
    detailClickToDownload: 'Click the "Download PDF" button above to get the full file',
    detailFilePathHint: 'Tip: Put real PDF files in the pdf/ folder, then update the file field in js/data.js',
    detailRelated: '📌 Related PDFs in This Category',
    detailNotFound: 'Not Found',
    detailNotFoundHint: 'Back to Home',

    // About page
    aboutTitle: '📄 About This Knowledge Base',
    aboutWhatTitle: '🎯 What Is This?',
    aboutWhatContent: 'A simple PDF knowledge base that organizes practical knowledge into PDFs for easy browsing and downloading.',
    aboutScopeTitle: '📂 Scope',
    aboutScopeContent: 'Tech docs, life guides, study notes, work templates, hobbies, health, finance — anything useful to people.',
    aboutFAQTitle: '❓ FAQ',
    aboutFAQDownload: 'How do I download PDFs?',
    aboutFAQDownloadA: 'Click any PDF to enter its detail page, then click the "Download PDF" button. All resources are completely free.',
    aboutFAQSubmit: 'How can I submit my own PDF?',
    aboutFAQSubmitA: 'Welcome! Contact the site owner (see below), send your PDF, and it will be reviewed and added to the knowledge base.',
    aboutFAQMakeMoney: 'How does the site make money?',
    aboutFAQMakeMoneyA: 'Through Google AdSense ads on the pages, without affecting free access for users.',
    aboutContactTitle: '📬 Contact',
    aboutContactEmail: '📧 Email: replace with your real email',
    aboutContactWechat: '💬 WeChat: replace with your WeChat',
    aboutCopyrightTitle: '⚖️ Copyright',
    aboutCopyrightContent: 'All PDFs are collected from the internet and user submissions, for personal learning only. If any content infringes your rights, please contact us for removal.',

    // Category names
    catAll: 'All',
    catTech: 'Tech Docs',
    catLife: 'Life Guides',
    catStudy: 'Study Notes',
    catWork: 'Work Templates',
    catHobby: 'Hobbies',
    catHealth: 'Health & Wellness',
    catFinance: 'Finance',
    catOther: 'Other',

    // PDF card
    cardView: 'View',

    // Toast
    toastNoFile: 'Please fill in the real PDF file name in js/data.js',
  }
};

// ============ i18n 工具 ============

// 当前语言
let currentLang = localStorage.getItem('pdf-kb-lang') || 'zh';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('pdf-kb-lang', lang);
  renderAllText();
}

function t(key) {
  return I18N[currentLang][key] || I18N['zh'][key] || key;
}

// 获取翻译后的分类名称
function catName(catId) {
  if (!catId || catId === 'all') return t('catAll');
  const map = {
    tech: t('catTech'), life: t('catLife'), study: t('catStudy'),
    work: t('catWork'), hobby: t('catHobby'), health: t('catHealth'),
    finance: t('catFinance'), other: t('catOther'),
  };
  return map[catId] || catId;
}

// 渲染所有 i18n 标记的元素
function renderAllText() {
  // 静态文本
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t(key);
      } else {
        el.textContent = t(key);
      }
    }
  });

  // 更新语言下拉按钮文字
  const btn = document.querySelector('.lang-btn');
  if (btn) {
    const isZh = currentLang === 'zh';
    btn.innerHTML = `🌐 ${isZh ? '中文' : 'English'}`;
    btn.title = isZh ? '选择语言' : 'Select Language';
    // 更新选项的 active 状态
    document.querySelectorAll('.lang-option').forEach(opt => {
      const lang = opt.getAttribute('onclick')?.match(/selectLang\('(\w+)'\)/)?.[1];
      opt.classList.toggle('active', lang === currentLang);
    });
  }

  // 动态重渲染
  updatePageText();
}

// 语言选择下拉组件 HTML
function renderLangSwitcher() {
  const isZh = currentLang === 'zh';
  return `
    <div class="lang-selector" id="langSelector">
      <button class="lang-btn" onclick="toggleLangDropdown(event)" title="${isZh ? '选择语言' : 'Select Language'}">
        🌐 ${isZh ? '中文' : 'English'}
      </button>
      <div class="lang-dropdown" id="langDropdown">
        <div class="lang-option ${isZh ? 'active' : ''}" onclick="selectLang('zh')">🌐 中文</div>
        <div class="lang-option ${!isZh ? 'active' : ''}" onclick="selectLang('en')">🌐 English</div>
      </div>
    </div>
  `;
}

// 切换下拉菜单
function toggleLangDropdown(e) {
  e.stopPropagation();
  const dd = document.getElementById('langDropdown');
  if (dd) dd.classList.toggle('open');
}

// 选择语言
function selectLang(lang) {
  setLang(lang);
  document.getElementById('langDropdown')?.classList.remove('open');
}

// 点击外部关闭下拉
document.addEventListener('click', (e) => {
  const sel = document.getElementById('langSelector');
  if (sel && !sel.contains(e.target)) {
    document.getElementById('langDropdown')?.classList.remove('open');
  }
});

// 更新当前页面特有的动态文本
function updatePageText() {
  const page = location.pathname.replace(/\/$/,'').split('/').pop() || 'index.html';

  // 更新页面标题
  if (page === 'index.html' || page === '') {
    document.title = t('siteName');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('siteDesc'));
  }

  // 刷新分类卡片（首页有）
  renderCategories();

  // 刷新搜索结果页（如果当前在搜索页）
  if (page === 'search.html') {
    const p = new URLSearchParams(location.search);
    const q = (p.get('q') || '').trim().toLowerCase();
    const cat = p.get('category') || 'all';
    const bar = document.getElementById('filterBar');
    if (bar) {
      const catList = CATEGORIES;
      bar.innerHTML = catList.map(c => `
        <button class="filter-chip ${c.id===cat?'active':''}" onclick="location.href='?category=${c.id}&q=${encodeURIComponent(p.get('q')||'')}'">${c.icon} ${catName(c.id)}</button>
      `).join('');
    }
    // 更新搜索页标题
    let list = RESOURCES;
    if (cat !== 'all') list = list.filter(r => r.category === cat);
    if (q) list = list.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.desc.toLowerCase().includes(q) ||
      (r.tags||[]).some(t => t.toLowerCase().includes(q))
    );
    const titleEl = document.getElementById('resultTitle');
    if (titleEl) {
      if (q && cat !== 'all') titleEl.textContent = `「${catName(cat)}」${t('searchResultCat')}"${q}"${t('searchResultQuery')}`;
      else if (q) titleEl.textContent = `"${q}" ${t('searchResultQuery')}`;
      else if (cat !== 'all') titleEl.textContent = catName(cat);
      else titleEl.textContent = t('searchResultAll');
    }
    const cnt = document.getElementById('resultCount');
    if (cnt) cnt.textContent = `${t('searchResultCount')} ${list.length} ${t('searchResultUnit')}`;

    renderGrid(list, 'resourceGrid');
  }

  // 刷新详情页
  if (page === 'detail.html') {
    initDetail();
  }

  // 刷新首页列表
  if (page === 'index.html' || page === '') {
    renderGrid(getNewResources(6), 'newResources');
    renderGrid([...RESOURCES], 'hotResources');
  }
}

// 页面加载时注入语言切换按钮
document.addEventListener('DOMContentLoaded', () => {
  // 插入语言切换按钮到 header
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    const sw = document.createElement('span');
    sw.innerHTML = renderLangSwitcher();
    navLinks.appendChild(sw.firstElementChild);
  }
});
