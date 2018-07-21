import React from 'react';
import PropTypes from 'prop-types'
import Buttons from "../../component/button";
import Company from '../mainCompany/company'
import {Table} from 'semantic-ui-react'

const ChildCompany = ({data}) => (
    <div>
        <Table columns={4}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
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
                return <li key={index}><Company data={datachild}/></li>
            })}


        </ul>
    </div>



)

function allProfit(data) {
    debugger
    let all = 0,
        initialValue = 0,
        currentProfit = data.revenue;
    let result = data.childs.reduce(function (sum, current) {
        return sum + allProfit(current);
    }, initialValue)
    all = +result + currentProfit;
    return all
};

ChildCompany.propTypes = {
    data: PropTypes.object.isRequired
};

export default ChildCompany
