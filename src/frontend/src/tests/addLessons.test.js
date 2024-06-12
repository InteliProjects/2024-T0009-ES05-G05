import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AddLessons from './AddLessons';

// Mocking the fetch API to simulate fetching data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, name: 'Student 1', turmaId: 1 },
        { id: 2, name: 'Student 2', turmaId: 2 },
      ]),
  })
);

describe('AddLessons Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<AddLessons />);
  });

  it('displays lesson details', async () => {
    const { getByText } = render(<AddLessons />);
    
    // Simulate data fetching
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));

    // Check if lesson details are displayed
    expect(getByText('Turma:')).toBeInTheDocument();
    expect(getByText('Turma 1')).toBeInTheDocument();
    expect(getByText('Data: 2024-03-16')).toBeInTheDocument();
  });

  it('toggles presence for students', async () => {
    const { getByText, getByAltText } = render(<AddLessons />);
    
    // Simulate data fetching
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));

    // Check if student checkboxes are displayed
    expect(getByText('Student 1')).toBeInTheDocument();
    expect(getByText('Student 2')).toBeInTheDocument();

    // Toggle presence for Student 1
    fireEvent.click(getByAltText('Check'));
    expect(getByAltText('Check')).toBeInTheDocument();
    
    // Check if presence is toggled correctly
    expect(getByText('Student 1')).toHaveStyle('opacity: 1');
    expect(getByText('Student 2')).toHaveStyle('opacity: 0');
  });

  it('opens and closes the success popup', async () => {
    const { getByText, queryByText } = render(<AddLessons />);
    
    // Simulate data fetching
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));

    // Click the save button
    fireEvent.click(getByText('Salvar'));
    
    // Check if popup is opened
    expect(getByText('A presença foi salva com sucesso!')).toBeInTheDocument();

    // Click the OK button in the popup
    fireEvent.click(getByText('OK'));

    // Check if popup is closed
    expect(queryByText('A presença foi salva com sucesso!')).toBeNull();
  });
});
