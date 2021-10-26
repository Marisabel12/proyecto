import React from 'react';
import './App.css';
import Navbar from './componentes/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Estudiantes from './paginas/Estudiantes';
import Docente from './paginas/Docentes';
import Materias from './paginas/Materias';
import home from './paginas/home';


function App() {
  return (
    <>    
      <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={home}/>
      <Route path='/Estudiantes' component={Estudiantes}/>
      <Route path='/Docentes' component={Docente}/>
      <Route path='/Materias' component={Materias}/>
      </Switch> 
      </Router>
    </>
  );
}

export default App;