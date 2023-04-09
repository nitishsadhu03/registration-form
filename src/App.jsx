import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

function App() {
  return(
    <>
      <div className="content-area">
        <LeftContent/>
        <RightContent/>
      </div>
    </>
  );
}

export default App;