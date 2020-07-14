import React from 'react';
import {Button, Tooltip} from 'antd';
import {InstagramOutlined, PhoneOutlined} from '@ant-design/icons';

const Contact = () => {
  return (
    <div>
        <div className='app-header-contacts-container'>
            <div className='app-header-contacts-item'>
                <a className='app-header-text' href='#location'>Свободы 87а</a>
            </div>
            <div className='app-header-contacts-item'>
                <a className='app-header-text' href='tel:+7(4852)972777'>+7 (4852) 97-27-77</a>
            </div>
            <div className='app-header-contacts-item'>
                <Tooltip title="Instagram">
                    <Button shape="circle" href='https://www.instagram.com/dymdym.room/' icon={<InstagramOutlined/>} />
                </Tooltip>
            </div>
            <div className='app-header-contacts-item'>
                <Tooltip title="Заказать обратный звонок">
                    <Button shape="circle" icon={<PhoneOutlined/>} />
                </Tooltip>
            </div>
        </div>
    </div>
  );
}

export default Contact;
