import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import edit from '../img/edit.png';
import calendar from '../img/calendar.png';
import check from '../img/check.png';
import nocheck from '../img/no-check.png';
import { useProgram } from '../contexts/ProgramContext';
import { fetchStudentsFromClass } from '../services/studentsService';
import { fetchLessonById } from '../services/lessonService';
import { postAttendanceListByIds } from '../services/attendanceListService';
import { fetchClassById } from '../services/classService';

// Define o estilo para o contêiner principal da página de adicionar aulas
const ContainerAddClass = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    align-self: flex-end; 
    flex-direction: column;
`;

// Define o estilo para o título da aula
const ClassTitle = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    flex-direction: row;
    align-self: flex-start;
`;

// Define o estilo para o nome da aula
const ClassName = styled.h1`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 18px; 
    margin-left: 6%;
    align-self: center;
`;

// Define o estilo para o ícone de edição
const Edit = styled.img`
    width: 1.2%;
    height: 2.4vh;
    align-self: flex-end; 
    margin-left: 2%;
    cursor: pointer;
    align-self: center;
`;

// Define o estilo para o contêiner da data da aula
const DateContainer = styled.div`
    display: flex;
    width: 100%;
    height: 6%;
    flex-direction: row;
    align-self: flex-start;
    margin-top: 1%;
`;

// Define o estilo para o ícone de calendário
const Calendar = styled.img`
    width: 1.2%;
    height: 2.4vh;
    margin-bottom: 0.5%;
    margin-left: 6%;
    align-self: center; 
`;

// Define o estilo para a data da aula
const Date = styled.h1`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px; 
    margin-left: 0.6%;
    align-self: center; 
`;

// Define o estilo para o contêiner da turma
const ClassContainer = styled.div`
    display: flex;
    width: 100%;
    height: 6%;
    flex-direction: row;
    align-self: flex-start;
`;

// Define o estilo para o título "Turma"
const Class = styled.h1`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    font-weight: 600;
    font-size: 12px; 
    margin-left: 6%;
`;

// Define o estilo para o horário da turma
const ClassTime = styled.h1`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px; 
    margin-left: 0.6%;
    font-weight: 500;
`;

// Define o estilo para o contêiner da lista de presença
const PresenceList = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    flex-direction: row;
    align-self: flex-start;
`;

// Define o estilo para o título "Lista de Presença"
const ListName = styled.h1`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    font-size: 18px; 
    margin-left: 6%;
`;

// Define o estilo para o contêiner dos estudantes
const StudentsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 45%;
    flex-direction: column;
    align-self: flex-start;
`;

const StudentDiv = styled.div`
    height: 5vh;
    width: 90%;
    background-color: white;
    border-radius: 100px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: 1%;
`;

// Define o estilo para o contêiner de rolagem dos estudantes
const ScrollableDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%; 
    overflow-y: auto; 
    justify-content: space-between;
    margin-right: 4%;

    scrollbar-width: thin;
    scrollbar-color: black white;    
`;

// Define o estilo para o nome do estudante
const StudentName = styled.h1`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px; 
    margin-left: 2%;
    font-weight: 500;
    font-color: #3C4043;
    width: 10%;
    margin-right: 80%;
`;

// Define o estilo para o ícone de check
const CheckIcon = styled.img`
    width: 15px;
    height: 15px;
`;

// Define o estilo para o ícone de check dentro do contêiner
const Check = styled(CheckIcon)`
    display: flex;
    align-self: center;
`;

// Define o estilo para o ícone de não check
const NoCheck = styled(CheckIcon)`
    display: flex;
    align-self: center;
`;

const RoundCheckbox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
  margin: 1%;
  align-self: center;
  
  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: black;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity:${props => props.checked ? '1' : '0'};
    transition : opacity .3s ease-in-out; 
  }
`;

// Define o valor padrão da propriedade checked como false
RoundCheckbox.defaultProps = {
    checked : false,
}

