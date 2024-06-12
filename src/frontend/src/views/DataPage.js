import React from 'react';
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import arrowLeft from '../img/arrow_left.png';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Text, Cell} from 'recharts';
import { useState, useEffect } from 'react';
import { fetchTotalWorkshops } from '../services/workshopService';
import { fetchTotalStudents } from '../services/studentsService';
import { fetchTotalTeachers } from '../services/teachersService';
import { fetchAttendanceListFromWorkshops } from '../services/attendanceListService';


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
const DataContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    height: 80%;
    background-color: white;
    border-radius: 16px;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    flex-direction: column;
`;

const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    width: 100%;
    height: 10%;
    align-items: center;
`;

// Estilização da seta para a esquerda
const ArrowLeft = styled.img`
    width: 1%;
    height: 3vh;
    margin-right: -4%;
    margin-left: 4%;
    cursor: pointer;
`;

const DataName = styled.h1`
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 1.5vw; 
    margin-left: 6%;
    display: flex;
    flex-direction: row;
    align-self: start;
`;

const GridContainer = styled.div`
  width: 85%;
  align-self: center;
  margin-top: 2%;
`;

const GridSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "graph graph graph"
    "workshops students teachers";
`;

const GridItem = styled.div`
  margin: 5px;
  background: #F3F0F5;
  text-align: center;
  border-radius: 8px;
  font-size: 1.5em;
`;

// Aplicando as áreas da grade aos itens
const GraphItem = styled(GridItem)`
  grid-area: graph;
`;

const WorkshopsItem = styled(GridItem)`
  grid-area: workshops;
    display: flex;
  flex-direction: column;
`;

const StudentsItem = styled(GridItem)`
  grid-area: students;
    display: flex;
  flex-direction: column;
`;

const TeachersItem = styled(GridItem)`
  grid-area: teachers;
  display: flex;
  flex-direction: column;
`;

const barColors = ["#4FC090", "#F5821E", "#01AEEF", "#EB1C68"];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{
          backgroundColor: 'white', // Define a cor de fundo para branco
          borderRadius: '10px',
          padding: '10px', // Adiciona um pouco de espaço interno
          fontFamily: 'Be Vietnam Pro Bold',
          fontSize: '14px'
        }}>
          <p>{label}</p>
          <p>{`${payload[0].value}%`}</p> {/* Mostrar valor formatado com '%' no final */}
        </div>
      );
    }
  
    return null;
};


const WorkshopTitle = styled.h1`
    display: flex;
    color: #787878;
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 1vw; 
    align-self: flex-start;
    margin-left: 8%;
`;

const WorkshopNumber = styled.h1`
    display: flex;
    color: #787878;
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 3vw; 
    align-self: center;
`;

const StudentTitle = styled.h1`
    display: flex;
    color: #787878;
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 1vw; 
    align-self: flex-start;
    margin-left: 8%;
`;

const StudentNumber = styled.h1`
    display: flex;
    color: #787878;
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 3vw; 
    align-self: center;
`;

const TeacherDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const TeacherTitle = styled.h1`
    display: flex;
    color: #787878;
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 1vw; 
    align-self: flex-start;
    margin-left: 8%;
`;

const TeacherNumber = styled.h1`
    display: flex;
    color: #787878;
    font-family: 'Be Vietnam Pro Extra Bold', sans-serif;
    font-size: 3vw; 
    align-self: center;
