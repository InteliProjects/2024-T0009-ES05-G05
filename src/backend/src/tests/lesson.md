# Documentação de Testes Automatizados

## Introdução

Esta seção da documentação descreve detalhadamente os testes automatizados para as funcionalidades `LessonService`. Esses testes visam garantir a correta funcionalidade e integridade das operações relacionadas ao gerenciamento de aulas na ONG Gerando Falcões.

## Testes Implementados

### Service Tests

#### Teste 1: getAllLessons retorna todas as aulas

- **Objetivo:** Verificar se a lista completa de aulas é retornada.
- **Pré-condição:** Banco de dados contém registros de aulas.
- **Procedimento de Teste:** Invocar o método `getAllLessons`.
- **Resultado Esperado:** Uma lista contendo todos os registros de aulas é retornada.
- **Resultado Obtido:** Lista de aulas retornada com sucesso.
- **Pós-condição:** Nenhuma alteração no estado do banco de dados.

#### Teste 2: getLessonByClass retorna aulas de uma turma específica

- **Objetivo:** Confirmar que as aulas de uma turma específica são retornadas corretamente.
- **Pré-condição:** ID de turma válido é fornecido.
- **Procedimento de Teste:** Executar o método `getLessonByClass` com um ID de turma.
- **Resultado Esperado:** Lista de aulas pertencentes à turma especificada é retornada.
- **Resultado Obtido:** Aulas da turma especificada retornadas com sucesso.
- **Pós-condição:** Nenhuma alteração no estado do banco de dados.

## Executando os Testes

Utilizando o projeto FLY, esse teste foi realizado dentro de ["tests"](src/backend/src/tests/lesson.test.js)
Para executar os testes, é utilizado o comando abaixo no terminal:

```bash
npm test
```

## Resultados obtidos

Os testes foram executados com sucesso, confirmando a eficácia das funcionalidades de gerenciamento de aulas no `LessonService`. Todos os cenários testados foram abordados e passaram sem erros.