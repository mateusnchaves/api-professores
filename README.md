# API de Gerenciamento de Professores

API REST desenvolvida com **Node.js** e **Express** para gerenciar professores de uma escola, suas turmas, disciplinas e alunos matriculados. Os dados ficam armazenados **em memória** (arrays e objetos JavaScript), sem banco de dados — as alterações permanecem enquanto a aplicação estiver em execução.

**Autor:** Mateus Novais Chaves

## Estrutura do projeto

```
api-professores/
├── src/
│   ├── server.js                         # Configura o Express e sobe o servidor
│   ├── routes/
│   │   └── professoresRoutes.js          # Define as rotas (método + caminho → função)
│   ├── controllers/
│   │   └── professoresController.js      # Lógica de cada endpoint
│   └── data/
│       └── professores.js                # Dados em memória
├── prints/                               # Capturas de tela dos testes no Postman
├── api-professores.postman_collection.json
├── package.json
└── README.md
```

## Estrutura de um professor

```json
{
  "id": "1",
  "nome": "Mateus Novais Chaves",
  "idade": 19,
  "departamento": "Computação",
  "turmas": [
    { "codigo": "1A", "disciplina": "Programação Web", "alunos": ["Ana", "Bruno", "Carlos"] }
  ]
}
```

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor
npm start
```

O servidor sobe em `http://localhost:3000`.

## Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/professores` | Lista todos os professores |
| GET | `/professores/:id` | Busca um professor pelo ID |
| GET | `/professores/:id/turmas` | Lista as turmas de um professor |
| PUT | `/professores/:id` | Atualiza os dados de um professor |
| POST | `/professores/:id/turmas` | Adiciona uma turma a um professor |
| GET | `/professores/departamento/:departamento` | Lista professores de um departamento |
| DELETE | `/professores/:id` | Remove um professor |

Quando o ID informado não existe, a API responde com status **404** e:

```json
{ "mensagem": "Id não existente" }
```

### Exemplos de corpo (JSON)

**PUT /professores/1**
```json
{ "idade": 20, "departamento": "Engenharia" }
```

**POST /professores/1/turmas**
```json
{ "codigo": "5E", "disciplina": "APIs com Node.js", "alunos": ["Paula", "Rafael"] }
```

## Testes

O arquivo `api-professores.postman_collection.json` pode ser importado no Postman ou no Thunder Client com todas as requisições prontas. As capturas de tela dos testes estão na pasta [`prints`](./prints).
