import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {loadAllCompany} from "../../AC";

 class formDelete extends Component {
    handleSubmit = event => {
        event.preventDefault();
        const companyId = this.props;
        axios.get(`https://eliftechcomp.herokuapp.com/delete_company/${companyId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        setTimeout(loadAllCompany, 1000);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default connect((state => {
}),{loadAllCompany})(formDelete)