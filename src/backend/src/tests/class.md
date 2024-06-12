# Documentação de Testes Automatizados

## Introdução

Esta seção da documentação tem como objetivo fornecer uma descrição detalhada dos testes automatizados implementados para as funcionalidades de `ClassService` e `ClassController`, baseados no uso de classes para representar os dados de turmas.

## Testes Implementados

### Service Tests

- **Descrição:** Verifica se o serviço retorna corretamente a lista de turmas.
- **Cenário Testado:** Chamada do método `getAllClasses` do serviço.
- **Expectativa:** O serviço deve retornar uma lista de objetos `Class` representando as turmas existentes.

### Controller Tests

- **Descrição:** Confirma que o controlador responde corretamente com a lista de turmas para a rota especificada.
- **Cenário Testado:** Requisição GET para a rota `/classes`.
- **Expectativa:** O controlador deve responder com a lista de turmas existentes, representadas como objetos `Class`.

- **Descrição:** Assegura que o controlador lida com erros apropriadamente.
- **Cenário Testado:** Simulação de uma falha no serviço ao chamar `getAllClasses`.
- **Expectativa:** O controlador deve responder com o status HTTP 500 e a mensagem de erro correspondente em caso de falha no serviço.

## Executando os Testes

Utilizando o projeto FLY, esse teste foi realizado dentro de ["tests"](src/backend/src/tests/class.test.js)
Para executar os testes, é utilizado o comando abaixo no terminal:

```bash
npm test
```

## Resultados Obtidos

Todos os testes foram executados com sucesso, validando a integridade e funcionalidade das funcionalidades de ClassService e ClassController baseadas na abordagem de classes para representar turmas.

<img src='../../../frontend/src/imagens/teste_bem_sucedido.png'>