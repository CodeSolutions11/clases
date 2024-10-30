import React from 'react';

const Test = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="content">
        <h1>Contenido principal</h1>
        <p>Aquí va el contenido principal de la página</p>
      </div>
    </div>
  );
};

export default Test;
