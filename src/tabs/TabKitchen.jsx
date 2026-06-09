import { useState } from 'react';
import { Icons } from '../components/Icons.jsx';

// ── Section nav ───────────────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'plating',  emoji: '🍽️', label: 'Plating & Định lượng' },
  { id: 'temp',     emoji: '🌡️', label: 'Nhiệt độ Steak' },
  { id: 'hygiene',  emoji: '🧼', label: 'Vệ sinh 5S' },
  { id: 'timing',   emoji: '⏱️', label: 'Tốc độ & KPI' },
];

// ── Section 1: Plating ────────────────────────────────────────────────────────
const STEAK_ITEMS = [
  { cut: 'Striploin — Thăn ngoại',  weights: ['100g', '150g', '300g'], note: 'Grill marks kim cương · Resting 3-5 phút' },
  { cut: 'Topblade — Nạc vai',      weights: ['150g', '300g'],         note: 'Grill marks kim cương · Resting 3-5 phút' },
  { cut: 'Ribeye — Thăn lưng',      weights: ['200g', '400g'],         note: 'Thượng hạng · Grill marks kim cương · Resting 3-5 phút' },
];
const PASTA_ITEMS = [
  { name: 'Mì Ý hải sản / tôm — Xốt kem Tomyum',    tag: 'Bán chạy' },
  { name: 'Mì Ý tôm & vẹm — Xốt dứa',               tag: 'Món mới' },
  { name: 'Mì Ý bò bằm đặc biệt',                    tag: 'Bán chạy' },
  { name: 'Mì Ý cá hồi — Xốt kem',                   tag: '' },
];