// Cria um componente que contém dois checkbox redondos
function TwoRoundCheckboxes({ student, isPresent, isAbsent, togglePresence }) {
    const handleClick = (isChecked) => {
        togglePresence(student.id_aluno, isChecked);
    };
    
    return (
        <StudentDiv>
            <StudentName>{student.nome}</StudentName>

            <Check src={check} alt="Check" />
            {isPresent}
            <RoundCheckbox
                onClick={() => handleClick(true)}
                checked={isPresent}
            />
            <NoCheck src={nocheck} alt="NoCheck" />
            {isAbsent}
            <RoundCheckbox
                onClick={() => handleClick(false)}
                checked={isAbsent}
            />
           
        </StudentDiv>
    );
}

// Define o estilo para o contêiner dos botões
const ButtomContainer = styled.div`
    display: flex;
    width: 100%;
    height: 12%;
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-end;
`;

// Define o estilo para o botão "Voltar"
const ButtonBack = styled.button`
  background-color: white;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 14px;
  color: black;
  border-radius: 100px;
  border: 1px solid black;
  cursor: pointer;
  width: 10%;
  height: 65%;
  align-self: center;
  margin-right: 2%;
  margin-top: 1%;
`;

// Define o estilo para o botão "Salvar"
const ButtonSave = styled.button`
  background-color: #2F3192;
  color: white;
  font-size: 14px;
  font-family: 'Be Vietnam Pro', sans-serif;
  border-radius: 100px;
  border: 1px solid black;
  cursor: pointer;
  width: 10%;
  height: 65%;
  align-self: center;
  margin-right: 2%;
  margin-top: 1%;
`;

// Define o estilo para o contêiner do popup
const PopupContainer = styled.div`
    display: ${props => (props.open ? 'flex' : 'none')};
    position: fixed;
    align-self: center;
    font-family: 'Be Vietnam Pro', sans-serif;
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    padding-top: 110px;
    padding-bottom: 100px;
    padding-left: 80px;
    padding-right: 80px;
    flex-direction: column;
    align-items: center;
    z-index: 2;
`;

// Define o estilo para o botão "OK" do popup
const ButtonOK = styled.button`
  background-color: white;
  color: black;
  font-size: 14px;
  font-family: 'Be Vietnam Pro', sans-serif;
  border-radius: 100px;
  border: 1px solid black;
  cursor: pointer;
  padding: 10px;
  width: 40%;
  height: 80%;
  margin-top: 30%;
`;

