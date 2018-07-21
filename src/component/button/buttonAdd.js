import React from 'react'
import {Modal} from 'semantic-ui-react'

const ButtonAddEdit = ({someElement, someCode, myCustomClassName}) => (
    <Modal
        trigger={someElement}
        closeIcon
        style={{
            maxwidth: 500,
            padding: 20
        }}
        dimmer={'blurring'}
        className={myCustomClassName}
    >
        <div>
            {someCode}
        </div>
    </Modal>
);

export default ButtonAddEdit