import { useState } from 'react';
import { Icons } from '../components/Icons.jsx';
import { INITIAL_QUIZ_HISTORY } from '../data/quiz.js';

const STORAGE_KEY = 'obistro_quiz_history';
const PASS_SCORE  = 90;

function loadHistory() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return INITIAL_QUIZ_HISTORY;
}

export default function TabHistory() {
  const [history, setHistory]       = useState(loadHistory);
  const [search, setSearch]         = useState('');
  const [confirmClear, setConfirmClear] = useState(false);

  const filtered = history.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteEntry = (id) => {
    const next = history.filter(h => h.id !== id);
    setHistory(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const clearAll = () => {
    setHistory([]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setConfirmClear(false);
  };

  const total   = history.length;
  const avg     = total ? Math.round(history.reduce((s, h) => s + h.score, 0) / total) : 0;
  const passes  = history.filter(h => h.score >= PASS_SCORE).length;
  const passRate = total ? Math.round((passes / total) * 100) : 0;
  const best    = total ? Math.max(...history.map(h => h.score)) : 0;

  return (
    <div className="space-y-5 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.Database /> BẢNG ĐIỂM QUẢN LÝ — Lịch sử thi trắc nghiệm
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Tổng lượt thi',   value: total,          sub: 'lần',   color: 'text-slate-900' },
          { label: 'Điểm trung bình', value: avg,            sub: '/ 100', color: 'text-[#00a2d5]' },
          { label: 'Tỷ lệ đạt',       value: `${passRate}%`, sub: `(${passes}/${total})`, color: passRate >= 70 ? 'text-emerald-600' : 'text-amber-600' },
          { label: 'Điểm cao nhất',   value: best,           sub: '/ 100', color: 'text-amber-600' },
        ].map(({ label, value, sub, color }) => (
          <div key={label} className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm text-center">
            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">{label}</p>
            <p className={`text-2xl font-black ${color}`}>{value}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">{sub}</p>
          </div>
        ))}
      </div>

      {/* Search + Clear */}
      <div className="flex gap-3 items-center">
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
            <Icons.Search />
          </span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Tìm theo tên nhân viên..."
            className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00a2d5] focus:border-transparent bg-slate-50"
          />
        </div>
        {!confirmClear ? (
          <button
            onClick={() => setConfirmClear(true)}
            className="text-xs font-bold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2.5 rounded-xl transition-colors border border-red-200 whitespace-nowrap"
          >
            Xóa tất cả
          </button>
        ) : (
          <div className="flex gap-1.5">
            <button onClick={clearAll} className="text-xs font-bold text-white bg-red-500 hover:bg-red-600 px-3 py-2.5 rounded-xl transition-colors whitespace-nowrap">Xác nhận xóa</button>
            <button onClick={() => setConfirmClear(false)} className="text-xs font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-2.5 rounded-xl transition-colors">Hủy</button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-3.5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {search ? `Kết quả: ${filtered.length} nhân viên` : `${filtered.length} lượt thi gần nhất`}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="p-10 text-center text-slate-400 text-sm">
            {history.length === 0 ? 'Chưa có lịch sử thi. Hãy vào tab Thi Trắc Nghiệm để bắt đầu!' : 'Không tìm thấy nhân viên này.'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400">
                  <th className="p-3">#</th>
                  <th className="p-3">Tên nhân viên</th>
                  <th className="p-3 whitespace-nowrap">Ngày thi</th>
                  <th className="p-3 text-center">Điểm</th>
                  <th className="p-3 text-center">Kết quả</th>
                  <th className="p-3 text-center">Xóa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-slate-700">
                {filtered.map((h, i) => (
                  <tr key={h.id} className="hover:bg-slate-50/40 transition-colors">
                    <td className="p-3 text-slate-400">{i + 1}</td>
                    <td className="p-3 font-semibold text-slate-800">{h.name}</td>
                    <td className="p-3 text-slate-500 whitespace-nowrap">{h.date}</td>
                    <td className="p-3 text-center">
                      <span className={`font-black text-sm ${h.score >= PASS_SCORE ? 'text-emerald-600' : h.score >= 70 ? 'text-amber-600' : 'text-red-500'}`}>
                        {h.score}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${h.score >= PASS_SCORE ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                        {h.score >= PASS_SCORE ? '✅ Đạt' : '❌ Chưa đạt'}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => deleteEntry(h.id)}
                        className="text-[10px] text-red-400 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded-lg transition-colors"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <p className="text-[10px] text-slate-400 leading-relaxed">
        * Lịch sử được lưu trên trình duyệt (localStorage). Kết quả chính thức được ghi tự động lên Google Sheets khi nhân viên nộp bài.
        Quản lý vào bảng Google Sheets để xuất báo cáo chính thức.
      </p>
    </div>
  );
}
