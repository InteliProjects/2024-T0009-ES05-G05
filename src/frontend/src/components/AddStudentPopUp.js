import React, { useState } from 'react';
import styled from 'styled-components';
const TitleClass = styled.h2`
    font-family: 'Be Vietnam Pro Bold', sans-serif;
    font-size: 20px;
`;
const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const PopupContent = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 500px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;
const FormInput = styled.input`
    font-family: 'Be Vietnam Pro', sans-serif;
    padding: 4px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 20px;
`;
const FormLabel = styled.label`
    font-family: 'Be Vietnam Pro', sans-serif;
    margin-bottom: 10px;
`;
const SelectInput = styled.select`
    font-family: 'Be Vietnam Pro', sans-serif;
    padding: 4px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 20px;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;
const SaveButton = styled.button`
    padding: 10px 20px;
    font-size: 12px;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: white;
    background-color: #2F3192;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #23256E;
    }
`;
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
        background-color: #E8E8E8;
    }
`;
const AddStudentPopup = ({ onClose, handleUpdateStudentsList }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [genero, setGenero] = useState('');
    const [etnia, setEtnia] = useState('');
    const [endereco, setEndereco] = useState('');
    const handleNomeChange = (e) => setNome(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleDataNascimentoChange = (e) => setDataNascimento(e.target.value);
    const handleTelefoneChange = (e) => setTelefone(e.target.value);
    const handleCpfChange = (e) => setCpf(e.target.value);
    const handleGeneroChange = (e) => setGenero(e.target.value);
    const handleEtniaChange = (e) => setEtnia(e.target.value);
    const handleEnderecoChange = (e) => setEndereco(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3333/students/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    email,
                    data_nascimento: dataNascimento,
                    telefone,
                    cpf,
                    genero,
                    etnia,
                    endereco,
                    status: 1,
                }),
            });
            const data = await response.json();
            console.log('Resposta do backend:', data);
            handleUpdateStudentsList(); // Atualiza a lista de professores no componente pai
            onClose(); // Fecha o pop-up após o envio bem-sucedido
        } catch (error) {
            console.error('Erro ao enviar dados para o backend:', error);
        }
    };
    return (
        <PopupOverlay>
            <PopupContent>
                <TitleClass>Adicionar estudante</TitleClass>
                <Form onSubmit={handleSubmit}>
                    <FormLabel>Nome</FormLabel>
                    <FormInput
                        type="text"
                        value={nome}
                        onChange={handleNomeChange}
                    />
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <FormLabel>Data de Nascimento</FormLabel>
                    <FormInput
                        type="date"
                        value={dataNascimento}
                        onChange={handleDataNascimentoChange}
                    />
                    <FormLabel>Telefone</FormLabel>
                    <FormInput
                        type="text"
                        value={telefone}
                        onChange={handleTelefoneChange}
                    />
                    <FormLabel>CPF</FormLabel>
                    <FormInput
                        type="text"
                        value={cpf}
                        onChange={handleCpfChange}
                    />
                    <FormLabel>Gênero</FormLabel>
                    <SelectInput value={genero} onChange={handleGeneroChange}>
                        <option value="">Selecione o gênero</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                        <option value="Prefiro não informar">Prefiro não informar</option>
                    </SelectInput>
                    <FormLabel>Etnia</FormLabel>
                    <SelectInput value={etnia} onChange={handleEtniaChange}>
                        <option value="">Selecione a etnia</option>
                        <option value="Pardo">Pardo</option>
                        <option value="Branco">Branco</option>
                        <option value="Preto">Preto</option>
                        <option value="Amarelo">Amarelo</option>
                        <option value="Indígena">Indígena</option>
                        <option value="Prefiro não informar">Prefiro não informar</option>
                    </SelectInput>
                    <FormLabel>Endereço</FormLabel>
                    <FormInput
                        type="text"
                        value={endereco}
                        onChange={handleEnderecoChange}
                    />
                    <ButtonContainer>
                        <BackButton onClick={onClose}>Voltar</BackButton>
                        <SaveButton type="submit">Salvar</SaveButton>
                    </ButtonContainer>
                </Form>
            </PopupContent>
        </PopupOverlay>
    );
};
export default AddStudentPopup;