import React from 'react';
import ReactDOM from 'react-dom';
import { render, queryByTestId  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
  const { queryByTestId, getByTestId} = render(<App/>);
  queryByTestId('app-h1');
const h1 = getByTestId('app-h1')
  expect(h1).not.toHaveClass('header')
});

describe('arrayContaining', () => {
  const expected = ['Alex Morgan', 'Marta'];
  it('matches even if received contains additional elements', () => {
    expect(['Alex Morgan', 'Marta', 'Megan Rapinoe']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Alex Morgan', 'Bob']).not.toEqual(expect.arrayContaining(expected));
  });
});

// test('h1 is displaying properly', () => {
//   const { queryByTestId } = render(<App/>);
//   queryByTestId('does-not-exist');

//   expect(
//     queryByTestId(document.documentElement, 'does-not-exist'),
//   ).not.toBeInTheDocument()
// });

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