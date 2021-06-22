import React from 'react';
import { Link } from 'react-router-dom';

function ClientCardComponent({client}) {
    return (
        <div className="card mx-auto mb-5" style={{ width: '18rem' }}>
            <div className="card-body text-center">
                <h5 className="card-title">{client.firstname + " " + client.lastname}</h5>
                <p className="card-text">Gimimo metai: {client.birthdate}</p>
                <p className="card-text"><b>Telefonas: {client.phone}</b></p>
                <p className="card-text">Kliento tipas: {client.clientType == "LOYAL" ? "Lojalus" : "Paprastas"}</p>
                <Link 
                to={`/klientai/${client.id}`} 
                className="btn btn-primary"
                >
                    Plačiau
                </Link>
            </div>
        </div>
    );
}

export default ClientCardComponent;