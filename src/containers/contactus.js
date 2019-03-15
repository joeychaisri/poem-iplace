import React from 'react'
import GoogleMapReact from 'google-map-react';
import FeedbackForm from './FeedbackForm';
import PropTypes from 'prop-types';

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
 
class contactus extends React.Component {
    static defaultProps = {
        center: {
          lat: 13.755665,
          lng: 100.797625
        },
        zoom: 11
      };
  render () {
    console.log(this.props.env)
    return (
        <div className="contactus">
            <div className="contactus-map" style={{ height: '47vh', width: '100%' }}>
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

            <div class="contactus__content1">
            <FeedbackForm env={this.props.env}/>
             {/* <h4 class="contactus__content1__header heading-2">ส่งข้อความ</h4>
             <h4 class="contactus__content1__subheader heading-2">ติดต่อพวกเรา</h4>
             <div class="contactus__content1__box" style={{marginTop:"30px"}}>
                    <form class="contactus__content1__box__form">
                        <div class="contactus__content1__box__form__line1">
                        <label class="contactus__content1__box__form__line1__label" style={{ display : 'block' }} >Name:  </label>
                        <input class="input contactus__content1__box__form__line1__input" type="text" name="name" />
                        </div>
                        
                        <div class="contactus__content1__box__form__line2">
                        <label class="contactus__content1__box__form__line2__label"style={{}} >Email:  </label>
                        <input class="input contactus__content1__box__form__line2__input"  type="text" name="name" />
                        </div>

                        <div class="contactus__content1__box__form__line2">
                        <label class="contactus__content1__box__form__line2__label"style={{}} >Tel No.:  </label>
                        <input class="input contactus__content1__box__form__line2__input"  type="text" name="name" />
                        </div>
                        
                        <div class="contactus__content1__box__form__line3">
                            <label class="contactus__content1__box__form__line3__label" style={{ display : 'block' }} >Subject:  </label>
                            <input class="input contactus__content1__box__form__line3__input"   type="text" name="name" />
                        </div>
                     
                        <div class="contactus__content1__box__form__line4">
                            <label class="contactus__content1__box__form__line4__label" style={{ display : 'block' }} >Message:  </label>
                            <input class="input contactus__content1__box__form__line4__input" style={{}} type="text" name="name" />
                        </div>
                        
                        <a className="btn btn--animated contactus__content1__box__form__line5" style={{width: '100%'}}>SEND</a>

                    </form>
             </div>      */}
            </div>

            <div class="contactus__content2">
            <h4 class="contactus__content2__header heading-2">ติดต่อเรา</h4>
            <div class="contactus__content2__box" style={{marginTop:"30px"}}>
                    <div style={{margin:"30px 30px 30px 30px"}}>

                    <p class="contactus__content2__boxheader" >ADDRESS:</p>
                    <p>iPLACE PARK</p>
                    <p>1 Soi Chalongkrung 31, Lamplatiu, Lat Krabang, Bangkok, 10520, THAILAND</p>
                    <br/>
                    <a className="btn btn--animated" >GET DIRECTION</a>
                    <br/>
                    <br/>
                    <p class="contactus__content2__boxheader">TEL</p>
                    <p>+66 2 360 5300-1, +66 81 947 5863</p>
                    <br/>
                    <p class="contactus__content2__boxheader">OPERATION HOURS</p>
                    <p>Everyday 10:00 - 22:00</p>
                    <br/>
                    <a className="btn btn--animated">ABOUT US</a>
                    <br/>
                    
                    </div>

            </div>
            </div>




        </div>
      );
  }
}

contactus.propTypes = {
  env: PropTypes.object.isRequired
};

export default contactus;