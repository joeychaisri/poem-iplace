import React from 'react'
import GoogleMapReact from 'google-map-react';
import FeedbackForm from './FeedbackForm';
import PropTypes from 'prop-types';
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
 
class contactus extends React.Component {
  state = {
    name: '',
    email: '',
    tel:'',
    subject:'',
    message:'',
    formSubmitted: false
  };
    static defaultProps = {
        center: {
          lat: 13.755665,
          lng: 100.797625
        },
        zoom: 11
      };

      handleCancel = this.handleCancel.bind(this);
      handleChange = this.handleChange.bind(this);
      handleSubmit = this.handleSubmit.bind(this);

      static sender = 'sender@example.com';

  handleCancel() {
    this.setState({
      name: '',
      email: '',
      tel: '',
      subject: '',
      message: '',
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
 }

  handleSubmit(event) {
    alert('ทางเราได้รับข้อความของท่านเรียบร้อยแล้ว')
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.name,
      this.state.email,
      this.state.tel,
      this.state.subject,
      this.state.message,

    );

    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(templateId, senderEmail, receiverEmail, name,email,tel,subject,message) {
    window.emailjs
      .send('mailgun', templateId, {
        senderEmail,
        receiverEmail,
        name,
        email,
        tel,
        subject,
        message
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render () {
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
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
             <h4 class="contactus__content1__header heading-2">{t('contactus.header1')}</h4>
             <h4 class="contactus__content1__subheader heading-2">{t('contactus.header2')}</h4>
             <div class="contactus__content1__box" style={{marginTop:"30px"}}>
                    <form class="contactus__content1__box__form">
                        <div class="contactus__content1__box__form__line1">
                        <label class="contactus__content1__box__form__line1__label" style={{ display : 'block' }} >{t('contactus.name')}</label>
                        <input class="input contactus__content1__box__form__line1__input" type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                        
                        </div>
                        
                        <div class="contactus__content1__box__form__line2">
                        <label class="contactus__content1__box__form__line2__label"style={{}} >{t('contactus.email')}</label>
                        <input class="input contactus__content1__box__form__line2__input"  type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
                        </div>

                        <div class="contactus__content1__box__form__line2">
                        <label class="contactus__content1__box__form__line2__label"style={{}} >{t('contactus.tel')}</label>
                        <input class="input contactus__content1__box__form__line2__input"  type="text" name="tel" onChange={this.handleChange} value={this.state.tel}/>
                        </div>
                        
                        <div class="contactus__content1__box__form__line3">
                            <label class="contactus__content1__box__form__line3__label" style={{ display : 'block' }} >{t('contactus.subject')}</label>
                            <input class="input contactus__content1__box__form__line3__input"   type="text" name="subject" onChange={this.handleChange} value={this.state.subject}/>
                        </div>
                     
                        <div class="contactus__content1__box__form__line4">
                            <label class="contactus__content1__box__form__line4__label" style={{ display : 'block' }} >{t('contactus.message')}</label>
                            <input class="input contactus__content1__box__form__line4__input" style={{}} type="text" name="message" onChange={this.handleChange} value={this.state.message}/>
                        </div>
                        
                        <a className="btn btn--animated contactus__content1__box__form__line5" style={{width: '100%'}} onClick={this.handleSubmit} >{t('contactus.send')}</a>

                    </form>
             </div>     
            </div>

            <div class="contactus__content2">
            <h4 class="contactus__content2__header heading-2">{t('address.header')}</h4>
            <div class="contactus__content2__box" style={{marginTop:"30px"}}>
                    <div style={{margin:"30px 30px 30px 30px"}}>

                    <p class="contactus__content2__boxheader" >{t('address.header')}</p>
                    <p>{t('address.boxheader')}</p>
                    <p>{t('address.iplace')}</p>
                    <p>{t('address.address')}</p>
                    <br/>
                    <a className="btn btn--animated" >{t('address.googlemap')}</a>
                    <br/>
                    <br/>
                    <p class="contactus__content2__boxheader">{t('address.tellno')}</p>
                    <p>{t('address.call')}</p>
                    <br/>
                    <p class="contactus__content2__boxheader">{t('address.openclose')}</p>
                    <p>{t('address.worktime')}</p>
                    <br/>
                    <a className="btn btn--animated">{t('address.aboutus')}</a>
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

export default withTranslation('contactus')(contactus);