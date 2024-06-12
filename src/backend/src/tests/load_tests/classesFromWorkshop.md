## Teste de Carga - Buscar turmas por ID de oficina

### Plano de Teste de Carga:

- **Cenário de Teste:** O teste simula a busca de turmas por ID de oficina no sistema.
- **Metodologia para Simular Usuários:** Utilizando o Artillery, o teste é configurado para gerar uma taxa de chegada de 10 requisições por segundo durante 60 segundos.
- **Aspectos Específicos do Sistema Testados:** Avaliamos a capacidade do sistema em lidar com múltiplas requisições simultâneas para buscar turmas por ID de oficina.

### Relatório de Resultados:

- **Tempos de Resposta:**
  - Mínimo: 315 ms
  - Máximo: 10.553 ms
  - Média: 5.565,2 ms
  - Mediana: 5.168 ms
  - Percentil 95: 10.407,3 ms
  - Percentil 99: 10.407,3 ms

- **Erros Encontrados:** 600 erros de ETIMEDOUT durante a execução do teste.

- **Problemas de Desempenho Identificados:** A taxa de erros ETIMEDOUT indica que o sistema teve dificuldades em lidar com a carga de requisições, resultando em timeouts e falhas de conexão.

### Conclusão:

O teste de carga demonstrou que o sistema enfrenta problemas de desempenho ao lidar com uma carga de 10 requisições por segundo durante 60 segundos. Recomenda-se otimizações no sistema para melhorar a capacidade de resposta e reduzir o número de erros de conexão.
