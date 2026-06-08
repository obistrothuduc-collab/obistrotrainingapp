export default function TabHome({ goTo }) {
  return (
    <div className="space-y-8 animate-fadeIn">

      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/50 via-white to-white p-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl pointer-events-none" />
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
          Hệ thống đào tạo nội bộ Ơ Bistro
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-3xl text-sm mb-6">
          Chào mừng các bạn nhân viên sảnh đến với cổng tài nguyên chuẩn hóa 2026. Tại đây, bạn sẽ
          được học tập quy chế nội quy nghiêm ngặt, cách phục vụ thực tế của nhà hàng Âu-Á kết hợp,
          sơ đồ IPOS, và cẩm nang nước xốt chi tiết.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => goTo('shifts')}
            className="bg-[#00a2d5] hover:bg-[#0d4a7c] text-white font-medium text-xs px-5 py-3 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            Bắt đầu học nội quy
          </button>
          <button
            onClick={() => goTo('menu')}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs px-5 py-3 rounded-xl transition-all"
          >
            Khám phá thực đơn
          </button>
        </div>
      </div>

      {/* 4 quick-link cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
          <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00a2d5]" />
            Học trực quan bằng Video
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            Các clip hướng dẫn thực tế các thao tác nghiệp vụ khó như gấp napkin, dọn đĩa hay bưng
            khay khuyên dùng bởi Hướng nghiệp Á Âu.
          </p>
          <button onClick={() => goTo('videos')} className="text-xs font-bold text-[#00a2d5] hover:text-[#0d4a7c]">
            Xem thư viện video →
          </button>
        </div>

        <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
          <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00a2d5]" />
            Ngân hàng câu hỏi trắc nghiệm
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            Làm quen đề khảo sát ngẫu nhiên 10 câu hỏi để được kiểm nghiệm năng lực lên cấp bậc
            chính thức của nhà hàng.
          </p>
          <button onClick={() => goTo('quiz')} className="text-xs font-bold text-[#00a2d5] hover:text-[#0d4a7c]">
            Bắt đầu thi thử →
          </button>
        </div>

        <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
          <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            Bài giảng F&B 5★ có sách nói
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            10 bài giảng nghiệp vụ chuẩn Omotenashi với hội thoại mẫu và tính năng đọc to —
            nghe trước khi ngủ, nhại lại sáng dậy.
          </p>
          <button onClick={() => goTo('theory_fb')} className="text-xs font-bold text-[#00a2d5] hover:text-[#0d4a7c]">
            Nghe bài giảng →
          </button>
        </div>

        <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
          <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            Cẩm nang nước xốt & Menu
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            Tra cứu nhanh màu sắc, vị đặc trưng và gợi ý tư vấn từng loại xốt theo nhóm món —
            steak, mì Ý, salad, khai vị.
          </p>
          <button onClick={() => goTo('steak_sauces')} className="text-xs font-bold text-[#00a2d5] hover:text-[#0d4a7c]">
            Xem cẩm nang xốt →
          </button>
        </div>
      </div>
    </div>
  );
}
