import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import TeacherDetailsPopup from '../components/TeacherDetailsPopup';
import AddTeacherPopup from '../components/AddTeacherPopUp';
import { fetchAllTeachers } from '../services/teachersService';
import { useProgram } from '../contexts/ProgramContext';

const ContainerSelectTeachers = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-self: flex-end;
`;
const AddTeacherButton = styled.button`
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
const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    width: 100%;
    height: 100vh;
    position: fixed;
`;
const MainContent = styled.div`
    flex-grow: 1; // Ocupa o espaço restante da tela
    width: calc(100% - 250px); // Subtrai a largura estimada da Sidebar
    margin-left: 250px; // Adiciona uma margem esquerda para não sobrepor a Sidebar
    padding-top: 20px; // Espaço para a barra superior
    display: flex;
    flex-direction: column;
    height: 100%;
`;
const TeachersContainer = styled.div`
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
const TeacherList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 20px;
    width: 90%;
    max-height: 50vh;
    overflow-y: auto;
`;
const TeacherItem = styled.li`
    display: flex;
    justify-content: space-between;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 14px;
    align-items: center;
    padding: 10px 20px;
    margin: 10px 0;
    background-color: ${({ active }) => (active ? '#E8E8E8' : '#fff')};
    border-radius: 30px;
    border: 1px solid black;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #F3F3F3;
    }
`;
const Teachers = ({ handleTeacherItemClick }) => {
    const [teachers, setTeachers] = useState([]);
    const [selectedTeacherId, setSelectedTeacherId] = useState(null);
    const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const {setPopUpTeacherId} = useProgram();

    useEffect(() => {
        async function fetchTeachersData() {
            try {
                const teachersData = await fetchAllTeachers();
                setTeachers(teachersData);
            } catch (error) {
                console.error('An error occurred while fetching data from the API:', error);
            }
        }
        fetchTeachersData();
    }, []);
    const handleTeacherItemClickInternal = (teacherId) => {
        setPopUpTeacherId(teacherId);
        setSelectedTeacherId(teacherId);
        setIsPopupVisible(true);
    };
    const handleAddTeacherClick = () => {
        setIsAddPopupVisible(true);
    };
    const handleUpdateTeachersList = async () => {
        try {
            const teachersData = await fetchAllTeachers();
            setTeachers(teachersData);
        } catch (error) {
            console.error('An error occurred while fetching updated data from the API:', error);
        }
    };
    return (
        <StyledBody>
            <Sidebar />
            <MainContent>
                <TeachersContainer>
                    <ContainerSelectTeachers>
                        <ClassName>Professores(as) da ONG</ClassName>
                            <TeacherList>
                                {Array.isArray(teachers) &&
                                    teachers.map((teacher, index) => (
                                        <TeacherItem
                                            key={index}
                                            active={selectedTeacherId === teacher.id_professor}
                                            onClick={() =>
                                                handleTeacherItemClickInternal(teacher.id_professor)
                                            }
                                        >
                                            {teacher.nome}
                                        </TeacherItem>
                                    ))}
                            </TeacherList>
                            <AddTeacherButton onClick={handleAddTeacherClick}>
                                Adicionar professor(a)
                            </AddTeacherButton>
                            {isAddPopupVisible && (
                                <AddTeacherPopup
                                    onClose={() => setIsAddPopupVisible(false)}
                                    handleUpdateTeachersList={handleUpdateTeachersList}
                                />
                            )}
                            {isPopupVisible && (
                                <TeacherDetailsPopup
                                    onClose={() => setIsPopupVisible(false)}
                                    teacher={teachers.find(
                                        (teacher) => teacher.id_professor === selectedTeacherId
                                    )}
                                />
                            )}
                    </ContainerSelectTeachers>
                </TeachersContainer>
            </MainContent>
            <Footer />
        </StyledBody>
    );
};
export default Teachers;