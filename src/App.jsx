import { useState } from 'react';
import { Icons, BrandLogo } from './components/Icons.jsx';
import { removeAccents } from './data/config.js';

import TabHome    from './tabs/TabHome.jsx';
import TabShifts  from './tabs/TabShifts.jsx';
import TabRules   from './tabs/TabRules.jsx';
import TabConduct from './tabs/TabConduct.jsx';
import TabSafety      from './tabs/TabSafety.jsx';
import TabMenu        from './tabs/TabMenu.jsx';
import TabVideos      from './tabs/TabVideos.jsx';
import TabPhotos      from './tabs/TabPhotos.jsx';
import TabTheoryFB    from './tabs/TabTheoryFB.jsx';
import TabSteakSauces from './tabs/TabSteakSauces.jsx';
import TabQuiz        from './tabs/TabQuiz.jsx';
import TabHistory     from './tabs/TabHistory.jsx';

const NAV_ITEMS = [
  { group: 'NỘI QUY CƠ BẢN', items: [
    { id: 'home',       icon: Icons.Home,        label: 'Trang Chủ' },
    { id: 'shifts',     icon: Icons.Clock,       label: 'Thời Gian & Nghỉ Phép' },
    { id: 'rules',      icon: Icons.Gavel,       label: 'Quyền Lợi & Kỷ Luật' },
    { id: 'conduct',    icon: Icons.UserCheck,   label: 'Tác Phong & Ứng Xử' },
    { id: 'safety',     icon: Icons.ShieldAlert, label: 'An Toàn & Sơ Đồ Sảnh' },
  ]},
  { group: 'NGHIỆP VỤ NHÀ HÀNG', items: [
    { id: 'menu',        icon: Icons.Utensils,   label: 'Thực Đơn (Menu)' },
    { id: 'theory_fb',   icon: Icons.Headphones, label: 'Omotenashi 5★' },
    { id: 'steak_sauces',icon: Icons.BookOpen,   label: 'Nghiệp Vụ F&B' },
    { id: 'videos',      icon: Icons.PlayCircle, label: 'Video Đào Tạo' },
    { id: 'photos',      icon: Icons.Photo,      label: 'Hình Ảnh Đào Tạo' },
  ]},
  { group: 'KHẢO SÁT & ĐÁNH GIÁ', items: [
    { id: 'quiz',    icon: Icons.Award,    label: 'Thi Trắc Nghiệm' },
    { id: 'history', icon: Icons.Database, label: 'Bảng Điểm Quản Lý' },
  ]},
];

// Search index sẽ được import từ data/search.js sau — tạm để rỗng
const SEARCH_INDEX = [];

