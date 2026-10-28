// Set only the verified HTTPS Booking.com URL for this hotel.
export const bookingUrl: string = 'https://www.booking.com/hotel/kr/nouvelle-and-spa-seoul-jongro.ko.html';
export const bookingUrls = {
  ko: bookingUrl,
  en: 'https://www.booking.com/hotel/kr/nouvelle-and-spa-seoul-jongro.en-gb.html',
  'zh-CN': 'https://www.booking.com/hotel/kr/nouvelle-and-spa-seoul-jongro.zh-cn.html',
} as const;

export function isValidBookingUrl(value: string): boolean {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' &&
      (url.hostname === 'booking.com' || url.hostname === 'www.booking.com') &&
      url.pathname.startsWith('/hotel/') && !url.username && !url.password;
  } catch {
    return false;
  }
}

export type BookingLocale = keyof typeof bookingUrls;
export const bookingUrlForLocale = (locale: BookingLocale = 'ko'): string => bookingUrls[locale];
export const canBook = Object.values(bookingUrls).every(isValidBookingUrl);
