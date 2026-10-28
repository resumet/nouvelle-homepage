import { readFile } from 'node:fs/promises';
const report = JSON.parse(await readFile(process.argv[2] || 'artifacts/lighthouse-mobile.json', 'utf8'));
console.log(JSON.stringify({
  scores: Object.fromEntries(Object.entries(report.categories).map(([key, value]) => [key, Math.round(value.score * 100)])),
  metrics: Object.fromEntries(['first-contentful-paint', 'largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time'].map(key => [key, report.audits[key].displayValue])),
  failedAudits: Object.values(report.audits).filter(audit => audit.score !== null && audit.score < 0.9).map(audit => ({ id: audit.id, title: audit.title, value: audit.displayValue, details: audit.id === 'label-content-name-mismatch' ? audit.details?.items : undefined })),
}, null, 2));
