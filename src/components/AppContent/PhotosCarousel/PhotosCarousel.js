import React from 'react';
import {Carousel} from 'antd';

import photo1 from '../../../img/photos/1.jpg';
import photo2 from '../../../img/photos/2.jpg';
import photo3 from '../../../img/photos/3.jpg';
import photo4 from '../../../img/photos/4.jpg';

const photoUrls = [
    photo1,
    photo2,
    photo3,
    photo4
];

const PhotosCarousel = () => {
    return (
        <div className='photo-carousel-container'>
            <div className='desc-container'>
                <div><span className='main-desc'>Лучшая атмосфера</span></div>
                <div className='desc-delimiter'></div>
                <div><span className='sub-desc'>Настолки | Видеоигры | Кино | Wi-Fi</span></div>
            </div>
            <div className='photo-carousel'>
                <Carousel autoplay>
                    {photoUrls.map(photoUrl => <div><img className='photo-carousel-img' src={photoUrl}/></div>)}
                </Carousel>
            </div>
        </div>
    );
}

export default PhotosCarousel;
