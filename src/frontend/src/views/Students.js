// Importações necessárias
import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer'; // Importa o componente Footer
import Sidebar from '../components/Sidebar'; // Importa o componente Sidebar
import StudentDetailsPopup from '../components/StudentDetailsPopup';
import AddStudentPopup from '../components/AddStudentPopUp'; // Importa o componente AddStudentPopup
import { useEffect } from 'react';
import { fetchStudent, fetchAllStudents } from '../services/studentsService'; // Importa a função fetchStudentsFromClass
import { useProgram } from '../contexts/ProgramContext'; // Importa o contexto ProgramContext

const ContainerSelectStudents = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const ContainerSearchAndOrder = styled.div`
    display: flex;
    justify-content: center;
    width: 89%;
`;

const ContainerSearchBar = styled.div`
    display: flex;
    column-direction: row;
    width: 100%;
    margin-top: 2%;
    margin-bottom: -2%;
`;

const SearchBar = styled.input`
    background-color: #fffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-color: #fff;
    height: 12%;
    background-color: white;
    border-radius: 100px;
    border: 1px;
    width: 100%;
    padding: 14px 40px 14px 14px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    &::placeholder {
        color: #999;
        font-style: bold;
        border-radius: 100px;
    }
`;

const StudentList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 20px;
    width: 90%;
    max-height: 50vh;
    overflow-y: auto;
`;

const StudentItem = styled.li`
    display: flex;
    justify-content: space-between;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    align-items: center;
    padding: 10px 20px;
    margin: 10px 0;
    background-color: ${({ active }) => (active ? '#e8e8e8' : '#fff')};
    border-radius: 100px;
    border: 1.25px solid black;
    cursor: pointer;
`;

const AddStudentButton = styled.button`
    align-self: flex-end;
    background-color: #2F3192;
    color: white;
    font-family: 'Be Vietnam Pro', sans-serif;
    border: none;
    border-radius: 100px;
    padding: 1em 2em;
    font-size: 1vw;
    cursor: pointer;
    outline: none;
    margin: 0 6%;
    transition: background-color 0.3s;

    &:hover {
        background-color: #23256E;
    }
`;

// Estilo para o corpo da página
const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    width: 100%;
    height: 100vh;
    position: fixed;
`;

// Estilo para o conteúdo principal da página
const MainContent = styled.div`
  flex-grow: 1; // Ocupa o espaço restante da tela
  width: calc(100% - 250px); // Subtrai a largura estimada da Sidebar
  margin-left: 250px; // Adiciona uma margem esquerda para não sobrepor a Sidebar
  padding-top: 20px; // Espaço para a barra superior
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// Estilo para o container dos alunos
const StudentsContainer = styled.div`
  width: 100%; // Ajustado para ocupar a largura do MainContent
  max-width: 70vw; // Define a largura máxima para o container
  height: 75vh;
  padding: 20px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-bottom: 7%;
  margin-right: 4%;

`;

const ClassName = styled.h1`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 25px; 
    margin-left: 6%;
    display: flex;
    flex-direction: row;
    align-self: start;
`;

const Students = () => {
    const [students, setStudents] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { setPopUpStudentId } = useProgram(); 

    
    // Obtém a função setPopUpStudentId do contexto do programa
    
    useEffect(() => {
        async function fetchStudentData() {
            try {
                const studentData = await fetchAllStudents();
                if (Array.isArray(studentData)) {
                    setStudents(studentData);
                } else {
                    console.error('Invalid student data:', studentData);
                }
            } catch (error) {
                console.error('Error fetching student', error);
            }
        }
        fetchStudentData();

    }, []);
    
    const handleStudentItemClickInternal = (studentId) => {
        setSelectedStudentId(studentId); // Define o studentId selecionado
        setPopUpStudentId(studentId); // Define o popUpStudentId no contexto do programa
        setIsPopupVisible(true); // Mostra o popup de detalhes do aluno
    };
    
    const handleAddStudentClick = () => {
        setIsAddPopupVisible(true); // Mostra o popup para adicionar aluno
    }

    const handleUpdateStudentsList = async () => {
        try {
            const studentsData = await fetchAllStudents();
            setStudents(studentsData);
        } catch (error) {
            console.error('An error occurred while fetching updated data from the API:', error);
        }
    };

    return (
        <StyledBody>
            <Sidebar />
                <MainContent>
                    <StudentsContainer>
                        <ContainerSelectStudents>
                            <ClassName>Aluno(as) da ONG </ClassName>
                                <ContainerSearchAndOrder>
                                    <ContainerSearchBar>
                                        <SearchBar placeholder="Pesquisar alunos" />
                                    </ContainerSearchBar>
                                </ContainerSearchAndOrder>
                                <StudentList>
                                    {Array.isArray(students) && students.map((student, index) => (
                                        <StudentItem
                                            key={index}
                                            active={selectedStudentId === student.id_aluno}
                                            onClick={() => handleStudentItemClickInternal(student.id_aluno)}
                                        >
                                            {student.nome} {/* Exibe o nome do aluno */}
                                        </StudentItem>
                                    ))}
                                </StudentList>
                                <AddStudentButton onClick={handleAddStudentClick}>
                                    Adicionar aluno(a)
                                </AddStudentButton>
                                {isAddPopupVisible && (
                                    <AddStudentPopup
                                        onClose={() => setIsAddPopupVisible(false)}
                                        handleUpdateStudentsList={handleUpdateStudentsList}
                                    />
                                )}
                                {isPopupVisible && (
                                    <StudentDetailsPopup
                                        onClose={() => setIsPopupVisible(false)}
                                        student={students.find(
                                            (student) => student.id_aluno === selectedStudentId
                                        )}
                                    />
                                )}
                        </ContainerSelectStudents>
                    </StudentsContainer>
                </MainContent>
            <Footer />
        </StyledBody>
    );
};

export default Students;