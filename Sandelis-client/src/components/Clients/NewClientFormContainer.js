import React, { Component } from 'react';
import axios from 'axios';

export default class NewClientFromContainer extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            birthdate: "",
            phone: "",
            clientType: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/sandelio-valdymas/api/clients', {firstname: this.state.firstname, lastname: this.state.lastname, birthdate: this.state.birthdate, phone: this.state.phone, clientType: this.state.clientType})
            .then(res => {
                console.log(res);
                this.props.history.push("/");
            })
            .catch(err => {
                console.log(err);
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
                <div className="row pt-3">
                    <form className="pt-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="firstname"><b>Vardas</b></label>
                            <input name="firstname" type="text" className="form-control" value={this.state.firstname} onChange={this.handleChange}/>
                            <label htmlFor="lastname"><b>Pavardė</b></label>
                            <input name="lastname" type="text" className="form-control" value={this.state.lastname} onChange={this.handleChange}/>
                            <label htmlFor="birthdate"><b>Gimimo data</b></label>
                            <input name="birthdate" type="text" className="form-control" value={this.state.birthdate} onChange={this.handleChange}/>
                            <label htmlFor="phone"><b>Telefono numeris</b></label>
                            <input name="phone" type="text" className="form-control" value={this.state.phone} onChange={this.handleChange}/>
                            <label htmlFor="clientType"><b>Kliento Tipas</b></label>
                            <select value={this.state.clientType} className="form-control" name="clientType" id="clientType" onChange={this.handleChange}>
                                <option value="REGULAR">Paprastas</option>
                                <option value="LOYAL">Lojalus</option>
                            </select>
                            <button type="submit" className="btn btn-primary mt-3">Pridėti vartotoją</button>
                        </div>
                    </form>
                </div>
            </main>
        )
    }

}