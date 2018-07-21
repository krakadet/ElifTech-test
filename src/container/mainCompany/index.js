import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadAllCompany} from "../../AC";
import Company from './company'
import {Button} from 'semantic-ui-react'
import ButtonAdd from "../../component/button/buttonAdd";
import NewForm from '../../component/form/addCompany'

class CompanyList extends Component {


    componentWillMount() {
        const {loadAllCompany} = this.props;
        loadAllCompany()
    }

    render() {
        const {data} = this.props;
        console.log(data);

        return (
            <div>
                <ButtonAdd someElement={<Button>add Parent Company</Button>} someCode={<NewForm /> }/>
                <ul>
                    {
                        data.map(function(data, id) {
                            if (data.parentId === null){
                                return  <li key={id}><Company data={data}/></li>
                            }
                        })}
                </ul>
            </div>
        )

    }
}

export default connect((state => {
    return {
        data: state.allCompany.data,
        error: state.allCompany.error
    }
}), {loadAllCompany})(CompanyList)