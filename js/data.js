/**
 * 我的 PDF 知识库 — 资料数据
 *
 * 使用方法：只要你往里面加一条记录，网站就会自动显示出来！
 *
 * 每条记录只需要 4 个信息：
 *   title    → PDF 的标题
 *   category → 属于哪个分类（填 CATEGORIES 里的 id）
 *   desc     → 一句话描述这个 PDF 讲了什么
 *   file     → PDF 文件名（把 PDF 放到 pdf/ 文件夹里）
 */

// ========== 分类（想改什么改什么） ==========
const CATEGORIES = [
  { id: 'all',        name: '全部',       icon: '📚' },
  { id: 'tech',       name: '技术文档',   icon: '💻' },
  { id: 'life',       name: '生活百科',   icon: '🏠' },
  { id: 'study',      name: '学习笔记',   icon: '📝' },
  { id: 'work',       name: '工作资料',   icon: '💼' },
  { id: 'hobby',      name: '兴趣爱好',   icon: '🎨' },
  { id: 'health',     name: '健康养生',   icon: '💊' },
  { id: 'finance',    name: '理财经济',   icon: '💰' },
  { id: 'other',      name: '其他',       icon: '📄' },
];

// ========== PDF 资料列表 ==========
// 下面这些是示例，换成你自己的 PDF 就行
const RESOURCES = [
  {
    id: 1,
    title: 'Ubuntu 服务器搭建从零开始',
    category: 'tech',
    desc: '手把手教你从零搭建一台 Ubuntu 服务器，包含环境安装、安全配置和常用工具。',
    file: 'ubuntu-server-guide.pdf',
    pages: 45,
    size: '3.2 MB',
    downloads: 0,
    tags: ['服务器', 'Ubuntu', 'Linux'],
  },
  {
    id: 2,
    title: '家常菜谱 50 道（附详细步骤）',
    category: 'life',
    desc: '精选 50 道家常菜，从食材准备到出锅全过程，厨房新手也能轻松上手。',
    file: 'home-cooking-50.pdf',
    pages: 86,
    size: '6.5 MB',
    downloads: 0,
    tags: ['菜谱', '烹饪', '家常菜'],
  },
  {
    id: 3,
    title: 'Python 数据处理速查手册',
    category: 'tech',
    desc: 'Pandas、NumPy 常用操作速查，每个示例附带代码和输出结果。',
    file: 'python-data-cheatsheet.pdf',
    pages: 28,
    size: '1.8 MB',
    downloads: 0,
    tags: ['Python', '数据分析', 'Pandas'],
  },
  {
    id: 4,
    title: '健身房新手训练计划（12周）',
    category: 'health',
    desc: '12 周完整训练计划，包含动作图解、饮食建议和每周进度表。',
    file: 'gym-beginner-plan.pdf',
    pages: 34,
    size: '4.1 MB',
    downloads: 0,
    tags: ['健身', '训练计划', '减肥'],
  },
  {
    id: 5,
    title: '个人理财入门：从月光到存款 10 万',
    category: 'finance',
    desc: '适合月薪 5k-15k 的理财方法：记账、预算、基金定投、保险配置。',
    file: 'personal-finance-101.pdf',
    pages: 52,
    size: '2.9 MB',
    downloads: 0,
    tags: ['理财', '基金', '储蓄'],
  },
  {
    id: 6,
    title: 'iPhone 隐藏功能大全（iOS 18 最新版）',
    category: 'life',
    desc: '80 个 iPhone 实用技巧和隐藏功能，让你的手机效率翻倍。',
    file: 'iphone-tips-ios18.pdf',
    pages: 38,
    size: '5.0 MB',
    downloads: 0,
    tags: ['iPhone', 'iOS', '技巧'],
  },
  {
    id: 7,
    title: '简历模板精选 30 套（中英文）',
    category: 'work',
    desc: '适用于互联网、金融、外企等行业的简历模板，Word + PDF 双格式。',
    file: 'resume-templates-30.pdf',
    pages: 60,
    size: '8.0 MB',
    downloads: 0,
    tags: ['简历', '求职', '模板'],
  },
  {
    id: 8,
    title: '摄影构图入门：从拍照到摄影',
    category: 'hobby',
    desc: '三分法、引导线、对称构图… 用大量实例图讲透摄影构图的底层逻辑。',
    file: 'photography-composition.pdf',
    pages: 42,
    size: '12.0 MB',
    downloads: 0,
    tags: ['摄影', '构图', '入门'],
  },
  {
    id: 9,
    title: '英语口语 300 句：出国旅游够用了',
    category: 'study',
    desc: '机场、酒店、餐厅、购物、问路五大场景常用英语，中英对照 + 音标。',
    file: 'travel-english-300.pdf',
    pages: 24,
    size: '1.5 MB',
    downloads: 0,
    tags: ['英语', '口语', '旅游'],
  },
  {
    id: 10,
    title: 'Git 版本控制简明教程',
    category: 'tech',
    desc: '从 git init 到团队协作，用图解方式讲明白 Git 的核心概念。',
    file: 'git-tutorial.pdf',
    pages: 36,
    size: '2.3 MB',
    downloads: 0,
    tags: ['Git', '版本控制', '编程'],
  },
  {
    id: 11,
    title: '装修避坑指南：从毛坯到入住',
    category: 'life',
    desc: '过来人总结的 50 个装修大坑，附预算表模板和材料选购清单。',
    file: 'renovation-guide.pdf',
    pages: 66,
    size: '7.8 MB',
    downloads: 0,
    tags: ['装修', '避坑', '家居'],
  },
  {
    id: 12,
    title: '冥想入门：每天 10 分钟改变生活',
    category: 'health',
    desc: '正念冥想的入门指南，包含 8 周练习计划和引导音频文字版。',
    file: 'meditation-guide.pdf',
    pages: 28,
    size: '2.0 MB',
    downloads: 0,
    tags: ['冥想', '正念', '减压'],
  },
  {
    id: 13,
    title: '小红书运营从 0 到 1 万粉',
    category: 'work',
    desc: '标题技巧、封面设计、发布时间、涨粉策略，新人博主必备。',
    file: 'xiaohongshu-growth.pdf',
    pages: 48,
    size: '4.5 MB',
    downloads: 0,
    tags: ['小红书', '自媒体', '运营'],
  },
  {
    id: 14,
    title: '基金定投实战手册',
    category: 'finance',
    desc: '什么叫定投、买什么基金、什么时候卖，一次性讲清楚。',
    file: 'fund-investment.pdf',
    pages: 40,
    size: '3.0 MB',
    downloads: 0,
    tags: ['基金', '定投', '投资'],
  },
  {
    id: 15,
    title: '水彩画入门：从工具到第一幅作品',
    category: 'hobby',
    desc: '水彩工具选购 + 基础技法 + 10 幅临摹教程，零基础友好。',
    file: 'watercolor-beginner.pdf',
    pages: 56,
    size: '15.0 MB',
    downloads: 0,
    tags: ['水彩', '绘画', '入门'],
  },
  {
    id: 16,
    title: 'ChatGPT 使用技巧大全（2025 版）',
    category: 'tech',
    desc: 'Prompt 工程、角色扮演、工作流自动化，让你的 AI 助手效率翻 10 倍。',
    file: 'chatgpt-tips-2025.pdf',
    pages: 32,
    size: '2.6 MB',
    downloads: 0,
    tags: ['ChatGPT', 'AI', 'Prompt'],
  },
  {
    id: 17,
    title: '考研政治思维导图（马原+毛中特）',
    category: 'study',
    desc: '考研政治两大模块的全彩思维导图，一张图搞定一章知识点。',
    file: 'kaoyan-politics-mindmap.pdf',
    pages: 62,
    size: '5.5 MB',
    downloads: 0,
    tags: ['考研', '政治', '思维导图'],
  },
  {
    id: 18,
    title: '睡眠改善指南：告别失眠',
    category: 'health',
    desc: '从睡眠科学到实操方法，帮你建立健康的睡眠习惯。',
    file: 'sleep-improvement.pdf',
    pages: 22,
    size: '1.2 MB',
    downloads: 0,
    tags: ['睡眠', '失眠', '健康'],
  },
  {
    id: 19,
    title: '新手养猫完全手册',
    category: 'hobby',
    desc: '选猫、接猫、喂猫、看病…养猫第一年需要的所有知识都在这里。',
    file: 'cat-care-handbook.pdf',
    pages: 72,
    size: '9.0 MB',
    downloads: 0,
    tags: ['养猫', '宠物', '新手'],
  },
  {
    id: 20,
    title: 'Markdown 写作完全指南',
    category: 'tech',
    desc: '从基础语法到高级技巧，10 分钟学会用 Markdown 写出漂亮的文档。',
    file: 'markdown-guide.pdf',
    pages: 18,
    size: '0.8 MB',
    downloads: 0,
    tags: ['Markdown', '写作', '效率'],
  },
];

// ========== 工具函数 ==========
function getCategoryCount(catId) {
  if (catId === 'all') return RESOURCES.length;
  return RESOURCES.filter(r => r.category === catId).length;
}

function getHotResources(limit = 6) {
  return [...RESOURCES].sort((a, b) => b.downloads - a.downloads).slice(0, limit);
}

function getNewResources(limit = 6) {
  return [...RESOURCES].reverse().slice(0, limit);
}
