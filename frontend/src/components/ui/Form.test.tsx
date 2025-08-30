import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Form from './Form.astro';
import { test, expect, beforeEach } from 'vitest';

let container: AstroContainer;

beforeEach(async () => {
  container = await AstroContainer.create();
});

test('Form renders with all fields', async () => {
  const html = await container.renderToString(Form, {
    inputs: [
      { name: 'name', label: 'Name' },
      { name: 'subject', label: 'Subject' },
    ],
    textarea: { name: 'message', label: 'Message' },
    button: 'Send',
  });

  expect(html).toContain('Name');
  expect(html).toContain('Subject');
  expect(html).toContain('Message');
  expect(html).toContain('Send');
});
