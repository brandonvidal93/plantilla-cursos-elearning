import React, { Component } from 'react';
import Footer from './Footer';

import './Content.scss'

// IMPORTAR LOS COMPONENTES DE CADA PÁGINA
import {
  Page0, Page1, Page2, Page3, Page4, Page5
} from './pages/Pages';

class Content extends Component {
  showContent = () => {
    const { actualIndex, data } = this.props;
    switch (actualIndex) {
      // COVER -------------------------------------------------------------------------------
      case 0: return ( <Page0 dataPage = { data.page0 } /> );

      // INS ---------------------------------------------------------------------------------
      case 1: return( <Page1 dataPage = { data.page1 } /> );

      case 2: return( <Page2 dataPage = { data.page2 } /> );

      case 3: return( <Page3 dataPage = { data.page3 } /> );

      case 4: return( <Page4 dataPage = { data.page4 } /> );

      case 5: return( <Page5 dataPage = { data.page5 } /> );

      default:
        break;
    }
  }

  render() {
    const { actualIndex, bgFooter, clickNavigation, data, endActivities, imageFooter, labelFooter, limitNavigation } = this.props;

    return (
      <div className='content'>
        { /* LLAMADO DE LA FUNCION QUE RETORNA EL CONTENT */ }
        { this.showContent() }

          {/* CARGA DEL COMPOMENTE FOOTER */}
        <Footer
          actualIndex = { actualIndex }
          bgFooter = { bgFooter }
          clickNavigation = { clickNavigation }
          data = { data }
          endActivities = { endActivities }
          getPos = { this.getPos }
          imageFooter = { imageFooter }
          labelFooter = { labelFooter }
          limitNavigation = { limitNavigation } />
      </div>
    );
  }
}

export default Content;
