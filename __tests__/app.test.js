import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

import App from '../App';

afterEach(cleanup);

it('initial successful render', () => {
  const {getByTestId} = render(<App />);

  const counterElement = getByTestId('counter');
  const incrementButtonElement = getByTestId('increment');
  const decrementButtonElement = getByTestId('decrement');
  const resetButtonElement = getByTestId('reset');

  expect(counterElement.props.children).toBe('Counter: 0');
  expect(incrementButtonElement).toBeTruthy();
  expect(decrementButtonElement).toBeTruthy();
  expect(resetButtonElement).toBeTruthy();
});

it('counter turns 1 if increment button is pressed', () => {
  const {getByTestId} = render(<App />);
  const counterElement = getByTestId('counter');
  const incrementButtonElement = getByTestId('increment');

  fireEvent.press(incrementButtonElement);

  expect(counterElement.props.children).toBe('Counter: 1');
});

it('counter turns -1 if decrement button is pressed', () => {
  const {getByTestId} = render(<App />);
  const counterElement = getByTestId('counter');
  const decrementButtonElement = getByTestId('decrement');

  fireEvent.press(decrementButtonElement);

  expect(counterElement.props.children).toBe('Counter: -1');
});

it('counter turns 0 if reset button is pressed', () => {
  const {getByTestId} = render(<App />);
  const counterElement = getByTestId('counter');
  const incrementButtonElement = getByTestId('increment');
  const resetButtonElement = getByTestId('reset');

  fireEvent.press(incrementButtonElement);
  fireEvent.press(incrementButtonElement);
  fireEvent.press(incrementButtonElement);
  expect(counterElement.props.children).toBe('Counter: 3');

  fireEvent.press(resetButtonElement);
  expect(counterElement.props.children).toBe('Counter: 0');
});
