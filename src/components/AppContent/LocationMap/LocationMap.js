import React, {Component} from 'react';
import logo from '../../../img/logo.png';

class LocationMap extends Component {
    constructor(props) {
        super(props);
        this.Ymap = null;
    }

    componentDidMount() {
        window.ymaps.ready(() => {
            this.Ymap = new window.ymaps.Map("YandexMap", {
                center: [57.626217, 39.852284],
                zoom: 17
            });
            const locationPlacemark = new window.ymaps.Placemark(this.Ymap.getCenter(), {hintContent: 'ДЫМ-ДЫМ'}, {
                iconLayout: 'default#image',
                iconImageHref: logo,
                iconImageSize: [40, 40],
            });
            this.Ymap.geoObjects.add(locationPlacemark);
        });
    }

    render() {
        return (
            <div id="YandexMap" className='location-map'>
                <a name='location'></a>
            </div>
        );
    }
}

export default LocationMap;
