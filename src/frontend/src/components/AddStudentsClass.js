import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { postRegisterClass } from '../services/registerClassService';
import { fetchAllStudents, fetchStudentsNotInClass, fetchStudent } from '../services/studentsService';
import { fetchRecentClass } from '../services/classService';
import { useProgram } from '../contexts/ProgramContext';

const TitleClass = styled.h2`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    font-size: 20px;
`;

const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PopupContent = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 500px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const CheckboxLabel = styled.label`
    font-family: 'Be Vietnam Pro', sans-serif;
    margin-bottom: 5px;
`;

const CheckboxInput = styled.input`
    margin-right: 5px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;

const SaveButton = styled.button`
    padding: 10px 20px;
    font-size: 12px;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: white;
    background-color: #2F3192;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #23256E;
    }
`;

const BackButton = styled.button`
    padding: 10px 20px;
    font-size: 12px;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: #999999;
    background-color: white;
    border: 1.25px solid #999999;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #E8E8E8;
    }
`;

const SearchBar = styled.input`
    background-color: #ffffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    height: 40px; /* Ajuste a altura conforme necessário */
    width: 100%;
    padding: 0 10px;
    border: 1px solid #cccccc;
    border-radius: 20px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    outline: none;

    &::placeholder {
        color: #999999;
        font-style: italic;
    }
`;

const AddStudentsClass = ({ onClose }) => {

    const [students, setStudents] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [recentClassId, setRecentClassId] = useState(null);
    const { selectedClassId, workshopId } = useProgram();
    const [recentClassIdUsed, setRecentClassIdUsed] = useState(false);
    const [selectedClassIdUsed, setSelectedClassIdUsed] = useState(false);
    const [ setSearchTerm] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);
    const {setShouldUpdateStudentsClass} = useProgram();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedClassIdUsed === false) {
                    const notInClassResponse = await fetchStudentsNotInClass(selectedClassId);
                    const studentIdsNotInClass = notInClassResponse.map(item => item.fk_id_aluno);
                    const studentsData = await fetchStudent(studentIdsNotInClass);
                    setSelectedClassIdUsed(true);
                    setStudents(studentsData);
                    setFilteredStudents(studentsData);
                }
                else {
                    const studentsData = await fetchAllStudents();
                    setStudents(studentsData);
                    setFilteredStudents(studentsData);
                }
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        };
        const fetchClass = async () => {
            try {
                const data = await fetchRecentClass();
                if (data.length > 0) {
                    setRecentClassId(data[0].id_turma);
                }
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        };
    
        fetchData();
        fetchClass();
    }, [selectedClassIdUsed, selectedClassId]);
    
    
    const handleCheckboxChange = (studentId) => {
        if (selectedStudents.includes(studentId)) {
            setSelectedStudents(selectedStudents.filter(id => id !== studentId));
        } else {
            setSelectedStudents([...selectedStudents, studentId]);
        }
    };

    const handleSubmitRecentClassId = async (e) => {
        e.preventDefault();
        try {
            await postRegisterClass(recentClassId, selectedStudents, workshopId);
            // Lógica adicional após a adição dos professores, se necessário
            onClose(); // Fechar o popup ou realizar outra ação após o salvamento
            setRecentClassIdUsed(true);
        } catch (error) {
            console.error('Error while adding students to class:', error);
            // Tratar o erro, exibir uma mensagem de erro, etc.
        }
    };

    const handleSubmitSelectedClassId = async (e) => {
        e.preventDefault();
        try {
            await postRegisterClass(selectedClassId, selectedStudents);
            setShouldUpdateStudentsClass(true);
            // Lógica adicional após a adição dos professores, se necessário
            onClose(); // Fechar o popup ou realizar outra ação após o salvamento
        } catch (error) {
            console.error('Error while adding students to class:', error);
            // Tratar o erro, exibir uma mensagem de erro, etc.
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!recentClassIdUsed) {
                await handleSubmitSelectedClassId(e);
            } else {
                await handleSubmitRecentClassId(e);
            }
        } catch (error) {
            console.error('Error while adding students to class:', error);
            // Tratar o erro, exibir uma mensagem de erro, etc.
        }
    };

    const handleSearchChange = (searchTerm) => {
        setSearchTerm(searchTerm);
        const filtered = students.filter((student) =>
            student.nome.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredStudents(filtered);
    };

    filteredStudents.sort((a, b) => a.nome.localeCompare(b.nome));

    
    
    return (
        <PopupOverlay>
            <PopupContent>
                <TitleClass>Adicionar estudante na turma</TitleClass>
                <SearchBar
                    type="text"
                    placeholder="Pesquisar alunos"
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
                <Form onSubmit={handleSubmit}>
                    <CheckboxContainer>
                            {filteredStudents.map(student => (
                                <CheckboxLabel key={student.id_aluno}>
                                    <CheckboxInput
                                        type="checkbox"
                                        value={student.id_aluno}
                                        onChange={() => handleCheckboxChange(student.id_aluno)}
                                    />
                                    {student.nome}
                                </CheckboxLabel>
                            ))}
                    </CheckboxContainer>
                    <ButtonContainer>
                        <BackButton onClick={onClose}>Voltar</BackButton>
                        <SaveButton type="submit">Salvar</SaveButton>
                    </ButtonContainer>
                </Form>
            </PopupContent>
        </PopupOverlay>
    );
};
export default AddStudentsClass;
