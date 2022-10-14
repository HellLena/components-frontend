import {
    List, Show, Datagrid, NumberField, TextField, DateField, BooleanField, EditButton, ShowButton,
    Create, SimpleForm, TextInput, required
} from 'react-admin';

export const UnitTypeList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="status" />
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>
);

export const UnitTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={required()} fullWidth />
        </SimpleForm>
    </Create>
);
