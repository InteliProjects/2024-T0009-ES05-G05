import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchStudentsFromClass, fetchStudent } from '../services/studentsService'; // Importa a função fetchStudentsFromClass
import { useNavigate } from 'react-router-dom';
import DropDown from "../components/DropDown";
import { useProgram } from '../contexts/ProgramContext';
import Loading from '../components/Loading';
import AddTeacherPopup from '../components/AddTeacherPopUp';    
import AddStudentsClass from '../components/AddStudentsClass';

const ContainerSelectStudents = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-self: flex-end;
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

const Filter = styled.div`
    background-color: #fffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-color: #fff;
    height: 12%;
    width: 20%;
    margin-left: 1%;
`;

const StudentList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 20px;
    width: 90%;
    max-height: 32vh;
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

const SelectStudents = ({ handleStudentItemClick }) => {
    const [students, setStudents] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { selectedClassId } = useProgram(); // Desestrutura o selectedClassId do contexto ProgramContext
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);
    const { shouldUpdateStudentsClass, setShouldUpdateStudentsClass } = useProgram(); // Desestrutura o setShouldUpdateStudents do contexto ProgramContext


    useEffect(() => {
        fetchData();
        
    }, [selectedClassId]);

    const fetchData = async () => {
        try {
            const studentsData = await fetchStudentsFromClass(selectedClassId);
            console.log('Response from fetchStudentsFromClass:', studentsData);
    
            if (Array.isArray(studentsData)) {
                setStudents(studentsData);
                setFilteredStudents(studentsData); // Preenche a lista filtrada inicialmente
            } else {
                console.error('Invalid students data:', studentsData);
            }
        } catch (error) {
            console.error('Error fetching students', error);
        } finally {
            setLoading(false);
        }
    };
    
    const handleSearchChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);
    
        const filtered = students.filter((student) =>
            student.nome.toLowerCase().startsWith(searchTerm)
        );
        setFilteredStudents(filtered);
    };
    
    filteredStudents.sort((a, b) => a.nome.localeCompare(b.nome));

    
    
    const handleStudentItemClickInternal = (studentId) => {
        setSelectedStudentId(studentId);
        handleStudentItemClick(studentId);
    }
    const handleAddStudentClick = () => {
        setIsPopupVisible(true);
    }

    if (shouldUpdateStudentsClass) {
        fetchData();
        setShouldUpdateStudentsClass(false);
    }
    

    return (
        <ContainerSelectStudents>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <ContainerSearchAndOrder>
                        <ContainerSearchBar>
                        <SearchBar
                            placeholder="Pesquisar alunos"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        </ContainerSearchBar>
                    </ContainerSearchAndOrder>
                    <StudentList>
                        {Array.isArray(students) && filteredStudents.map((student, index) => (
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
                        Adicionar aluno
                    </AddStudentButton>
                    {isPopupVisible && (
                        <AddStudentsClass 
                            isVisible={isPopupVisible}
                            onClose={() => setIsPopupVisible(false)} 
                            studentsData={students} // Passando os dados dos alunos para o pop-up
                            popupText="Adicionar aluno" // Passando o texto para o pop-up
                        />
                    )}
                </>
            )}
        </ContainerSelectStudents>
    );
};

export default SelectStudents;
