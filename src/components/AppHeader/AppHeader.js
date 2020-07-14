import React from 'react';
import {Layout} from "antd";
import AppTitle from "./Title/Title";
import Contact from "./Contacts/Contacts";

const {Header} = Layout;

const AppHeader = () => {
    return (
        <Header className='app-header'>
            <AppTitle/>
            <Contact/>
        </Header>
    );
}

export default AppHeader;
