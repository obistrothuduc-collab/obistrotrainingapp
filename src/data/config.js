export const CONFIG = {
  GOOGLE_SHEET_API_URL: "https://script.google.com/macros/s/AKfycbx-Dn51isWZH3kN6YSNPGnVg1Hm2zSiLAkdM4dHWbsBTpVPhQQi9ajWWOxa8rVQyONEHw/exec",
  VIDEO_LINKS: {
    v1: "https://www.youtube.com/embed/a372j2ZXdBU",
    v2: "https://www.youtube.com/embed/a372j2ZXdBU",
    v3: "https://www.youtube.com/embed/a372j2ZXdBU",
    v4: "https://www.youtube.com/embed/a372j2ZXdBU",
    v5: "https://www.youtube.com/embed/a372j2ZXdBU",
  },
};

export function removeAccents(str) {
  return (str || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}
