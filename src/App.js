import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UnitList, UnitShow, UnitEdit } from './units';
import { UnitTypeList, UnitTypeShow, UnitTypeCreate, UnitTypeEdit } from './unitTypes';
import Apps from '@mui/icons-material/Apps';
import ListIcon from '@mui/icons-material/List';

const dataProvider = jsonServerProvider('http://localhost:8080');

const App = () => (
    <Admin dataProvider={dataProvider} title="ЦУП" >
        <Resource 
            name="units" 
            options={{ label: 'Сборочные единицы' }}
            icon={ Apps }
            list={ UnitList } 
            show={ UnitShow } 
            edit={ UnitEdit } />
        <Resource 
            name="unit-types" 
            options={{ label: 'Типы сборочных единиц' }}
            icon={ ListIcon }
            list={ UnitTypeList } 
            show={ UnitTypeShow } 
            create={ UnitTypeCreate } 
            edit={ UnitTypeEdit } />
    </Admin>
);

export default App;
