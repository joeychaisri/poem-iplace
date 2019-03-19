import React from 'react'
import { withTranslation } from 'react-i18next';
class news extends React.Component {
  render () {
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    return (
        <div className="news">
           <div className="news-banner">
           </div>
           <div className="news-section" >
           <div className="news-section__header" style={{margin:"30px 30px"}}>
           {t('header')} {t('header2')}
           </div>
           <div className="news-section__article" >
           {t('description')}
           </div>
           </div>
           
        </div>
    );
  }
}

export default withTranslation('news')(news);