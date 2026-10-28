import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValidBookingUrl, bookingUrl, canBook } from '../src/data/booking.ts';

test('accepts only HTTPS Booking.com hotel pages', () => {
  assert.equal(isValidBookingUrl('https://www.booking.com/hotel/kr/verified-hotel.ko.html'), true);
  assert.equal(isValidBookingUrl('https://booking.com/hotel/kr/verified-hotel.html?lang=ko'), true);
});

test('rejects missing, insecure, generic, and impersonated reservation links', () => {
  for (const value of ['', 'not a url', 'javascript:alert(1)', 'http://www.booking.com/hotel/kr/test.html', 'https://www.booking.com/', 'https://www.booking.com/searchresults.html', 'https://www.booking.com.evil.example/hotel/test', 'https://evil.example/hotel/kr/test', 'https://user:password@booking.com/hotel/kr/test']) {
    assert.equal(isValidBookingUrl(value), false, value);
  }
});

test('booking state is derived from the single configured URL', () => {
  assert.equal(canBook, isValidBookingUrl(bookingUrl));
});
