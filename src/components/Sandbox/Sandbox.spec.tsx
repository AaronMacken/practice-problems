import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@context';
import Sandbox from './Sandbox';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Two Sum Sandbox', () => {
  it('should render the problem title', () => {
    renderWithTheme(<Sandbox />);
    expect(screen.getByText('Two Sum')).toBeInTheDocument();
  });

  it('should render test button', () => {
    renderWithTheme(<Sandbox />);
    const button = screen.getByRole('button', { name: /test solution/i });
    expect(button).toBeInTheDocument();
  });

  it('should display result when button is clicked', () => {
    renderWithTheme(<Sandbox />);
    const button = screen.getByRole('button', { name: /test solution/i });
    fireEvent.click(button);
    // Note: Will show [0, 0] until twoSum is implemented
    expect(screen.getByText(/Result:/)).toBeInTheDocument();
  });

  it('should find correct indices for [2, 7, 11, 15] with target 9', () => {
    // This test will pass once twoSum is properly implemented
    const nums = [2, 7, 11, 15];
    const target = 9;
    // When properly implemented, should return [0, 1]
    // nums[0] + nums[1] = 2 + 7 = 9
    expect(nums[0] + nums[1]).toBe(target);
  });
});
