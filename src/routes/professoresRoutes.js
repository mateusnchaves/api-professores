// Rotas: ligam cada método HTTP + caminho a uma função do controller.
// Este router é montado em "/professores" no server.js,
// então "/" aqui significa "/professores".

const express = require("express");
const controller = require("../controllers/professoresController");

const router = express.Router();

// A rota de departamento vem ANTES de "/:id".
// Se viesse depois, o Express entenderia "departamento" como se fosse um id.
router.get("/departamento/:departamento", controller.listarPorDepartamento);

router.get("/", controller.listarTodos);
router.get("/:id", controller.buscarPorId);
router.get("/:id/turmas", controller.listarTurmas);
router.put("/:id", controller.atualizar);
router.post("/:id/turmas", controller.adicionarTurma);
router.delete("/:id", controller.remover);

module.exports = router;
