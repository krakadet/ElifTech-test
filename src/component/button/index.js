import React from 'react';
import ButtonDelete from './buttonDelete';
import ButtonAdd from './buttonAdd';
import {Button} from 'semantic-ui-react'
import AddCompany from "../form/addCompany";
import EditForm from "../form/editForm";

const Buttons = ({id}) => (
    <Button.Group>
        <ButtonAdd someElement={<Button>add</Button>} someCode={<AddCompany id={id}/>}/>
        <ButtonAdd someElement={<Button>edit</Button>} someCode={<EditForm id={id}/>}/>
        <ButtonDelete id={id}/>
    </Button.Group>
);
export default Buttons