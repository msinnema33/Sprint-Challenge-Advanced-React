import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './Navigation';


test('h1 is displaying properly', () => {
    const { queryByTestId, getByTestId} = render(<Navigation/>);
    queryByTestId('nav-h1');

    const h1 = getByTestId('nav-h1')
  expect(h1).not.toHaveClass('navigation')


    // expect(
    //     queryByTestId(document.documentElement, 'Womens World Cup'),
    //   ).toBeInTheDocument()

  });

  test('Navigation is rendering properly', () => {
    render(<Navigation />);
  });

// const h1 = getByTestId('nav-h1')
//   expect(h1).not.toHaveClass('navigation')



// test('Navigation  is rendering properly', () => {
//     const { getByLabelText } = render(<Navigation/>);
//     getByLabelText(/first name/i);
//     getByLabelText(/last name/i);
//     getByLabelText(/email/i);
//     getByLabelText(/message/i);
// });

// test('add a new user', () =>{
//     const { getByLabelText, getByText } = render(<ContactForm/>);

//     const firstNameInput = getByLabelText(/first Name/i);

    
//     fireEvent.change(firstNameInput, {target: {value: "testing"}});

    
//     expect(firstNameInput.value).toBe("testing");

    // getByText(/submit/i);
// })