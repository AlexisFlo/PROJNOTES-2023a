// Styles loading
/* eslint-disable no-console */
import './styles/style.css';
/* eslint-disable */
// Importing Materialize CSS styles
import 'materialize-css/dist/css/materialize.css';
// Importing Materialize scripts
import 'materialize-css/dist/js/materialize';
/* eslint-enable */
// Script para borrar proyecto
import deleteProject from './domains/project.dashboard';

// Initializing Materialize scripts for interactivity
M.AutoInit();

// Cargando script en caso de que la URL sea '/project'
if (window.location.pathname === '/project') {
  window.deleteProject = deleteProject;
}

console.log('Webpack Working Middleware!!! 📦');
