import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchLessonsByClass } from '../services/lessonService';
import { useProgram } from '../contexts/ProgramContext';
import calendar from '../img/calendar.png';
import edit from '../img/icon_edit.png';
import delet from '../img/icon_delete.png';
import { deleteLesson } from '../services/lessonService';
import EditLesson from '../components/EditLesson';
import Loading from '../components/Loading';

const ContainerSelectLessons = styled.div`
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

const LessonList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 20px;
    width: 90%;
    max-height: 37vh;
    overflow-y: auto;
`;

const LessonItem = styled.li`
    display: flex;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    width: 100%;
    padding: 10px 20px;
    justify-content: space-between;
    margin: 10px 0;
    background-color: ${({ active }) => (active ? '#e8e8e8' : '#fff')};
    border-radius: 100px;
    border: 1.25px solid black;
    cursor: pointer;
`;

const DateContainer = styled.div`
    display: flex;
    height: 6%;
`;

// Define o estilo para o ícone de calendário
const Calendar = styled.img`
    width: 15px;
    height: 15px;
    margin-bottom: 0.5%;
    align-self: center; 
    margin-right: 5%;
`;

// Define o estilo para a data da aula
const Date = styled.h1`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px; 
    margin-left: 0.6%;
    align-self: center; 
    white-space: nowrap;
`;

const Title = styled.p`
    margin: 0;
    height: min-content;
    align-self: center;
`;

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 20px;
    cursor: pointer;
`;

const LessonItemContainer = styled.div`
    display: flex;
    align-items: center;
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
  background-color: red;
  color: white;
  font-size: 14px;
  font-family: 'Be Vietnam Pro', sans-serif;
  border-radius: 100px;
  border: 1px solid red;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  margin-right: 10px;
  height: 80%;
  margin-top: 30%;
`;

// Define o estilo para o botão "OK" do popup
const ButtonNo = styled.button`
  background-color: white;
  color: black;
  font-size: 14px;
  font-family: 'Be Vietnam Pro', sans-serif;
  border-radius: 100px;
  border: 1px solid black;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  margin-right: 10px;
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

const ButtomDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const SelectLessons = () => {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const { selectedClassId, setSelectedLessonId, lessonId, setCloseList } = useProgram();
    const [popupOpen, setPopupOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    

    async function fetchData() {
        try {
            const lessonsData = await fetchLessonsByClass(selectedClassId);
            console.log('Response from fetchLessonsByClass:', lessonsData);
    
            if (Array.isArray(lessonsData)) {
                setLessons(lessonsData);
                setLoading(false);
                console.log('Lessons data:', lessonsData)
            } else {
                console.error('Invalid lessons data:', lessonsData);
            }
        } catch (error) {
            console.error('Error fetching lessons', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [selectedClassId, refreshKey]);

    // Função para formatar a data no formato dd/mm/aaaa
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('T')[0].split('-');
        return `${day}/${month}/${year}`;
    };

    const filteredLessons = lessons.filter((lessonItem) =>
      lessonItem.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredLessons.sort((a, b) => {
      const nameA = a.nome.toLowerCase();
      const nameB = b.nome.toLowerCase();

      // Check if the names contain numbers
      const hasNumberA = /\d/.test(nameA);
      const hasNumberB = /\d/.test(nameB);

      // If both names have numbers, extract and compare the numeric parts
      if (hasNumberA && hasNumberB) {
        const numericPartA = parseInt(nameA.match(/\d+/)[0], 10);
        const numericPartB = parseInt(nameB.match(/\d+/)[0], 10);

        // Compare the numeric parts
        if (numericPartA !== numericPartB) {
          return numericPartA - numericPartB; // Sort by numeric value
        }
        // If numeric parts are equal, sort by the whole string
      }

      return nameA.localeCompare(nameB); // Default sort by string
    });


    // Manipula o clique no botão "OK" do popup
    const handleOKClick = async () => {
        try {
            await deleteLesson(lessonId); // Chama a função de deleção passando o ID da aula selecionada
            setPopupOpen(false); // Fecha o popup
            fetchData(); // Recarrega a lista de aulas
        } catch (error) {
            console.error('Erro ao deletar aula:', error);
            // Trate o erro conforme necessário (exibindo mensagem para o usuário, etc.)
        }
    };

    // Manipula o clique no botão "OK" do popup
    const handleNoClick = () => {
        setPopupOpen(false); // Fecha o popup
        setCloseList(true); // Altera o setActiveItem para 'aulas'
    };

    const handleModalClose = () => {
        setShowModal(false);
      };

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
    

      return (
        <ContainerSelectLessons>
          {/* Chama o componente de loading enquanto os dados estão sendo carregados */}
          {loading ? (
            <Loading />
          ) : (
            <>
              <ContainerSearchAndOrder>
                <ContainerSearchBar>
                <SearchBar
                    placeholder="Pesquisar aulas"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </ContainerSearchBar>
              </ContainerSearchAndOrder>
              <LessonList>
                {filteredLessons.map((lessonItem) => (
                  <LessonItemContainer key={lessonItem.id_aula}>
                    <LessonItem
                      onClick={() => {
                        setSelectedLessonId(lessonItem.id_aula);
                        setCloseList(false);
                      }}
                    >
                      <Title>{lessonItem.nome}</Title>
                      <DateContainer>
                        <Calendar src={calendar} alt="Calendário" />
                        <Date>Data: {formatDate(lessonItem?.data)}</Date>
                      </DateContainer>
                    </LessonItem>
                    {/* Ícones de editar e deletar */}
                    <IconsContainer>
                      <Icon
                        src={edit}
                        alt="Editar"
                        onClick={(e) => {
                          e.stopPropagation(); // Impede a propagação do evento para o componente LessonItem
                          // Adicione aqui a lógica para editar a aula
                          setSelectedLessonId(lessonItem.id_aula);
                          setShowModal(true);
                        }}
                      />
                      <Icon
                        src={delet}
                        alt="Deletar"
                        onClick={(e) => {
                          e.stopPropagation(); // Impede a propagação do evento para o componente LessonItem
                          // Adicione aqui a lógica para deletar a aula
                          setPopupOpen(true);
                          setSelectedLessonId(lessonItem.id_aula);
                        }}
                      />
                    </IconsContainer>
                  </LessonItemContainer>
                ))}
              </LessonList>
    
              {/* Renderiza o popup de sucesso */}
              <PopupContainer open={popupOpen}>
                <p>Tem certeza de que deseja excluir essa aula?</p>
                <ButtomDiv>
                  <ButtonOK onClick={handleOKClick}>Sim</ButtonOK>
                  <ButtonNo onClick={handleNoClick}>Não</ButtonNo>
                </ButtomDiv>
              </PopupContainer>
              {/* Renderiza o overlay do popup */}
              <Overlay open={popupOpen} onClick={() => setPopupOpen(false)} />
    
              {showModal && (
                <EditLesson
                  onClose={handleModalClose}
                  lessonId={lessonId}
                  onLessonUpdate={() => setRefreshKey((oldKey) => oldKey + 1)}
                />
              )}
            </>
          )}
        </ContainerSelectLessons>
      );
    };
    
    export default SelectLessons;