export default function App() {
  const [activeTab, setActiveTab]         = useState('home');
  const [activeMenuCategory, setActiveMenuCategory]   = useState('promotions');
  const [activeSauceCategory, setActiveSauceCategory] = useState('pasta');
  const [searchQuery, setSearchQuery]     = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen]   = useState(false);

  const goTo = (id, option) => {
    setActiveTab(id);
    if (option && id === 'menu') setActiveMenuCategory(option);
    if (option && id === 'steak_sauces') setActiveSauceCategory(option);
    window.scrollTo(0, 0);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim().length === 0) { setSearchResults([]); setIsSearchOpen(false); return; }
    const cleanQ = removeAccents(query);
    const words  = cleanQ.split(/\s+/).filter(Boolean);
    const scored = SEARCH_INDEX.map(item => {
      const target = removeAccents(item.title) + ' ' + removeAccents(item.keywords || '');
      const hits   = words.filter(w => target.includes(w)).length;
      return { ...item, score: words.length ? hits / words.length : 0 };
    });
    const results = scored
      .filter(i => i.score > 0.35 || (words.length === 1 && i.score > 0))
      .sort((a, b) => b.score - a.score);
    setSearchResults(results);
    setIsSearchOpen(true);
  };

  const handleSelectResult = (r) => {
    goTo(r.id, r.option);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  // ── Tab content router ──────────────────────────────────────────────────────
  // Từng tab sẽ được thay bằng component thực sau khi viết xong
  const renderTab = () => {
    switch (activeTab) {
      case 'home':         return <TabHome goTo={goTo} />;
      case 'shifts':       return <TabShifts />;
      case 'rules':        return <TabRules />;
      case 'conduct':      return <TabConduct />;
      case 'safety':       return <TabSafety />;
      case 'menu':         return <TabMenu activeMenuCategory={activeMenuCategory} setActiveMenuCategory={setActiveMenuCategory} />;
      case 'theory_fb':    return <TabTheoryFB />;
      case 'steak_sauces': return <TabSteakSauces />;
      case 'videos':       return <TabVideos />;
      case 'photos':       return <TabPhotos />;
      case 'quiz':         return <TabQuiz />;
      case 'history':      return <TabHistory />;
      default:             return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-slate-800 flex flex-col">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/50 p-4">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo + tên */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <div className="w-10 h-10 rounded-xl border border-orange-200 bg-gradient-to-br from-white to-orange-50 flex items-center justify-center shadow-sm">
              <BrandLogo />
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-tight text-slate-950 flex items-center gap-2">
                Ơ BISTRO{' '}
                <span className="text-[10px] uppercase font-bold text-[#00a2d5] bg-cyan-50 px-1.5 py-0.5 rounded-md">Thủ Đức</span>
              </h1>
              <p className="text-[10px] text-slate-400">Cổng Thông Tin Học Tập & Kiểm Tra Nhân Viên</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md w-full relative">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Icons.Search />
              </span>
              <input
                type="text"
                placeholder="Gõ tìm kiếm nhanh: phạt đi trễ, sườn bò, set menu..."
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => searchQuery.trim() && setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                className="w-full bg-slate-100 hover:bg-slate-200/60 focus:bg-white border border-transparent focus:border-orange-300 rounded-full py-2 pl-10 pr-4 text-xs text-slate-700 outline-none transition-all shadow-inner focus:ring-1 focus:ring-orange-500/20"
              />
            </div>

            {isSearchOpen && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden max-h-[60vh] overflow-y-auto animate-slideUp">
                {searchResults.map((r, i) => (
                  <button key={i} onClick={() => handleSelectResult(r)} className="block w-full text-left p-3.5 hover:bg-orange-50 text-xs border-b last:border-0 border-slate-100 transition-colors">
                    <span className="font-bold text-slate-800 block mb-0.5">{r.title}</span>
                    <span className="text-[10px] text-slate-400">Đi đến trang mục lục →</span>
                  </button>
                ))}
              </div>
            )}

            {isSearchOpen && searchQuery.trim() && searchResults.length === 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-2xl shadow-xl z-50 p-4 text-xs text-slate-500 animate-slideUp">
                Không tìm thấy. Thử gõ ngắn hơn: steak, xốt, phạt, nghỉ phép, order.
              </div>
            )}
          </div>

          <div className="hidden lg:block text-right shrink-0">
            <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/50">
              Wagyu Steak System v3.0
            </span>
          </div>
        </div>
      </header>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col md:flex-row gap-6 w-full flex-1">

        {/* Sidebar nav */}
        <nav className="w-full md:w-64 shrink-0 overflow-x-auto md:overflow-x-visible pb-3 md:pb-0 scrollbar-none flex flex-row md:flex-col gap-1 md:gap-0.5">
          {NAV_ITEMS.map(({ group, items }) => (
            <div key={group} className="contents md:block">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-3 mt-4 mb-2 hidden md:block first:mt-0">
                {group}
              </div>
              {items.map(({ id, icon: Icon, label }) => {
                const isActive = activeTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => goTo(id)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium rounded-lg whitespace-nowrap transition-all duration-200 w-full text-left ${
                      isActive
                        ? 'bg-[#00a2d5] text-white shadow-sm font-semibold'
                        : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                    }`}
                  >
                    <span className={isActive ? 'text-white' : 'text-slate-500'}>
                      <Icon />
                    </span>
                    {label}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Main content */}
        <main className="flex-1 bg-white rounded-2xl border border-slate-200/50 shadow-sm p-6 md:p-8 overflow-hidden">
          {renderTab()}
        </main>
      </div>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-slate-200/50 py-4 mt-auto text-center text-[10px] text-slate-400">
        &copy; {new Date().getFullYear()} Ơ Bistro - Chi nhánh Thống Nhất, Thủ Đức. Bảo lưu mọi quyền nội bộ.
      </footer>
    </div>
  );
}
