import { Link } from 'react-router-dom';
import React from 'react';


function NavigationComponent(props) {

 

  return (
      <div style={{ backgroundColor: '#9DD7FF'}}>
        <header className="container-fluid py-3" style={{ backgroundColor: '#6495ED' }}>
          <div className="row">
            <ul className="nav">
              <li className="nav-item">
                <Link to='/' className="nav-link" style={{ color: 'black' }}>Klientai</Link>
              </li>
              <li className="nav-item">
                <Link to='/ataskaita' className="nav-link" style={{ color: 'black' }}>Ataskaita</Link>
              </li>
            </ul>
          </div>
        </header>
        {props.children}
      </div>
  );
};

export default NavigationComponent;