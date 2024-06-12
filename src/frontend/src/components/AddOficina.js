import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


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

const AddOficina = ({ onClose }) => {
    const [nomeOficina, setNomeOficina] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSave = async () => {
        try {
            const response = await fetch('http://localhost:3333/workshops', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome_oficina: nomeOficina,
                    categoria: categoria,
                    fk_id_ong: 1, // Definindo o ID da oficina da ONG
                }),
            });
    
            if (!response.ok) {
                throw new Error('Erro ao adicionar oficina');
            }
            
    
            const data = await response.json();
            console.log(data); 
            onClose(); 
        } catch (error) {
            console.error('Erro ao adicionar oficina:', error);
        }
    };
    

    return (
        <PopupOverlay>
            <PopupContent>
                <TitleClass>Criar Oficina</TitleClass>
                <Form>
                    <FormLabel>Nome da Oficina</FormLabel>
                    <FormInput
                        type="text"
                        value={nomeOficina}
                        onChange={(e) => setNomeOficina(e.target.value)}
                    />
                    <FormLabel>Categoria</FormLabel>
                    <FormSelect
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="Dança">Dança</option>
                        <option value="Esporte">Esporte</option>
                        <option value="Arte">Arte</option>
                        <option value="Negócios">Negócios</option>
                        <option value="Cursos">Cursos</option>
                        <option value="Cultura">Cultura</option>
                        <option value="Empreendedorismo">Empreendedorismo</option>
                    </FormSelect>
                </Form>
                <ButtonContainer>
                    <BackButton onClick={onClose}>Voltar</BackButton>
                    <SaveButton onClick={handleSave}>Salvar</SaveButton>
                </ButtonContainer>
            </PopupContent>
        </PopupOverlay>
    );
};

export default AddOficina;
