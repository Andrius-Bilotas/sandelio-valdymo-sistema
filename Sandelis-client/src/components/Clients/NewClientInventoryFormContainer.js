import React, { Component } from 'react';
import axios from 'axios';

export default class NewClientFromContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            weight: 0,
            sector: 0,
            clientId: 0
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`/sandelio-valdymas/api/clients/${this.props.match.params.id}`, {name: this.state.name, weight: this.state.weight, sector: this.state.sector, clientId: this.props.match.params.id})
            .then(res => {
                console.log(res);
                this.props.history.push(`/klientai/${this.props.match.params.id}`);
            })
            .catch(err => {
                console.log(err);
                alert(err.response.data.message);
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state.kategorija)
    }

    render() {
        return (
            <main className="container pt-3">
                <div className="row pt-3 justify-content-center">
                    <h2>Naujo kliento inventoriaus kūrimo forma</h2>
                </div>
                <div className="row pt-3">
                    <form className="pt-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="name"><b>Pavadinimas</b></label>
                            <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.handleChange}/>
                            <label htmlFor="weight"><b>Svoris</b></label>
                            <input name="weight" type="text" className="form-control" value={this.state.weight} onChange={this.handleChange}/>
                            <label htmlFor="sector"><b>Sektorius (1 - 40)</b></label>
                            <input name="sector" type="text" className="form-control" value={this.state.sector} onChange={this.handleChange}/>
                            <button type="submit" className="btn btn-primary mt-3">Pridėti inventorių</button>
                        </div>
                    </form>
                </div>
            </main>
        )
    }

}