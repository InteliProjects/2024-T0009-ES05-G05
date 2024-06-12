// teacherDetailsPopup.js
import { fetchTeacher } from '../services/teachersService';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useProgram } from '../contexts/ProgramContext';

// Estilizando o título da classe
const TitleClass = styled.h2`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    font-size: 20px;
`;

// Estilizando o overlay do pop-up
const PopupOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5); /* Adicionando um fundo semi-transparente */
display: flex;
justify-content: center;
align-items: center;
`;

// Estilizando o conteúdo do pop-up
const PopupContent = styled.div`
background-color: white;
padding: 30px; /* Ajustando o preenchimento do pop-up */
border-radius: 20px; /* Arredondando as bordas do pop-up */
display: flex;
flex-direction: column; /* Organizando os elementos em coluna */
align-items: center; /* Centralizando os elementos horizontalmente */
width: 80%; /* Aumentando a largura do pop-up */
max-width: 500px; /* Definindo uma largura máxima */
`;

// Estilizando o botão "Fechar"
const CloseButton = styled.button`
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

const TeacherDetailsPopup = ({ onClose }) => {
    const [teacherDetails, setTeacherDetails] = useState(null);
    const { popUpTeacherId } = useProgram(); // Obtém o popUpTeacherId do contexto do programa

    useEffect(() => {
        async function fetchData() {
            try {
                const teacherData = await fetchTeacher(popUpTeacherId); // Busca os detalhes do aluno usando popUpTeacherId
                
                // Verifique se há dados recebidos
                if (Array.isArray(teacherData) && teacherData.length > 0) {
                    const teacherDetails = teacherData[0]; // Obtém o primeiro elemento do array
                    const formattedTeacher = {
                        id_aluno: teacherDetails.id_aluno,
                        nome: teacherDetails.nome,
                        email: teacherDetails.email,
                        telefone: teacherDetails.telefone,
                        data_nascimento: teacherDetails.data_nascimento,
                        cpf: teacherDetails.cpf,
                        genero: teacherDetails.genero,
                        etnia: teacherDetails.etnia,
                        endereco: teacherDetails.endereco,
                        status: teacherDetails.status,
                    };
                    setTeacherDetails(formattedTeacher);
                } else {
                    console.error('Invalid teacher data:', teacherData);
                }
            } catch (error) {
                console.error('Error fetching teacher data:', error);
            }
        }
        fetchData();
    }, [popUpTeacherId]);

    return (
        <PopupOverlay>
            <PopupContent>
                <TitleClass>Detalhes do Professor</TitleClass>
                {teacherDetails ? (
                    <>
                        <p>Nome: {teacherDetails.nome}</p>
                        <p>Email: {teacherDetails.email}</p>
                        <p>Telefone: {teacherDetails.telefone}</p>
                        <p>Data de nascimento: {teacherDetails.data_nascimento}</p>
                        <p>CPF: {teacherDetails.cpf}</p>
                        <p>Gênero: {teacherDetails.genero}</p>
                        <p>Etnia: {teacherDetails.etnia}</p>
                        <p>Endereço: {teacherDetails.endereco}</p>
                    </>
                ) : (
                    <p>Carregando detalhes do aluno...</p>
                )}
                <CloseButton onClick={onClose}>Fechar</CloseButton>
            </PopupContent>
        </PopupOverlay>
    );
};

export default TeacherDetailsPopup;
