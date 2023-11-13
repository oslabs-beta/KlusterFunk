import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '@/component/Navbar.jsx';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach } from 'vitest';

describe('Navbar', () => {
  beforeEach(async () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  test('renders Navbar', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Team')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  // think this needs to be a part of integration test? don't know how to change state since
  // no event on this component to trigger the state change
  // test('renders Signout instead of login if user is no signed in', () => {});
});
