import { fireEvent, render, screen } from '@testing-library/react';
import Login from '/Users/Donahue/Documents/gits/ClusterFunk/src/containers/login.jsx';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { beforeEach } from 'vitest';
import { request } from 'supertest';

describe('Login', () => {
  beforeEach(async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });
  test('renders login', () => {
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('Warning appears if password and confirm password do not match', () => {
    // Locating the sign up button and clicking it
    const signUpButton = screen.getByRole('button', { name: 'Signup' });
    fireEvent.click(signUpButton);

    // Locating pw input and using fireEvent.change to put in pw value
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, { target: { value: 'sandwich' } });

    // Locating confirm pw input and using fireEvent.change to put in incorrect confirm pw value
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm password');
    fireEvent.change(confirmPasswordInput, { target: { value: 'sandwic' } });

    // Locating infoMatch message and confirming that a warning shows up
    const infoMatch = screen.getByRole('infoMatch');
    expect(infoMatch).toHaveTextContent('passwords do not match');
  });

  test('Login or Signup buttons send fetch request', () => {
    
  });
});
