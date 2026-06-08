import { useState, useRef, useEffect } from 'react';
import { Icons } from '../components/Icons.jsx';
import { AUDIO_LESSON_MODULES, AUDIO_LESSONS_TEXT } from '../data/lessons.js';

function makeChunks(text) {
  const raw = text.split(/(?<=[.!?])\s+/).filter(s => s.trim());
  const chunks = [];
  let cur = '';
  for (const s of raw) {
    if (cur.length + s.length > 220 && cur.length > 0) { chunks.push(cur.trim()); cur = s; }
    else { cur += (cur ? ' ' : '') + s; }
  }
  if (cur.trim()) chunks.push(cur.trim());
  return chunks;
}

export default function TabTheoryFB() {
  const [activeId, setActiveId]   = useState(AUDIO_LESSON_MODULES[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused]   = useState(false);
  const [progress, setProgress]   = useState({ cur: 0, total: 0 });

  const chunksRef    = useRef([]);
  const idxRef       = useRef(0);
  const activeRef    = useRef(true);
  const keepAliveRef = useRef(null);

  const lesson = AUDIO_LESSON_MODULES.find(l => l.id === activeId);

  const stop = () => {
    activeRef.current = false;
    window.speechSynthesis.cancel();
    if (keepAliveRef.current) clearInterval(keepAliveRef.current);
    setIsPlaying(false);
    setIsPaused(false);
    setProgress({ cur: 0, total: 0 });
  };

  const speakIdx = (idx) => {
    if (!activeRef.current || idx >= chunksRef.current.length) { stop(); return; }
    idxRef.current = idx;
    setProgress({ cur: idx + 1, total: chunksRef.current.length });
    const u = new SpeechSynthesisUtterance(chunksRef.current[idx]);
    u.lang = 'vi-VN';
    u.rate = 0.92;
    u.pitch = 1.05;
    u.onend = () => { if (activeRef.current) speakIdx(idx + 1); };
    u.onerror = () => { if (activeRef.current) speakIdx(idx + 1); };
    window.speechSynthesis.speak(u);
  };

  const play = () => {
    chunksRef.current = makeChunks(AUDIO_LESSONS_TEXT[activeId]);
    idxRef.current = 0;
    activeRef.current = true;
    window.speechSynthesis.cancel();
    if (keepAliveRef.current) clearInterval(keepAliveRef.current);
    keepAliveRef.current = setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 9000);
    setIsPlaying(true);
    setIsPaused(false);
    speakIdx(0);
  };

  const togglePause = () => {
    if (isPaused) { window.speechSynthesis.resume(); setIsPaused(false); }
    else          { window.speechSynthesis.pause();  setIsPaused(true); }
  };

  const selectLesson = (id) => { stop(); setActiveId(id); };

  useEffect(() => () => {
    activeRef.current = false;
    window.speechSynthesis.cancel();
    if (keepAliveRef.current) clearInterval(keepAliveRef.current);
  }, []);

  return (
    <div className="space-y-5 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.Headphones /> LÝ THUYẾT F&B 5★ — Bài giảng có sách nói
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

        {/* Lesson list */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1 mb-2">
            10 Bài giảng
          </p>
          {AUDIO_LESSON_MODULES.map((l) => {
            const active = l.id === activeId;
            return (
              <button
                key={l.id}
                onClick={() => selectLesson(l.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all border ${
                  active
                    ? 'bg-[#00a2d5] text-white border-transparent shadow-sm font-semibold'
                    : 'bg-white text-slate-600 border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className={`text-[9px] font-bold block mb-0.5 ${active ? 'text-white/70' : 'text-slate-400'}`}>{l.tag}</span>
                {l.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Lesson content */}
        <div className="lg:col-span-3 space-y-4">
          <div className="p-5 rounded-2xl border border-[#00a2d5]/20 bg-gradient-to-br from-[#00a2d5]/5 to-white">
            <span className="text-[10px] font-bold text-[#00a2d5] bg-[#00a2d5]/10 px-2 py-0.5 rounded-full">{lesson.tag}</span>
            <h3 className="font-bold text-slate-900 text-base mt-2 mb-3">{lesson.title}</h3>
            <div className="space-y-2.5 text-xs text-slate-600">
              <p><strong className="text-slate-800">🎯 Mục tiêu:</strong> {lesson.goal}</p>
              <p><strong className="text-slate-800">📌 Nguyên tắc:</strong> {lesson.principle}</p>
              <p><strong className="text-slate-800">🔧 Cách làm:</strong> {lesson.pattern}</p>
            </div>
          </div>

          {/* Dialogue */}
          <div className="p-5 rounded-2xl border border-slate-100 bg-white space-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Hội thoại mẫu</p>
            {lesson.dialogue.map(([role, line], i) => {
              const isStaff = role === 'NV' || role.startsWith('NV');
              return (
                <div key={i} className={`dialogue-line flex gap-2 items-start ${isStaff ? '' : 'flex-row-reverse text-right'}`}>
                  <span className={`text-[9px] font-bold shrink-0 mt-0.5 px-1.5 py-0.5 rounded ${isStaff ? 'bg-[#00a2d5]/10 text-[#00a2d5]' : 'bg-orange-100 text-orange-700'}`}>
                    {isStaff ? 'NV' : 'KH'}
                  </span>
                  <p className={`text-xs leading-relaxed ${isStaff ? 'text-slate-700' : 'text-slate-600 italic'}`}>{line}</p>
                </div>
              );
            })}
          </div>

          {/* Drills */}
          <div className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/40 space-y-2">
            <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-2">💬 Câu luyện nói (nhại lại)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {lesson.drills.map((d, i) => (
                <div key={i} className="bg-white px-3 py-2 rounded-lg border border-emerald-100 text-xs text-slate-700 font-medium">
                  "{d}"
                </div>
              ))}
            </div>
          </div>

          {/* TTS control bar */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex-1">🎙️ Sách nói</span>
              {isPlaying && progress.total > 0 && (
                <span className="text-[10px] text-slate-400">
                  {progress.cur} / {progress.total} đoạn
                </span>
              )}
            </div>

            {isPlaying && progress.total > 0 && (
              <div className="w-full bg-slate-700 rounded-full h-1.5">
                <div
                  className="bg-[#00a2d5] h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${(progress.cur / progress.total) * 100}%` }}
                />
              </div>
            )}

            <div className="flex gap-2">
              {!isPlaying ? (
                <button
                  onClick={play}
                  className="flex-1 bg-[#00a2d5] hover:bg-[#0d4a7c] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  ▶ Phát bài giảng
                </button>
              ) : (
                <>
                  <button
                    onClick={togglePause}
                    className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors"
                  >
                    {isPaused ? '▶ Tiếp tục' : '⏸ Tạm dừng'}
                  </button>
                  <button
                    onClick={stop}
                    className="bg-slate-600 hover:bg-slate-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors"
                  >
                    ⏹ Dừng
                  </button>
                </>
              )}
            </div>
            <p className="text-[10px] text-slate-500 text-center">
              {isPlaying && isPaused ? 'Đang tạm dừng...' : isPlaying ? 'Đang phát — lắng nghe và nhại lại từng câu' : 'Bấm phát để nghe bài giảng bằng giọng đọc'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
