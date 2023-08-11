import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, { getSum } from './App';

// Kiểm tra hàm getSum
test('getSum function returns correct sum', () => {
  expect(getSum(1, 2)).toBe(3)
  expect(getSum(-1, 2)).toBe(1)
  expect(getSum(0, 0)).toBe(0)
})

// Kiểm tra các component có được render không
test('renders input and button elements', () => {
  const { getByTestId } = render(<App />)

  fireEvent.change(getByTestId('value-one-input'), { target: { value: '1' } })
  fireEvent.change(getByTestId('value-two-input'), { target: { value: '2' } })
  fireEvent.click(getByTestId('button-add'));

  expect(getByTestId('result')).toHaveTextContent('Result: 3')
})