import React from 'react';
import { Link } from 'react-router-dom';

function ClientInventoryCardComponent({item, onRemove}) {
    return (
        <div className="card mx-auto mb-5" style={{ width: '18rem' }}>
            <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Svoris: {item.weight}</p>
                <p className="card-text"><b>Sektorius: {item.sector}</b></p>
                <p className="card-text">Pridėjimo data: {item.dateAdded}</p>
                <button className= "btn btn-primary" onClick={() => onRemove(item.id)}>Ištrinti</button>
            </div>
        </div>
    );
}

export default ClientInventoryCardComponent;