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
  { id: 'v1', category: 'Nghiệp vụ Bàn',  title: 'Hướng dẫn Setup Bàn Âu tiêu chuẩn 2 người',                       duration: '03:15', link: CONFIG.VIDEO_LINKS.v1, iconBg: 'bg-stone-100 text-stone-600' },
  { id: 'v2', category: 'Nghiệp vụ Bàn',  title: 'Quy trình Chào đón khách & Dẫn bàn (Sequence of Service)',          duration: '02:45', link: CONFIG.VIDEO_LINKS.v2, iconBg: 'bg-[#00a2d5]/10 text-[#00a2d5]' },
  { id: 'v3', category: 'Nghiệp vụ Bàn',  title: 'Cách bưng bê dọn đĩa chuẩn cao cấp không gây tiếng ồn',             duration: '01:50', link: CONFIG.VIDEO_LINKS.v3, iconBg: 'bg-blue-50 text-blue-600' },
  { id: 'v4', category: 'Kiến thức Món',  title: 'Phân biệt thực tế 6 cấp độ chín của Steak Bò',                      duration: '04:20', link: CONFIG.VIDEO_LINKS.v4, iconBg: 'bg-indigo-50 text-indigo-600' },
  { id: 'v5', category: 'Kỹ năng Mềm',   title: 'Phương pháp L.E.A.R.N trong giải quyết khiếu nại khách hàng',        duration: '05:10', link: CONFIG.VIDEO_LINKS.v5, iconBg: 'bg-emerald-50 text-emerald-600' },
];

export const PHOTO_GALLERY = [
  { id: 'p1', category: 'rules', title: 'Sơ đồ định vị Sảnh A, B, C và vị trí Quầy Thu Ngân',    desc: 'Bản đồ định vị bàn khách, lối đi sảnh và vị trí WC khu vực trong cùng.',                              url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80' },
  { id: 'p2', category: 'setup', title: 'Quy chuẩn Setup dao nĩa đối xứng khoảng cách 2cm',       desc: 'Sắp đặt dĩa share ở chính giữa, dao đặt bên phải lưỡi quay vào trong, nĩa bên trái.',               url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80' },
  { id: 'p3', category: 'steak', title: 'Màu sắc lát cắt của 6 cấp độ chín Steak thực tế',        desc: 'Ảnh chụp mặt cắt miếng thịt từ Rare (đỏ tươi 75%) đến Medium Well (hồng nhạt ở tâm) và Well Done.', url: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=80' },
  { id: 'p4', category: 'menu',  title: 'Cách viết phiếu ghi Order bếp chuẩn hóa 2026',           desc: 'Ghi rõ số bàn, số khách (pax), độ chín viết tắt bằng mực đỏ, ghi chú nước sốt chính xác.',          url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80' },
  { id: 'p5', category: 'rules', title: 'Quy chuẩn Grooming & Tác phong đồng phục Nam/Nữ',        desc: 'Hướng dẫn mang tạp dề thẳng nếp, đeo bảng tên ngực trái và quy định kẹp tóc gọn gàng.',             url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80' },
];
