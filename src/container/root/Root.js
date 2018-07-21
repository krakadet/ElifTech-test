import React, { PureComponent} from 'react'
import CompanyList from '../mainCompany';
import HeaderBlock from '../../component/header/Header';
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import FooterBlock from '../../component/footer/Footer';


class Root extends PureComponent {

    render() {
        return (
            <Container>
                <HeaderBlock/>
                <hr/>
                <CompanyList/>
                <FooterBlock/>
            </Container>
        )
    }
}

export default Root