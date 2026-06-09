import { useState } from 'react';

const SECTIONS = [
  { id: 'levels',    emoji: '🏅', label: '4 Cấp độ phục vụ' },
  { id: 'observe',   emoji: '👁️',  label: 'Mắt đọc vị' },
  { id: 'scripting', emoji: '💬', label: 'Lời thoại chuẩn' },
  { id: 'donts',     emoji: '📋', label: 'NÊN & KHÔNG NÊN' },
  { id: 'last',      emoji: '🛟', label: 'Xử lý khiếu nại' },
];

// ── Section 1 ────────────────────────────────────────────────────────────────
function SectionLevels() {
  const levels = [
    {
      badge: 'BAD', icon: '❌', color: 'border-red-300 bg-red-50',
      badgeColor: 'bg-red-100 text-red-700',
      behavior: 'Phục vụ sai món, quên order, thái độ thờ ơ hoặc cộc lốc',
      feel: 'Thất vọng, tức giận, không muốn quay lại',
      result: 'Review 1★, mất khách, ảnh hưởng uy tín nhà hàng',
    },
    {
      badge: 'GOOD', icon: '✅', color: 'border-slate-200 bg-white',
      badgeColor: 'bg-slate-100 text-slate-700',
      behavior: 'Đúng món, đúng giờ, đúng quy trình — làm theo đúng như được dạy',
      feel: 'Hài lòng ở mức bình thường, không có gì đặc biệt',
      result: 'Quay lại nếu tiện, không giới thiệu thêm bạn bè',
    },
    {
      badge: 'EXCEEDED', icon: '⭐', color: 'border-blue-200 bg-blue-50/40',
      badgeColor: 'bg-blue-100 text-blue-700',
      behavior: 'Chủ động hỏi thêm, nhớ sở thích khách quen, đề xuất không cần được nhắc',
      feel: 'Vui, ấn tượng — "nhân viên này chu đáo thật"',
      result: 'Review 4–5★, hay giới thiệu cho bạn bè đến thử',
    },
    {
      badge: 'WOW — Omotenashi', icon: '🌟', color: 'border-amber-300 bg-gradient-to-br from-amber-50 to-white',
      badgeColor: 'bg-amber-400 text-white',
      behavior: 'Đoán trước nhu cầu khi khách CHƯA NÓI. Làm việc đúng trước khi khách kịp nhắc',
      feel: 'Ngạc nhiên, xúc động — "Sao họ biết mình cần cái này?"',
      result: 'Khách trung thành, kéo theo cả nhóm, viral tự nhiên trên mạng xã hội',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
        <strong>🎯 Mục tiêu của Ơ Bistro:</strong> Mọi nhân viên đều phải đạt tối thiểu cấp EXCEEDED. Cấp WOW là kim chỉ nam — mỗi ca ít nhất 1 khoảnh khắc khách WOW.
      </div>

      <div className="grid grid-cols-1 gap-3">
        {levels.map((l, i) => (
          <div key={i} className={`rounded-2xl border-2 p-4 space-y-3 ${l.color}`}>
            <div className="flex items-center gap-2">
              <span className="text-xl">{l.icon}</span>
              <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide ${l.badgeColor}`}>{l.badge}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Biểu hiện</p>
                <p className="text-slate-700 leading-relaxed">{l.behavior}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Khách cảm nhận</p>
                <p className="text-slate-700 leading-relaxed">{l.feel}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Kết quả thực tế</p>
                <p className="text-slate-700 leading-relaxed">{l.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section 2 ────────────────────────────────────────────────────────────────
function SectionObserve() {
  const rows = [
    {
      eye: 'Khách liên tục nhìn quanh, ngó nghiêng hoặc ngồi thẳng người',
      predict: 'Cần gọi nhân viên — muốn order, hỏi món hoặc cần điều chỉnh gì đó',
      action: 'Tiến lại nhẹ nhàng trong 10 giây, hỏi khẽ: "Dạ em có thể hỗ trợ gì thêm cho mình không ạ?"',
    },
    {
      eye: 'Ly nước còn dưới 1/3 — chưa hết nhưng sắp cạn',
      predict: 'Sắp cần rót thêm — khách chưa nghĩ đến nhưng sẽ khó chịu khi hết mà không ai để ý',
      action: 'Cầm bình nước tiến lại, nói: "Em xin phép rót thêm nước cho mình ạ." — không cần đợi khách gọi',
    },
    {
      eye: 'Dụng cụ ăn (nĩa, muỗng, dao) rơi xuống sàn',
      predict: 'Cần dụng cụ thay thế ngay — khách sẽ lúng túng hoặc dùng tay nếu không ai để ý',
      action: 'Lấy ngay bộ dao nĩa mới từ station, đặt trước mặt khách: "Em xin phép thay bộ mới sạch cho mình ạ."',
    },
    {
      eye: 'Bàn đông người, gọi steak nguyên miếng, nhìn nhau lưỡng lự khi món lên',
      predict: 'Muốn chia sẻ (share) nhưng không có đĩa phụ — ngại yêu cầu thêm',
      action: 'Chủ động mang đĩa share + dao thêm, đề nghị: "Dạ em cắt phần steak chia cho mình luôn nhé ạ?"',
    },
    {
      eye: 'Bàn có trẻ nhỏ (dưới 6 tuổi) vừa được dẫn vào ngồi',
      predict: 'Cần ghế em bé, bàn an toàn, menu phù hợp — bố mẹ đang bận ổn định con',
      action: 'Ngay lập tức: mang ghế baby, rút dao sắc ra xa tầm tay trẻ, giới thiệu: "Dạ bên em có mì Ý pho mai bò xốt kem dành cho bé ạ."',
    },
  ];

  return (
    <div className="space-y-3">
      <div className="p-4 bg-[#00a2d5]/8 border border-[#00a2d5]/20 rounded-xl text-xs text-slate-700 leading-relaxed">
        <strong className="text-[#00a2d5]">👁️ Nguyên tắc:</strong> Nhân viên 5★ quan sát liên tục trong bán kính 3 bàn quanh mình. Thấy → dự đoán → làm — không chờ khách phải nói.
      </div>
      <div className="space-y-3">
        {rows.map((r, i) => (
          <div key={i} className="rounded-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-800 px-3 py-2">
              <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider">Tình huống {i + 1}</span>
            </div>
            <div className="grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="p-3 space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1">👁️ Mắt thấy</p>
                <p className="text-xs text-slate-700 leading-relaxed">{r.eye}</p>
              </div>
              <div className="p-3 space-y-1 bg-amber-50/50">
                <p className="text-[9px] font-black text-amber-600 uppercase flex items-center gap-1">🧠 Đọc vị</p>
                <p className="text-xs text-slate-700 leading-relaxed">{r.predict}</p>
              </div>
              <div className="p-3 space-y-1 bg-emerald-50/50">
                <p className="text-[9px] font-black text-emerald-600 uppercase flex items-center gap-1">✋ Hành động 5★</p>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">{r.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section 3 ────────────────────────────────────────────────────────────────
function SectionScripting() {
  const scripts = [
    {
      context: 'Chào đón & tư vấn món',
      bad: 'Ngồi đây. Menu đây. Gọi gì không?',
      good: 'Ơ Bistro xin chào anh chị ạ! Em xin phép kéo ghế cho chị. Đây là menu của nhà hàng — trang đầu có set tiết kiệm hơn cho nhóm mình. Mình xem thử nhé, khoảng 2 phút em quay lại tư vấn ạ.',
    },
    {
      context: 'Xác nhận độ chín Steak',
      bad: 'Chín mấy? Tái hay chín kỹ?',
      good: 'Dạ Ribeye của mình dùng độ chín nào ạ? Em gợi ý Medium Rare — thịt còn hồng nhẹ ở giữa, mềm và ngọt nhất. Hoặc anh thích chín hơn một chút thì Medium cũng rất hợp ạ.',
    },
    {
      context: 'Xin phép dọn đĩa trống',
      bad: 'Dọn chưa? (rồi cầm luôn không hỏi)',
      good: 'Em xin phép thu bớt đĩa này để bàn mình rộng hơn nhé ạ — mình dùng xong phần này rồi chứ ạ?',
    },
    {
      context: 'Xin lỗi khi lên món muộn',
      bad: 'Đợi thêm chút nha, bếp đang bận.',
      good: 'Dạ em xin lỗi mình vì món đang lên hơi chậm hơn dự kiến. Em vừa kiểm tra bếp — món của mình sẽ ra trong khoảng 5 phút nữa. Trong lúc chờ em xin phép gửi thêm bánh mì nướng cho mình dùng tạm ạ.',
    },
  ];

  return (
    <div className="space-y-3">
      <div className="p-4 bg-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed">
        <strong className="text-white">💬 Nguyên tắc:</strong> Câu nói phải có 3 yếu tố — <span className="text-amber-300">Lịch sự</span> + <span className="text-[#00a2d5]">Thông tin rõ</span> + <span className="text-emerald-400">Hành động cụ thể</span>. Nói ngắn không có nghĩa là nói cộc.
      </div>
      <div className="space-y-3">
        {scripts.map((s, i) => (
          <div key={i} className="rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-3 py-2 bg-slate-100 border-b border-slate-200">
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">Tình huống: {s.context}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="p-3 bg-red-50/60 space-y-1.5">
                <p className="text-[9px] font-black text-red-500 uppercase tracking-wide flex items-center gap-1">
                  🚫 KHÔNG NÓI — Phong cách bình dân
                </p>
                <p className="text-xs text-red-800 italic leading-relaxed">"{s.bad}"</p>
              </div>
              <div className="p-3 bg-emerald-50/60 space-y-1.5">
                <p className="text-[9px] font-black text-emerald-600 uppercase tracking-wide flex items-center gap-1">
                  ✅ BẮT BUỘC NÓI — Phong cách 5★ & Pizza 4P's
                </p>
                <p className="text-xs text-emerald-900 font-medium leading-relaxed">"{s.good}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section 4 ────────────────────────────────────────────────────────────────
function SectionDonts() {
  const dos = [
    { icon: '👁️', title: 'Quy tắc Mắt quan sát liên tục', desc: 'Luôn ý thức quan sát bán kính 3 bàn quanh vị trí đứng. Thấy ly vơi, dụng cụ rơi, khách ngó — hành động ngay.' },
    { icon: '🤲', title: 'Quy tắc Lòng bàn tay ngửa', desc: 'Khi chỉ hướng, mời khách ngồi hoặc giới thiệu món — LUÔN dùng lòng bàn tay ngửa mở. Tuyệt đối không chỉ bằng ngón tay.' },
    { icon: '🗣️', title: 'Nhớ tên khách quen', desc: 'Gọi được tên khách khi họ quay lại lần 2 là khoảnh khắc WOW tự nhiên nhất. Ghi chú tên khách hay vào sổ tay sau ca.' },
    { icon: '⚡', title: 'Phản xạ 10 giây', desc: 'Khách vừa vào cửa: chào trong 10 giây. Thấy dấu hiệu cần giúp: tiến lại trong 10 giây. Không để khách phải nhìn quanh tìm nhân viên.' },
  ];

  const donts = [
    { icon: '📱', title: 'Bấm điện thoại cá nhân trong ca', desc: 'Kể cả khi sảnh vắng. Bị phát hiện: phạt 30k/lần. Vi phạm 2 lần/tuần: phạt 100k cảnh cáo nặng.' },
    { icon: '🗣️', title: 'Tụ tập nói chuyện khi có khách', desc: 'Nhóm 2–3 nhân viên đứng gần nhau nói chuyện riêng trong giờ làm là hình ảnh tệ nhất. Khách thấy ngay và cảm thấy bị bỏ bê.' },
    { icon: '🤬', title: 'Tranh cãi với khách', desc: 'Dù khách sai 100% — tuyệt đối không tranh cãi. Thắng tranh luận = thua khách hàng. Báo Quản lý xử lý.' },
    { icon: '🚶', title: 'Quay lưng về phía khách khi nói chuyện', desc: 'Khi phục vụ, luôn duy trì tư thế hướng về phía khách. Không khoanh tay, không đút tay túi khi đứng trước khách.' },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-4 space-y-3">
        <h4 className="font-bold text-emerald-800 text-sm flex items-center gap-2">✅ PHẢI LÀM — Chuẩn 5★</h4>
        <div className="space-y-2.5">
          {dos.map((d, i) => (
            <div key={i} className="flex gap-3 items-start bg-white rounded-xl p-3 border border-emerald-100">
              <span className="text-lg shrink-0 mt-0.5">{d.icon}</span>
              <div>
                <p className="font-bold text-slate-800 text-xs mb-0.5">{d.title}</p>
                <p className="text-[11px] text-slate-600 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border-2 border-red-200 bg-red-50/40 p-4 space-y-3">
        <h4 className="font-bold text-red-800 text-sm flex items-center gap-2">🚫 TUYỆT ĐỐI KHÔNG — Vi phạm là bị phạt</h4>
        <div className="space-y-2.5">
          {donts.map((d, i) => (
            <div key={i} className="flex gap-3 items-start bg-white rounded-xl p-3 border border-red-100">
              <span className="text-lg shrink-0 mt-0.5">{d.icon}</span>
              <div>
                <p className="font-bold text-slate-800 text-xs mb-0.5">{d.title}</p>
                <p className="text-[11px] text-slate-600 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section 5 ────────────────────────────────────────────────────────────────
function SectionLAST() {
  const steps = [
    {
      letter: 'L', word: 'LISTEN — Lắng nghe', color: 'bg-blue-500', light: 'bg-blue-50 border-blue-200',
      rule: 'Để khách nói hết. Không cắt lời, không giải thích sớm, không đổ lỗi cho bếp hay ca trước.',
      script: '"Dạ em xin lỗi anh/chị — em đang lắng nghe. Anh/chị kể cho em nghe rõ hơn được không ạ?"',
    },
    {
      letter: 'A', word: 'APOLOGIZE — Xin lỗi', color: 'bg-orange-500', light: 'bg-orange-50 border-orange-200',
      rule: 'Xin lỗi ngay, chân thành, không kèm lý do biện hộ. "Do bếp bận" hay "Do ca trước" là những câu cấm nói.',
      script: '"Dạ em xin lỗi chị vì trải nghiệm này chưa đúng như kỳ vọng của mình. Em thật sự xin lỗi ạ."',
    },
    {
      letter: 'S', word: 'SOLVE — Giải quyết', color: 'bg-emerald-500', light: 'bg-emerald-50 border-emerald-200',
      rule: 'Đưa ra giải pháp cụ thể ngay lập tức, không hỏi ý kiến khách về cách giải quyết — khách cần mình dẫn dắt.',
      script: '"Em sẽ yêu cầu bếp làm lại phần steak đúng độ Medium Rare ngay. Trong lúc chờ em xin phép gửi thêm bánh mì nướng cho mình ạ."',
    },
    {
      letter: 'T', word: 'THANK — Cảm ơn', color: 'bg-amber-500', light: 'bg-amber-50 border-amber-200',
      rule: 'Cảm ơn khách đã phản ánh — đây là dữ liệu quý để nhà hàng cải thiện. Kết thúc phải warm, không lạnh.',
      script: '"Em cảm ơn anh/chị đã thẳng thắn góp ý để bên em phục vụ tốt hơn. Mình cứ gọi em nếu cần thêm bất cứ điều gì ạ."',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900 rounded-xl text-xs text-slate-300 leading-relaxed space-y-1">
        <p><strong className="text-white">🛟 L.A.S.T — Quy trình 4 bước xử lý khiếu nại đỉnh cao</strong></p>
        <p>Kịch bản mẫu: Khách phàn nàn steak sai độ chín (gọi Medium Rare nhưng lên Well Done).</p>
      </div>

      <div className="space-y-3">
        {steps.map((s, i) => (
          <div key={i} className={`rounded-2xl border-2 p-4 space-y-3 ${s.light}`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${s.color} text-white font-black text-xl flex items-center justify-center shrink-0`}>
                {s.letter}
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{s.word}</h4>
              <span className="ml-auto text-xs text-slate-400 font-bold">Bước {i + 1}</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">{s.rule}</p>
            <div className="bg-white/80 rounded-xl p-3 border border-slate-200">
              <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Câu thoại mẫu</p>
              <p className="text-xs text-slate-800 font-medium leading-relaxed italic">{s.script}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 space-y-1.5">
        <p className="font-bold">⛔ Những câu TUYỆT ĐỐI không nói khi xử lý khiếu nại:</p>
        <ul className="space-y-1 pl-4 list-disc text-red-800">
          <li>"Do bếp hôm nay bận quá" — khách không cần biết lý do nội bộ</li>
          <li>"Em ghi đúng rồi mà" — dù đúng, đây là câu tranh luận</li>
          <li>"Món này bình thường vậy đó anh/chị" — phủ nhận cảm nhận của khách</li>
          <li>"Anh/chị phải nói sớm hơn" — đổ lỗi cho khách</li>
        </ul>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function TabTheoryFB() {
  const [activeSection, setActiveSection] = useState('levels');

  const renderSection = () => {
    switch (activeSection) {
      case 'levels':    return <SectionLevels />;
      case 'observe':   return <SectionObserve />;
      case 'scripting': return <SectionScripting />;
      case 'donts':     return <SectionDonts />;
      case 'last':      return <SectionLAST />;
      default:          return null;
    }
  };

  return (
    <div className="space-y-5 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-1">
          🌟 OMOTENASHI — Cẩm nang Phục vụ 5★ Ơ Bistro
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          Chuẩn Pizza 4P's & nhà hàng fine-dining — học 1–2 tuần là có tác phong chuyên nghiệp thật sự.
        </p>
      </div>

      {/* Section nav */}
      <div className="flex flex-wrap gap-2">
        {SECTIONS.map(({ id, emoji, label }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all border whitespace-nowrap ${
              activeSection === id
                ? 'bg-slate-900 text-white border-transparent shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <span>{emoji}</span>
            {label}
          </button>
        ))}
      </div>

      {/* Section content */}
      <div className="animate-fadeIn">{renderSection()}</div>
    </div>
  );
}
