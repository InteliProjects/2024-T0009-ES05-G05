import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate, useLocation } from 'react-router-dom';
import { useProgram } from '../contexts/ProgramContext';
import Workshop from './Workshop';
import { fetchClassesByWorkshopId } from '../services/workshopService';

// Mock do hook useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

// Mock do hook useProgram
jest.mock('../contexts/ProgramContext', () => ({
  useProgram: jest.fn(),
}));

// Mock da função fetchClassesByWorkshopId
jest.mock('../services/workshopService', () => ({
  fetchClassesByWorkshopId: jest.fn(),
}));

describe('Workshop component', () => {
  beforeEach(() => {
    // Reseta os mocks antes de cada teste
    jest.clearAllMocks();
  });

  test('renders workshop information and class cards', async () => {
    // Mock dos dados da oficina e das turmas
    const workshopId = 1;
    const workshopData = {
      workshopId,
      // Outros dados da oficina...
    };
    const classesData = [
      { id_turma: 1, nome: 'Turma A', horario: 'Segunda-feira 14h', dataInicio: '2024-04-01', dataFim: '2024-06-30' },
      { id_turma: 2, nome: 'Turma B', horario: 'Quarta-feira 10h', dataInicio: '2024-04-15', dataFim: '2024-07-15' },
    ];

    // Mock do retorno da função useProgram
    useProgram.mockReturnValueOnce({ workshopId });

    // Mock da função fetchClassesByWorkshopId para retornar os dados das turmas
    fetchClassesByWorkshopId.mockResolvedValueOnce(classesData);

    render(<Workshop />);

    // Verifica se os elementos da oficina são renderizados corretamente
    expect(screen.getByText(`Dados da Oficina de ${workshopId}`)).toBeInTheDocument();
    // Verifica se os cartões de turma são renderizados corretamente
    await waitFor(() => {
      expect(screen.getByText('Turma A')).toBeInTheDocument();
      expect(screen.getByText('Turma B')).toBeInTheDocument();
    });
  });

  test('navigates to home page when arrow left is clicked', async () => {
    // Mock do hook useNavigate
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    render(<Workshop />);

    // Clica na seta para a esquerda
    userEvent.click(screen.getByAltText('Arrow Left'));

    // Verifica se a navegação foi chamada corretamente
    expect(navigateMock).toHaveBeenCalledWith('/home');
  });

  // Adicione mais testes conforme necessário para outras funcionalidades do componente
});
