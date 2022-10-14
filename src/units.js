import {
    TopToolbar, CreateButton, ExportButton, List, Show, Datagrid, NumberField, TextField, DateField, BooleanField,
    EditButton, ShowButton, SimpleShowLayout, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, required,
    useCreatePath
} from 'react-admin';
import { Link } from "react-router-dom"
import Box from '@mui/material/Box'

const UtilListActions = () => {
    <TopToolbar>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
}

export const UnitList = () => (
    <List actions={<UtilListActions/>}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="unitType" sortBy="unit_type_id" />
            <TextField source="decimalName" sortBy="decimal_name" />
            <TextField source="bomFileStatus" sortBy="bom_file_status" />
            <DateField source="createdAt" sortBy="created_at" />
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>
);

export const UnitShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" label="Уникальный идентификатор" />
            <TextField source="unitType" label="Тип сборочной единицы" />
            <TextField source="decimalName" label="Децимальный номер" />
            <TextField source="bomFileStatus" label="Статус BoM файла" />
            <DateField source="createdAt" label="Создана" />
        </SimpleShowLayout>
    </Show>
);

export const UnitEdit = () => {
    const createPath = useCreatePath();
    return (
        <Edit>
            <SimpleForm warnWhenUnsavedChanges>
                <Box display={{ xs: 'block', sm: 'flex', width: '100%'}}>
                    <Box flex={1} mr={{ xs: 0, sm: '0.5em'}}>
                        <ReferenceInput
                                source="unit_type_id"
                                reference="unit-types">
                            <SelectInput
                                label="Тип сборочной единицы"
                                optionText="name"
                                validate={required()} 
                                fullWidth/>
                        </ReferenceInput>
                    </Box> 
                    <Box flex={1} mr={{ xs: 0, sm: '0.5em'}} >
                        <Link
                            to={ createPath({ resource: 'unit-types', type: 'create' }) }
                            target="_blank"
                            rel="noopener noreferrer">Создать новый тип сборочной единицы</Link>
                    </Box> 
                </Box>
                
                <TextInput source="decimalName" label="Децимальный номер" validate={required()} fullWidth />
            </SimpleForm>
        </Edit>
    );
};