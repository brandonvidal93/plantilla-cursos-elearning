import React from 'react';

// Estilos
import './Footer.scss';

const Footer = ({navegacionCurso}) => {
  console.log('Desde Footer ' + navegacionCurso);

  const handleNavegacionCurso = e => {
    e.preventDefault();

    navegacionCurso(e.target.id);
  }

  return (
    <div className='footer'>Footer</div>
  )
}

export default Footer;