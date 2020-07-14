import React from 'react';
import {Layout} from 'antd';
import PhotosCarousel from "./PhotosCarousel/PhotosCarousel";
import LocationMap from "./LocationMap/LocationMap";
import TobaccosCloud from "./TobaccosCloud/TobaccosCloud";
import Prices from "./Prices/Prices";

const {Content} = Layout;

const AppContent = () => {
    return (
        <Content className='app-layout-content'>
            <PhotosCarousel/>
            <TobaccosCloud/>
            <Prices/>
            <LocationMap/>
        </Content>
    );
}

export default AppContent;
