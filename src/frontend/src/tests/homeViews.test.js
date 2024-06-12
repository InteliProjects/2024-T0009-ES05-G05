import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';
import { ProgramProvider } from '../contexts/ProgramContext';

// Mocking the fetchOficinas function
jest.mock('../services/homeService', () => ({
  fetchOficinas: jest.fn(() =>
    Promise.resolve([
      { id_oficina: 1, nome_oficina: 'Oficina 1', categoria: 'Categoria 1' },
      { id_oficina: 2, nome_oficina: 'Oficina 2', categoria: 'Categoria 2' },
    ])
  ),
}));

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );
  });

  it('displays workshop cards', async () => {
    const { getByText } = render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );

    // Simulate data fetching
    await waitFor(() => expect(jest.fn()).toHaveBeenCalledTimes(1));

    // Check if workshop cards are displayed
    expect(getByText('Oficina 1')).toBeInTheDocument();
    expect(getByText('Oficina 2')).toBeInTheDocument();
  });

  it('opens the add workshop modal', async () => {
    const { getByText, getByTestId } = render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );

    // Simulate data fetching
    await waitFor(() => expect(jest.fn()).toHaveBeenCalledTimes(1));

    // Click the add button
    fireEvent.click(getByText('+'));

    // Check if modal is opened
    expect(getByTestId('add-oficina-modal')).toBeInTheDocument();
  });

  it('closes the add workshop modal', async () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <ProgramProvider>
        <Home />
      </ProgramProvider>
    );

    // Simulate data fetching
    await waitFor(() => expect(jest.fn()).toHaveBeenCalledTimes(1));

    // Click the add button
    fireEvent.click(getByText('+'));

    // Check if modal is opened
    expect(getByTestId('add-oficina-modal')).toBeInTheDocument();

    // Close the modal
    fireEvent.click(getByTestId('modal-close-button'));

    // Check if modal is closed
    expect(queryByTestId('add-oficina-modal')).toBeNull();
  });
});
