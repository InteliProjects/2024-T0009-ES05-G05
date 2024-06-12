import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SelectLessons from './SelectLessons';
import { fetchLessons as mockFetchLessons } from '../services/selectLessonsService'; // Importe a função fetchLessons mockada

jest.mock('../services/selectLessonsService'); // Mock da função fetchLessons

describe('SelectLessons component', () => {
    beforeEach(() => {
        mockFetchLessons.mockResolvedValueOnce([
            { id: 1, name: 'Dança Contemporânea', turmaId: 1 },
            { id: 2, name: 'Esporte Coletivo', turmaId: 2 },
            { id: 3, name: 'Cultura Regional', turmaId: 3 },
            { id: 4, name: 'Empreendedorismo Social', turmaId: 4 },
            { id: 5, name: 'Cursos Livres', turmaId: 5 },
        ]);
    });

    test('renders without errors', () => {
        render(<SelectLessons />);
        expect(screen.getByTestId('select-lessons')).toBeInTheDocument();
    });

    test('fetches lessons and updates state', async () => {
        render(<SelectLessons />);
        await waitFor(() => {
            expect(mockFetchLessons).toHaveBeenCalledTimes(1);
        });
        expect(screen.getByText('Dança Contemporânea')).toBeInTheDocument();
        expect(screen.getByText('Esporte Coletivo')).toBeInTheDocument();
        expect(screen.getByText('Cultura Regional')).toBeInTheDocument();
        expect(screen.getByText('Empreendedorismo Social')).toBeInTheDocument();
        expect(screen.getByText('Cursos Livres')).toBeInTheDocument();
    });

    test('changes state on filter selection', () => {
        render(<SelectLessons />);
        fireEvent.click(screen.getByText('Filtrar'));
        fireEvent.click(screen.getByText('mais antigo'));
        expect(screen.getByText('mais antigo')).toBeInTheDocument();
    });

    test('navigates on lesson item click', async () => {
        render(<SelectLessons />);
        await waitFor(() => {
            expect(mockFetchLessons).toHaveBeenCalledTimes(1);
        });
        fireEvent.click(screen.getByText('Dança Contemporânea'));
        expect(screen.getByText('Dança Contemporânea')).toBeInTheDocument();
    });
});
