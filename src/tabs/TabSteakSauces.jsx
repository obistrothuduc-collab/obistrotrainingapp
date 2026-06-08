import { useState } from 'react';
import { Icons } from '../components/Icons.jsx';
import { STEAK_DONENESS_LEVELS } from '../data/constants.js';
import { SAUCE_CATEGORIES } from '../data/menu.js';

const SAUCE_TABS = [
  { id: 'pasta',  label: '🍝 Xốt Mì Ý',    emoji: '🍝' },
  { id: 'steak',  label: '🥩 Xốt Steak',   emoji: '🥩' },
  { id: 'salad',  label: '🥗 Xốt Salad',   emoji: '🥗' },
  { id: 'snacks', label: '🍟 Xốt Khai Vị', emoji: '🍟' },
];

export default function TabSteakSauces() {
  const [doneness, setDoneness] = useState(1);
  const [sauceTab, setSauceTab] = useState('pasta');

  const level = STEAK_DONENESS_LEVELS[doneness];
  const sauces = SAUCE_CATEGORIES[sauceTab] || [];

  return (
    <div className="space-y-7 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.BookOpen /> NGHIỆP VỤ F&B — Độ chín Steak & Cẩm nang Nước xốt
      </h2>

      {/* ── Steak Doneness ─────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
          🥩 6 Cấp độ chín của Steak — nhân viên phải thuộc
        </h3>

        {/* Selector strip */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {STEAK_DONENESS_LEVELS.map((lvl, i) => (
            <button
              key={i}
              onClick={() => setDoneness(i)}
              style={{ background: doneness === i ? lvl.color : undefined }}
              className={`relative p-2.5 rounded-xl text-center transition-all border-2 text-xs font-bold leading-snug
                ${doneness === i
                  ? 'text-white border-transparent shadow-md scale-105'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
            >
              <span className="block text-[9px] font-bold opacity-70 mb-0.5">
                {lvl.temp.split(' ')[0]}
              </span>
              {lvl.name.split(' ')[0]}
              {doneness === i && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#00a2d5]" />
              )}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div
          className="p-5 rounded-2xl text-white space-y-2 shadow-lg transition-all duration-300"
          style={{ background: level.color }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-1">Cấp {doneness + 1} / 6</p>
              <h4 className="font-bold text-lg leading-tight">{level.name}</h4>
              <p className="text-sm opacity-80 mt-0.5">{level.temp}</p>
            </div>
            {doneness === 1 && (
              <span className="text-[10px] font-bold bg-white/20 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                ⭐ Khuyên dùng
              </span>
            )}
            {doneness === 5 && (
              <span className="text-[10px] font-bold bg-red-300/40 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                ⚠️ Cảnh báo
              </span>
            )}
          </div>
          <p className="text-sm opacity-90 leading-relaxed border-t border-white/20 pt-3">{level.desc}</p>
        </div>

        {/* Quick ref table */}
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-400">
                <th className="p-2.5">Tên độ chín</th>
                <th className="p-2.5">Nhiệt độ</th>
                <th className="p-2.5 hidden sm:table-cell">Nhận diện nhanh</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {STEAK_DONENESS_LEVELS.map((lvl, i) => (
                <tr
                  key={i}
                  onClick={() => setDoneness(i)}
                  className={`cursor-pointer transition-colors ${doneness === i ? 'bg-slate-100' : 'hover:bg-slate-50/50'}`}
                >
                  <td className="p-2.5 font-semibold text-slate-800">{lvl.name}</td>
                  <td className="p-2.5 text-slate-500 whitespace-nowrap">{lvl.temp}</td>
                  <td className="p-2.5 text-slate-500 hidden sm:table-cell line-clamp-1">{lvl.desc.slice(0, 60)}…</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Sauce Guide ────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
          🍶 Cẩm nang Nước xốt — màu sắc, vị và gợi ý tư vấn
        </h3>

        {/* Sauce tab switcher */}
        <div className="flex flex-wrap gap-2">
          {SAUCE_TABS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setSauceTab(id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                sauceTab === id
                  ? 'bg-slate-900 text-white border-transparent shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Sauce cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sauces.map((sauce, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl border-2 space-y-2 ${sauce.bg || 'bg-slate-50'} ${sauce.border}`}
            >
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${sauce.color}`}>
                <span className="w-2.5 h-2.5 rounded-full bg-current opacity-60" />
                {sauce.name}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{sauce.desc}</p>
              <div className="pt-1 border-t border-slate-200/60">
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-0.5">Gợi ý tư vấn</p>
                <p className="text-[11px] text-slate-600 leading-relaxed italic">{sauce.pair}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
          <strong>💡 Mẹo tư vấn:</strong> Hỏi khách thích vị béo, chua nhẹ hay cay đậm trước, rồi gợi ý 2 xốt phù hợp.
          Không đọc hết danh sách — chỉ cần 2 lựa chọn là đủ để khách quyết định.
        </div>
      </section>
    </div>
  );
}
