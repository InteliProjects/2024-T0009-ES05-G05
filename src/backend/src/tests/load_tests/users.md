## Teste de Carga - Login de Usuários

### Plano de Teste de Carga:

- **Cenário de Teste:** O teste simula o login de usuários no sistema.
- **Metodologia para Simular Usuários:** Utilizando o Artillery, o teste é configurado para gerar uma taxa de chegada de 5 requisições por segundo durante 60 segundos, com dados de login fornecidos a partir do arquivo "usuarios.csv".
- **Aspectos Específicos do Sistema Testados:** Avaliamos a capacidade do sistema em lidar com o processo de login de usuários sob carga simulada.

### Relatório de Resultados:

- **Tempos de Resposta:**
  - Mínimo: 350 ms
  - Máximo: 9.755 ms
  - Média: 5.219,8 ms
  - Mediana: 5.272,4 ms
  - Percentil 95: 9.230,4 ms
  - Percentil 99: 9.801,2 ms

- **Erros Encontrados:** 206 erros de ETIMEDOUT durante a execução do teste.

- **Problemas de Desempenho Identificados:** A taxa de erros ETIMEDOUT indica que o sistema teve dificuldades em lidar com a carga de requisições de login de usuários, resultando em timeouts e falhas de conexão.

### Conclusão:

O teste de carga demonstrou que o sistema enfrenta problemas de desempenho ao lidar com uma carga de 5 requisições por segundo durante 60 segundos para o processo de login de usuários. Recomenda-se otimizações no sistema para melhorar a capacidade de resposta e reduzir o número de erros de conexão durante o login.
