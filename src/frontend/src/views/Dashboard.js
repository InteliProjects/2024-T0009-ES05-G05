
import React from 'react';
import styled from 'styled-components';
import CardComponent from '../components/Card';
import evasaoImage from '../img/evasao.png';
import freqVagaImage from '../img/freq_vaga.png';
import freqMatriculaImage from '../img/freq_matricula.png';
import esperadosImage from '../img/esperados.png';
import professoresImage from '../img/professores.png';
import atendidosImage from '../img/atendidos.png';

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    height: 60vh;
    align-self: flex-end;
`;

export default function Dashboard() {
    return (
        <CardsContainer>

            <CardComponent
                numero="45"
                texto="Esperados"
                imagem={esperadosImage}
            />
            <CardComponent
                numero="40"
                texto="Atendidos"
                imagem={atendidosImage}
            />
            <CardComponent
                numero="4"
                texto="Professores"
                imagem={professoresImage}
            />
            <CardComponent
                numero="78%"
                texto="Frequência por vaga"
                imagem={freqVagaImage}
            />
            <CardComponent
                numero="69%"
                texto="Frequência por Matrícula"
                imagem={freqMatriculaImage}
            />
            <CardComponent
                numero="3"
                texto="Evasão"
                imagem={evasaoImage}
            />
        </CardsContainer>
    );
}
