import { Icons } from '../components/Icons.jsx';

export default function TabShifts() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
        <Icons.Clock /> I. THỜI GIAN LÀM VIỆC & QUY ĐỊNH NGHỈ PHÉP
      </h2>

      {/* Ca làm việc */}
      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
        <h3 className="font-bold text-slate-900 text-sm">1. Thời gian biểu làm việc ca chuẩn</h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Thời gian biểu làm việc sẽ được phân công trực tiếp bởi Quản lý nhà hàng dựa trên khối
          lượng công việc thực tế.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl border border-slate-100">
            <span className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded">
              CA AM (SÁNG)
            </span>
            <div className="text-lg font-bold text-slate-800 my-1">10:45 - 14:00</div>
            <p className="text-[11px] text-slate-400">
              Tập trung lau chùi sảnh sỉ lẻ, vệ sinh kính, bàn ăn, chuẩn bị sảnh tốt nhất.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-100">
            <span className="text-[10px] font-bold text-[#00a2d5] bg-[#00a2d5]/10 px-2 py-0.5 rounded">
              CA PM (TỐI)
            </span>
            <div className="text-lg font-bold text-slate-800 my-1">16:45 - 22:00</div>
            <p className="text-[11px] text-slate-400">
              Bàn giao ca, phục vụ khách tối, lau dọn đóng quầy và chuẩn bị order nguyên vật liệu.
            </p>
          </div>
        </div>
        <p className="text-xs text-red-600 font-bold bg-red-50 p-3 rounded-lg border border-red-100">
          ⚠️ Lưu ý giao ca PM: Toàn bộ bộ phận có nghĩa vụ hoàn thành kiểm tra và nộp phiếu order
          nguyên vật liệu cho ngày hôm sau trước khi ra về.
        </p>
      </div>

      {/* Tiền ăn */}
      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
        <h3 className="font-bold text-slate-900 text-sm">2. Bữa ăn của nhân viên (Cơ chế hỗ trợ mới)</h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Nhà hàng hỗ trợ phụ cấp tiền ăn bằng tiền mặt hàng tháng đối với nhân viên đi làm đủ công:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0">⏱️</div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Part-time</p>
              <p className="text-sm font-bold text-slate-800">Đủ 120 giờ / tháng</p>
              <p className="text-xs text-[#00a2d5] font-bold">Nhận 200.000 VNĐ tiền ăn</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-xl shrink-0">📅</div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Full-time</p>
              <p className="text-sm font-bold text-slate-800">Đủ 200 giờ công / tháng</p>
              <p className="text-xs text-emerald-600 font-bold">Nhận 500.000 VNĐ tiền ăn</p>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          * Khi nhà hàng có bếp chuẩn bị cơm tập thể cho nhân sự, nhà hàng sẽ thông báo đổi sang chế
          độ ăn trực tiếp tại nhà hàng. Giờ ăn do Quản lý quy định.
        </p>
      </div>

      {/* Nghỉ phép */}
      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
        <h3 className="font-bold text-slate-900 text-sm">3. Quy định Nghỉ ốm & Nghỉ phép</h3>
        <ul className="text-xs text-slate-600 space-y-3 list-decimal pl-4">
          <li>
            <strong>Nghỉ ốm đột xuất:</strong> Phải thông báo trực tiếp cho Quản lý sảnh (hoặc nhờ
            người thông báo trong trường hợp bất khả kháng). Nghỉ ốm hợp lệ buộc phải có xác nhận /
            giấy chỉ định của Bác sĩ.
          </li>
          <li>
            <strong>Nghỉ phép thường niên (Dành cho Full-time):</strong> Được đăng ký nghỉ tối đa{' '}
            <strong>4 ngày / tháng</strong>. Nghỉ phép chỉ được sắp xếp từ{' '}
            <strong>Thứ Hai đến Thứ Năm</strong> (Không nghỉ Cuối tuần & Lễ Tết). Đăng ký nghỉ vào
            cuối tuần trước và phải được Quản lý duyệt trước ca.
          </li>
        </ul>
      </div>
    </div>
  );
}
