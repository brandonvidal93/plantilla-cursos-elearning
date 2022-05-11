import React, {useState, useEffect} from 'react';

// ESTILOS
import './App.scss';

// DATOS
import DataCourse from './data/data.json';

// Variables globales para el curso
const limiteCurso = Object.keys(DataCourse).length - 1;
const unidadesCurso = DataCourse.page0.units;

const App = () => {
  const [calificacion, setCalificacion] = useState(0);
  const [index, setIndex] = useState(0);
  const [paginas, setPaginas] = useState(limiteCurso);
  const [unidades, setUnidades] = useState(unidadesCurso);
  const [unidadActual, setUnidadActual] = useState(0);
  const [unidadSiguiente, setUnidadSiguiente] = useState(0);
  const [unidadFinalizada, setUnidadFinalizada] = useState([true]);
  const [unidadHabilitada, setUnidadHabilitada] = useState([true]);
  const [actividadFinalizada, setActividadFinalizada] = useState([true, true, true, true, true, true]);

  // METODO DE SEGUIMIENTO - SOLO DE VISUALIZACIÓN
  const _stateCourse = () => {
    console.clear();
    const messageState = ` SEGUIMIENTO DEL CURSO
    - Calificación:          -> ${calificacion}
    - Index                  -> ${index}
    - Páginas                -> ${paginas}
    - Unidades o Temas       -> ${unidades}
    - Unidad Actual          -> ${unidadActual}
    - Siguiente Unidad       -> ${unidadSiguiente} `;
    console.log(messageState);
    console.log();
  }

  return (
    // CUERPO PRINCIPAL DE LA APP
    <div className = 'App mT-1' > 
      { _stateCourse() }
      Render desde App
    </div>
  );
}

export default App;
