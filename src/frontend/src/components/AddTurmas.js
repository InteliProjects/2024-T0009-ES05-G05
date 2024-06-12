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

const FormLabel = styled.label`
    font-family: 'Be Vietnam Pro', sans-serif;
    margin-bottom: 10px;
`;

const FormInput = styled.input`
    font-family: 'Be Vietnam Pro', sans-serif;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const DayLabel = styled.label`
    font-family: 'Be Vietnam Pro', sans-serif;
    margin-right: 10px;
    padding: 5px 10px;
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
    background-color: #2f3192;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #23256e;
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
        background-color: #e8e8e8;
    }
`;

const AddTurmas = ({ onClose, fk_id_oficina }) => {
    const [nomeTurma, setNomeTurma] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');

    const [diasSemana, setDiasSemana] = useState({
        segunda: false,
        terça: false,
        quarta: false,
        quinta: false,
        sexta: false,
        sábado: false,
        domingo: false,
    });

    const handleDiaSemanaChange = (dia) => {
        setDiasSemana(prevState => ({
            ...prevState,
            [dia]: !prevState[dia],
        }));
    };

    const handleSave = async () => {
        try {
            const diasSelecionados = Object.entries(diasSemana)
                .filter(([_, isChecked]) => isChecked)
                .map(([dia]) => `${dia.charAt(0).toUpperCase() + dia.slice(1)}-feira`)
                .join(', ');

            const response = await fetch('http://localhost:3333/classes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: nomeTurma,
                    fk_id_oficina: fk_id_oficina, // Certifique-se de passar o fk_id_oficina corretamente
                    data_inicio: dataInicio,
                    data_fim: dataFim,
                    dias_semana: diasSelecionados,
                }),
            });
            if (response.ok) {
                const turmaAdicionada = await response.json(); // Get the added class data
                console.log('Turma adicionada:', turmaAdicionada);
                onClose();
            } else {
                console.error('Erro ao adicionar turma');
            }
        } catch (error) {
            console.error('Erro ao adicionar turma:', error);
        }
    };

    return (
        <PopupOverlay>
            <PopupContent>
                <TitleClass>Criar Turma</TitleClass>
                <Form>
                    <FormLabel>Nome da Turma</FormLabel>
                    <FormInput
                        type="text"
                        value={nomeTurma}
                        onChange={(e) => setNomeTurma(e.target.value)}
                    />
                    <FormLabel>Data de início</FormLabel>
                    <FormInput
                        type="date"
                        value={dataInicio}
                        onChange={(e) => setDataInicio(e.target.value)}
                    />
                    <FormLabel>Data de fim</FormLabel>
                    <FormInput
                        type="date"
                        value={dataFim}
                        onChange={(e) => setDataFim(e.target.value)}
                    />
                    <FormLabel>Aulas na semana</FormLabel>
                    {Object.entries(diasSemana).map(([dia, isChecked]) => (
                        <label key={dia}>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleDiaSemanaChange(dia)}
                            />
                            <DayLabel>{dia.charAt(0).toUpperCase() + dia.slice(1)}</DayLabel>
                        </label>
                    ))}
                </Form>
                <ButtonContainer>
                    <BackButton onClick={onClose}>Voltar</BackButton>
                    <SaveButton onClick={handleSave}>Salvar</SaveButton>
                </ButtonContainer>
            </PopupContent>
        </PopupOverlay>
    );
};

export default AddTurmas;
