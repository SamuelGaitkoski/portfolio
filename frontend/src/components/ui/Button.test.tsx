import { render, screen } from '@testing-library/react';
import Button from './Button.astro'; // Astro component

describe('Button.astro', () => {
  it('renders a button element when type is provided', () => {
    render(<Button type="button" text="Click me" />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders an anchor element when no type is provided', () => {
    render(<Button text="Go to link" target="_blank" />);
    const link = screen.getByRole('link', { name: /go to link/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies correct variant class', () => {
    render(<Button type="button" text="Primary" variant="primary" />);
    const button = screen.getByRole('button', { name: /primary/i });
    expect(button).toHaveClass('btn-primary');
  });

  it('renders icon if provided', () => {
    render(<Button type="button" text="With icon" icon="check" />);
    const icon = screen.getByRole('img', { hidden: true }); // depends on how Icon is rendered
    expect(icon).toBeInTheDocument();
  });
});
