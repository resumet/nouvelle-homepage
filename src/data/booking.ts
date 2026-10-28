// Set only the verified HTTPS Booking.com URL for this hotel.
export const bookingUrl: string = '';

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

export const canBook = isValidBookingUrl(bookingUrl);