`;

export default function DataPage() {
    const [totalOficinas, setTotalOficinas] = useState(null);
    const [totalStudents, setTotalStudents] = useState(null);
    const [totalTeachers, setTotalTeachers] = useState(null);
    const [attendanceData, setAttendanceData] = useState([]); 
    const [loading, setLoading] = useState(true); // State variable for loading statusz
    
    const navigate = useNavigate();

    const sortWorkshopsByPresence = (workshops) => {
        if (!workshops || workshops.length === 0) {
            return []; // Retorna um array vazio se workshops for indefinido ou vazio
        }
    
        return workshops.sort((a, b) => b.attendancePercentage - a.attendancePercentage);
    };
    
    const sortedAttendanceData = sortWorkshopsByPresence(attendanceData);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAttendanceListFromWorkshops();
                setAttendanceData(data);
            } catch (error) {
                console.error('Error fetching attendance data:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched or an error occurs
            }
        };

        const fetchRegisterWorkshops = async () => {
            try {
                const total = await fetchTotalWorkshops();
                setTotalOficinas(total);
            } catch (error) {
                console.error('Error fetching total workshops:', error);
            }
        };

        const fetchRegisterStudents = async () => {
            try {
                const total = await fetchTotalStudents();
                setTotalStudents(total);
            } catch (error) {
                console.error('Error fetching total students:', error);
            }
        };

        const fetchRegisterTeachers = async () => {
            try {
                const total = await fetchTotalTeachers();
                setTotalTeachers(total);
            } catch (error) {
                console.error('Error fetching total teachers:', error);
            }
        };

        fetchData();
        fetchRegisterWorkshops();
        fetchRegisterStudents();
        fetchRegisterTeachers();
    }, []);

    const handleArrowClick = () => {
        navigate('/home');
    };

    const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
        return (
        <Text x={x} y={y} dy={16} fill="black" fontFamily="Be Vietnam Pro Bold" fontSize={10} textAnchor="middle">
            {payload.value}
        </Text>
        );
    };

    const formatChartData = (data) => {
        // Ordena os dados por porcentagem de presença
        const sortedData = sortWorkshopsByPresence(data);
    
        // Seleciona os 10 primeiros workshops com maior presença
        const topWorkshops = sortedData.slice(0, 10);
    
        return topWorkshops.map((workshop) => ({
            name: `${workshop.workshopName}`, // Nome da oficina, pode ser personalizado conforme sua necessidade
            attendancePercentage: workshop.attendancePercentage, // Porcentagem de presença da oficina
        }));
    };
    
    console.log('attendanceData:', attendanceData);
    const formattedChartData = formatChartData(attendanceData);

  return (
        <StyledBody>
            {/* Renderiza o rodapé */}
            <Footer />
            {/* Renderiza a barra lateral */}
            <Sidebar />
            <ContainerPage>
                <DataSection>
                    <DataContainer>
                        <TitleDiv>
                            <ArrowLeft src={arrowLeft} alt="Arrow Left" onClick={handleArrowClick} />
                            <DataName>Indicadores da ONG</DataName>
                        </TitleDiv>
                            <GridContainer>
                                <GridSection>
                                    <GraphItem>
                                        <div style={{ textAlign: 'left', marginBottom: '10px', marginLeft: '5%', marginTop: '10px'}}>
                                            <span style={{ color: '#787878', fontFamily: 'Be Vietnam Pro Extra Bold', fontSize: '1vw' }}>
                                                Oficinas com mais presença
                                            </span>
                                        </div>
                                        <ResponsiveContainer width="100%" height="70%">
                                            <BarChart data={formattedChartData} margin={{ right: 30 }}>
                                                <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
                                                <YAxis tick={false} />
                                                <Tooltip content={<CustomTooltip />} />
                                                <Bar dataKey="attendancePercentage">
                                                    {formattedChartData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                                                    ))}
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </GraphItem>
                                    <WorkshopsItem>
                                            <WorkshopTitle>Oficinas registradas</WorkshopTitle>
                                            <WorkshopNumber>{totalOficinas !== null ? totalOficinas : 'Carregando...'}</WorkshopNumber>
                                    </WorkshopsItem>
                                    <StudentsItem>
                                            <StudentTitle>Alunos registrados</StudentTitle>
                                            <StudentNumber>{totalStudents !== null ? totalStudents : 'Carregando...'}</StudentNumber>
                                    </StudentsItem>
                                    <TeachersItem>
                                            <TeacherTitle>Professores registrados</TeacherTitle>
                                            <TeacherNumber>{totalTeachers !== null ? totalTeachers : 'Carregando...'}</TeacherNumber>
                                    </TeachersItem>
                                </GridSection>
                            </GridContainer>
                    </DataContainer>
                </DataSection>
            </ContainerPage>
        </StyledBody>
  );
}
