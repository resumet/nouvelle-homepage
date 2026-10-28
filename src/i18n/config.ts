import { withBase } from '../utils/paths.ts';

export const locales = ['ko', 'en', 'zh-CN'] as const;
export type Locale = (typeof locales)[number];
export type Localized<T> = Record<Locale, T>;

export const localeMeta: Record<Locale, { label: string; shortLabel: string; prefix: string; htmlLang: string; ogLocale: string }> = {
  ko: { label: '한국어', shortLabel: 'KO', prefix: '', htmlLang: 'ko', ogLocale: 'ko_KR' },
  en: { label: 'English', shortLabel: 'EN', prefix: 'en', htmlLang: 'en', ogLocale: 'en_US' },
  'zh-CN': { label: '简体中文', shortLabel: '中文', prefix: 'zh-cn', htmlLang: 'zh-CN', ogLocale: 'zh_CN' },
};

export const publishedLocales: Locale[] = ['ko', 'en', 'zh-CN'];

export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = localeMeta[locale].prefix;
  return withBase(prefix ? `${prefix}/${clean}` : clean);
}

export function localeFromUrl(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'en') return 'en';
  if (segments[0] === 'zh-cn') return 'zh-CN';
  return 'ko';
}

export function contentPath(pathname: string): string {
  const clean = pathname.replace(import.meta.env.BASE_URL.replace(/\/$/, ''), '').replace(/^\/+|\/+$/g, '');
  const segments = clean.split('/').filter(Boolean);
  if (segments[0] === 'en' || segments[0] === 'zh-cn') segments.shift();
  return segments.length ? `${segments.join('/')}/` : '';
}

export function localized<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function imageAlt(image: { alt: string | Localized<string> }, locale: Locale): string {
  return typeof image.alt === 'string' ? image.alt : image.alt[locale];
}

export function localeFromRouteParam(value: string | undefined): Locale | null {
  if (value === 'en') return 'en';
  if (value === 'zh-cn') return 'zh-CN';
  return null;
}
