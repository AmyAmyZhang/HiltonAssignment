import React from 'react';
import './index.scss';
import logo from '../test1_assets/HI_mk_logo_hiltonbrandlogo_3.jpg'
import picture from '../test1_assets/hotelexterior.jpg';
import rightArrow from '../test1_assets/right-arrow.png';

export default class SinglePage extends React.Component {
    render() {
        return (
            <div>
                <h2>Assessment 1</h2>
                <div className="main">
                    <div className="main_header">
                        <div className="button">
                            <p> &lt; &nbsp; Back</p>
                        </div>
                        <h3>Hotel Details</h3>
                        <img src={logo} alt="logo" style={{width: '25px'}}/>
                    </div>
                    <div className="main_content">
                        <img src={picture} className="main_content_picture" style={{width: '320px'}}/>
                        <div className="main_content_address">
                            <h2>Hilton Chicago</h2>
                            <p className="main_content_address_content">720 South Michigan Avenue</p>
                            <p className="main_content_address_content">Chicago, IIIinois, 60605</p>
                            <p className="main_content_address_underline"> 1-312-922-4400</p>
                        </div>
                        <div className="main_content_lists">
                            <div className="main_content_lists_item" style={{borderBottom: '1px solid white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} >
                            <h2>Map</h2>
                            <img src={rightArrow} alt="map dropdown menu" />
                            </div>
                            <div className="main_content_lists_item" style={{borderBottom: '1px solid white', borderTop:'1px solid white'}}>
                                <h2>Photo Gallery</h2>
                                <img src={rightArrow} alt=" photo gallery dropdown menu" />
                            </div>
                            <div className="main_content_lists_item" style={{borderTop:'1px solid white', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px'}}>
                                <h2>Amenities</h2>
                                <img src={rightArrow} alt=" amenities dropdown menu" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}