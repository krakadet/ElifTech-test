import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import {loadAllCompany} from "../../AC";

class AddCompany extends React.Component {
    state = {
        name: '',
        revenue: ''
    }

    handleChange = event => {
        this.setState({
            name: event.currentTarget.value
        });
    }
    handleChangec = event => {
        this.setState({
            revenue: event.currentTarget.value
        });
    }


    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);

        const {id} = this.props
        if (id === undefined) {
            const company = {
                name: this.state.name,
                revenue: this.state.revenue
            };
            console.log(company);
            axios.post(`https://eliftechcomp.herokuapp.com/save_company`, company)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        } else {
            const company = {
                name: this.state.name,
                revenue: this.state.revenue,
                parentId: id
            };
            console.log(company);
            axios.post(`https://eliftechcomp.herokuapp.com/save_company`, company)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })

        }

        const {loadAllCompany} = this.props;
        setTimeout(loadAllCompany, 1000);

    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Company Name: </label>
                        <input type="text" name="name" value={this.state.name}
                               placeholder='Company Name'  onChange={this.handleChange}/>

                </Form.Field>
                <Form.Field>
                    <label>Company Profit: </label>
                        <input type="number" name="revenue" value={this.state.revenue}
                               placeholder='Company Profit'  onChange={this.handleChangec}/>

                </Form.Field>
                    <Button type="submit" >Add Company</Button>
            </Form>
        )
    }
}

AddCompany.defaultProps = {
    id: undefined
};
export default connect((state => {
    return {
        data: state.allCompany.data,
        isLoading: state.allCompany.isLoading,
        error: state.allCompany.error
    }
}), {loadAllCompany})(AddCompany)