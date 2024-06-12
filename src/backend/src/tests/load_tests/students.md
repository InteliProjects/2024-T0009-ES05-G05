## Teste de Carga - Busca de Estudantes

### Plano de Teste de Carga:

- **Cenário de Teste:** O teste simula a busca de estudantes no sistema.
- **Metodologia para Simular Usuários:** Utilizando o Artillery, o teste é configurado para gerar uma taxa de chegada de 5 requisições por segundo durante 60 segundos.
- **Aspectos Específicos do Sistema Testados:** Avaliamos a capacidade do sistema em lidar com a busca de estudantes sob carga simulada.

### Relatório de Resultados:

- **Tempos de Resposta:**
  - Mínimo: 310 ms
  - Máximo: 9.928 ms
  - Média: 5.108,6 ms
  - Mediana: 4.867 ms
  - Percentil 95: 9.416,8 ms
  - Percentil 99: 9.999,2 ms

- **Erros Encontrados:** 216 erros de ETIMEDOUT durante a execução do teste.

- **Problemas de Desempenho Identificados:** A taxa de erros ETIMEDOUT indica que o sistema teve dificuldades em lidar com a carga de requisições para buscar estudantes, resultando em timeouts e falhas de conexão.

### Conclusão:

O teste de carga demonstrou que o sistema enfrenta problemas de desempenho ao lidar com uma carga de 5 requisições por segundo durante 60 segundos para a busca de estudantes. Recomenda-se otimizações no sistema para melhorar a capacidade de resposta e reduzir o número de erros de conexão durante essa operação.
