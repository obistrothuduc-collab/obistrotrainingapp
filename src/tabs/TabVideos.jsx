import { useState } from 'react';
import { Icons } from '../components/Icons.jsx';
import { VIDEO_PLAYLIST } from '../data/constants.js';

export default function TabVideos() {
  const [activeId, setActiveId] = useState(VIDEO_PLAYLIST[0].id);

  const active = VIDEO_PLAYLIST.find(v => v.id === activeId) || VIDEO_PLAYLIST[0];

  return (
    <div className="space-y-5 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.PlayCircle /> THƯ VIỆN VIDEO ĐÀO TẠO NGHIỆP VỤ
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Player */}
        <div className="lg:col-span-2 space-y-3">
          <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-lg border border-slate-200" style={{ aspectRatio: '16/9' }}>
            <iframe
              key={active.id}
              src={active.link}
              title={active.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${active.iconBg}`}>{active.category}</span>
            <h3 className="font-bold text-slate-900 text-sm mt-2 mb-1">{active.title}</h3>
            <p className="text-[11px] text-slate-500">Thời lượng: {active.duration}</p>
          </div>
        </div>

        {/* Playlist */}
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Danh sách phát ({VIDEO_PLAYLIST.length} video)</p>
          {VIDEO_PLAYLIST.map((v, i) => {
            const isActive = v.id === activeId;
            return (
              <button
                key={v.id}
                onClick={() => setActiveId(v.id)}
                className={`w-full flex items-start gap-3 p-3.5 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-[#00a2d5]/10 border-[#00a2d5]/30 shadow-sm'
                    : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${isActive ? 'bg-[#00a2d5] text-white' : v.iconBg}`}>
                  {isActive ? '▶' : i + 1}
                </div>
                <div className="min-w-0">
                  <p className={`text-xs font-semibold leading-snug mb-0.5 ${isActive ? 'text-[#00a2d5]' : 'text-slate-800'}`}>
                    {v.title}
                  </p>
                  <p className="text-[10px] text-slate-400">{v.category} · {v.duration}</p>
                </div>
              </button>
            );
          })}

          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl mt-3">
            <p className="text-[10px] text-amber-800 leading-relaxed font-medium">
              💡 <strong>Gợi ý:</strong> Xem video ít nhất 2 lần — lần 1 quan sát tổng thể, lần 2 tập trung thực hành theo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
