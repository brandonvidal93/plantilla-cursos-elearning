import React from 'react';

import PageContent from '../layout/PageContent';
import Footer from '../layout/Footer';

const Content = ({navegacionCurso}) => {
  return (
    <div className='content'>
      <PageContent />
      <Footer
        navegacionCurso = {navegacionCurso}
      />
    </div>
  )
}

export default Content;