import React from 'react';
import {Card, Col, Row} from 'antd';

import tea from '../../../img/photos/tea.jpg';
import hookah from '../../../img/photos/hookah.jpg';
import food from '../../../img/photos/food.jpg';

const goods = [
    {
        img: hookah,
        desc: 'Кальян',
        price: 'от 550 руб.'
    },
    {
        img: tea,
        desc: 'Элитный китайский чай',
        price: '200 руб.'
    },
    {
        img: food,
        desc: 'Европейская и грузинская кухня',
        price: 'у наших партнеров'
    }
];

const {Meta} = Card;

const Prices = () => {
    return (
        <div className='prices-container'>
            <div className='prices-sub-container'>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        {goods.map(good => (
                            <Col span={8}>
                                <Card bordered={false} cover={<img className='price-photo' alt="good" src={good.img} />}>
                                    <Meta title={good.desc} description={good.price} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Prices;
