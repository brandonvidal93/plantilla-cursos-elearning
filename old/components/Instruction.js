import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Instruction.scss';

library.add(fas, fab, far);

class Instruction extends Component {
  showInstruction = () => {
    const { dataPage } = this.props;

    // console.log(dataPage.type);
    switch (dataPage.type) {
      case 'mouse':
        return(
          <div className='instructionMouse instruction d-Flex j-S aI-C' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
            <div>
              <span className = 'fa-layers icon mR-025' >
                <FontAwesomeIcon icon="circle" style = { {'color': dataPage.color} } />
                <FontAwesomeIcon icon="mouse-pointer" inverse transform="shrink-6" className = 'color-23' />
              </span>
            </div>
            <div className = 'mT-025 mB-025'>
              <h5 className = 'fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
            </div>
          </div>
        );
      default:
        return(
          <div className='instructionInfo instruction d-Flex j-S aI-C' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
            <div>
              <span className = 'fa-layers icon mR-025' >
                <FontAwesomeIcon icon="circle" style = { {'color': dataPage.color} } />
                <FontAwesomeIcon icon="info" inverse transform="shrink-6" />
              </span>
            </div>
            <div className = 'mT-025 mB-025'>
              <h5 className = 'fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
            </div>
          </div>
        );
    }
  }

  render() {
    // const { dataPage } = this.props;
    // console.log(dataPage);
    return (
      this.showInstruction()
    );
  }
}

export default Instruction;
