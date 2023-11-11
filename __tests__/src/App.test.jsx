import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import App from '/Users/Donahue/Documents/gits/ClusterFunk/src/App.jsx';
import 'react-router-dom';

describe('App', () => {
  test('renders App', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.debug();

    // check if App components renders headline
  });
});
