import { useState } from 'react';
import { Icons } from '../components/Icons.jsx';
import { PHOTO_GALLERY } from '../data/constants.js';

const PHOTO_CATEGORIES = [
  { id: 'all',   label: 'Tất cả' },
  { id: 'rules', label: 'Nội quy & Sơ đồ' },
  { id: 'setup', label: 'Setup bàn' },
  { id: 'steak', label: 'Kiến thức Steak' },
  { id: 'menu',  label: 'Nghiệp vụ Order' },
];

export default function TabPhotos() {
  const [catFilter, setCatFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = catFilter === 'all'
    ? PHOTO_GALLERY
    : PHOTO_GALLERY.filter(p => p.category === catFilter);

  const openLightbox = (photo) => setLightbox(photo);
  const closeLightbox = () => setLightbox(null);

  const navLightbox = (dir) => {
    const idx = filtered.findIndex(p => p.id === lightbox.id);
    const next = filtered[(idx + dir + filtered.length) % filtered.length];
    setLightbox(next);
  };

  return (
    <div className="space-y-5 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.Photo /> HÌNH ẢNH ĐÀO TẠO THỰC TẾ
      </h2>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {PHOTO_CATEGORIES.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setCatFilter(id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              catFilter === id
                ? 'bg-[#00a2d5] text-white border-transparent shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(photo => (
          <button
            key={photo.id}
            onClick={() => openLightbox(photo)}
            className="group text-left rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold bg-black/40 px-3 py-1.5 rounded-full transition-opacity">
                  Xem lớn
                </span>
              </div>
            </div>
            <div className="p-3.5">
              <p className="font-semibold text-slate-800 text-xs leading-snug mb-1">{photo.title}</p>
              <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">{photo.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex items-center justify-center h-40 text-slate-400 text-sm border-2 border-dashed border-slate-200 rounded-2xl">
          Không có hình ảnh trong mục này.
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.url}
              alt={lightbox.title}
              className="w-full object-cover"
              style={{ maxHeight: '65vh' }}
            />
            <div className="p-5">
              <p className="font-bold text-slate-900 text-sm mb-1">{lightbox.title}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{lightbox.desc}</p>
            </div>

            {/* Prev / Next */}
            {filtered.length > 1 && (
              <>
                <button
                  onClick={() => navLightbox(-1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-sm"
                >‹</button>
                <button
                  onClick={() => navLightbox(1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-sm"
                >›</button>
              </>
            )}

            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-xs font-bold"
            >✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
