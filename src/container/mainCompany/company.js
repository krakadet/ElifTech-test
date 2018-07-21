import React from 'react';
import PropTypes from 'prop-types'
import Buttons from "../../component/button";
import {Table} from 'semantic-ui-react'
import ChildCompany from '../childCompany/ChildCompany'

const Company = ({data}) => (

    <div>
    <Table columns={4}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name Company</Table.HeaderCell>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Revenue</Table.HeaderCell>
                <Table.HeaderCell>All profit</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.revenue}</Table.Cell>
                <Table.Cell>{allProfit(data)}</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
        <Buttons id={data.id}/>
        <hr/>
        <ul>
            {data.childs.map((datachild, index) => {
                return <li key={index}><ChildCompany data={datachild}/></li>
            })}
        </ul>
    </div>
)

Company.propTypes = {
    data: PropTypes.object.isRequired
};
 function allProfit  (data) {
   let all = 0,
       initialValue=0,
       currentProfit = data.revenue;
   let result = data.childs.reduce(function (sum, current ) {
        return sum + allProfit(current);
    },initialValue);
    all=result + currentProfit;
    return all
};
export default Company
