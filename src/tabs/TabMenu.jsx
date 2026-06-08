import { useState } from 'react';
import { Icons } from '../components/Icons.jsx';
import { MENU_DATA } from '../data/menu.js';

const CATEGORIES = [
  { id: 'promotions',   label: '🎁 Khuyến Mãi',   color: 'text-rose-600',    activeBg: 'bg-rose-500' },
  { id: 'combos',       label: '🍽️ Set Menu',       color: 'text-violet-600',  activeBg: 'bg-violet-500' },
  { id: 'steaks',       label: '🥩 Steak & Bò Né',  color: 'text-orange-600',  activeBg: 'bg-orange-500' },
  { id: 'pastas',       label: '🍝 Mì Ý',           color: 'text-yellow-700',  activeBg: 'bg-yellow-500' },
  { id: 'salads_soups', label: '🥗 Salad & Súp',    color: 'text-emerald-600', activeBg: 'bg-emerald-500' },
  { id: 'snacks',       label: '🍟 Khai Vị',        color: 'text-amber-600',   activeBg: 'bg-amber-500' },
  { id: 'drinks',       label: '🍹 Đồ Uống',        color: 'text-[#00a2d5]',   activeBg: 'bg-[#00a2d5]' },
  { id: 'desserts',     label: '🍰 Tráng Miệng',    color: 'text-pink-600',    activeBg: 'bg-pink-500' },
];

function PromotionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {MENU_DATA.promotions.map((p, i) => (
        <div key={i} className="p-5 rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white space-y-2">
          <span className="text-[10px] font-bold text-rose-500 bg-rose-100 px-2 py-0.5 rounded-full uppercase">Ưu đãi {i + 1}</span>
          <p className="font-bold text-slate-900 text-sm">{p.title}</p>
          <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

function MenuCards({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div key={i} className="flex justify-between items-start p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-800 text-sm leading-snug mb-1">{item.name}</p>
            {item.desc && <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">{item.desc}</p>}
          </div>
          <div className="text-right shrink-0">
            {item.oldPrice && (
              <p className="text-[10px] text-slate-400 line-through">{item.oldPrice}</p>
            )}
            <p className="text-xs font-bold text-[#00a2d5] whitespace-nowrap">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ComboCards() {
  const [expanded, setExpanded] = useState(null);
  return (
    <div className="space-y-3">
      {MENU_DATA.combos.map((c, i) => (
        <div key={i} className="rounded-xl border border-violet-100 bg-violet-50/30 overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-violet-50 transition-colors"
          >
            <div>
              <p className="font-bold text-slate-800 text-sm">{c.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-bold text-violet-600">{c.price}</span>
                {c.oldPrice && <span className="text-[10px] text-slate-400 line-through">{c.oldPrice}</span>}
              </div>
            </div>
            <span className="text-slate-400 text-sm ml-3">{expanded === i ? '▲' : '▼'}</span>
          </button>
          {expanded === i && (
            <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-violet-100 pt-3">
              {c.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function TabMenu({ activeMenuCategory, setActiveMenuCategory }) {
  const [cat, setCat] = useState(activeMenuCategory || 'promotions');

  const handleCat = (id) => {
    setCat(id);
    if (setActiveMenuCategory) setActiveMenuCategory(id);
  };

  const renderContent = () => {
    if (cat === 'promotions') return <PromotionCards />;
    if (cat === 'combos')     return <ComboCards />;
    const items = MENU_DATA[cat] || [];
    return <MenuCards items={items} />;
  };

  return (
    <div className="space-y-5 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.Utensils /> THỰC ĐƠN (MENU) Ơ BISTRO THỦ ĐỨC 2026
      </h2>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(({ id, label, activeBg }) => (
          <button
            key={id}
            onClick={() => handleCat(id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border whitespace-nowrap
              ${cat === id
                ? `${activeBg} text-white border-transparent shadow-sm`
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="animate-fadeIn">{renderContent()}</div>

      <p className="text-[10px] text-slate-400 leading-relaxed">
        * Giá chưa bao gồm thuế VAT. Nhà hàng có quyền thay đổi giá và thực đơn mà không cần báo trước.
        Nhân viên cần cập nhật thường xuyên từ Quản lý.
      </p>
    </div>
  );
}
