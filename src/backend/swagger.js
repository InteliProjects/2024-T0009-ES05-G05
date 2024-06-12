module.exports = {
    openapi: '3.0.0',
    info: {
      title: 'API do projeto FLY',
      version: '1.0.0',
      description: 'API documentation',
    },
    components: {
      schemas: {
        Leader: {
          type: 'object',
          properties: {
            id_lider: { type: 'integer' },
            fk_id_ong: { type: 'integer' },
            nome: { type: 'string' },
            email: { type: 'string' },
            data_nascimento: { type: 'string', format: 'date' },
            telefone: { type: 'string' },
            cpf: { type: 'string' },
            genero: { type: 'string' },
            etnia: { type: 'string' },
            endereco: { type: 'string' },
          },
        },
        Workshop: {
          type: 'object',
          properties: {
            id_oficina: { type: 'integer' },
            fk_id_ong: { type: 'integer' },
            nome_oficina: { type: 'string' },
            categoria: { type: 'string' },
          },
        },
        AttendanceList: {
          type: 'object',
          properties: {
            fk_id_aluno: { type: 'integer' },
            fk_id_aula: { type: 'integer' },
            presenca: { type: 'boolean' },
            fk_id_oficina: { type: 'integer' },
          },
        },
        Student: {
          type: 'object',
          properties: {
            id_aluno: { type: 'integer' },
            nome: { type: 'string' },
            email: { type: 'string' },
            data_nascimento: { type: 'string', format: 'date' },
            telefone: { type: 'string' },
            cpf: { type: 'string' },
            genero: { type: 'string' },
            etnia: { type: 'string' },
            endereco: { type: 'string' },
          },
        },
        Teacher: {
          type: 'object',
          properties: {
            id_professor: { type: 'integer' },
            nome: { type: 'string' },
            email: { type: 'string' },
            data_nascimento: { type: 'string', format: 'date' },
            telefone: { type: 'string' },
            cpf: { type: 'string' },
            genero: { type: 'string' },
            etnia: { type: 'string' },
            endereco: { type: 'string' },
          },
        },
        Ong: {
          type: 'object',
          properties: {
            id_ong: { type: 'integer' },
            nome: { type: 'string' },
            email: { type: 'string' },
            responsavel: { type: 'string' },
            telefone: { type: 'string' },
            cnpj: { type: 'string' },
            endereco: { type: 'string' },
          },
        },
      },
    },
    paths: {
      '/leaders': {
        get: {
          summary: 'Obter todos os líderes',
          description: 'Retorna uma lista de todos os líderes cadastrados.',
          responses: {
            '200': {
              description: 'Lista de líderes',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Leader',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/workshops': {
        get: {
          summary: 'Obter todas as oficinas',
          description: 'Retorna uma lista de todas as oficinas disponíveis.',
          responses: {
            '200': {
              description: 'Lista de oficinas',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Workshop',
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: 'Adicionar uma nova oficina',
          description: 'Adiciona uma nova oficina à base de dados.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Workshop',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Oficina adicionada com sucesso.',
            },
            '500': {
              description: 'Erro interno do servidor.',
            },
          },
        },
        delete: {
          summary: 'Excluir oficina por ID',
          description: 'Exclui uma oficina da base de dados pelo seu ID.',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              description: 'ID da oficina a ser excluída',
              schema: {
                type: 'integer',
              },
            },
          ],
          responses: {
            '200': {
              description: 'Oficina excluída com sucesso.',
            },
            '404': {
              description: 'Oficina não encontrada.',
            },
          },
        },
      },
      '/workshops/getById/{id}': {
        get: {
          summary: 'Obter oficina por ID',
          description: 'Retorna uma oficina específica pelo seu ID.',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              description: 'ID da oficina a ser obtida',
              schema: {
                type: 'integer',
              },
            },
          ],
          responses: {
            '200': {
              description: 'Detalhes da oficina',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Workshop',
                  },
                },
              },
            },
            '404': {
              description: 'Oficina não encontrada.',
            },
          },
        },
      },
      '/workshops/total': {
        get: {
          summary: 'Obter total de oficinas',
          description: 'Retorna o número total de oficinas na base de dados.',
          responses: {
            '200': {
              description: 'Total de oficinas',
              content: {
                'application/json': {
                  schema: {
                    type: 'integer',
                  },
                },
              },
            },
          },
        },
      },
      '/attendanceList': {
        get: {
          summary: 'Obter todas as presenças',
          description: 'Retorna uma lista de todas as presenças registradas.',
          responses: {
            '200': {
              description: 'Lista de presenças',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/AttendanceList',
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: 'Adicionar uma nova presença',
          description: 'Adiciona uma nova presença à base de dados.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/AttendanceList',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Presença adicionada com sucesso.',
            },
            '500': {
              description: 'Erro interno do servidor.',
            },
          },
        },
      },
      '/students/get': {
        get: {
          summary: 'Obter todos os estudantes',
          description: 'Retorna uma lista de todos os estudantes cadastrados.',
          responses: {
            '200': {
              description: 'Lista de estudantes',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Student',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/students/add': {
        post: {
          summary: 'Adicionar um novo estudante',
          description: 'Adiciona um novo estudante à base de dados.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Student',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Estudante adicionado com sucesso.',
            },
            '500': {
              description: 'Erro interno do servidor.',
            },
          },
        },
      },
      '/students/{id}': {
        put: {
          summary: 'Atualizar estudante por ID',
          description: 'Atualiza um estudante pelo seu ID.',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              description: 'ID do estudante a ser atualizado',
              schema: {
                type: 'integer',
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Student',
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Estudante atualizado com sucesso.',
            },
            '404': {
              description: 'Estudante não encontrado.',
            },
            '500': {
              description: 'Erro interno do servidor.',
            },
          },
        },
        delete: {
          summary: 'Excluir estudante por ID',
          description: 'Exclui um estudante da base de dados pelo seu ID.',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              description: 'ID do estudante a ser excluído',
              schema: {
                type: 'integer',
              },
            },
          ],
          responses: {
            '200': {
              description: 'Estudante excluído com sucesso.',
            },
            '404': {
              description: 'Estudante não encontrado.',
            },
            '500': {
              description: 'Erro interno do servidor.',
            },
          },
        },
      },
      '/students/studentIds/{id_alunos}': {
        get: {
          summary: 'Obter estudantes por IDs',
          description: 'Retorna uma lista de estudantes por seus IDs.',
          parameters: [
            {
              in: 'path',
              name: 'id_alunos',
              required: true,
              description: 'IDs dos estudantes',
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            '200': {
              description: 'Lista de estudantes',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Student',
                    },
                  },
                },
              },
            },
            '500': {
              description: 'Erro interno do servidor.',
            },
          },
        },
      },
      '/students/total': {
        get: {
          summary: 'Obter total de estudantes',
          description: 'Retorna o número total de estudantes na base de dados.',
          responses: {
            '200': {
              description: 'Total de estudantes',
              content: {
                'application/json': {
                  schema: {
                    type: 'integer',
                  },
                },
              },
            },
          },
        },
      },
      '/teachers/get': {
        get: {
          summary: 'Obter todos os professores',
          description: 'Retorna uma lista de todos os professores cadastrados.',
          responses: {
            '200': {
              description: 'Lista de professores',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Teacher',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/teachers/add': {
        post: {
          summary: 'Adicionar um novo professor',
          description: 'Adiciona um novo professor à base de dados.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Teacher',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Professor adicionado com sucesso.',
            },
            '500': {
              description: 'Erro interno do servidor.',
            },
          },
        },
      },
      '/teachers/{id}': {
        put: {
          summary: 'Atualizar professor por ID',
          description: 'Atualiza um professor pelo seu ID.',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              description: 'ID do professor a ser atualizado',
              schema: {
                type: 'integer',
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/TeacherInput',
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Professor atualizado com sucesso.',
            },
            '404': {
              description: 'Professor não encontrado.',
            },
            '500': {
              description: 'Erro interno do servidor.',
            },
          },
        },
        delete: {
          summary: 'Excluir professor por ID',
          description: 'Exclui um professor da base de dados pelo seu ID.',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              description: 'ID do professor a ser excluído',
              schema: {
                type: 'integer',
              },
            },
          ],
          responses: {
            '200': {
              description: 'Professor excluído com sucesso.',
            },
            '404': {
              description: 'Professor não encontrado.',
            },
            '500': {
              description: 'Erro interno do servidor.',
            },
          },
        },
      },
      '/teachers/teacherIds/{id_professores}': {
        get: {
          summary: 'Obter professores por IDs',
          description: 'Retorna uma lista de professores por seus IDs.',
          parameters: [
            {
              in: 'path',
              name: 'id_professores',
              required: true,
              description: 'IDs dos professores',
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            '200': {
              description: 'Lista de professores',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Teacher',
                    },
                  },
                },
              },
            },
            '500': {
              description: 'Erro interno do servidor.',
            },
          },
        },
      },
      '/teachers/total': {
        get: {
          summary: 'Obter total de professores',
          description: 'Retorna o número total de professores na base de dados.',
          responses: {
            '200': {
              description: 'Total de professores',
              content: {
                'application/json': {
                  schema: {
                    type: 'integer',
                  },
                },
              },
            },
          },
        },
      },
      '/ongs': {
        get: {
          summary: 'Obter todas as ONGs',
          description: 'Retorna uma lista de todas as ONGs cadastradas.',
          responses: {
            '200': {
              description: 'Lista de ONGs',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Ong',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  