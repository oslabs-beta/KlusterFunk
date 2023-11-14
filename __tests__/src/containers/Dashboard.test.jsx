import { fireEvent, render, screen } from '@testing-library/react';
import Dashboard from '@/containers/Dashboard.jsx';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach } from 'vitest';
import request from 'supertest';

describe('Login', () => {
  beforeEach(async () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
  });
  describe('navbar', () => {
    test('navbar redners', () => {
      expect(screen.getByText('Blog')).toBeInTheDocument();
    });
  });
});
