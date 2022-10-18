import {
    List, Show, Datagrid, NumberField, TextField, EditButton, 
    Create, Edit, SimpleForm, TextInput, required, TopToolbar, CreateButton,
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

export const UnitTypeEdit = () => {
    return (
        <Edit redirect="show" mutationMode="pessimistic">
            <SimpleForm warnWhenUnsavedChanges>                
                <TextInput source="name" label="Наименование типа сборочной единицы" validate={required()} fullWidth />
            </SimpleForm>
        </Edit>
    );
};
