# Documentação de Testes Automatizados

## Introdução

Esta seção da documentação foca na descrição detalhada dos testes automatizados desenvolvidos para as funcionalidades `LeaderService` e `LeaderController`. Estes testes visam assegurar a correta funcionalidade e integridade das operações relacionadas ao gerenciamento dos líderes na ONG Gerando Falcões.

## Testes Implementados

### Service Tests

#### Teste 1: getAllLeaders retorna todos os líderes

- **Objetivo:** Verificar se a lista completa de líderes é retornada.
- **Pré-condição:** Banco de dados contém registros de líderes.
- **Procedimento de Teste:** Invocar o método `getAllLeaders`.
- **Resultado Esperado:** Uma lista contendo todos os registros de líderes é retornada.
- **Resultado Obtido:** Lista de líderes retornada com sucesso.
- **Pós-condição:** Nenhuma alteração no estado do banco de dados.

### Controller Tests

#### Teste 2: getAllLeaders manipula requisição e resposta corretamente

- **Objetivo:** Confirmar que a rota de obtenção de todos os líderes funciona conforme esperado.
- **Pré-condição:** Rota `/leaders` é acessada.
- **Procedimento de Teste:** Enviar uma requisição GET para a rota `/leaders`.
- **Resultado Esperado:** O controlador responde com a lista completa de registros de líderes.
- **Resultado Obtido:** Lista completa de líderes retornada com sucesso.
- **Pós-condição:** Estado do banco de dados inalterado.

## Executando os Testes

Utilizando o projeto FLY, esse teste foi realizado dentro de ["tests"](src/backend/src/tests/leader.test.js)
Para executar os testes, é utilizado o comando abaixo no terminal:

```bash
npm test
```

## Resultados obtidos

A execução dos testes resultou em um sucesso total, validando as funcionalidades de gerenciamento de líderes implementadas. Todos os cenários testados foram abordados e passaram sem erros, assegurando que tanto o `LeaderService` quanto o `LeaderController` funcionam conforme o esperado.
