export const CONFIG = {
  GOOGLE_SHEET_API_URL: "https://script.google.com/macros/s/AKfycbx-Dn51isWZH3kN6YSNPGnVg1Hm2zSiLAkdM4dHWbsBTpVPhQQi9ajWWOxa8rVQyONEHw/exec",
  VIDEO_LINKS: {
    pl1: "https://www.youtube.com/embed?listType=playlist&list=PLcl4ytX7-VapIt6KqiUwWtaBfy15kGU0R",
    pl2: "https://www.youtube.com/embed?listType=playlist&list=PLcl4ytX7-VaoyBTfV9mssIyCyVkS4nrTR",
    pl3: "https://www.youtube.com/embed?listType=playlist&list=PLcl4ytX7-VaoOr476zHMNe71urWYVp9Tp",
  },
};

export function removeAccents(str) {
  return (str || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}
