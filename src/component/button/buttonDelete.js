import React, {Component} from 'react'
import axios from 'axios'
import {loadAllCompany} from "../../AC";
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'

class ButtonDelete extends Component {
    handleSubmit = event => {
        event.preventDefault();
        const {id} = this.props;
        axios.get(`https://eliftechcomp.herokuapp.com/delete_company/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        const {loadAllCompany} = this.props;
        setTimeout(loadAllCompany, 1000);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Button type="submit">delete</Button>
                </form>
            </div>

        )
    }

}

export default connect((state => {
}), {loadAllCompany})(ButtonDelete)

