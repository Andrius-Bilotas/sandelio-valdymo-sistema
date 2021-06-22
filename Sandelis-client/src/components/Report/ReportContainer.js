import React, { Component } from 'react';
import axios from 'axios';
import ClientCardComponent from '../Clients/ClientCardComponent';
import { Link } from 'react-router-dom';
import SectorCardComponent from './SectorCardComponent';

export default class ReportContainer extends Component {
    constructor() {
        super();
        this.state = {
            clientsWithMostInventory: [],
            clientsWithBiggestWeight: [],
            sectorsWithMostInventory: [],
            sectorsWithBiggestWeight: []
        }
    }

    componentDidMount() {
        document.title = "Sandelio valdymo sistema";
        axios.get('/sandelio-valdymas/api/report')
            .then(res => {
                this.setState({
                    clientsWithMostInventory: res.data.clientsWithMostInventoryItems,
                    clientsWithBiggestWeight: res.data.clientsWithBiggestInventoryWeight, 
                    sectorsWithMostInventory: res.data.sectorsWithMostInventoryItems,
                    sectorsWithBiggestWeight: res.data.sectorsWithBiggestInventoryWeight
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        return (
        <main className="container pt-3">
            <div className="row pt-3 justify-content-center">
                <h2>Ataskaita</h2>
            </div>
            <div className="row pt-3">
                <h3>Klientai su daugiausiai inventoriaus:</h3>
            </div>
            <div className="row pt-3">
                {this.state.clientsWithMostInventory.map(client => {
                    return (
                        <ClientCardComponent client={client} />
                    )
                })}
            </div>
            <div className="row pt-3">
                <h3>Klientai su didžiausiu inventoriaus svoriu:</h3>
            </div>
            <div className="row pt-3">
                {this.state.clientsWithBiggestWeight.map(client => {
                    return (
                        <ClientCardComponent client={client} />
                    )
                })}
            </div>
            <div className="row pt-3">
                <h3>Sektoriai su daugiausiai inventoriaus:</h3>
            </div>
            <div className="row pt-3">
                {this.state.sectorsWithMostInventory.map(sector => {
                    return (
                        <SectorCardComponent sector={sector} />
                    )
                })}
            </div>
            <div className="row pt-3">
                <h3>Sektoriai su didžiausiu inventoriaus svoriu:</h3>
            </div>
            <div className="row pt-3">
                {this.state.sectorsWithBiggestWeight.map(sector => {
                    return (
                        <SectorCardComponent sector={sector} />
                    )
                })}
            </div>
        </main>
        )
    }
}