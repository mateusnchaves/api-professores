// Controller: contém a LÓGICA de cada endpoint.
// As rotas (routes) só dizem "qual URL chama qual função"; o trabalho é feito aqui.

const professores = require("../data/professores");

// GET /professores
// Lista todos os professores.
function listarTodos(req, res) {
  res.json(professores);
}

// GET /professores/:id
// Busca um professor pelo id que vem na URL (req.params.id).
function buscarPorId(req, res) {
  const { id } = req.params;
  const professor = professores.find((p) => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  res.json(professor);
}

// GET /professores/:id/turmas
// Retorna apenas o array de turmas do professor.
function listarTurmas(req, res) {
  const { id } = req.params;
  const professor = professores.find((p) => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  res.json(professor.turmas);
}

// PUT /professores/:id
// Atualiza os dados do professor com o que vier no corpo da requisição (req.body).
// Só altera os campos enviados; o id nunca é alterado.
function atualizar(req, res) {
  const { id } = req.params;
  const index = professores.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  const { nome, idade, departamento, turmas } = req.body;

  if (nome !== undefined) professores[index].nome = nome;
  if (idade !== undefined) professores[index].idade = idade;
  if (departamento !== undefined) professores[index].departamento = departamento;
  if (turmas !== undefined) professores[index].turmas = turmas;

  res.json({
    mensagem: "Professor atualizado com sucesso",
    professor: professores[index]
  });
}

// POST /professores/:id/turmas
// Adiciona uma nova turma (vinda do req.body) no array de turmas do professor.
function adicionarTurma(req, res) {
  const { id } = req.params;
  const professor = professores.find((p) => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  const { codigo, disciplina, alunos } = req.body;

  if (!codigo || !disciplina) {
    return res.status(400).json({ mensagem: "Informe codigo e disciplina da turma" });
  }

  const novaTurma = {
    codigo,
    disciplina,
    alunos: alunos || []
  };

  professor.turmas.push(novaTurma);

  res.status(201).json({
    mensagem: "Turma adicionada com sucesso",
    professor
  });
}

// GET /professores/departamento/:departamento
// Filtra os professores pelo departamento (sem diferenciar maiúsculas/minúsculas).
function listarPorDepartamento(req, res) {
  const { departamento } = req.params;

  const resultado = professores.filter(
    (p) => p.departamento.toLowerCase() === departamento.toLowerCase()
  );

  res.json(resultado);
}

// DELETE /professores/:id
// Remove o professor do array usando splice.
function remover(req, res) {
  const { id } = req.params;
  const index = professores.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  const [removido] = professores.splice(index, 1);

  res.json({
    mensagem: "Professor removido com sucesso",
    professor: removido
  });
}

module.exports = {
  listarTodos,
  buscarPorId,
  listarTurmas,
  atualizar,
  adicionarTurma,
  listarPorDepartamento,
  remover
};
