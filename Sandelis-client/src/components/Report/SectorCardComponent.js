import React from 'react';
import { Link } from 'react-router-dom';

function SectorCardComponent({sector}) {
    return (
        <div className="card mx-auto mb-5" style={{ width: '18rem' }}>
            <div className="card-body text-center">
                <h5 className="card-title">Sektorius: {sector.sectorNumber}</h5>
                <p className="card-text">Bendras svoris: {sector.totalWeight}</p>
                <p className="card-text"><b>Inventoriaus kiekis: {sector.totalItemCount}</b></p>
            </div>
        </div>
    );
}

export default SectorCardComponent;