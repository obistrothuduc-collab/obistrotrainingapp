import { useState } from 'react';

const PASS_KEY   = 'obistro_lcb_unlocked';
const CORRECT_PW = 'lecordonbleu2026';
const LCB_URL    = 'https://script.google.com/macros/s/AKfycby5OnJtOlwA5vA7QMt3vfnL8U22gOqBkCToG3M_MI753FNHNOaDKyQp03rnw0LZLQhb/exec';

// ── Brigade roles ────────────────────────────────────────────────────────────
const BRIGADE = [
  {
    title: 'Chef de Cuisine',
    sub:   'Bếp Trưởng',
    color: 'border-amber-500/60 bg-amber-900/20',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    icon:  '👑',
    duties: [
      'Điều hành toàn bộ kitchen, phân công nhiệm vụ đầu ca',
      'Kiểm soát quầy Pass — kiểm tra mỗi đĩa trước khi ra sảnh',
      'Duyệt đĩa ăn cuối cùng: trình bày, định lượng, nhiệt độ',
      'Chịu trách nhiệm tuyệt đối về chất lượng và tốc độ ra món',
    ],
  },
  {
    title: 'Saucier',
    sub:   'Bếp Xốt',
    color: 'border-[#00a2d5]/50 bg-[#00a2d5]/10',
    badge: 'bg-[#00a2d5]/20 text-[#00a2d5] border-[#00a2d5]/40',
    icon:  '🫕',
    duties: [
      'Vị trí tối quan trọng của Ơ Bistro — xốt quyết định linh hồn món',
      'Xốt Steak: Tiêu xanh · Kem nấm · BBQ · Phô mai cay',
      'Xốt Pasta: Tomyum kem · Xốt kem dứa · Xốt bò bằm · Xốt kem cá hồi',
      'Chuẩn bị Mother Sauces đầu ca, kiểm tra độ sánh và vị trước giờ mở bàn',
    ],
  },
  {
    title: 'Grillardin',
    sub:   'Bếp Nướng',
    color: 'border-rose-500/50 bg-rose-900/20',
    badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    icon:  '🔥',
    duties: [
      'Canh lửa và quản lý nhiệt độ vỉ nướng suốt ca',
      'Đo nhiệt độ lõi bắt buộc: Wagyu Ribeye / Striploin / Topblade',
      'Nướng Sườn heo Mỹ Texas BBQ đạt chuẩn 250g & 500g',
      'Đảm bảo vân nướng kim cương · Resting 3-5 phút sau nướng',
    ],
  },
  {
    title: 'Entremetier',
    sub:   'Bếp Rau & Khai Vị',
    color: 'border-emerald-500/50 bg-emerald-900/20',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    icon:  '🥗',
    duties: [
      'Chuẩn bị và hoàn thiện toàn bộ dòng Pasta (Mì Ý) theo chuẩn cuộn tròn',
      'Salad: Hải sản · Măng tây nấm · Cá trích rong nho',
      'Khai vị: Khoai tây chiên xốt phô mai · Xúc xích đốt rượu · Súp',
      'Mise en place rau củ theo màu thớt xanh lá — phân biệt tuyệt đối',
    ],
  },
];

// ── Mother Sauces ────────────────────────────────────────────────────────────
const SAUCES = [
  { mother: 'Espagnole (Xốt nâu bò)', application: 'Nền xốt Tiêu xanh · Biến thể xốt BBQ đặc biệt', note: 'Ninh xương bò nướng tối thiểu 6h để rút collagen tự nhiên' },
  { mother: 'Béchamel (Xốt bơ sữa)', application: 'Nền xốt Kem nấm · Xốt kem cá hồi · Xốt kem dứa', note: 'Tỷ lệ vàng: 1 phần bơ : 1 phần bột : 10 phần sữa' },
  { mother: 'Velouté (Xốt nhung mịn)', application: 'Súp kem · Xốt Kem Tomyum fusion', note: 'Dùng fond trắng (veal/chicken), không dùng nước lã' },
  { mother: 'Hollandaise (Xốt bơ trứng)', application: 'Salad cao cấp · Món Brunch đặc biệt', note: 'Emulsification tay — giữ nhiệt 60–65°C tránh tách lớp' },
  { mother: 'Tomat (Xốt cà chua Pháp)', application: 'Nền xốt bò bằm · Biến thể Arrabiata Pasta', note: 'Khác hoàn toàn xốt cà chua thông thường — cần fond bò' },
];

