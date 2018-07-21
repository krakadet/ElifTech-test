import React from 'react';
import Elif from '../../image/Elif.png'
import {Header, Image} from 'semantic-ui-react'

const HeaderBlock = () => (
    <div>
        <Header as='h3' textAlign='center' block>
        </Header>
        <Image centered size='small' src={Elif}/>
    </div>

)

export default HeaderBlock