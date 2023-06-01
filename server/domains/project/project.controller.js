// Action methods
// GET "/project/list"
const project = (req, res) => {
  res.send(' ⚠️ UNDER CONSTRUCTION: GET /project ⚠️ ');
};

// GET "/porject/add"
const add = (req, res) => {
  res.render('project/addView');
};

// POST "/project/add"
const addPost = (req, res) => {
  // Extrayendo la información
  // del formulario
  const { name, description } = req.body;
  // Regresando al cliente la información recabada
  res.status(200).json({
    name,
    description,
  });
};

// Controlador user
export default {
  // Action methods
  project,
  add,
  addPost,
};
