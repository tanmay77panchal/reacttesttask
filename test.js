import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './src/components/Form';
import "@testing-library/jest-dom";

describe('Form Component', () => {
    it('renders form elements correctly', () => {
        const { getByLabelText, getByText } = render(<Form />);
        
        // Test form elements
        expect(getByLabelText('firstName')).toBeInTheDocument();
        expect(getByLabelText('lastName')).toBeInTheDocument();
        expect(getByLabelText('email')).toBeInTheDocument();
        expect(getByLabelText('address1')).toBeInTheDocument();
        expect(getByLabelText('city')).toBeInTheDocument();
        expect(getByLabelText('state')).toBeInTheDocument();
        expect(getByLabelText('zip')).toBeInTheDocument();
        expect(getByLabelText('phone')).toBeInTheDocument();
        expect(getByLabelText('jobTitle')).toBeInTheDocument();
        expect(getByLabelText('reason')).toBeInTheDocument();
        // Add similar assertions for other form elements
    });
    
});
    it('submits form with valid data', () => {
        const { getByLabelText, getByText } = render(<Form />);


        // Mock user input
        fireEvent.change(getByLabelText('firstName'), { target: { value: 'John' } });
        fireEvent.change(getByLabelText('lastName'), { target: { value: 'Doe' } });
        fireEvent.change(getByLabelText('email'), { target: { value: 'Doe@email.com' } });
        fireEvent.change(getByLabelText('address1'), { target: { value: 'address1 here' } });
        fireEvent.change(getByLabelText('city'), { target: { value: 'newstate' } });
        fireEvent.change(getByLabelText('state'), { target: { value: 'hello' } });
        fireEvent.change(getByLabelText('zip'), { target: { value: '12345' } });
        fireEvent.change(getByLabelText('phone'), { target: { value: '1234567890' } });
        fireEvent.change(getByLabelText('jobTitle'), { target: { value: 'Engineer - mid level' } });
        fireEvent.change(getByLabelText('reason'), { target: { value: 'besause i want to work here' } });

        // Add similar fireEvent calls for other form inputs

        // Submit the form
        fireEvent.click(getByText('Submit'));

        // Add assertions based on your expected behavior after form submission
        // For example, check if the dialog is displayed
        expect(getByText('Thank You')).toBeInTheDocument();
    });

    // Add more test cases as needed
