import { Icons } from '../components/Icons.jsx';

export default function TabConduct() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.UserCheck /> III. TÁC PHONG ĐỒNG PHỤC & QUY TRÌNH PHỤC VỤ GIỜ CAO ĐIỂM
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Grooming */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm space-y-3">
          <h3 className="font-bold text-slate-800 text-sm">1. Tiêu chuẩn Grooming & Vệ sinh</h3>
          <ul className="text-xs text-slate-600 space-y-2.5 list-disc pl-4">
            <li>
              <strong>Nhân viên Nam:</strong> Tóc luôn cắt ngắn gọn gàng không chạm phủ tai, chạm
              cổ áo (bắt buộc vuốt keo bọt giữ nếp), đồng phục chỉnh tề mang giày đen bịt mũi (cấm
              mang dép lê).
            </li>
            <li>
              <strong>Nhân viên Nữ:</strong> Trang điểm nhẹ nhàng thanh lịch. Tóc dài dưới cổ áo
              bắt buộc buộc gọn hoặc kẹp tóc màu sẫm giản dị. Tuyệt đối không đánh sơn móng tay
              màu mè sặc sỡ.
            </li>
            <li>
              <strong>Vệ sinh cá nhân:</strong> Thường xuyên tắm gội sạch sẽ, giữ móng tay cắt ngắn
              không quá đầu ngón tay. Sử dụng xịt khử mùi chống mồ hôi sảnh. Tuyệt đối không xịt
              nước hoa có mùi quá hắc.
            </li>
          </ul>
        </div>

        {/* Đón khách & đặt bàn */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm space-y-3">
          <h3 className="font-bold text-slate-800 text-sm">2. Sổ đặt bàn & Đón khách sảnh</h3>
          <ul className="text-xs text-slate-600 space-y-2.5 list-disc pl-4">
            <li>
              <strong>Chào khách:</strong> Ngay khi khách vào cửa, tươi cười hỏi thăm:{' '}
              <em>"Chào anh/chị! Cho em hỏi mình đã đặt bàn trước chưa ạ?"</em>. Hỏi tên đặt bàn,
              nếu trùng tên hỏi thêm 3 số cuối điện thoại.
            </li>
            <li>
              <strong>Xếp bàn:</strong> Dẫn khách vào đúng vị trí bàn đặt sẵn bảng Reserved, thu
              lại bảng Reserved.
            </li>
            <li>
              <strong>Đánh dấu sơ đồ:</strong> Bắt buộc dùng bút đánh dấu ngay vào sơ đồ bàn IPOS
              khi khách đã ngồi ổn định để tránh tình trạng lộn xộn, khách tự ý đổi chỗ dịp lễ tết
              đông đúc.
            </li>
          </ul>
        </div>
      </div>

      {/* Vận hành đông khách */}
      <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200 space-y-3">
        <h3 className="font-bold text-orange-950 text-sm flex items-center gap-2">
          ⚠️ Quy định Vận hành sảnh khi ĐÔNG KHÁCH
        </h3>
        <p className="text-xs text-orange-900 leading-relaxed font-semibold">
          Để tối ưu hóa tốc độ lên món và bảo vệ KPI bếp sảnh, khi lượng khách đạt đỉnh đông đúc:
        </p>
        <ul className="text-xs text-orange-900 space-y-2 list-decimal pl-4">
          <li>
            <strong>Tạm dừng nhận order các món làm lâu:</strong> Bánh mì nướng và các món có thời
            gian chế biến dài — thông báo khéo léo cho khách biết để tránh kỳ vọng sai.
          </li>
          <li>
            <strong>Không nhận thêm khách khi quá tải:</strong> Ưu tiên phục vụ tốt khách đang có
            hơn là nhận thêm rồi để tất cả chờ lâu.
          </li>
          <li>
            <strong>Ưu tiên xử lý món gấp trước:</strong> Phối hợp chặt với bếp, báo ngay các bàn
            đã chờ quá lâu để bếp ưu tiên lên món sớm hơn.
          </li>
          <li>
            <strong>Không bán món làm lâu:</strong> Khéo léo hướng khách sang các món ra nhanh như
            Steak bò, Mì Ý, Set Menu có sẵn.
          </li>
          <li>
            <strong>Bàn nào lâu ra món — tặng ngay:</strong> Nếu bàn khách chờ quá lâu, chủ động
            tặng khai vị hoặc nước uống để giữ thiện cảm, báo Quản lý phê duyệt ngay tại chỗ.
          </li>
        </ul>
      </div>

      {/* Quy tắc ứng xử nhanh */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { emoji: '🙅', title: 'Tuyệt đối KHÔNG',    items: ['Tranh cãi với khách', 'Dùng điện thoại cá nhân trong ca', 'Ăn uống khu vực sảnh', 'Ngồi khi có khách trong sảnh'] },
          { emoji: '✅', title: 'Luôn PHẢI làm',       items: ['Chào khách khi vào / ra', 'Đọc lại order trước khi chuyển bếp', 'Xin phép trước khi dọn bàn', 'Báo quản lý khi có sự cố'] },
          { emoji: '💡', title: 'Câu nói cốt lõi',     items: ['"Em xin phép..."', '"Dạ để em kiểm tra ngay..."', '"Em xin lỗi vì điều này..."', '"Em sẽ báo lại mình trong ít phút ạ."'] },
        ].map(({ emoji, title, items }) => (
          <div key={title} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
            <h4 className="font-bold text-slate-800 text-xs uppercase mb-2.5 flex items-center gap-1.5">
              <span>{emoji}</span> {title}
            </h4>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
              {items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
