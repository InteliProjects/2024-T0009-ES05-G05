// StudentDetailsPopup.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchStudent } from '../services/studentsService';
import { useProgram } from '../contexts/ProgramContext';

// Estilizando o título da classe
const TitleClass = styled.h2`
    font-size: 20px;
`;

// Estilizando os rótulos dos detalhes do aluno
const Label = styled.span`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
`;

// Estilizando os valores dos detalhes do aluno
const Value = styled.span`
    font-family: 'Be Vietnam Pro', sans-serif;
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
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    background-color: white;
    padding: 30px;
    border-radius: 20px; 
    display: flex;
    flex-direction: column; 
    align-items: center; 
    width: 80%; 
    max-width: 500px; 
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

const StudentDetailsPopup = ({ onClose }) => {
    const [studentDetails, setStudentDetails] = useState(null);
    const { popUpStudentId } = useProgram(); // Obtém o popUpStudentId do contexto do programa

    useEffect(() => {
        async function fetchData() {
            try {
                const studentData = await fetchStudent(popUpStudentId); // Busca os detalhes do aluno usando popUpStudentId
                if (Array.isArray(studentData) && studentData.length > 0) {
                    const studentDetails = studentData[0]; // Obtém o primeiro elemento do array
                    const formattedStudent = {
                        id_aluno: studentDetails.id_aluno,
                        nome: studentDetails.nome,
                        email: studentDetails.email,
                        telefone: studentDetails.telefone,
                        data_nascimento: studentDetails.data_nascimento,
                        cpf: studentDetails.cpf,
                        genero: studentDetails.genero,
                        etnia: studentDetails.etnia,
                        endereco: studentDetails.endereco,
                        status: studentDetails.status,
                    };
                    setStudentDetails(formattedStudent);
                } else {
                    console.error('Invalid student data:', studentData);
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        }
        fetchData();
    }, [popUpStudentId]);

    return (
        <PopupOverlay>
            <PopupContent>
                <TitleClass>Detalhes do Aluno</TitleClass>
                {studentDetails ? (
                    <>
                        <p><Label>Nome:</Label> <Value>{studentDetails.nome}</Value></p>
                        <p><Label>Email:</Label> <Value>{studentDetails.email}</Value></p>
                        <p><Label>Telefone:</Label> <Value>{studentDetails.telefone}</Value></p>
                        <p><Label>Data de nascimento:</Label> <Value>{studentDetails.data_nascimento}</Value></p>
                        <p><Label>CPF:</Label> <Value>{studentDetails.cpf}</Value></p>
                        <p><Label>Gênero:</Label> <Value>{studentDetails.genero}</Value></p>
                        <p><Label>Etnia:</Label> <Value>{studentDetails.etnia}</Value></p>
                        <p><Label>Endereço:</Label> <Value>{studentDetails.endereco}</Value></p>
                    </>
                ) : (
                    <p>Carregando detalhes do aluno...</p>
                )}
                <CloseButton onClick={onClose}>Fechar</CloseButton>
            </PopupContent>
        </PopupOverlay>
    );
};

export default StudentDetailsPopup;
