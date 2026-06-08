import { useState } from 'react';
import { Icons } from '../components/Icons.jsx';
import { ALL_QUIZ_QUESTIONS } from '../data/quiz.js';
import { CONFIG } from '../data/config.js';

const STORAGE_KEY = 'obistro_quiz_history';
const PASS_SCORE = 90;

function pickQuestions() {
  return [...ALL_QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);
}

function stripPrefix(opt) {
  return opt.replace(/^[A-D]\.\s*/, '');
}

function saveToHistory(entry) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const hist = stored ? JSON.parse(stored) : [];
    hist.unshift(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(hist.slice(0, 100)));
  } catch {}
}

export default function TabQuiz() {
  const [phase, setPhase]         = useState('name');       // name | quiz | result
  const [staffName, setStaffName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers]     = useState({});
  const [score, setScore]         = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg]   = useState('');
  const [showExplains, setShowExplains] = useState(false);

  const unanswered = questions.length - Object.keys(answers).length;
  const passed = score >= PASS_SCORE;

  const startQuiz = () => {
    if (!staffName.trim()) return;
    setQuestions(pickQuestions());
    setAnswers({});
    setShowExplains(false);
    setSubmitMsg('');
    setPhase('quiz');
  };

  const submitQuiz = async () => {
    let correct = 0;
    questions.forEach((q, i) => { if (answers[i] === q.answer) correct++; });
    const finalScore = correct * 10;
    setScore(finalScore);

    const dateStr = new Date().toLocaleString('vi-VN');
    const entry = { id: Date.now(), name: staffName.trim(), score: finalScore, date: dateStr, passed: finalScore >= PASS_SCORE };
    saveToHistory(entry);

    setSubmitting(true);
    setPhase('result');
    try {
      const params = new URLSearchParams({ name: staffName.trim(), score: finalScore, date: dateStr, passed: String(finalScore >= PASS_SCORE) });
      await fetch(`${CONFIG.GOOGLE_SHEET_API_URL}?${params}`, { method: 'GET', mode: 'no-cors' });
      setSubmitMsg('✅ Đã ghi điểm lên bảng quản lý thành công!');
    } catch {
      setSubmitMsg('⚠️ Ghi điểm online thất bại — báo quản lý ghi tay.');
    } finally {
      setSubmitting(false);
    }
  };

  const retry = () => { setPhase('name'); setAnswers({}); setScore(0); };

  // ── PHASE: name ─────────────────────────────────────────────────────────────
  if (phase === 'name') return (
    <div className="space-y-5 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.Award /> THI TRẮC NGHIỆM — Đánh giá Năng lực Nhân viên
      </h2>
      <div className="max-w-md mx-auto py-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-4xl">📝</div>
          <h3 className="font-bold text-slate-900 text-lg">Bài kiểm tra 10 câu ngẫu nhiên</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Hệ thống sẽ chọn ngẫu nhiên 10 câu từ ngân hàng 20 câu hỏi.<br />
            Mỗi câu đúng = 10 điểm. Đạt từ 90 điểm được cấp chứng nhận.
          </p>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 block">Họ và tên nhân viên</label>
          <input
            type="text"
            value={staffName}
            onChange={e => setStaffName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && staffName.trim() && startQuiz()}
            placeholder="Ví dụ: Nguyễn Thị Mai Anh"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00a2d5] focus:border-transparent"
            autoFocus
          />
        </div>
        <button
          onClick={startQuiz}
          disabled={!staffName.trim()}
          className="w-full bg-[#00a2d5] hover:bg-[#0d4a7c] disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm py-3 rounded-xl transition-all shadow-sm"
        >
          Bắt đầu thi →
        </button>
      </div>
    </div>
  );

  // ── PHASE: result ────────────────────────────────────────────────────────────
  if (phase === 'result') return (
    <div className="space-y-5 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.Award /> KẾT QUẢ THI
      </h2>

      {/* Score card */}
      <div className={`p-8 rounded-2xl text-center space-y-3 border-2 ${passed ? 'bg-emerald-50 border-emerald-300' : 'bg-red-50 border-red-300'}`}>
        <div className="text-5xl">{passed ? '🏆' : '📖'}</div>
        <p className="text-sm font-bold text-slate-600">{staffName}</p>
        <div className={`text-6xl font-black ${passed ? 'text-emerald-600' : 'text-red-500'}`}>{score}</div>
        <p className="text-sm font-bold text-slate-600">điểm / 100</p>
        <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold ${passed ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
          {passed ? '✅ ĐẠT — Hoàn thành xuất sắc!' : '❌ CHƯA ĐẠT — Ôn lại và thi lại nhé!'}
        </div>
        {submitting && <p className="text-xs text-slate-400 animate-pulse">Đang ghi điểm...</p>}
        {submitMsg && <p className="text-xs text-slate-500">{submitMsg}</p>}
      </div>

      {/* Certificate */}
      {passed && (
        <div className="p-6 rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white text-center space-y-2">
          <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Chứng nhận hoàn thành đào tạo</p>
          <div className="text-2xl">🎖️</div>
          <p className="font-bold text-slate-900">
            Chứng nhận rằng nhân viên <span className="text-[#00a2d5]">{staffName}</span> đã hoàn thành bài kiểm tra năng lực nghiệp vụ tại{' '}
            <span className="text-orange-600">Ơ Bistro Thủ Đức</span> với điểm số <span className="text-emerald-600 font-black">{score}/100</span>.
          </p>
          <p className="text-[10px] text-slate-400">{new Date().toLocaleDateString('vi-VN', { year:'numeric', month:'long', day:'numeric' })}</p>
        </div>
      )}

      {/* Answer review */}
      <div className="space-y-2">
        <button
          onClick={() => setShowExplains(!showExplains)}
          className="text-xs font-bold text-[#00a2d5] hover:text-[#0d4a7c] transition-colors"
        >
          {showExplains ? '▲ Ẩn đáp án' : '▼ Xem đáp án & giải thích'}
        </button>
        {showExplains && (
          <div className="space-y-3">
            {questions.map((q, i) => {
              const selected = answers[i];
              const correct = q.answer;
              const isCorrect = selected === correct;
              return (
                <div key={i} className={`p-4 rounded-xl border text-xs space-y-2 ${isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                  <p className="font-bold text-slate-800">{i + 1}. {q.question}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {q.options.map((opt, j) => {
                      const label = ['A','B','C','D'][j];
                      const isSelected = selected === j;
                      const isCorrectOpt = correct === j;
                      return (
                        <div key={j} className={`px-3 py-1.5 rounded-lg flex items-start gap-1.5 ${isCorrectOpt ? 'bg-emerald-500 text-white font-bold' : isSelected ? 'bg-red-400 text-white' : 'bg-white text-slate-600 border border-slate-100'}`}>
                          <span className="shrink-0 font-bold">{label}.</span>
                          <span>{stripPrefix(opt)}</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className={`text-[10px] leading-relaxed ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                    {isCorrect ? '✅' : '❌'} {q.explain}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button onClick={retry} className="flex-1 bg-[#00a2d5] hover:bg-[#0d4a7c] text-white font-bold text-sm py-3 rounded-xl transition-all">
          Thi lại
        </button>
        <button onClick={() => setPhase('name')} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-3 rounded-xl transition-all">
          Nhân viên khác
        </button>
      </div>
    </div>
  );

  // ── PHASE: quiz ──────────────────────────────────────────────────────────────
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Icons.Award /> Đang thi — {staffName}
        </h2>
        <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
          {Object.keys(answers).length} / {questions.length} đã trả lời
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-100 rounded-full h-1.5">
        <div
          className="bg-[#00a2d5] h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
        />
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={q.id} className={`p-5 rounded-2xl border transition-all ${answers[i] !== undefined ? 'border-[#00a2d5]/30 bg-[#00a2d5]/5' : 'border-slate-200 bg-white'}`}>
            <p className="font-semibold text-slate-800 text-sm mb-3">
              <span className="text-[#00a2d5] font-bold mr-1.5">Câu {i + 1}.</span>
              {q.question}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {q.options.map((opt, j) => {
                const label = ['A','B','C','D'][j];
                const selected = answers[i] === j;
                return (
                  <button
                    key={j}
                    onClick={() => setAnswers(prev => ({ ...prev, [i]: j }))}
                    className={`text-left text-xs px-3.5 py-2.5 rounded-xl border-2 transition-all flex items-start gap-2 ${
                      selected
                        ? 'bg-[#00a2d5] text-white border-[#00a2d5] shadow-sm font-semibold'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-[#00a2d5]/50 hover:bg-[#00a2d5]/5'
                    }`}
                  >
                    <span className={`font-bold shrink-0 ${selected ? 'text-white' : 'text-[#00a2d5]'}`}>{label}.</span>
                    <span>{stripPrefix(opt)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="sticky bottom-4 pt-2">
        <button
          onClick={submitQuiz}
          disabled={unanswered > 0}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md"
        >
          {unanswered > 0 ? `Còn ${unanswered} câu chưa trả lời` : 'Nộp bài & Xem kết quả →'}
        </button>
      </div>
    </div>
  );
}
