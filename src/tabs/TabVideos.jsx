import { Icons } from '../components/Icons.jsx';

const PLAYLISTS = [
  {
    id:       'pl1',
    title:    'Học viện Quản trị Nhà hàng - Khách sạn',
    channel:  'Hướng Nghiệp Á Âu',
    count:    '40 video',
    desc:     'Toàn bộ quy trình phục vụ bàn tiêu chuẩn, kỹ năng quản trị và vận hành nhà hàng – khách sạn chuyên nghiệp.',
    thumb:    'https://img.youtube.com/vi/a372j2ZXdBU/hqdefault.jpg',
    url:      'https://www.youtube.com/watch?v=a372j2ZXdBU&list=PLcl4ytX7-VapIt6KqiUwWtaBfy15kGU0R',
    color:    'border-[#00a2d5]/30 bg-[#00a2d5]/5',
    badge:    'bg-[#00a2d5]/10 text-[#00a2d5] border-[#00a2d5]/20',
    btn:      'bg-[#00a2d5] hover:bg-[#0d4a7c]',
    tags:     ['Phục vụ bàn', 'Sequence of Service', 'Setup bàn'],
  },
  {
    id:       'pl2',
    title:    'Học viện Đầu Bếp — Học nấu ăn ngành F&B',
    channel:  'Hướng Nghiệp Á Âu',
    count:    '149 video',
    desc:     'Kỹ thuật chế biến món ăn từ cơ bản đến nâng cao, bao gồm xốt, steak, pasta và các món tủ nhà hàng cao cấp.',
    thumb:    'https://img.youtube.com/vi/eJ7gqkISwhI/hqdefault.jpg',
    url:      'https://www.youtube.com/watch?v=eJ7gqkISwhI&list=PLcl4ytX7-VaoyBTfV9mssIyCyVkS4nrTR',
    color:    'border-emerald-300/40 bg-emerald-50/60',
    badge:    'bg-emerald-100 text-emerald-700 border-emerald-200',
    btn:      'bg-emerald-600 hover:bg-emerald-700',
    tags:     ['Kỹ thuật bếp', 'Xốt & Sauces', 'Steak', 'Pasta'],
  },
  {
    id:       'pl3',
    title:    'Học viện Pha Chế',
    channel:  'Hướng Nghiệp Á Âu',
    count:    'Nhiều video',
    desc:     'Kỹ năng pha chế cocktail, mocktail và các loại đồ uống phục vụ trong nhà hàng – bar cao cấp.',
    thumb:    'https://img.youtube.com/vi/3kRGefmRg1E/hqdefault.jpg',
    url:      'https://www.youtube.com/watch?v=3kRGefmRg1E&list=PLcl4ytX7-VaoOr476zHMNe71urWYVp9Tp',
    color:    'border-orange-300/40 bg-orange-50/60',
    badge:    'bg-orange-100 text-orange-700 border-orange-200',
    btn:      'bg-orange-500 hover:bg-orange-600',
    tags:     ['Cocktail', 'Mocktail', 'Đồ uống nhà hàng'],
  },
];

export default function TabVideos() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.PlayCircle /> THƯ VIỆN VIDEO ĐÀO TẠO NGHIỆP VỤ
      </h2>

      <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-2.5">
        <span className="text-blue-500 text-sm shrink-0 mt-0.5">ℹ️</span>
        <p className="text-blue-800 text-[11px] leading-relaxed">
          <strong>Cách xem:</strong> Bấm nút <strong>"Xem playlist trên YouTube"</strong> để mở toàn bộ danh sách video.
          Nhân viên có thể xem lần lượt từng tập ngay trong ứng dụng YouTube hoặc trình duyệt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
        {PLAYLISTS.map((p, i) => (
          <div key={p.id} className={`rounded-2xl border ${p.color} overflow-hidden`}>
            <div className="flex flex-col sm:flex-row gap-0">

              {/* Thumbnail */}
              <a href={p.url} target="_blank" rel="noopener noreferrer"
                className="sm:w-64 shrink-0 relative block group overflow-hidden bg-black">
                <img
                  src={p.thumb}
                  alt={p.title}
                  className="w-full sm:h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  style={{ aspectRatio: '16/9' }}
                  onError={e => { e.target.style.display = 'none'; }}
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 group-hover:bg-red-600 flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Count badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {p.count}
                </div>
              </a>

              {/* Info */}
              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">#{i + 1}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.badge}`}>{p.count}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">{p.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {p.tags.map(t => (
                      <span key={t} className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">{t}</span>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.77a4.85 4.85 0 01-1.02-.08z"/></svg>
                    {p.channel}
                  </p>
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 ${p.btn} text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors shadow-sm`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.77a4.85 4.85 0 01-1.02-.08z"/>
                  </svg>
                  Xem {p.count} trên YouTube →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl">
        <p className="text-[11px] text-amber-800 leading-relaxed font-medium">
          💡 <strong>Gợi ý học hiệu quả:</strong> Xem mỗi video ít nhất 2 lần — lần 1 quan sát tổng thể, lần 2 tập trung thực hành theo từng động tác.
          Mỗi sáng trước ca, dành 10 phút xem 1 video ngắn để ôn luyện phản xạ.
        </p>
      </div>
    </div>
  );
}
