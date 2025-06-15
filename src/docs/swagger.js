const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gerenciamento de Pedidos',
      version: '1.0.0',
      description: 'Sistema de Gerenciamento de Pedidos usando Node.js, Express e Sequelize, com autenticação JWT, e documentação Swagger. Usando MVC, com rotas para usuários, produtos, pedidos e categorias.',
    },
    servers: [
      {
        url: 'http://localhost:3000/', 
        description: 'Servidor de Desenvolvimento',
      }
    ],

    tags: [
      {
        name: 'Usuários',
        description: 'Operações de gerenciamento de usuários.'
      },
      {
        name: 'Produtos',
        description: 'Operações de gerenciamento de produtos.'
      },
      {
        name: 'Pedidos',
        description: 'Operações de gerenciamento de pedidos.'
      },
      {
        name: 'Autenticação',
        description: 'Operações de login de usuários.'
      },
      {
        name: 'Categorias',
        description: 'Gerenciamento de categorias de produtos.'
      }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Autenticação baseada em token JWT. Insira seu token no formato **Bearer TOKEN**',
        },
      },
      schemas: {

        User: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              format: 'int32',
              description: 'ID auto-incrementável do usuário.',
              example: 1
            },
            name: {
              type: 'string',
              description: 'Nome completo do usuário.',
              example: 'Maria da Silva'
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Endereço de e-mail único do usuário.',
              example: 'maria@example.com'
            },
            password: { 
              type: 'string',
              format: 'password',
              description: 'Senha do usuário (criptografada no banco de dados).',
              example: 'senhaSegura123'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data e hora de criação do usuário.',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Última data e hora de atualização do usuário.',
            },
          },
        },

        Product: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              format: 'int32',
              description: 'ID auto-incrementável do produto.',
              example: 101
            },
            name: {
              type: 'string',
              description: 'Nome do produto.',
              example: 'Smart TV 4K'
            },
            price: {
              type: 'number',
              format: 'float',
              description: 'Preço do produto.',
              example: 1999.99
            },
            category_id: {
              type: 'integer',
              format: 'int32',
              description: 'ID da categoria à qual o produto pertence.',
              example: 1
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data e hora de criação do produto.',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Última data e hora de atualização do produto.',
            },
          },
        },

        Category: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              format: 'int32',
              description: 'ID auto-incrementável da categoria.',
              example: 1
            },
            name: {
              type: 'string',
              description: 'Nome da categoria.',
              example: 'Eletrônicos'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data e hora de criação da categoria.',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Última data e hora de atualização da categoria.',
            },
          },
        },

        Order: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              format: 'int32',
              description: 'ID auto-incrementável do pedido.',
              example: 1
            },
            user_id: {
              type: 'integer',
              format: 'int32',
              description: 'ID do usuário que fez o pedido.',
              example: 1
            },
            product_id: {
              type: 'integer',
              format: 'int32',
              description: 'ID do produto no pedido.',
              example: 101
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data e hora de criação do pedido.',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Última data e hora de atualização do pedido.',
            },
          },
        },

        LoginRequest: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: {
              type: 'string',
              format: 'email',
              example: 'usuario@example.com',
              description: 'E-mail do usuário para login.'
            },
            password: {
              type: 'string',
              format: 'password',
              example: 'senha123',
              description: 'Senha do usuário para login.'
            },
          },
        },

        LoginResponse: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
              description: 'Token JWT para autenticação em rotas protegidas.',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3ODkwNTYwMCwiZXhwIjoxNjc4OTA5MjAwfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            },
          },
        },

        SuccessMessage: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true,
              description: 'Indica se a operação foi bem-sucedida.'
            },
            message: {
              type: 'string',
              example: 'Operação realizada com sucesso.',
              description: 'Mensagem de sucesso.'
            },
          },
        },

        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Mensagem de erro.',
              example: 'Dados inválidos ou recurso não encontrado.'
            },
          },
        },
      },
    },
  },

  apis: ['./src/routes/*.js', './src/controllers/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;