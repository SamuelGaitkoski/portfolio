import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Button from './Button.astro';
import { test, expect, beforeEach } from 'vitest';

let container: AstroContainer;

beforeEach(async () => {
  container = await AstroContainer.create();
});

test('renders a button element when type is provided', async () => {
  const html = await container.renderToString(Button, {
    props: {
      type: 'button',
      text: 'Click me',
    },
  });

  expect(html).toContain('<button');
  expect(html).toContain('Click me');
});

test('renders an anchor element when no type is provided', async () => {
  const html = await container.renderToString(Button, {
    props: {
      text: 'Go to link',
      target: '_blank',
    },
  });

  expect(html).toContain('<a');
  expect(html).toContain('Go to link');
  expect(html).toContain('target="_blank"');
  expect(html).toContain('rel="noopener noreferrer"');
});

test('applies correct variant class', async () => {
  const html = await container.renderToString(Button, {
    props: {
      type: 'button',
      text: 'Primary',
      variant: 'primary',
    },
  });

  expect(html).toContain('btn-primary');
});

test('renders icon if provided', async () => {
  const html = await container.renderToString(Button, {
    props: {
      type: 'button',
      text: 'With icon',
      icon: 'check',
    },
  });

  // Adjust depending on how your Icon component renders
  expect(html).toContain('Icon');
  expect(html).toContain('check');
});
