import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form.astro';

describe('Form integration', () => {
  beforeEach(() => {
    // Mock showToast globally
    window.showToast = jest.fn();
    // Mock fetch globally
    global.fetch = jest.fn();
  });

  it('submits the form and calls API successfully', async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: true });

    render(Form, {
      inputs: [
        { name: 'name', label: 'Name' },
        { name: 'subject', label: 'Subject' },
      ],
      textarea: { name: 'message', label: 'Message' },
      button: 'Send',
    });

    await userEvent.type(screen.getByLabelText('Name'), 'John');
    await userEvent.type(screen.getByLabelText('Subject'), 'Hello');
    await userEvent.type(screen.getByLabelText('Message'), 'This is a message');

    await userEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(fetch).toHaveBeenCalledWith('/api/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'John',
        subject: 'Hello',
        message: 'This is a message',
      }),
    });

    expect(window.showToast).toHaveBeenCalledWith('success', 'Email sent successfully!');

    // Optional: check that inputs are cleared
    expect((screen.getByLabelText('Name') as HTMLInputElement).value).toBe('');
  });

  it('shows error toast if API fails', async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: false });

    render(Form, {
      inputs: [{ name: 'name', label: 'Name' }],
      textarea: { name: 'message', label: 'Message' },
      button: 'Send',
    });

    await userEvent.type(screen.getByLabelText('Name'), 'John');
    await userEvent.type(screen.getByLabelText('Message'), 'Hello');
    await userEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(window.showToast).toHaveBeenCalledWith('error', 'Error sending email, try again later!');
  });
});