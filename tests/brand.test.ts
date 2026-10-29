import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { brandCaption, hotel, hotelText, officialEnglishName, siteTitle, directionsText } from '../src/data/hotel.ts';

const legacyBrandPatterns = [
  /NOUVER HOTEL & SPA JONGNO/i,
  /Nouvelle Hotel and Spa Seoul Jongno/i,
  /HOTEL & SPA JONGNO/i,
];

test('uses the approved English brand in shared hotel data and map searches', () => {
  assert.equal(officialEnglishName, 'Nouvelle Hotel and Spa Jongro');
  assert.equal(siteTitle, officialEnglishName);
  assert.equal(hotel.englishName, officialEnglishName);
  assert.equal(brandCaption, 'HOTEL & SPA JONGRO');
  assert.equal(hotelText.en.name, officialEnglishName);
  assert.equal(hotelText['zh-CN'].name, officialEnglishName);
  assert.equal(hotelText.ko.name, '누베르 호텔 앤 스파 종로점');
  for (const copy of Object.values(directionsText)) assert.equal(copy.navigationQuery, officialEnglishName);
});

test('keeps PRD and README aligned with the approved brand', async () => {
  for (const path of ['PRD.md', 'README.md']) {
    const content = await readFile(path, 'utf8');
    assert.ok(content.includes(officialEnglishName), `${path}: official name`);
    for (const pattern of legacyBrandPatterns) assert.doesNotMatch(content, pattern, `${path}: legacy brand spelling`);
  }
});