// ── Lock screen ───────────────────────────────────────────────────────────────
function LockScreen({ onUnlock }) {
  const [pw, setPw]       = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const attempt = () => {
    if (pw === CORRECT_PW) {
      localStorage.setItem(PASS_KEY, '1');
      onUnlock();
    } else {
      setError('Mật khẩu không chính xác! Vui lòng liên hệ Quản lý / Chủ nhà hàng để cấp quyền.');
      setShake(true);
      setPw('');
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className={`w-full max-w-sm bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden transition-all ${shake ? 'animate-shake' : ''}`}>

        {/* Header bar */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 pt-8 pb-6 flex flex-col items-center gap-3 border-b border-slate-700/50">
          {/* Lock icon */}
          <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-amber-500/50 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="text-center space-y-1">
            <p className="text-[9px] font-bold text-amber-400 tracking-[0.2em] uppercase">Restricted Area</p>
            <h2 className="text-white font-bold text-sm leading-snug">HỌC VIỆN ẨM THỰC CAO CẤP</h2>
            <p className="text-slate-400 text-[10px]">Le Cordon Bleu — Tài liệu nội bộ bảo mật</p>
          </div>
        </div>

        {/* Input */}
        <div className="px-6 py-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mật khẩu truy cập</label>
            <input
              type="password"
              value={pw}
              onChange={e => { setPw(e.target.value); setError(''); }}
              onKeyDown={e => e.key === 'Enter' && attempt()}
              placeholder="Nhập mật khẩu..."
              className="w-full bg-slate-800 border border-slate-600 focus:border-amber-500/70 text-white text-sm px-4 py-3 rounded-xl outline-none placeholder:text-slate-600 transition-colors focus:ring-1 focus:ring-amber-500/20 tracking-widest"
              autoComplete="off"
            />
          </div>

          {error && (
            <div className="flex items-start gap-2 p-3 bg-red-900/40 border border-red-700/60 rounded-xl">
              <span className="text-red-400 shrink-0 text-sm mt-0.5">⛔</span>
              <p className="text-red-300 text-[11px] leading-relaxed">{error}</p>
            </div>
          )}

          <button
            onClick={attempt}
            className="w-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-900 font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 018 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            Mở Khóa Két Sắt
          </button>

          <p className="text-[10px] text-slate-600 text-center leading-relaxed">
            Tài liệu kỹ thuật độc quyền. Không phổ biến ra ngoài.
          </p>
          <p className="text-[9px] text-slate-700 text-center">
            🔒 Khóa demo nội bộ — liên hệ quản lý để lấy mật khẩu.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Unlocked content ──────────────────────────────────────────────────────────
function AcademyContent({ onLock }) {
  return (
    <div className="bg-slate-900 rounded-2xl -m-6 md:-m-8 p-5 md:p-7 min-h-full space-y-6 animate-fadeIn">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[9px] font-bold text-amber-400 tracking-[0.15em] uppercase mb-1">Le Cordon Bleu — Nội bộ</p>
          <h2 className="text-white font-bold text-lg">HỌC VIỆN ẨM THỰC CAO CẤP</h2>
          <p className="text-slate-400 text-xs mt-0.5">Tài liệu kỹ thuật bếp chuẩn 5 sao dành cho Ơ Bistro Thủ Đức</p>
        </div>
        <button onClick={onLock}
          className="shrink-0 flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 hover:text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-2.5 py-1.5 rounded-lg transition-colors mt-0.5">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Khóa lại
        </button>
      </div>

      {/* ── Section 1: Brigade System ── */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-base">📌</span>
          <h3 className="text-white font-bold text-sm tracking-wide">HỆ THỐNG QUẢN TRỊ BẾP 5 SAO — THE BRIGADE SYSTEM</h3>
        </div>
        <p className="text-slate-400 text-[11px] leading-relaxed pl-6">
          Mô hình tổ chức nhân sự chuẩn Pháp của Le Cordon Bleu. Phân chia trách nhiệm tuyệt đối — không ai giẫm chân lên nhau giờ cao điểm.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {BRIGADE.map((r, i) => (
            <div key={i} className={`rounded-2xl border ${r.color} p-4 space-y-3`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{r.icon}</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-white font-bold text-sm">{r.title}</span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${r.badge}`}>{r.sub}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-1.5 pl-1">
                {r.duties.map((d, j) => (
                  <li key={j} className="text-slate-300 text-[11px] leading-relaxed flex items-start gap-1.5">
                    <span className="text-slate-600 mt-0.5 shrink-0">·</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-800" />

      {/* ── Section 2: Fonds & Sauces ── */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-base">📌</span>
          <h3 className="text-white font-bold text-sm tracking-wide">KỸ THUẬT NỀN TẢNG THƯỢNG HẠNG — FONDS & SAUCES</h3>
        </div>

        {/* Science of Stocks */}
        <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-2">
          <p className="text-amber-400 font-bold text-xs flex items-center gap-1.5">🔬 Science of Stocks — Khoa học Nước Dùng</p>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Ninh xương bò <strong className="text-white">nướng chậm</strong> để rút trích toàn bộ collagen và hương vị ngọt thanh tự nhiên.
            Kết quả tạo độ sánh sệt tự nhiên cho xốt <strong className="text-white">mà không cần bột năng</strong>.
            Fond bò chuẩn phải ninh tối thiểu <strong className="text-amber-300">6-8 tiếng</strong>, lọc kỹ, để nguội và hớt mỡ trước khi dùng.
          </p>
        </div>

        {/* 5 Mother Sauces table */}
        <div className="rounded-2xl overflow-hidden border border-slate-700">
          <div className="bg-slate-700/80 px-4 py-3">
            <p className="text-white font-bold text-xs">5 Xốt Mẹ (Mother Sauces) — Ứng dụng vào Menu Ơ Bistro</p>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block">
            <table className="w-full text-[11px]">
              <thead>
                <tr className="bg-slate-800/60 border-b border-slate-700">
                  <th className="text-left px-4 py-2.5 text-slate-400 font-bold">Xốt mẹ gốc</th>
                  <th className="text-left px-4 py-2.5 text-slate-400 font-bold">Ứng dụng tại Ơ Bistro</th>
                  <th className="text-left px-4 py-2.5 text-slate-400 font-bold">Kỹ thuật then chốt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60">
                {SAUCES.map((s, i) => (
                  <tr key={i} className="hover:bg-slate-700/20 transition-colors">
                    <td className="px-4 py-3 text-[#00a2d5] font-semibold leading-snug">{s.mother}</td>
                    <td className="px-4 py-3 text-slate-300 leading-relaxed">{s.application}</td>
                    <td className="px-4 py-3 text-slate-400 leading-relaxed">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden divide-y divide-slate-700/60">
            {SAUCES.map((s, i) => (
              <div key={i} className="px-4 py-3.5 space-y-1.5">
                <p className="text-[#00a2d5] font-bold text-xs">{s.mother}</p>
                <p className="text-slate-300 text-[11px] leading-relaxed">{s.application}</p>
                <p className="text-slate-500 text-[10px] leading-relaxed italic">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-800" />

      {/* ── Section 3: Access button ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-base">🔗</span>
          <h3 className="text-white font-bold text-sm tracking-wide">CỔNG TRUY CẬP TÀI LIỆU KHÓA HỌC CHI TIẾT</h3>
        </div>
        <p className="text-slate-400 text-[11px] leading-relaxed">
          Toàn bộ giáo án, video kỹ thuật, bài tập thực hành và tài liệu PDF chuẩn Le Cordon Bleu được lưu trữ tại hệ thống nội bộ.
          Nhấn nút bên dưới để truy cập — yêu cầu tài khoản nội bộ được cấp phép.
        </p>
        <a
          href={LCB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 active:from-amber-700 active:to-amber-600 text-slate-900 font-bold text-sm py-4 px-6 rounded-2xl transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.01]"
        >
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <span className="text-center leading-snug">🌐 TRUY CẬP HỌC VIỆN LE CORDON BLEU (NỘI BỘ)</span>
          <svg className="w-4 h-4 shrink-0 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <p className="text-[10px] text-slate-600 text-center">Mở trong cửa sổ mới · Yêu cầu kết nối internet</p>
      </section>

    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function TabCordonBleu() {
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem(PASS_KEY) === '1'
  );

  const lock = () => {
    localStorage.removeItem(PASS_KEY);
    setUnlocked(false);
  };

  if (!unlocked) return <LockScreen onUnlock={() => setUnlocked(true)} />;
  return <AcademyContent onLock={lock} />;
}
