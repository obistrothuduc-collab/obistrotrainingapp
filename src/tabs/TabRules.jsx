import { Icons } from '../components/Icons.jsx';

const VIOLATIONS = [
  { desc: "Đi làm trễ giờ, nghỉ không báo trước ca",                          fine: "30.000đ / lần",             heavy: "Vi phạm 2 lần / tuần" },
  { desc: "Sử dụng điện thoại làm việc riêng trong ca",                        fine: "30.000đ / lần",             heavy: "Vi phạm 2 lần / tuần" },
  { desc: "Không làm đúng quy trình làm việc (vệ sinh, dọn dẹp sảnh)",        fine: "30.000đ / lần",             heavy: "Vi phạm 2 lần / tháng" },
  { desc: "Làm việc riêng, tụ tập nói chuyện lớn tiếng khi có khách",         fine: "30.000đ / lần",             heavy: "Vi phạm 2 lần / tuần" },
  { desc: "Không chủ động đón chào, mở cửa cho khách vào sảnh",               fine: "30.000đ / lần",             heavy: "Cảnh cáo nhắc nhở" },
  { desc: "Ghi sai order làm hủy món bếp sảnh",                                fine: "Đền bù 100% hóa đơn món sai", heavy: "Vi phạm 2 lần/tháng (Phạt 1 triệu)" },
  { desc: "Không kiểm tra thiết bị khi kết thúc ca (đèn, quạt, AC, rác)",     fine: "30.000đ / lần",             heavy: "Vi phạm 2 lần / tuần" },
  { desc: "Không vệ sinh sảnh, Station phục vụ sạch sẽ gọn gàng",             fine: "30.000đ / lần",             heavy: "Vi phạm 2 lần / tuần" },
  { desc: "Ký chấm công muộn dồn dập (Chỉ ký cuối tuần / cuối tháng)",        fine: "30.000đ / lần phát hiện",  heavy: "Căn cứ bảng ký hàng ngày" },
];

export default function TabRules() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.Gavel /> II. QUY CHẾ KỶ LUẬT & BẢNG CHẾ TÀI TRÁCH NHIỆM
      </h2>

      {/* Phạt 10% lương */}
      <div className="p-5 rounded-2xl border border-orange-200 bg-orange-50/50 space-y-2.5">
        <h4 className="font-bold text-orange-950 text-xs uppercase tracking-wide flex items-center gap-1.5">
          🛑 Các hành vi xử phạt trừ 10% LƯƠNG THÁNG
        </h4>
        <ul className="text-xs text-orange-900 space-y-1.5 list-disc pl-4">
          <li>Tự ý nấu ăn, pha chế đồ uống hoặc sử dụng trang thiết bị nhà hàng, quầy bar sảnh khi chưa được Quản lý đồng ý.</li>
          <li>Tự ý ký vào bảng chấm công hàng ngày thay thế cho người khác.</li>
          <li>Tham gia vào các giao dịch mua bán, trao đổi của nhà hàng khi không được phân công nhiệm vụ.</li>
          <li>Ăn uống những thực phẩm / đồ uống dành riêng hoặc bán cho khách hàng.</li>
          <li>Hút thuốc lá khi đang làm việc trước mặt khách, trong khu vực phục vụ hoặc khu bếp chế biến đồ ăn. Nhai kẹo cao su trong ca làm việc.</li>
        </ul>
      </div>

      {/* Sa thải */}
      <div className="p-5 rounded-2xl border border-red-200 bg-red-50/50 space-y-2.5">
        <h4 className="font-bold text-red-950 text-xs uppercase tracking-wide flex items-center gap-1.5">
          🚫 Các hành vi SA THẢI LẬP TỨC & KHÔNG NHẬN LƯƠNG THÁNG
        </h4>
        <ul className="text-xs text-red-900 space-y-1.5 list-disc pl-4">
          <li>Bỏ ca làm, nghỉ ngang không nộp đơn báo trước Quản lý tối thiểu 1 tháng (30 ngày).</li>
          <li>Trộm cắp, phá hoại tài sản, di chuyển bất hợp pháp đồ đạc của nhà hàng, khách hàng hoặc đồng nghiệp.</li>
          <li>Uống rượu bia khi đang trong ca làm việc hoặc đến nhà hàng làm việc trong tình trạng say xỉn.</li>
          <li>Thách thức, khiêu ghẹo gây gổ đánh nhau gây thương tích nội bộ hoặc cố ý bôi nhọ danh tiếng nhà hàng.</li>
          <li>Cư xử vô lễ, bất lịch sự trắng trợn hoặc thờ ơ với khách hàng, cãi nhau với khách.</li>
        </ul>
      </div>

      {/* Bảng vi phạm chi tiết */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
          <span className="font-bold text-xs uppercase tracking-wide text-slate-500">
            Mã Lỗi xử phạt theo ngày & Cảnh cáo nặng
          </span>
          <span className="text-[10px] text-red-500 font-bold bg-red-100 px-2 py-0.5 rounded">
            Checklist Ơ Bistro
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400">
                <th className="p-3">Nội dung vi phạm</th>
                <th className="p-3 whitespace-nowrap">Mức phạt lỗi lẻ</th>
                <th className="p-3 whitespace-nowrap">Ngưỡng cảnh cáo nặng (Phạt 100k)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {VIOLATIONS.map((v, i) => (
                <tr key={i} className="hover:bg-slate-50/40">
                  <td className="p-3 font-medium">{v.desc}</td>
                  <td className="p-3 text-red-600 font-semibold whitespace-nowrap">{v.fine}</td>
                  <td className="p-3 text-slate-500">{v.heavy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed">
        * Đối với nhân viên vô ý làm bể vỡ dụng cụ ly dĩa, trang thiết bị của nhà hàng phải có trách
        nhiệm bồi thường vật chất theo giá trị hiện thời. Quản lý có quyền cân đối giảm bồi hoàn dựa
        trên thái độ hối lỗi thực tế.
      </p>
    </div>
  );
}
