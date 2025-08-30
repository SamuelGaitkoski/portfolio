/// <reference types="vitest" />
import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Button from './Button.astro';

describe('Button.astro', () => {
  it('renders a button element when type is provided', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Button, {
      type: 'button',
      text: 'Click me',
    });

    expect(html).toContain('<button');
    expect(html).toContain('Click me');
  });

  it('renders an anchor element when no type is provided', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Button, {
      text: 'Go to link',
      target: '_blank',
    });

    expect(html).toContain('<a');
    expect(html).toContain('Go to link');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it('applies correct variant class', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Button, {
      type: 'button',
      text: 'Primary',
      variant: 'primary',
    });

    expect(html).toContain('btn-primary');
  });

  it('renders icon if provided', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Button, {
      type: 'button',
      text: 'With icon',
      icon: 'check',
    });

    expect(html).toContain('Icon');
    expect(html).toContain('check');
  });
});