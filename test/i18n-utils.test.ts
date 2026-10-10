import { describe, expect, it } from 'vitest';
import {
  getAlternateLinks,
  getLangFromUrl,
  getRouteFromUrl,
  useTranslatedPath,
  useTranslations,
} from '../src/i18n/utils';

describe('i18n utilities', () => {
  it('detects a supported language and falls back to the default language', () => {
    expect(getLangFromUrl(new URL('https://example.com/en/projects'))).toBe('en');
    expect(getLangFromUrl(new URL('https://example.com/projects'))).toBe('es');
    expect(getLangFromUrl(new URL('https://example.com/fr/projects'))).toBe('es');
  });

  it('returns translated values and falls back when a language is incomplete', () => {
    const translate = useTranslations('en');

    expect(translate('nav.home')).toBe('Home');
    expect(useTranslations('unknown')('nav.home')).toBe('Inicio');
  });

  it('builds paths with the selected language prefix', () => {
    expect(useTranslatedPath('es')('/projects')).toBe('/es/projects');
    expect(useTranslatedPath('en')('/projects')).toBe('/en/projects');
  });

  it('resolves canonical route names for localized URLs', () => {
    expect(getRouteFromUrl(new URL('https://example.com/es/projects'))).toBe(
      'projects',
    );
    expect(getRouteFromUrl(new URL('https://example.com/en/projects'))).toBe(
      'projects',
    );
    expect(getRouteFromUrl(new URL('https://example.com/'))).toBeUndefined();
  });

  it('generates alternate links for every configured language', () => {
    const links = getAlternateLinks(
      new URL('https://example.com/en/projects'),
      'https://example.com',
    );

    expect(links).toEqual([
      { lang: 'es', href: 'https://example.com/es/projects' },
      { lang: 'en', href: 'https://example.com/en/projects' },
    ]);
  });
});
