import { useState } from 'react';
import { Icons } from '../components/Icons.jsx';
import { TABLES_LAYOUT, TABLE_ZONE_LABELS } from '../data/menu.js';

const STATUS_CONFIG = {
  empty:    { label: 'Bàn trống',   bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300', dot: 'bg-emerald-400' },
  seated:   { label: 'Có khách',    bg: 'bg-red-100',     text: 'text-red-700',     border: 'border-red-300',     dot: 'bg-red-400' },
  reserved: { label: 'Đã đặt',      bg: 'bg-amber-100',   text: 'text-amber-700',   border: 'border-amber-300',   dot: 'bg-amber-400' },
  cleaning: { label: 'Đang dọn',    bg: 'bg-blue-100',    text: 'text-blue-700',    border: 'border-blue-300',    dot: 'bg-blue-400' },
};

function initTables() {
  const flat = {};
  Object.entries(TABLES_LAYOUT).forEach(([zone, tables]) => {
    tables.forEach(t => { flat[t.id] = { ...t, zone }; });
  });
  return flat;
}

export default function TabSafety() {
  const [tables, setTables] = useState(initTables);
  const [selected, setSelected] = useState(null);

  const sel = selected ? tables[selected] : null;

  const updateStatus = (status) => {
    setTables(prev => ({ ...prev, [selected]: { ...prev[selected], status } }));
  };

  const resetAll = () => {
    setTables(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(id => { next[id] = { ...next[id], status: 'empty' }; });
      return next;
    });
    setSelected(null);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.ShieldAlert /> IV. AN TOÀN PHÒNG CHÁY & SƠ ĐỒ SẢNH IPOS
      </h2>

      {/* PCCC */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl border border-red-200 bg-red-50/50 space-y-3">
          <h3 className="font-bold text-red-950 text-sm flex items-center gap-2">
            🔥 Quy định An toàn PCCC
          </h3>
          <ul className="text-xs text-red-900 space-y-2 list-disc pl-4">
            <li>Kiểm tra nguồn điện, bếp gas và thiết bị điện trước khi kết thúc ca mỗi ngày.</li>
            <li>Tuyệt đối không để vật liệu dễ cháy gần nguồn lửa, bếp hoặc ổ điện.</li>
            <li>Biết vị trí bình chữa cháy: 1 bình tại quầy bar, 1 bình gần khu bếp.</li>
            <li>Khi phát hiện cháy: hô to "CHÁY!", ấn chuông báo động, gọi 114, thoát hiểm theo lối thoát hiểm được chỉ định.</li>
            <li>Không dùng thang máy khi có sự cố cháy nổ.</li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl border border-orange-200 bg-orange-50/50 space-y-3">
          <h3 className="font-bold text-orange-950 text-sm flex items-center gap-2">
            ⚡ Quy trình xử lý sự cố nhanh
          </h3>
          <ul className="text-xs text-orange-900 space-y-2 list-decimal pl-4">
            <li><strong>Điện mất đột ngột:</strong> Bật đèn pin dự phòng (ngăn kéo quầy bar), thông báo khách bình tĩnh, báo Quản lý ngay.</li>
            <li><strong>Khách bị ngã / thương tích:</strong> Không di chuyển nạn nhân nếu không cần thiết, gọi Quản lý và hộp sơ cứu (tủ office).</li>
            <li><strong>Tràn đổ đồ uống trên bàn:</strong> Xin lỗi ngay, dọn sạch, đề xuất đổi món hoặc bồi thường nếu dính vào quần áo khách.</li>
          </ul>
        </div>
      </div>

      {/* Floor map */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex flex-wrap justify-between items-center gap-3">
          <span className="font-bold text-xs uppercase tracking-wide text-slate-600">
            🗺️ Sơ đồ IPOS — Trạng thái bàn thời gian thực
          </span>
          <div className="flex items-center gap-3 flex-wrap">
            {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
              <span key={key} className="flex items-center gap-1.5 text-[10px] text-slate-500">
                <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                {cfg.label}
              </span>
            ))}
            <button
              onClick={resetAll}
              className="text-[10px] font-bold text-slate-500 hover:text-red-600 bg-slate-100 hover:bg-red-50 px-2.5 py-1 rounded-lg transition-colors border border-slate-200"
            >
              Reset tất cả
            </button>
          </div>
        </div>

        <div className="p-4 flex flex-col lg:flex-row gap-4">
          {/* Map canvas */}
          <div className="flex-1 relative bg-slate-50 rounded-xl border border-slate-200" style={{ minHeight: 420 }}>
            {/* Zone labels */}
            <span className="absolute top-2 left-[10%]  text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sảnh A+B</span>
            <span className="absolute top-2 left-[52%]  text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sảnh C</span>
            <div className="absolute inset-x-[40%] top-0 bottom-0 border-l border-dashed border-slate-200 pointer-events-none" />

            {Object.values(tables).map(t => {
              const cfg = STATUS_CONFIG[t.status];
              const isSelected = selected === t.id;
              const isVip = t.type === 'vip';
              const isRound = t.type === 'round';
              const isLong = t.type === 'long';
              const isOutside = t.type === 'outside';
              return (
                <button
                  key={t.id}
                  onClick={() => setSelected(isSelected ? null : t.id)}
                  style={{ left: t.x, top: t.y }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 select-none
                    ${isRound ? 'rounded-full w-11 h-11' : isLong ? 'rounded-lg w-16 h-8' : 'rounded-lg w-12 h-10'}
                    ${cfg.bg} ${cfg.border} border-2 ${cfg.text}
                    ${isSelected ? 'ring-2 ring-[#00a2d5] ring-offset-1 scale-110 shadow-md z-10' : 'hover:scale-105 shadow-sm'}
                    ${isVip ? 'ring-1 ring-amber-400' : ''}
                    ${isOutside ? 'border-dashed' : ''}
                    flex flex-col items-center justify-center`}
                >
                  <span className="text-[9px] font-bold leading-none">{t.id}</span>
                  {isVip && <span className="text-[7px] font-bold text-amber-600 leading-none mt-0.5">VIP</span>}
                  {isOutside && <span className="text-[7px] text-slate-500 leading-none mt-0.5">Ngoài</span>}
                </button>
              );
            })}
          </div>

          {/* Edit panel */}
          <div className="w-full lg:w-56 shrink-0">
            {sel ? (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Bàn đang chọn</p>
                  <p className="text-2xl font-bold text-slate-900">{sel.id}</p>
                  <p className="text-xs text-slate-500">{TABLE_ZONE_LABELS[sel.zone]} · {sel.type === 'vip' ? 'VIP' : sel.type === 'outside' ? 'Ngoài trời' : 'Tiêu chuẩn'}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Đổi trạng thái</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                      <button
                        key={key}
                        onClick={() => updateStatus(key)}
                        className={`text-[10px] font-bold py-2 px-2 rounded-lg border-2 transition-all ${cfg.bg} ${cfg.text} ${cfg.border} ${sel.status === key ? 'ring-2 ring-[#00a2d5]' : 'opacity-70 hover:opacity-100'}`}
                      >
                        {cfg.label}
                      </button>
                    ))}
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="w-full text-[10px] font-bold text-slate-400 hover:text-slate-700 transition-colors">
                  Bỏ chọn ×
                </button>
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-center h-full flex flex-col items-center justify-center gap-2">
                <span className="text-2xl">👆</span>
                <p className="text-xs text-slate-400 leading-relaxed">Bấm vào bàn bất kỳ trên sơ đồ để xem và cập nhật trạng thái</p>
              </div>
            )}
          </div>
        </div>

        {/* Zone summary */}
        <div className="px-4 pb-4 grid grid-cols-3 gap-3">
          {Object.entries(TABLE_ZONE_LABELS).map(([zone, label]) => {
            const zoneTables = Object.values(tables).filter(t => t.zone === zone);
            const counts = Object.keys(STATUS_CONFIG).reduce((acc, s) => {
              acc[s] = zoneTables.filter(t => t.status === s).length;
              return acc;
            }, {});
            return (
              <div key={zone} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1.5">{label}</p>
                <div className="space-y-1">
                  {Object.entries(STATUS_CONFIG).map(([key, cfg]) => counts[key] > 0 && (
                    <div key={key} className="flex items-center gap-1.5 text-[10px]">
                      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                      <span className={cfg.text}>{counts[key]} {cfg.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
