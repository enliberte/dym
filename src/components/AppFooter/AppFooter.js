import React from 'react';
import {Layout} from "antd";

const {Footer} = Layout;

const AppFooter = () => {
    return (
        <Footer className='app-footer'>
            <div className='app-footer-author'>
                <span>Designed by EnLiberte</span>
            </div>
        </Footer>
    );
}

export default AppFooter;
