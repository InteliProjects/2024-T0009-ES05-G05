import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useProgram } from "../contexts/ProgramContext";
import { fetchClassesByWorkshopId } from "../services/workshopService";
import AddStudentsClass from "../components/AddStudentsClass";
import AddTeachersClass from "../components/AddTeachersClass";
import arrowLeft from "../img/arrow_left.png";
import CardClass from "../components/CardClass";
import classCard from "../img/class_card.png";
import AddTurmas from '../components/AddTurmas';
import Loading from '../components/Loading'; 
import { fetchWorkshopById } from "../services/workshopService";

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  position: fixed;
`;

const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
`;

const DataSection = styled.div`
  display: flex;
  width: 80%;
  height: 94%;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 90%;
  margin-top: 20px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  flex-direction: column;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;


const ArrowLeft = styled.img`
  width: 1%;
  height: 3vh;
  margin-right: 4%;
  margin-left: 4%;
  cursor: pointer;
  margin-top: 2%;
`;

const ScrollableDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  margin-right: 1%;
  scrollbar-width: thin;
  scrollbar-color: black white;
`;

const ClassDiv = styled.div`
  display: flex;
  flex-direction: column;  
  gap: 30px;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-self: center;
  align-items: center;
  width: 80%;
  max-width: 90%;
  height: 60vh;
  margin-bottom: 3%;
  gap: 20px; 
`;


const ClassName = styled.h1`
  font-family: "Be Vietnam Pro Extra Bold", sans-serif;
  font-size: 25px;
  display: flex;
  margin-top: 3%;
`;

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px; // Espaço entre AddButton e os cards
  flex: 1; // Faz o botão se comportar como um flex item
  max-width: calc(33.333% - 50px); // Subtrai a margem/gap entre os cards

  @media (max-width: 990px) {
    max-width: 100%; // Faz o botão ocupar uma linha inteira
    order: -1; // Move o botão para cima dos outros elementos
  }
`;
const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #E0E0E0;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 24px;
`;

const Workshop = () => {
  const navigate = useNavigate();
  const { workshopId, setSelectedClassId, setActiveItem} = useProgram(); // Adicionar setselectedClassId ao desestruturar
  const [classesData, setClassesData] = useState([]);
  const [isAddTurmaOpen, setIsAddTurmaOpen] = useState(false); // Estado para controlar a exibição do pop-up
  const [isAddStudentsOpen, setIsAddStudentsOpen] = useState(false); // Estado para controlar a exibição do pop-up
  const [isAddTeachersOpen, setIsAddTeachersOpen] = useState(false); // Estado para controlar a exibição do pop-up
  const [loading, setLoading] = useState(true); 
  const [workshopData, setWorkshopData] = useState({});
  
  const handleCardClick = (turmaId) => {
    setSelectedClassId(turmaId);
    setActiveItem('aulas'); // Definir o id_turma selecionado
    navigate("/workshop/lessons");
  };

  const handleOpenAddTurma = () => {
    setIsAddTurmaOpen(true);
  };

  const handleTurmaAdded = async () => {
    setSelectedClassId(null);
    // Após adicionar uma nova turma, recarregue a lista de turmas
    // await loadClasses();
    setIsAddTurmaOpen(false); // Feche o pop-up após adicionar a turma com sucesso
    setIsAddTeachersOpen(true);
  };

  const handleTeachersAdded = async () => {
    // Após adicionar um novo aluno, recarregue a lista de alunos
    setIsAddTeachersOpen(false); // Feche o pop-up após adicionar o aluno com sucesso
    setIsAddStudentsOpen(true);
  }

  const handleStudentsAdded = async () => {
    // Após adicionar um novo professor, recarregue a lista de professores
    setIsAddStudentsOpen(false);// Feche o pop-up após adicionar o professor com sucesso
    await loadClasses();
  }

  useEffect(() => {
    loadClasses();
    loadWorkshopById();
     // Carregue a lista de turmas ao iniciar o componente
  }, [workshopId]); // Atualize a lista de turmas sempre que o ID da oficina mudar

  async function loadClasses() {
    try {
      const classes = await fetchClassesByWorkshopId(workshopId);
      setClassesData(classes);
    } catch (error) {
      console.error('Erro ao carregar oficinas:', error);
    } finally {
      setLoading(false); // Marcar o carregamento como concluído
    }
  }

  async function loadWorkshopById() {
    try {
      const workshop = await fetchWorkshopById(workshopId);
      setWorkshopData(workshop);
    } catch (error) {
      console.error('Erro ao carregar oficinas:', error);
    } finally {
      setLoading(false); // Marcar o carregamento como concluído
    }
  }

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <StyledBody>
      {loading ? ( // Verifica se os dados estão sendo carregados
        <Loading />
      ) : (
        <>
          <Footer />
          <Sidebar />
          <ContainerPage>
            <DataSection>
              <DashboardContainer>
                <ScrollableDiv>
                  <ClassDiv>
                    <TopSection>
                      <ArrowLeft src={arrowLeft} alt="Arrow Left" onClick={handleBack}/>
                      <ClassName>Turmas da oficina de {workshopData.nome_oficina} </ClassName>
                    </TopSection>
                    <ButtonContainer>
                      <AddButtonContainer>
                        <AddButton onClick={handleOpenAddTurma}>+</AddButton>
                      </AddButtonContainer>
                      {Array.isArray(classesData) && classesData.length > 0 ? (
                        classesData.map(turma => (
                          <CardClass
                            key={turma.id_turma}
                            title={`${turma.nome}`}
                            imagem={classCard}
                            onClick={() => handleCardClick(turma.id_turma)}
                          />
                        ))
                      ) : (
                        <p>Nenhuma turma encontrada.</p>
                      )}
                    </ButtonContainer>
                  </ClassDiv>
                </ScrollableDiv>
              </DashboardContainer>
            </DataSection>
          </ContainerPage>
          {isAddTurmaOpen && <AddTurmas onClose={handleTurmaAdded} fk_id_oficina={workshopId} />} 
          {isAddStudentsOpen && <AddStudentsClass onClose={handleStudentsAdded} fk_id_oficina={workshopId} />}
          {isAddTeachersOpen && <AddTeachersClass onClose={handleTeachersAdded} fk_id_oficina={workshopId} />}
          
          {/* Atualize a lista de turmas após adicionar uma nova turma */}
        </>
      )}
    </StyledBody>
  );
};

export default Workshop;