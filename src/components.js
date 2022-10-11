import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const ComponentsList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);