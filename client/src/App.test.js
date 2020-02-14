import React from 'react';
import ReactDOM from 'react-dom';
import { render, getbyTestId  } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App is rendering properly', () => {
  render(<App />);
});

test('h1 is displaying properly', () => {
  const { getbyTestId } = render(<App/>);
  getbyTestId(/mike`'`s world cup sprint/i);
});

// test('form is rendering properly', () => {
//   const { getByLabelText } = render(<ContactForm/>);
//   getByLabelText(/first name/i);
//   getByLabelText(/last name/i);
//   getByLabelText(/email/i);
//   getByLabelText(/message/i);
// });


// <span data-testid="html-element"><span>Html Element</span></span>
// <svg data-testid="svg-element"></svg>
// expect(
//   queryByTestId(document.documentElement, 'html-element'),
// ).toBeInTheDocument()
// expect(
//   queryByTestId(document.documentElement, 'svg-element'),
// ).toBeInTheDocument()
// expect(
//   queryByTestId(document.documentElement, 'does-not-exist'),
// ).not.toBeInTheDocument()