function SectionPlating() {
  return (
    <div className="space-y-5">

      {/* Wagyu Steak */}
      <div className="rounded-2xl overflow-hidden border border-slate-700">
        <div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
          <span className="text-base">🥩</span>
          <span className="font-bold text-white text-sm tracking-wide">DÒNG STEAK WAGYU ÚC</span>
        </div>
        <div className="divide-y divide-slate-700/60">
          {STEAK_ITEMS.map((s, i) => (
            <div key={i} className="px-4 py-3.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold text-xs">{s.cut}</p>
                <p className="text-slate-400 text-[10px] mt-0.5">{s.note}</p>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {s.weights.map(w => (
                  <span key={w} className="bg-[#00a2d5]/20 text-[#00a2d5] text-[10px] font-bold px-2 py-1 rounded-lg border border-[#00a2d5]/30">{w}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 bg-amber-900/30 border-t border-amber-700/40 flex items-start gap-2">
          <span className="text-amber-400 text-sm shrink-0 mt-0.5">⚠️</span>
          <p className="text-amber-200 text-[11px] leading-relaxed">
            <strong>Bắt buộc:</strong> Mặt thịt có vân nướng kim cương — KHÔNG cháy sém đen. Sau nướng để nghỉ <strong>3-5 phút</strong> trước khi lên đĩa để giữ nước ngọt.
          </p>
        </div>
      </div>

      {/* Bò Né */}
      <div className="rounded-2xl overflow-hidden border border-slate-700">
        <div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
          <span className="text-base">🍳</span>
          <span className="font-bold text-white text-sm tracking-wide">DÒNG BÒ NÉ WESTERN STYLE</span>
        </div>
        <div className="px-4 py-3.5 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-[10px] w-20 shrink-0">Định lượng</span>
            <div className="flex gap-1.5">
              {['100g', '200g'].map(w => <span key={w} className="bg-[#00a2d5]/20 text-[#00a2d5] text-[10px] font-bold px-2 py-1 rounded-lg border border-[#00a2d5]/30">{w}</span>)}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-slate-400 text-[10px] w-20 shrink-0 mt-0.5">Lên khay gang</span>
            <p className="text-white text-[11px] leading-relaxed">Nóng xèo xèo, giữ đúng độ chín khách chọn</p>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {['Tiêu xanh', 'Kem nấm', 'Xốt BBQ', 'Phô mai cay'].map(s => (
              <span key={s} className="bg-slate-700 text-slate-300 text-[10px] font-medium px-2 py-0.5 rounded-md">🧂 {s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Sườn */}
      <div className="rounded-2xl overflow-hidden border border-slate-700">
        <div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
          <span className="text-base">🍖</span>
          <span className="font-bold text-white text-sm tracking-wide">DÒNG SƯỜN HEO MỸ TEXAS BBQ</span>
        </div>
        <div className="px-4 py-3.5 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-[10px] w-20 shrink-0">Định lượng</span>
            <div className="flex gap-1.5">
              {['250g', '500g'].map(w => <span key={w} className="bg-orange-500/20 text-orange-300 text-[10px] font-bold px-2 py-1 rounded-lg border border-orange-500/30">{w}</span>)}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-slate-400 text-[10px] w-20 shrink-0 mt-0.5">Tiêu chuẩn</span>
            <p className="text-white text-[11px] leading-relaxed">Quét đều xốt BBQ óng ả, ăn kèm khoai tây + salad</p>
          </div>
        </div>
      </div>

      {/* Pasta */}
      <div className="rounded-2xl overflow-hidden border border-slate-700">
        <div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
          <span className="text-base">🍝</span>
          <span className="font-bold text-white text-sm tracking-wide">DÒNG PASTA (MÌ Ý)</span>
        </div>
        <div className="px-4 pt-3.5 pb-1 space-y-2.5">
          <div className="p-3 rounded-xl bg-slate-700/50 border border-slate-600 flex items-start gap-2">
            <span className="text-[#00a2d5] text-sm shrink-0">✦</span>
            <p className="text-slate-200 text-[11px] leading-relaxed"><strong className="text-white">Chuẩn cuộn mì:</strong> Cuộn cao thành khối tròn ở tâm đĩa, xốt ngập vừa phải — không quá loãng, không quá đặc.</p>
          </div>
          <div className="divide-y divide-slate-700/60">
            {PASTA_ITEMS.map((p, i) => (
              <div key={i} className="py-2.5 flex items-center justify-between gap-3">
                <p className="text-white text-xs">{p.name}</p>
                {p.tag && (
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 ${p.tag === 'Món mới' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
                    {p.tag === 'Món mới' ? '🆕' : '🔥'} {p.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

// ── Section 2: Temperature ────────────────────────────────────────────────────
const DONENESS = [
  { name: 'Medium Rare',  vi: 'Chín tái vừa',  range: '54°C – 57°C', color: 'bg-rose-500',   desc: 'Lõi hồng đậm, rất mọng nước',            bar: 'w-2/5' },
  { name: 'Medium',       vi: 'Chín vừa',       range: '60°C – 63°C', color: 'bg-rose-400',   desc: 'Lõi hồng nhạt, nước thịt ngọt',           bar: 'w-3/5' },
  { name: 'Medium Well',  vi: 'Chín tới',       range: '65°C – 68°C', color: 'bg-orange-400', desc: 'Vệt hồng nhạt ở tâm, thịt chắc',          bar: 'w-4/5' },
];

function SectionTemp() {
  return (
    <div className="space-y-4">

      <div className="p-3.5 rounded-xl bg-blue-900/40 border border-blue-700/50 flex items-start gap-2">
        <span className="text-blue-400 text-sm shrink-0 mt-0.5">🌡️</span>
        <p className="text-blue-200 text-[11px] leading-relaxed">
          <strong className="text-white">Bắt buộc dùng nhiệt kế đút lò</strong> đo tâm thịt trước khi ra món. Không đoán mò bằng mắt hay tay.
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block rounded-2xl overflow-hidden border border-slate-700">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-slate-700">
              <th className="text-left px-4 py-3 text-slate-300 font-bold">Độ chín</th>
              <th className="text-left px-4 py-3 text-slate-300 font-bold">Nhiệt độ lõi chuẩn</th>
              <th className="text-left px-4 py-3 text-slate-300 font-bold">Mô tả</th>
              <th className="px-4 py-3 text-slate-300 font-bold text-center">Độ chín</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/60">
            {DONENESS.map((d, i) => (
              <tr key={i} className="hover:bg-slate-700/30 transition-colors">
                <td className="px-4 py-3.5">
                  <p className="text-white font-bold">{d.name}</p>
                  <p className="text-slate-400 text-[10px]">{d.vi}</p>
                </td>
                <td className="px-4 py-3.5">
                  <span className="text-[#00a2d5] font-bold text-sm">{d.range}</span>
                </td>
                <td className="px-4 py-3.5 text-slate-300">{d.desc}</td>
                <td className="px-4 py-3.5">
                  <div className="w-24 h-2 bg-slate-700 rounded-full mx-auto overflow-hidden">
                    <div className={`${d.bar} ${d.color} h-full rounded-full`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {DONENESS.map((d, i) => (
          <div key={i} className="rounded-xl border border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-700/50">
              <div>
                <span className="text-white font-bold text-xs">{d.name}</span>
                <span className="text-slate-400 text-[10px] ml-1.5">({d.vi})</span>
              </div>
              <span className="text-[#00a2d5] font-bold text-sm">{d.range}</span>
            </div>
            <div className="px-4 py-2.5 flex items-center justify-between gap-3">
              <p className="text-slate-300 text-[11px]">{d.desc}</p>
              <div className="w-16 h-1.5 bg-slate-700 rounded-full shrink-0 overflow-hidden">
                <div className={`${d.bar} ${d.color} h-full rounded-full`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bò Né note */}
      <div className="p-3.5 rounded-xl bg-slate-700/50 border border-slate-600 space-y-1.5">
        <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Lưu ý bếp trưởng</p>
        <p className="text-slate-200 text-[11px] leading-relaxed">
          Dòng <strong className="text-white">Bò Né Western Style</strong> lên khay gang nóng xèo xèo — giữ đúng độ chín khách chọn.
          Xốt kèm: <span className="text-slate-300">Tiêu xanh / Kem nấm / Xốt BBQ / Phô mai cay</span>.
        </p>
      </div>

    </div>
  );
}

// ── Section 3: Hygiene ────────────────────────────────────────────────────────
const BOARDS = [
  { color: 'bg-red-600',    label: '🔴 Thớt ĐỎ',    use: 'Chỉ cắt thịt bò sống (Steak)',                                            border: 'border-red-700' },
  { color: 'bg-yellow-500', label: '🟡 Thớt VÀNG',   use: 'Chỉ cắt sườn heo / thịt gia cầm sống',                                   border: 'border-yellow-600' },
  { color: 'bg-emerald-600',label: '🟢 Thớt XANH LÁ',use: 'Chỉ cắt rau củ làm salad (Salad hải sản, Salad măng tây nấm, Salad cá trích rong nho)', border: 'border-emerald-700' },
  { color: 'bg-slate-200',  label: '⬜ Thớt TRẮNG',  use: 'Chỉ dùng cắt thực phẩm chín (Steak đã resting, sườn đã nướng, phô mai)', border: 'border-slate-400' },
];

function SectionHygiene() {
  return (
    <div className="space-y-5">

      {/* Cutting boards */}
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Quy tắc 4 màu thớt — Bắt buộc tuân thủ</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {BOARDS.map((b, i) => (
            <div key={i} className={`rounded-xl border ${b.border} bg-slate-800/60 overflow-hidden flex`}>
              <div className={`${b.color} w-2 shrink-0`} />
              <div className="px-3.5 py-3 space-y-0.5">
                <p className="text-white font-bold text-xs">{b.label}</p>
                <p className="text-slate-300 text-[11px] leading-relaxed">{b.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cross contamination warning */}
      <div className="rounded-xl border border-red-700/50 bg-red-900/20 p-4 space-y-2">
        <p className="text-red-400 font-bold text-xs flex items-center gap-1.5">⛔ TUYỆT ĐỐI KHÔNG dùng lẫn thớt</p>
        <p className="text-red-200 text-[11px] leading-relaxed">
          Dùng sai màu thớt = nguy cơ nhiễm khuẩn chéo cao. Kiểm tra màu thớt trước mỗi ca.
          Nếu thớt bị mờ màu hoặc mất màu — báo ngay bếp trưởng để thay thế.
        </p>
      </div>

      {/* FIFO */}
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Nguyên tắc FIFO & Dán nhãn tủ mát</p>
        <div className="rounded-xl border border-slate-700 overflow-hidden">
          <div className="bg-slate-700/60 px-4 py-2.5 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            Nhãn bắt buộc trên MỌI hộp Mise en Place
          </div>
          <div className="divide-y divide-slate-700/60">
            {[
              { label: '1. Tên hàng',       eg: 'Ví dụ: Striploin Wagyu đã thái 150g' },
              { label: '2. Ngày làm',        eg: 'Ví dụ: 06/06/2026 — Ca sáng' },
              { label: '3. Người làm',       eg: 'Ví dụ: Minh (Bếp Saucier)' },
              { label: '4. Hạn sử dụng',    eg: 'Thịt sống: 24h · Sườn sốt: 48h · Rau củ: 6h' },
            ].map((r, i) => (
              <div key={i} className="px-4 py-3 flex items-start gap-3">
                <span className="text-[#00a2d5] font-bold text-xs w-28 shrink-0">{r.label}</span>
                <span className="text-slate-300 text-[11px] leading-relaxed">{r.eg}</span>
              </div>
            ))}
          </div>
          <div className="bg-slate-700/30 px-4 py-2.5 text-[10px] text-slate-400">
            FIFO: Hàng vào trước → Dùng trước. Xếp hàng mới ra sau, hàng cũ ra trước.
          </div>
        </div>
      </div>

    </div>
  );
}

// ── Section 4: Timing ─────────────────────────────────────────────────────────
const TIMING_KPI = [
  { group: 'Salad / Khai vị',                      items: ['Khoai tây chiên xốt phô mai', 'Xúc xích đốt rượu'],                     time: '5 phút',     color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-700/40' },
  { group: 'Mì Ý / Pasta',                          items: ['Tất cả các món Pasta'],                                                  time: '10-12 phút', color: 'text-amber-400',   bg: 'bg-amber-500/10 border-amber-700/40' },
  { group: 'Steak / Sườn nướng / Bò né',            items: ['Wagyu Striploin / Topblade / Ribeye', 'Sườn Texas BBQ', 'Bò Né Western'], time: '15-18 phút', color: 'text-rose-400',    bg: 'bg-rose-500/10 border-rose-700/40' },
];

const PROMOS = [
  { threshold: 'Bill lẻ từ 300k', note: '(không tính nước)', gift: 'TẶNG 1 Salad nấm ngồng tỏi Đà Lạt',  value: '69k',  color: 'border-emerald-600/50 bg-emerald-900/20', badge: 'bg-emerald-700/40 text-emerald-300' },
  { threshold: 'Bill lẻ từ 500k', note: '',                  gift: 'TẶNG 2 Nước ép bất kỳ',               value: '90k',  color: 'border-[#00a2d5]/40 bg-[#00a2d5]/10',   badge: 'bg-[#00a2d5]/20 text-[#00a2d5]' },
  { threshold: 'Bill lẻ từ 600k', note: '(không tính nước)', gift: 'TẶNG 1 Sườn heo Mỹ Texas BBQ',        value: '145k', color: 'border-orange-600/50 bg-orange-900/20',  badge: 'bg-orange-700/40 text-orange-300' },
];

function SectionTiming() {
  return (
    <div className="space-y-5">

      {/* KPI table */}
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">KPI Thời gian ra món — Chuẩn mục tiêu</p>
        <div className="space-y-2.5">
          {TIMING_KPI.map((t, i) => (
            <div key={i} className={`rounded-xl border ${t.bg} p-3.5 flex items-start justify-between gap-3`}>
              <div className="space-y-1 flex-1">
                <p className="text-white font-bold text-xs">{t.group}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.items.map(it => <span key={it} className="text-slate-400 text-[10px]">· {it}</span>)}
                </div>
              </div>
              <div className={`${t.color} font-bold text-lg shrink-0 tabular-nums`}>{t.time}</div>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-[10px] mt-2 pl-1">* Tính từ lúc ticket vào bếp đến lúc pass món ra quầy.</p>
      </div>

      {/* June promotions */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">🎉</span>
          <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Ưu đãi Tháng 6 — Summer Beat (Quầy Pass kiểm tra & ra món tặng)</p>
        </div>
        <div className="space-y-2.5">
          {PROMOS.map((p, i) => (
            <div key={i} className={`rounded-xl border ${p.color} p-3.5`}>
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-white font-bold text-xs">{p.threshold}</span>
                    {p.note && <span className="text-slate-400 text-[10px]">{p.note}</span>}
                  </div>
                  <p className="text-white text-xs leading-snug">→ {p.gift}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg shrink-0 ${p.badge}`}>Trị giá {p.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yes Chef callout */}
      <div className="rounded-2xl border border-amber-600/50 bg-amber-900/30 p-4 flex items-start gap-3">
        <span className="text-2xl shrink-0">📢</span>
        <div className="space-y-1">
          <p className="text-amber-300 font-bold text-sm">Khi nhận lệnh hoặc Ticket</p>
          <p className="text-amber-100 text-xs leading-relaxed">
            Tất cả nhân viên bếp đồng thanh hô:
          </p>
          <p className="text-white font-bold text-base mt-1 tracking-wide">"Đã rõ!" &nbsp;hoặc&nbsp; "Yes, Chef!"</p>
        </div>
      </div>

    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function TabKitchen() {
  const [activeSection, setActiveSection] = useState('plating');

  const renderSection = () => {
    switch (activeSection) {
      case 'plating':  return <SectionPlating />;
      case 'temp':     return <SectionTemp />;
      case 'hygiene':  return <SectionHygiene />;
      case 'timing':   return <SectionTiming />;
      default:         return null;
    }
  };

  return (
    <div className="animate-fadeIn bg-slate-900 rounded-2xl -m-6 md:-m-8 p-5 md:p-7 min-h-full space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <span>👨‍🍳</span> NGHIỆP VỤ BẾP
          </h2>
          <p className="text-slate-400 text-xs mt-0.5">Cẩm nang bếp Ơ Bistro Thủ Đức — Tháng 6/2026</p>
        </div>
        <span className="text-[9px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-1 rounded-lg shrink-0 mt-0.5 uppercase tracking-widest">Summer Beat</span>
      </div>

      {/* Section nav */}
      <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
        {SECTIONS.map(s => {
          const active = s.id === activeSection;
          return (
            <button key={s.id} onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                active
                  ? 'bg-[#00a2d5] text-white border-transparent shadow-md'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600 hover:text-white'}`}>
              <span>{s.emoji}</span> {s.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="animate-fadeIn">{renderSection()}</div>

    </div>
  );
}
