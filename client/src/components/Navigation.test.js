import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';


test('h1 is displaying properly', () => {
    const { getbyTestId } = render(<Navigation/>);
    getbyTestId('nav-h1');

    expect(
        queryByTestId(document.documentElement, 'nav-h1'),
      ).toBeInTheDocument()
  });







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