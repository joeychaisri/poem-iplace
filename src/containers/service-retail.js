import React from 'react'
import { withTranslation } from 'react-i18next';
class serviceRetail extends React.Component {
  render () {
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
            i18n.changeLanguage(lng);
    };
    return (
        <div className="service-retail">
            <div className="retail-banner">
            </div>
            <div class="retail-space">
            <h1 class="retail-space-header" style={{margin:'30px 30px'}}>{t('header')}</h1>
            <p className="retail-space-paragraph">{t('description')}
</p>
            <a className="btn  btn--animated retail-space-button" style={{margin:'0 auto', textAlign:'center'}}>{t('seeallshops')}</a>
            </div>            
        </div>
    );
  }
}

export default withTranslation('serviceretail')(serviceRetail);