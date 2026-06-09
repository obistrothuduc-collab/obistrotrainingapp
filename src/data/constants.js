import { CONFIG } from './config.js';

export const STEAK_DONENESS_LEVELS = [
  { name: "RARE (Tái)",             temp: "140°F (60°C)", color: "linear-gradient(135deg, #0d4a7c, #093355)", desc: "Bên ngoài cháy xém nhẹ, bên trong giữ màu đỏ tươi đậm (75% đỏ), ấm và nhiều nước ngọt." },
  { name: "MEDIUM RARE (Tái chín)", temp: "145°F (63°C)", color: "linear-gradient(135deg, #0d4a7c, #00a2d5)", desc: "Lớp vỏ nâu giòn, bên trong hồng đậm ở tâm. Đây là độ chín lý tưởng nhất và luôn được khuyên dùng tại Ơ Bistro." },
  { name: "MEDIUM (Chín vừa)",      temp: "150°F (65°C)", color: "linear-gradient(135deg, #00a2d5, #007ba2)", desc: "Hồng nhạt phân bố đều, không còn nhiều nước thịt chảy ra nhưng vẫn ẩm." },
  { name: "MEDIUM WELL (Chín tới)", temp: "155°F (68°C)", color: "linear-gradient(135deg, #007ba2, #044357)", desc: "Tâm chỉ còn chút ánh hồng nhẹ, phần lớn thịt chuyển nâu xám sẫm. Thịt săn chắc." },
  { name: "WELL DONE (Chín kỹ)",    temp: "160°F (71°C)", color: "linear-gradient(135deg, #475569, #1e293b)", desc: "Nâu đều từ trong ra ngoài. Không còn ánh hồng. Sợi thịt dai chắc (nhân viên nên báo trước khách thịt sẽ bị khô)." },
  { name: "SHOE LEATHER (Đế giày)", temp: ">165°F (>74°C)",color: "linear-gradient(135deg, #1e293b, #0f172a)", desc: "CẢNH BÁO: Chín quá mức, mất hoàn toàn nước ngọt, khô khan dai cứng, rất dễ bị khách phàn nàn." },
];

export const VIDEO_PLAYLIST = [
  { id: 'pl1', category: '40 video', title: 'Học viện Quản trị Nhà hàng - Khách sạn', duration: 'Hướng Nghiệp Á Âu', link: CONFIG.VIDEO_LINKS.pl1, iconBg: 'bg-[#00a2d5]/10 text-[#00a2d5]' },
  { id: 'pl2', category: '149 video', title: 'Học viện Đầu Bếp — Học nấu ăn ngành F&B', duration: 'Hướng Nghiệp Á Âu', link: CONFIG.VIDEO_LINKS.pl2, iconBg: 'bg-emerald-50 text-emerald-600' },
  { id: 'pl3', category: 'Nhiều tập', title: 'Học viện Pha Chế', duration: 'Hướng Nghiệp Á Âu', link: CONFIG.VIDEO_LINKS.pl3, iconBg: 'bg-orange-50 text-orange-600' },
];

