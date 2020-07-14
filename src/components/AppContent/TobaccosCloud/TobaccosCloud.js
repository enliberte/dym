import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';

const tobaccos = [
    'DALY',
    'DARKSIDE',
    'D-GASTRO',
    'DUFT',
    'MUST HAVE',
    'СЕВЕРНЫЙ',
    'WTO',
    'AL FAKHER',
    'AFZAL',
    'ADALYA',
    'NAKHLA',
    'SERBETLI',
    'STARBUZZ',
    'TANGIERS'
];

class TobaccosCloud extends Component {
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 5000);
    }

    render() {
        return (
            <div className='tobaccos-cloud'>
                <div className='desc-container'>
                    <div><span className='main-desc'>Лучшие забивки</span></div>
                    <div className='desc-delimiter'></div>
                    <div><span className='sub-desc'>На любой вкус и крепость</span></div>
                </div>
                <div className='app-outer'>
                    <div className='app-inner'>
                        <TagCloud
                            className='tag-cloud'
                            style={{
                                fontFamily: 'Comfortaa',
                                fontWeight: 'bold',
                                fontSize: () => Math.round(Math.random() * 25) + 16,
                                color: () => randomColor({
                                    hue: 'monochrome'
                                }),
                                padding: 7,
                            }}>
                            {tobaccos.map(t => <div className='tag-cloud-text'>{t}</div>)}
                        </TagCloud>
                    </div>
                </div>
            </div>
        );
    }
}

export default TobaccosCloud;
