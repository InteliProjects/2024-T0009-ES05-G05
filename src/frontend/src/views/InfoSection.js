// Importações necessárias
import React, { useState } from 'react';
import styled from 'styled-components';
import arrowLeft from '../img/arrow_left.png'; // Importa a seta para a esquerda
import SelectLessons from './SelectLessons'; // Importa o componente SelectLessons
import SelectStudents from './SelectStudents';
import SelectTeachers from './SelectTeachers';
import AddLessons from './AttendanceList'; // Importa o componente AddLessons
import Footer from '../components/Footer'; // Importa o componente Footer
import Sidebar from '../components/Sidebar'; // Importa o componente Sidebar
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação programática
import { useProgram } from '../contexts/ProgramContext';
import { useEffect } from 'react';
import { fetchClassById } from '../services/classService';


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

const ClassContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    height: 10%;
`;

const ClassName = styled.h1`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 25px; 
    margin-left: 6%;
    display: flex;
    flex-direction: row;
    align-self: start;
`;

// Container principal da página
const ContainerPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
`;

// Seção de dados da página
const DataSection = styled.div`
    display: flex;
    width: 80%;
    height: 94%;
    justify-content: center;
    align-items: center;
`;

// Container para as oficinas
const WorkshopContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    height: 80%;
    background-color: white;
    border-radius: 16px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    flex-direction: column;
`;

// Estilização da seta para a esquerda
const ArrowLeft = styled.img`
    width: 1%;
    height: 3vh;
    margin-right: 4%;
    margin-left: 4%;
    cursor: pointer;
`;

// Container para o menu de navegação
const ContainerMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1%;
`;

// Menu de navegação
const Menu = styled.div`
    height: 100%;
    width: 85%;
    background-color: white;
    border-radius: 100px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

// Item de menu
const MenuItem = styled.li`
    margin: 10px;
    list-style-type: none;
    cursor: pointer;
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-weight: 800;
    font-size: 12px;
    color: ${(props) => (props.active ? '#3C4043' : '#999999')};
`;

// Componente que representa a seção de informações da página
const InfoSection = () => {
    const navigate = useNavigate();
    const { activeItem, setActiveItem, closeList, setSelectedLessonId, selectedClassId } = useProgram();
    const { classId, lessonId } = useProgram();
    const [selectLessonsVisible, setSelectLessonsVisible] = useState(true);
    const [selectTeachersVisible, setSelectTeachersVisible] = useState(false);
    const [selectStudentsVisible, setSelectStudentsVisible] = useState(false);
    const [addLessonsVisible, setAddLessonsVisible] = useState(false);
    const [classData, setClassData] = useState({});

    useEffect(() => {
        async function loadClass() {
            try {
                const classes = await fetchClassById(selectedClassId);
                setClassData(classes);
                console.log('classData', classData)
            } catch (error) {
                console.error('Erro ao carregar aulas:', error);
            }
        }

        // Atualiza o item ativo com base no lessonId
        if (lessonId !== null && !closeList) {
            setActiveItem('lista_de_presenca');
            setAddLessonsVisible(true);
            setSelectLessonsVisible(false);
            setSelectTeachersVisible(false);
            setSelectStudentsVisible(false);
        } else if (closeList){
            setActiveItem('aulas');
            setSelectLessonsVisible(true);
            setSelectTeachersVisible(false);
            setSelectStudentsVisible(false);
            setAddLessonsVisible(false);
        }else {
            setActiveItem('aulas');
            setSelectLessonsVisible(true);
            setSelectTeachersVisible(false);
            setSelectStudentsVisible(false);
            setAddLessonsVisible(false);
        }

        loadClass();
    }, [lessonId, closeList, setActiveItem]);

    const handleMenuItemClick = (item) => {
        if (item === activeItem) {
            return;
        }

        if (item === 'aulas') {
            setActiveItem('aulas');
            setSelectLessonsVisible(true);
            setSelectTeachersVisible(false);
            setSelectStudentsVisible(false);
            setAddLessonsVisible(false);
        } else if (item === 'professores') {
            setActiveItem('professores');
            setSelectTeachersVisible(true);
            setSelectLessonsVisible(false);
            setSelectStudentsVisible(false);
            setAddLessonsVisible(false);
        } else if (item === 'alunos') {
            setActiveItem('alunos');
            setSelectStudentsVisible(true);
            setSelectTeachersVisible(false);
            setSelectLessonsVisible(false);
            setAddLessonsVisible(false);
        }
    };

    const handleArrowClick = () => {
        navigate('/workshop');
        setSelectedLessonId(null);
    };

    return (
        <StyledBody>
            {/* Renderiza o rodapé */}
            <Footer />
            {/* Renderiza a barra lateral */}
            <Sidebar />
            {/* Renderiza o container principal */}
            <ContainerPage>
                {/* Renderiza a seção de dados */}
                <DataSection>
                    {/* Renderiza o container das oficinas */}
                    <WorkshopContainer>
                        <ClassContainer>
                            <ClassName>{classData[0]?.nome}</ClassName>
                        </ClassContainer>
                        {/* Renderiza o container do menu */}
                        <ContainerMenu>
                            {/* Renderiza a seta para a esquerda */}
                            <ArrowLeft src={arrowLeft} alt="Arrow Left" onClick={handleArrowClick} />
                            {/* Renderiza o menu de navegação */}
                            <Menu>
                                {/* Renderiza o item "Aulas" */}
                                <MenuItem active={activeItem === 'aulas'} onClick={() => handleMenuItemClick('aulas')}>
                                    Aulas da Turma
                                </MenuItem>
                                {/* Renderiza o item "Professores" */}
                                <MenuItem active={activeItem === 'professores'} onClick={() => handleMenuItemClick('professores')}>
                                    Professores da Turma
                                </MenuItem>
                                {/* Renderiza o item "Alunos" */}
                                <MenuItem active={activeItem === 'alunos'} onClick={() => handleMenuItemClick('alunos')}>
                                    Alunos da Turma
                                </MenuItem>
                            </Menu>
                        </ContainerMenu>
                        {selectLessonsVisible ? (
                            <SelectLessons />
                        ) : selectTeachersVisible ? (
                            <SelectTeachers />
                        ) : selectStudentsVisible ? (
                            <SelectStudents classId={classId} />
                        ) : addLessonsVisible ? (
                            <AddLessons />
                        ) : null}
                    </WorkshopContainer>
                </DataSection>
            </ContainerPage>
        </StyledBody>
    );
};

export default InfoSection;
