import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Button from '../src/components/shared/Button.astro';
import Header from '../src/components/shared/Header.astro';
import Input from '../src/components/shared/Input.astro';
import Hero from '../src/components/landingpage/Hero.astro';

const requestFor = (path: string) =>
  new Request(`https://example.com${path}`);

describe('frontend components', () => {
  it('renders the header with localized navigation and mobile menu controls', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Header, {
      request: requestFor('/en/'),
    });

    expect(html).toContain('href="/en/blog"');
    expect(html).toContain('>Home<');
    expect(html).toContain('id="mobile-menu-btn"');
    expect(html).toContain('id="mobile-menu"');
    expect(html).toContain('mobileMenuBtn?.addEventListener("click", openMenu)');
  });

  it('renders the hero content and its primary navigation links', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Hero, {
      request: requestFor('/es/'),
    });

    expect(html).toContain('Hola, mi nombre es');
    expect(html).toContain('Kevin Arauz.');
    expect(html).toContain('href="#projects"');
    expect(html).toContain('href="#contact"');
  });

  it('renders a required email input with the provided label and placeholder', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Input, {
      props: {
        id: 'email',
        label: 'Correo',
        type: 'email',
        placeholder: 'correo@ejemplo.com',
      },
    });

    expect(html).toContain('for="email"');
    expect(html).toContain('name="email"');
    expect(html).toContain('type="email"');
    expect(html).toContain('placeholder="correo@ejemplo.com"');
    expect(html).toContain('required');
    expect(html).not.toContain('data-toggle-password');
  });

  it('renders password visibility controls for password inputs', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Input, {
      props: {
        id: 'password',
        label: 'Contraseña',
        type: 'password',
        placeholder: '••••••••',
      },
    });

    expect(html).toContain('data-password-input');
    expect(html).toContain('data-toggle-password');
    expect(html).toContain('data-target="password"');
    expect(html).toContain('aria-label="Mostrar contraseña"');
    expect(html).toContain('input.type === "password"');
  });

  it('renders a submit button with its default and loading states', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Button, {
      props: {
        text: 'Iniciar sesión',
        loadingText: 'Validando...',
      },
    });

    expect(html).toContain('type="submit"');
    expect(html).toContain('data-submit-btn');
    expect(html).toContain('data-default-text="Iniciar sesión"');
    expect(html).toContain('data-loading-text="Validando..."');
    expect(html).toContain('data-btn-spinner');
  });
});
