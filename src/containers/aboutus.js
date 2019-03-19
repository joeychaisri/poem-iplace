import React from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick-theme.scss"
import "../../node_modules/slick-carousel/slick/slick.scss"
import GoogleMapReact from 'google-map-react';
import { withTranslation } from 'react-i18next';


const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: '#eb6b00',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
    );

class aboutus extends React.Component {
    static defaultProps = {
        center: {
          lat: 13.755665,
          lng: 100.797625
        },
        zoom: 11
      };

  render () {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        speed: 500,
        autoplay: true,
        autoplaySpeed : 1800,
        arrows: false,
      };
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <div class="aboutus">
            <div class="aboutus-banner">
            </div>

            <div class="aboutus-iplace">
            <h1 class="aboutus-iplace-header" style={{margin:'30px 30px'}}>{t('retail')}</h1>
            <p className="aboutus-iplace-paragraph">{t('retail-description')}
</p>
            </div>

            <div class="aboutus-carousel" style={{marginTop: '80px'}}>
                <Slider  {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                </Slider>
            </div>

            <div class="aboutus__content1">
             <h4 class="aboutus__content1__header heading-2">{t('direction.header')}</h4>
             <h4 class="aboutus__content1__subheader heading-2">{t('direction.subheader')}</h4>
             <div class="aboutus__content1__box" style={{marginTop:"30px"}}>
                <p>{t('direction.route1.header')}</p>
                <p>{t('direction.route1.description')}</p>
                <br/>
                <p>{t('direction.route2.header')}</p>
                <p>{t('direction.route2.description')}</p>
                <br/>
                <p>{t('direction.route3.header')}</p>
                <p>{t('direction.route3.description')}</p>

             </div>     
            </div>

            <div class="aboutus__content2">
            <h4 class="aboutus__content2__header heading-2">{t('address.header')}</h4>
            <h4 class="aboutus__content2__subheader heading-2">{t('address.subheader')}</h4>
            <div class="aboutus__content2__box" style={{marginTop:"30px"}}>
                    <div style={{margin:"30px 30px 30px 30px"}}>

                    <p class="aboutus__content2__boxheader" >{t('address.boxheader')}</p>
                    <p>{t('address.iplace')}</p>
                    <p>{t('address.address')}</p>
                    <br/>
                    <a className="btn btn--animated" >{t('address.googlemap')}</a>
                    <br/>
                    <br/>
                    <p class="aboutus__content2__boxheader">{t('address.tellno')}</p>
                    <p>{t('address.call')}</p>
                    <br/>
                    <p class="aboutus__content2__boxheader">{t('address.openclose')}</p>
                    <p>{t('address.worktime')}</p>
                    <br/>
                    <a className="btn btn--animated">{t('address.aboutus')}</a>
                    <br/>
                    
                    </div>

            </div>
            </div>


            <div className="aboutus-map" style={{  width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDLmWUQSb8LLuwYGOYtCfiM_MHxbjdwkyU' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                lat={13.755718}
                lng={100.797237}
                text={'IPLACE LAT KRABANG'}
                />
            </GoogleMapReact>
            </div>

            <div className="aboutus-amenities">
                <h2 className="aboutus-amenities-heading"> <span className="aboutus-amenities-heading-span">{t('amenities.header1')}</span> {t('amenities.header1')}</h2>
                <div className="aboutus-amenities-list">
                    <div className="aboutus-amenities-list-group">
                        <div><i class="fas fa-fw fa-wheelchair"></i>{t('amenities.accessible-parking')}</div>
                        <div><i class="fas fa-fw fa-parking"></i>{t('amenities.parking')}</div>
                        <div><i class="fas fa-fw fa-bicycle"></i>{t('amenities.bikeracks')}</div>
                    </div>
                    <div className="aboutus-amenities-list-group">
                        <div><i class="fas fa-fw fa-wifi"></i>{t('amenities.wifi')}</div>
                        <div><i class="fas fa-fw fa-sign"></i>{t('amenities.directory')}</div>
                        <div><i class="fas fa-fw fa-baby"></i>{t('amenities.baby-changing')}</div>
                    </div>
                    <div className="aboutus-amenities-list-group">
                        <div><i class="fas fa-fw fa-toilet"></i>{t('amenities.restroom')}</div>
                        <div><i class="fas fa-fw fa-credit-card"></i>{t('amenities.atm')}</div>
                        <div><i class="fas fa-fw fa-bus"></i>{t('amenities.bus-stop')}</div>
                    </div>
                </div>
            </div>


            <div class="aboutus-travel">
        <div style={{textAlign: 'center'}}><img src="/../img/t1.png" alt="t1" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>12.6<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.2rem'}}>Suvarnabhumi International Airport</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t2.png" alt="t2" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>0.5<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.2rem'}}>Lat Krabang Industrial Estate</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t3.png" alt="t3" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>12.3<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.2rem'}}>Airport Rail Link (Lat Krabang Station)</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t4.png" alt="t4" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>9.5<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.2rem'}}>Motorway no.7</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t5.png" alt="t5" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>6.7<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.2rem'}}>King Mongkut's Institute of Technology Ladkrabang</span></div>
        </div>



            
       
        
      </div>
    );
  }
}


export default withTranslation('aboutus')(aboutus);