// Dados armazenados em memória (array de objetos).
// Enquanto o servidor estiver rodando, qualquer alteração feita pela API fica salva aqui.
// Ao reiniciar o servidor, os dados voltam a este estado inicial.

const professores = [
  {
    id: "1",
    nome: "Mateus Novais Chaves",
    idade: 19,
    departamento: "Computação",
    turmas: [
      { codigo: "1A", disciplina: "Programação Web", alunos: ["Ana", "Bruno", "Carlos"] },
      { codigo: "2B", disciplina: "Banco de Dados", alunos: ["Daniela", "Eduardo"] }
    ]
  },
  {
    id: "2",
    nome: "Fernanda Lima",
    idade: 41,
    departamento: "Matemática",
    turmas: [
      { codigo: "3C", disciplina: "Cálculo I", alunos: ["Gabriel", "Helena", "Igor"] }
    ]
  },
  {
    id: "3",
    nome: "Ricardo Souza",
    idade: 35,
    departamento: "Computação",
    turmas: [
      { codigo: "4D", disciplina: "Estrutura de Dados", alunos: ["João", "Larissa"] }
    ]
  }
];

module.exports = professores;
