// backend/controllers/authController.js
exports.register = (req, res) => {
  // Aquí iría la lógica para registrar un usuario.
  // Lo haremos de forma simple, solo para ilustrar.
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).send('Email y password son obligatorios');
  }
  
  // Simulación de registro exitoso
  res.status(201).send(`Usuario con email ${email} registrado`);
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).send('Email y password son obligatorios');
  }
  
  // Simulación de login exitoso
  res.status(200).send(`Usuario con email ${email} logueado`);
};