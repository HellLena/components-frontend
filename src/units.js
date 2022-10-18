import {
    TopToolbar, CreateButton, List, Show, Datagrid, NumberField, TextField, DateField,
    EditButton, SimpleShowLayout, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, required,
    useCreatePath, WrapperField, useRecordContext
} from 'react-admin';
import { Link } from "react-router-dom"
import Box from '@mui/material/Box'
import CircleIcon from '@mui/icons-material/Circle'

const UtilListActions = () => (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>
);

const statusColors = {
    "NEW": "#ffbc21",
    "PROCESSING": "#ffbc21",
    "FAILED": "#ffbc21",
    "MODERATION": "#ffbc21",
    "APPROVED": "#ffbc21"
}

const StatusIcon = (props) => {
    const record = useRecordContext(props);
    return <CircleIcon sx={{ color: statusColors[record.bomFileStatus.name] }} fontSize="10px" />;
};

export const UnitList = () => (
    <List actions={<UtilListActions/>}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TextField source="unitType" sortBy="unit_type_id" label="Тип сборочной единицы" />
            <TextField source="decimalName" sortBy="decimal_name" label="Децимальный номер" />
            <WrapperField label="Статус BoM файла">
                <StatusIcon source="bomFileStatus.name" />&nbsp;
                <TextField source="bomFileStatus.description" sortBy="bom_file_status" />
            </WrapperField>
            <DateField source="createdAt" sortBy="created_at" label="Дата создания" locales="ru-RU" showTime={true} />
            <EditButton/>
        </Datagrid>
    </List>
);

export const UnitShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" label="Уникальный идентификатор" />
            <TextField source="unitType.name" label="Тип сборочной единицы" />
            <TextField source="decimalName" label="Децимальный номер" />
            <WrapperField label="Статус BoM файла">
                <StatusIcon source="bomFileStatus.name" />&nbsp;
                <TextField source="bomFileStatus.description" sortBy="bom_file_status" />
            </WrapperField>
            <DateField source="createdAt" label="Дата создания" locales="ru-RU" showTime={true} />
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
                                source="id"
                                reference="unit-types"
                                sort={{ field: 'name' }}>
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