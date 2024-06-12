import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useProgram } from '../contexts/ProgramContext';
import { useEffect } from 'react';

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

// Estilizando o formulário
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;

// Estilizando o rótulo do formulário
const FormLabel = styled.label`
    font-family: 'Be Vietnam Pro', sans-serif;
    margin-bottom: 10px;
`;

// Estilizando a entrada do formulário
const FormInput = styled.input`
    font-family: 'Be Vietnam Pro', sans-serif;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const FormSelect = styled.select`
    font-family: 'Be Vietnam Pro', sans-serif;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

// Estilizando o contêiner dos botões
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px; /* Adicionando margem entre os botões e o conteúdo */
`;

// Estilizando o botão "Salvar"
const SaveButton = styled.button`
    padding: 10px 20px;
    font-size: 12px;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: white;
    background-color: #2f3192;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #23256e;
    }
`;

// Estilizando o botão "Voltar"
const BackButton = styled.button`
    padding: 10px 20px;
    font-size: 12px;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: #999999;
    background-color: white;
    border: 1.25px solid #999999;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #e8e8e8;
    }
`;

const EditLesson = ({ onClose, lessonId, onLessonUpdate }) => {
    const { ongId } = useProgram();
    const [nomeAula, setNomeAula] = useState('');
    const [dataAula, setDataAula] = useState('');

    // Carregar dados da aula ao abrir o popup
    useEffect(() => {
        const fetchLessonData = async () => {
            try {
                const response = await fetch(`http://localhost:3333/lesson/id/${lessonId}`);
                if (!response.ok) {
                    throw new Error('Erro ao obter dados da aula');
                }
                const data = await response.json();
                setNomeAula(data.nome);
                setDataAula(data.data);
            } catch (error) {
                console.error('Erro ao obter dados da aula:', error);
            }
        };
        fetchLessonData();
    }, [lessonId]); // Executar quando o ID da aula mudar

    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:3333/lesson/id/${lessonId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: nomeAula,
                    data: dataAula,
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar aula');
            }

            const data = await response.json();
            console.log(data);
            onLessonUpdate();
            onClose(); // Fechar o popup após a atualização
        } catch (error) {
            console.error('Erro ao atualizar aula:', error);
        }
    };

    return (
        <PopupOverlay>
            <PopupContent>
                <TitleClass>Editar Aula</TitleClass>
                <Form>
                    <FormLabel>Novo nome da aula</FormLabel>
                    <FormInput
                        type="text"
                        value={nomeAula}
                        onChange={(e) => setNomeAula(e.target.value)}
                    />
                    <FormLabel>Nova data da aula</FormLabel>
                    <FormInput
                        type="date"
                        value={dataAula}
                        onChange={(e) => setDataAula(e.target.value)}
                    />
                </Form>
                <ButtonContainer>
                    <BackButton onClick={onClose}>Voltar</BackButton>
                    <SaveButton onClick={handleSave}>Salvar</SaveButton>
                </ButtonContainer>
            </PopupContent>
        </PopupOverlay>
    );
};

export default EditLesson;