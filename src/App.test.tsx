import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render checkboxes', () => {
    const { container } = render(<App />);
    const selectAllLabel = screen.getByText(/Select all/i);
    const checkboxes = container.querySelectorAll('input');
    expect(selectAllLabel).toBeInTheDocument();
    expect(checkboxes.length).toBe(5);
  });

  it('should select all checkboxes when the first one is selected', () => {
    const { container } = render(<App />);
    const checkboxes = container.querySelectorAll('input');
    const selectAllInput = container.querySelector('input');
    expect(selectAllInput?.checked).toBeFalsy();
    selectAllInput?.click();
    expect([0, 1, 2, 3, 4].some(i => !checkboxes[i].checked)).toBeFalsy();
  });

  it('should unselect all checkboxes when the first one is unselected', () => {
    const { container } = render(<App />);
    const checkboxes = container.querySelectorAll('input');
    const selectAllInput = container.querySelector('input');
    selectAllInput?.click();
    expect(selectAllInput?.checked).toBeTruthy();
    selectAllInput?.click();
    expect([0, 1, 2, 3, 4].some(i => checkboxes[i].checked)).toBeFalsy();
  });

  it('should select the clicked checkbox', () => {
    const { container } = render(<App />);
    const checkboxes = container.querySelectorAll('input');
    expect(checkboxes[3]?.checked).toBeFalsy();
    checkboxes[3]?.click();
    expect(checkboxes[3]?.checked).toBeTruthy();
    expect(checkboxes[2]?.checked).toBeFalsy();
  });
});
