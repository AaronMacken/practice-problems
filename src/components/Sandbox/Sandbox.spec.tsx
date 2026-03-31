import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@context';
import Sandbox from './Sandbox';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Sandbox', () => {
  it('should render correctly', () => {
    renderWithTheme(<Sandbox />);

    expect(screen.getByText('practice problems')).toBeInTheDocument();
  });
});
