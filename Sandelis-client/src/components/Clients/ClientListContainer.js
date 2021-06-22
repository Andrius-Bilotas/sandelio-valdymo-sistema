import React, { Component } from 'react';
import axios from 'axios';
import ClientCardComponent from './ClientCardComponent';
import { Link } from 'react-router-dom';

export default class ClientListContainer extends Component {
    constructor() {
        super();
        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        document.title = "Sandelio valdymo sistema";
        axios.get('/sandelio-valdymas/api/clients')
            .then(res => {
                this.setState({clients: res.data})
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        return (
        <main className="container pt-3">
            <div className="row pt-3 justify-content-center">
                <h2>Klientai</h2>
            </div>
            <div className="row pt-3">
                <Link to='/klientai/prideti' className="btn btn-primary">Pridėti klientą</Link>
            </div>
            <div className="row pt-3">
                {this.state.clients.map(client => {
                    return (
                        <ClientCardComponent client={client} />
                    )
                })}
            </div>
        </main>
        )
    }
}