// Define o estilo para o overlay do popup
const Overlay = styled.div`
    display: ${props => (props.open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

// Componente principal para adicionar aulas
export default function AttendanceList() {
    const { selectedClassId, workshopId, lessonId, setCloseList, setSelectedLessonId} = useProgram(); // Obtém selectedClassId do contexto
    const [classData, setClassData] = useState([]); // Estado para armazenar os dados das aulas
    const [studentsData, setStudentsData] = useState([]);
    const [presences, setPresences] = useState([]);
    const [absents, setAbsents] = useState([]);
    const [lesson, setLessonData] = useState([]);
    const [popupOpen, setPopupOpen] = useState(false);

    // Atualiza os dados dos alunos com base no selectedClassId do contexto
    useEffect(() => {   
        
        async function getStudentsData() {
            try {
                const students = await fetchStudentsFromClass(selectedClassId);
                setStudentsData(students);
            } catch (error) {
                console.error('Erro ao carregar alunos:', error);
            }
        }
        async function getLessonById() {
            try {
                const lesson = await fetchLessonById(lessonId);
                setLessonData(lesson);
            } catch (error) {
                console.error('Erro ao carregar aula:', error);
            }
        }
        getLessonById();
        getStudentsData();
    }, []); // Atualiza quando selectedClassId muda

    const togglePresence = (studentId, isChecked) => {
        const studentName = studentsData?.find(student => student.id_aluno === studentId).nome;
        const presence = isChecked; // true se isChecked for true, false caso contrário

        if (presence) {
            setPresences(prev => [...prev, studentName]);
            setAbsents(prev => prev.filter(student => student !== studentName));
        } else {
            setAbsents(prev => [...prev, studentName]);
            setPresences(prev => prev.filter(student => student !== studentName));
        }

        // Atualiza diretamente o estado de presença do aluno
        setStudentsData(prevStudents =>
            prevStudents.map(student =>
                student.id_aluno === studentId ? { ...student, presenca: presence } : student
            )
        );
    };


    // Manipula o clique no botão "Salvar"
    const handleSaveClick = () => {
        saveClassData();
        setPopupOpen(true); // Abre o popup de sucesso
    };

    const saveClassData = async () => {
        try {
            const attendanceData = studentsData.map(student => ({
                id_aluno: student.id_aluno,
                lessonId: lessonId,
                presenca: student.presenca || false,
                workshopId: workshopId,
            }));
    
            await postAttendanceListByIds(attendanceData); // Corrigido aqui para enviar attendanceData
            console.log('Dados de presença enviados com sucesso!', attendanceData);
            // Outras ações após salvar os dados, se necessário
        } catch (error) {
            console.error('Erro ao salvar dados de presença:', error);
        }
    };


    // Manipula o clique no botão "OK" do popup
    const handleOKClick = () => {
        setPopupOpen(false); // Fecha o popup
        setCloseList(true); // Altera o setActiveItem para 'aulas'
        setSelectedLessonId(null);
    };

    return (
        // Renderiza o contêiner principal da página de adicionar aulas
        <ContainerAddClass>
            {/* Renderiza o título da aula */}
            <ClassTitle>
                {/* Exibe o nome da aula */}
                <ClassName>{lesson?.nome}</ClassName>
            </ClassTitle>
            {/* Renderiza o contêiner da turma */}
            {/* <ClassContainer> */}
                {/* Exibe o título "Turma" */}
                {/* <Class>{classData[0]?.nome}</Class> */}
            {/* </ClassContainer> */}
            {/* Renderiza o contêiner da data da aula */}
            <DateContainer>
                {/* Exibe o ícone de calendário */}
                <Calendar src={calendar} alt="Calendar" />
                {/* Exibe a data da aula */}
                <Date>Data: {lesson?.data}</Date>
            </DateContainer>
            {/* Renderiza o contêiner da lista de presença */}
            <PresenceList>
                {/* Exibe o título "Lista de presença" */}
                <ListName>Lista de presença</ListName>
            </PresenceList>
            {/* Renderiza o contêiner dos estudantes */}
            <StudentsContainer>
                <ScrollableDiv>
                {/* Mapeia e renderiza os componentes de checkbox para cada estudante */}
                {studentsData?.map(student => (
                    <TwoRoundCheckboxes 
                        key={student.id_aluno} 
                        student={student} 
                        togglePresence={togglePresence}
                        isPresent={presences.includes(student.nome)}
                        isAbsent={absents.includes(student.nome)}
                    />
                ))}
                </ScrollableDiv>
            </StudentsContainer>
            {/* Renderiza o contêiner dos botões */}
            <ButtomContainer>
                {/* Botão para voltar */}
                <ButtonBack onClick={() => {
                    setCloseList(true);
                }
            }>Voltar</ButtonBack>
                {/* Botão para salvar */}
                <ButtonSave onClick={handleSaveClick}>Salvar</ButtonSave>
            </ButtomContainer>

            {/* Renderiza o popup de sucesso */}
            <PopupContainer open={popupOpen}>
                <p>A presença foi salva com sucesso!</p>
                {/* Botão "OK" para fechar o popup */}
                <ButtonOK onClick={handleOKClick}>OK</ButtonOK>
            </PopupContainer>
            {/* Renderiza o overlay do popup */}
            <Overlay open={popupOpen} onClick={() => setPopupOpen(false)} />

        </ContainerAddClass>
    );
}   