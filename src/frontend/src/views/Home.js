import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import CardHome from "../components/CardHome";
import { useNavigate } from "react-router-dom";
import { fetchOficinas } from "../services/workshopService";
import { useProgram } from "../contexts/ProgramContext";
import AddOficina from "../components/AddOficina";
import Loading from "../components/Loading";
import { deleteWorkshop } from "../services/workshopService";

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f5f5f5;
  min-height: 100vh;
  width: 100%;
`;

const PageHeader = styled.div`
  width: 100%;
  padding: 50px;
  padding-left: 35%; /* Ajuste no padding-left */
  font-family: "Be Vietnam Pro Bold", sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => (props.showModal ? "transparent" : "#333")};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-left: 20%; /* Ajuste no margin-left */
  width: 60%;
  padding: 100px;
  gap: 30px;
  box-sizing: border-box;
  padding-top: 0px;
  position: relative;
  align-items: flex-start;
  align-self: center;
`;

const ButtonContainer = styled.div`
  flex: 20%;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 15%;
  height: auto;
  margin-right: 4%;
  margin-left: 4%;
  margin-top: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const AddButton = styled.button`
  top: 60px;
  left: 200px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 24px;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonDelete = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent; 
  color: lightgray;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-family: "Be Vietnam Pro Bold", sans-serif;
  margin-left: 15px;

  &:hover {
    color: darkgray;
  }
`;


const Home = () => {
  const navigate = useNavigate();
  const { setWorkshopId } = useProgram(); // Usando o hook do contexto
  const [workshopsData, setWorkshopsData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [shouldUpdateWorkshops, setShouldUpdateWorkshops] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkshops() {
      try {
        const workshops = await fetchOficinas();
        // Organizar as oficinas do maior ID para o menor ID
        workshops.sort((a, b) => b.id_oficina - a.id_oficina);
        setWorkshopsData(workshops);
      } catch (error) {
        console.error("Erro ao carregar oficinas:", error);
      } finally {
        setLoading(false);
      }
    }
    loadWorkshops();
  }, [shouldUpdateWorkshops]);

  const handleCardClick = (oficinaId) => {
    setWorkshopId(oficinaId); // Define o ID da oficina no contexto
    navigate("/workshop"); // Navega para a rota que exibe detalhes da oficina
  };

  const handleAddButtonClick = () => {
    setShowModal(true);
    setShouldUpdateWorkshops(true);
  };

  if (shouldUpdateWorkshops) {
    async function loadWorkshops() {
      try {
        const workshops = await fetchOficinas();
        workshops.sort((a, b) => b.id_oficina - a.id_oficina);
        setWorkshopsData(workshops);
        setShouldUpdateWorkshops(false);
      } catch (error) {
        console.error("Erro ao carregar oficinas:", error);
      } finally {
        setLoading(false);
      }
    }
    loadWorkshops();
  }

  const handleModalClose = () => {
    setShowModal(false);
    if (shouldUpdateWorkshops) {
      setShouldUpdateWorkshops(false);
      async function loadWorkshops() {
        try {
          const workshops = await fetch("/workshops");
          const data = await workshops.json();
          setWorkshopsData(data);
        } catch (error) {
          console.error("Erro ao carregar oficinas:", error);
        }
      }
      loadWorkshops();
    }
  };

  const buttonDeletePressed = async (id_oficina) => {
    try {
      await deleteWorkshop(id_oficina);
      setShouldUpdateWorkshops(true);
    } catch (error) {
      console.error("Erro ao deletar oficina:", error);
    }
  };



  return (
    <StyledBody>
      <LoadingContainer>{loading && <Loading />}</LoadingContainer>
      {!loading && (
        <>
          <Sidebar />
          <PageHeader>Oficinas</PageHeader>
          <CardsContainer>
            <ButtonContainer>
              <AddButton onClick={handleAddButtonClick}>+</AddButton>
            </ButtonContainer>
            {Array.isArray(workshopsData) && workshopsData.length > 0 ? (
              workshopsData.map((workshop) => (
                <div key={workshop.id_oficina}>
                  <CardHome
                    title={workshop.nome_oficina}
                    icon={workshop.categoria}
                    onClick={() => handleCardClick(workshop.id_oficina)}
                  />
                  <ButtonDelete onClick={() => buttonDeletePressed(workshop.id_oficina)}>
                    Excluir
                  </ButtonDelete>
                </div>
              ))
            ) : (
              <p>Nenhuma oficina encontrada.</p>
            )}
          </CardsContainer>
          {showModal && <AddOficina onClose={handleModalClose} />}
          <Footer />
        </>
      )}
    </StyledBody>
  );
};

export default Home;
