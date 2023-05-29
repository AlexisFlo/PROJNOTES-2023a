// Action methods
// GET "/projects/list"
const projects = (req, res) => {
  res.send(' ⚠️ UNDER CONSTRUCTION: GET /projects ⚠️ ');
};

// GET "/porjects/add"
const add = (req, res) => {
  res.render('project/addView');
};

// Controlador user
export default {
  // Action methods
  projects,
  add,
};
