import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UnitList, UnitShow, UnitEdit } from './units';
import { UnitTypeList, UnitTypeCreate } from './unitTypes';

const dataProvider = jsonServerProvider('http://localhost:8080');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="units" list={ UnitList } show={ UnitShow } edit={ UnitEdit } />
        <Resource name="unit-types" list={ UnitTypeList } create={ UnitTypeCreate } />
    </Admin>
);

export default App;
