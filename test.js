// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Form from './src/components/Form';
// import "@testing-library/jest-dom";

// describe('Form Component', () => {
//     it('renders form elements correctly', () => {
//         const { getByLabelText, getByText } = render(<Form />);

//         // Test form elements
//         expect(getByLabelText('First name')).toBeInTheDocument();
//         expect(getByLabelText('Last name')).toBeInTheDocument();
//         // Add similar assertions for other form elements
//     });

//     it('submits form with valid data', () => {
//         const { getByLabelText, getByText } = render(<Form />);

//         // Mock user input
//         fireEvent.change(getByLabelText('First name'), { target: { value: 'John' } });
//         fireEvent.change(getByLabelText('Last name'), { target: { value: 'Doe' } });
//         // Add similar fireEvent calls for other form inputs

//         // Submit the form
//         fireEvent.click(getByText('Submit'));

//         // Add assertions based on your expected behavior after form submission
//         // For example, check if the dialog is displayed
//         expect(getByText('Thank You')).toBeInTheDocument();
//     });

//     // Add more test cases as needed
// });
