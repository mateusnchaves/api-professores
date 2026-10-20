const express = require("express");
const professoresRoutes = require("./routes/professoresRoutes");

const app = express();
const PORT = 3000;

// Permite que a API leia JSON enviado no corpo da requisição (req.body).
app.use(express.json());

// Todas as rotas de professores começam com /professores.
app.use("/professores", professoresRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
