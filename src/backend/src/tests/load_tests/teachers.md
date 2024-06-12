## Teste de Carga - Busca de Professores

### Plano de Teste de Carga:

- **Cenário de Teste:** O teste simula a busca de professores no sistema.
- **Metodologia para Simular Usuários:** Utilizando o Artillery, o teste é configurado para gerar uma taxa de chegada de 5 requisições por segundo durante 60 segundos.
- **Aspectos Específicos do Sistema Testados:** Avaliamos a capacidade do sistema em lidar com a busca de professores sob carga simulada.

### Relatório de Resultados:

- **Tempos de Resposta:**
  - Mínimo: 301 ms
  - Máximo: 2.813 ms
  - Média: 1.552,3 ms
  - Mediana: 1.556,5 ms
  - Percentil 95: 2.566,3 ms
  - Percentil 99: 2.566,3 ms

- **Erros Encontrados:** Não foram registrados erros durante a execução do teste.

### Conclusão:

O teste de carga demonstrou que o sistema é capaz de lidar com a busca de professores sob uma carga de 5 requisições por segundo durante 60 segundos sem apresentar erros significativos de tempo de resposta ou falhas de conexão.