export const PHOTO_GALLERY = [
  // Nội quy & Sơ đồ
  { id: 'p1', category: 'rules', title: 'Sơ đồ bố trí bàn & lối đi Sảnh nhà hàng',
    desc: 'Nhìn tổng quan bố cục sảnh: vị trí từng bàn, lối đi phục vụ và hướng dẫn khách vào chỗ ngồi. Ghi nhớ sơ đồ trước khi vào ca.',
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80' },
  { id: 'p2', category: 'rules', title: 'Không gian Fine Dining — Chuẩn mực ánh sáng & trang trí',
    desc: 'Tiêu chuẩn ánh sáng vàng ấm, bàn ghế cách đều, không gian thoáng — không đặt thêm bàn khi quá tải. Ưu tiên chất lượng phục vụ.',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80' },

  // Setup bàn
  { id: 'p3', category: 'setup', title: 'Quy chuẩn Setup: Đĩa — Dao — Nĩa đúng vị trí',
    desc: 'Dao đặt bên PHẢI, lưỡi quay vào trong. Nĩa đặt bên TRÁI. Khoảng cách từ mép bàn: 2cm. Đĩa share đặt chính giữa.',
    url: 'https://images.unsplash.com/photo-yLfsEMVbOWA?auto=format&fit=crop&w=1200&q=80' },
  { id: 'p4', category: 'setup', title: 'Setup ly rượu & bộ dao nĩa Fine Dining hoàn chỉnh',
    desc: 'Ly rượu đặt trên và bên phải đĩa. Khăn ăn gấp chuẩn đặt trên đĩa hoặc bên trái. Không để dấu tay trên ly, dao, nĩa khi setup.',
    url: 'https://images.unsplash.com/photo-W9hk6ZQJQxQ?auto=format&fit=crop&w=1200&q=80' },

  // Kiến thức Steak
  { id: 'p5', category: 'steak', title: 'Mặt cắt lõi Steak — Nhận biết độ chín bằng màu sắc',
    desc: 'Medium Rare: lõi hồng đậm chiếm 60% mặt cắt. Medium: hồng nhạt đều. Medium Well: chỉ còn vệt hồng ở tâm. Dùng nhiệt kế để chắc chắn.',
    url: 'https://images.unsplash.com/photo-FtS1PZ-cppw?auto=format&fit=crop&w=1200&q=80' },
  { id: 'p6', category: 'steak', title: 'Kỹ thuật cắt & trình bày Steak lên đĩa',
    desc: 'Sau khi Resting 3-5 phút, cắt theo thớ thịt để giữ nước ngọt. Đặt mặt cắt hướng lên trên để khách thấy độ chín. Grill marks phải rõ nét.',
    url: 'https://images.unsplash.com/photo-Vr6Su7dd2qs?auto=format&fit=crop&w=1200&q=80' },
  { id: 'p7', category: 'steak', title: 'Sườn heo Texas BBQ — Tiêu chuẩn xốt & màu sắc hoàn thiện',
    desc: 'Bề mặt sườn phải óng ả màu nâu caramel, xốt BBQ phủ đều không cháy. Ăn kèm khoai tây và salad được trình bày gọn một phía đĩa.',
    url: 'https://images.unsplash.com/photo-UeYkqQh4PoI?auto=format&fit=crop&w=1200&q=80' },

  // Nghiệp vụ Order
  { id: 'p8', category: 'menu', title: 'Cách ghi phiếu Order chuẩn — Số bàn, Pax, Độ chín, Xốt',
    desc: 'Ghi rõ: số bàn / số khách (pax) / độ chín viết tắt (MR, M, MW) / loại xốt. Đọc lại order trước khi chuyển bếp. Viết rõ ràng, không tẩy xóa.',
    url: 'https://images.unsplash.com/photo-WXOkRjuVDIc?auto=format&fit=crop&w=1200&q=80' },
  { id: 'p9', category: 'menu', title: 'Trình bày Pasta — Chuẩn cuộn tròn tâm đĩa',
    desc: 'Cuộn mì thành khối tròn cao ở chính giữa đĩa đen. Xốt chan vừa phải, không để xốt loang ra viền đĩa. Trang trí lá húng tây hoặc phô mai bào.',
    url: 'https://images.unsplash.com/photo--sbE6MDlEuM?auto=format&fit=crop&w=1200&q=80' },

  // Tác phong phục vụ
  { id: 'p10', category: 'service', title: 'Tác phong Nhân viên Phục vụ — Đồng phục & Thái độ',
    desc: 'Đồng phục thẳng nếp, tạp dề sạch, tóc gọn, nụ cười tự nhiên. Tư thế đứng thẳng — không khoanh tay, không bỏ tay vào túi khi phục vụ.',
    url: 'https://images.unsplash.com/photo-rFrAzvhM9QI?auto=format&fit=crop&w=1200&q=80' },
  { id: 'p11', category: 'service', title: 'Kỹ thuật bưng bê — Khay & Đĩa đúng chuẩn Fine Dining',
    desc: 'Dùng khay khi mang nhiều đĩa/ly. Đặt đĩa từ bên phải khách, dọn đĩa từ bên phải. Không để âm thanh khi đặt xuống bàn.',
    url: 'https://images.unsplash.com/photo-H9q_XcRpHNo?auto=format&fit=crop&w=1200&q=80' },
];
