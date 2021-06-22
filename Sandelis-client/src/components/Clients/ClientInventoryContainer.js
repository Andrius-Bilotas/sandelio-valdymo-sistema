import React, { Component } from 'react';
import axios from 'axios';
import ClientInventoryCardComponent from './ClientInventoryCardComponent';
import { Link } from 'react-router-dom';

export default class ClientInventoryContainer extends Component {
    constructor() {
        super();
        this.state = {
            client: {},
            inventory: []
        }
    }

    componentDidMount() {
        document.title = "Sandelio valdymo sistema";
        axios.get(`/sandelio-valdymas/api/clients/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ client: res.data, inventory: res.data.inventory })
                console.log(this.state);
            })
            .catch(err => {
                console.log(err);
            })
    }

    removeItem = (id) => {
        axios.delete(`/sandelio-valdymas/api/clients/${this.props.match.params.id}/${id}`)
            .then(res => {
                this.setState({ client: res.data, inventory: res.data.inventory })
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        return (
            <main className="container pt-3">
                <div className="row pt-3 justify-content-center">
                    <h2>Kliento: {this.state.client.firstname + " " + this.state.client.lastname} inventorius</h2>
                </div>
                <div className="row pt-3">
                <Link to={`/klientai/${this.props.match.params.id}/prideti`} className="btn btn-primary">Pridėti inventorių </Link>
                </div>
                <div className="row pt-3">
                    {this.state.inventory.map(item => {
                        return (
                            <ClientInventoryCardComponent item={item} onRemove={this.removeItem}/>
                        )
                    })}
                </div>
            </main>
        )
    }

}