import {
    List, Show, Datagrid, NumberField, TextField, DateField, BooleanField, EditButton, ShowButton,
    Create, Edit, SimpleForm, TextInput, required, TopToolbar, CreateButton, SaveButton, Toolbar,
    SimpleShowLayout
} from 'react-admin';

const UnitTypeActions = () => (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>
);

export const UnitTypeList = () => (
    <List actions={<UnitTypeActions/>}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TextField source="name" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const UnitTypeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" label="Наименование типа сборочной единицы" />
        </SimpleShowLayout>
    </Show>
);

export const UnitTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Наименование типа сборочной единицы" validate={required()} fullWidth />
        </SimpleForm>
    </Create>
);

export const UnitTypeEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton/>
    </Toolbar>
);

export const UnitTypeEdit = () => {
    return (
        <Edit>
            <SimpleForm toolbar={<UnitTypeEditToolbar/>} warnWhenUnsavedChanges>                
                <TextInput source="name" label="Наименование типа сборочной единицы" validate={required()} fullWidth />
            </SimpleForm>
        </Edit>
    );
};
