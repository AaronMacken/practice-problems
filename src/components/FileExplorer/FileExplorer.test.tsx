import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FileExplorer from './FileExplorer';

describe('FileExplorer', () => {
  it('renders correctly', () => {
    render(<FileExplorer />);

    const button = screen.getByRole('button', { name: /root/i });

    expect(button).toBeInTheDocument();
  });

  it('should render file explorer nodes when root is expanded', async () => {
    const user = userEvent.setup();
    render(<FileExplorer />);

    const button = screen.getByRole('button', { name: /root/i });

    await user.click(button);

    expect(screen.getByRole('button', { name: /v root/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /documents/i })).toBeInTheDocument();
  });
});
