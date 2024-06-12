import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SelectStudents from './SelectStudents';
import AddStudentsClass from '../components/AddStudentsClass';

// Mock da função fetchStudentsFromClass para simular a resposta da API
jest.mock('../services/studentsService', () => ({
  fetchStudentsFromClass: jest.fn(() => Promise.resolve([
    { id_aluno: 1, nome: 'John Doe' },
    { id_aluno: 2, nome: 'Jane Smith' },
  ])),
}));

describe('Integration Test for SelectStudents and AddStudentsClass components', () => {
  test('adds a student to the class and updates the list', async () => {
    const { getByText, getByPlaceholderText } = render(<SelectStudents />);

    // Espera até que a lista de alunos seja carregada
    await waitFor(() => getByText('John Doe'));

    // Clique no botão "Adicionar aluno"
    const addStudentButton = getByText('Adicionar aluno');
    fireEvent.click(addStudentButton);

    // Verifica se o pop-up para adicionar alunos está visível
    const searchInput = getByPlaceholderText('Pesquisar alunos');
    expect(searchInput).toBeInTheDocument();

    // Pesquisa por um aluno no pop-up
    fireEvent.change(searchInput, { target: { value: 'John' } });

    // Marca o checkbox do aluno "John Doe"
    const johnCheckbox = getByText('John Doe');
    fireEvent.click(johnCheckbox);

    // Clique no botão "Salvar" no pop-up
    const saveButton = getByText('Salvar');
    fireEvent.click(saveButton);

    // Verifica se o pop-up foi fechado após salvar
    await waitFor(() => {
      expect(queryByPlaceholderText('Pesquisar alunos')).not.toBeInTheDocument();
    });

    // Verifica se a lista de alunos na turma foi atualizada
    const johnInClass = getByText('John Doe');
    expect(johnInClass).toBeInTheDocument();
  });
});
