import React from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick-theme.scss"
import "../../node_modules/slick-carousel/slick/slick.scss"
import { withTranslation } from 'react-i18next';


class Home extends React.Component {
  render () {
        const settings = {
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "60px",
                slidesToShow: 6,
                speed: 500,
                autoplay: true,
                autoplaySpeed : 1000,
                arrows: false,
        };
        const { t, i18n } = this.props;
        const changeLanguage = lng => {
                i18n.changeLanguage(lng);
        };
    return (
      <div className="home"> 
        <div className="home__banner">
          <div className="home__banner__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">THE</span>
                <span className="heading-primary--sub">OASIS IN LAT KRABANG</span>
            </h1>
            <a className="btn btn--white btn--animated">{t('content.part0.quotation')}</a>
          </div>
        </div>


        <section className="features">
        <div class="container">
                <div class="row">
                        <div class="col-lg-4 col-sm-12 mt-5">       
                                <div class="card card-border-orange">
                                        <div class="card-body">
                                        <h5 class="card-title" style={{fontSize: '2rem'}}>SHOP</h5>
                                        <hr style={{height:'2px', border:'none',color:'#eb6b00',backgroundColor:'#eb6b00',width:'25px'}} />
                                        <p class="card-text text-primary" style={{fontSize: '2rem',fontWeight: 'bolder'}}>CONVENIENCE <span style={{display:'block'}}>STORE</span></p>
                                        
                                        </div>
                                        <img className="res-img" src={require('../img/feature1.jpg')}  alt="fireSpot"/>
                                        
                                </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 mt-5">       
                                <div class="card card-border-orange">
                                        <div class="card-body">
                                        <h5 class="card-title" style={{fontSize: '2rem'}}>EAT</h5>
                                        <hr style={{height:'2px', border:'none',color:'#eb6b00',backgroundColor:'#eb6b00',width:'25px'}} />
                                        <p class="card-text text-primary" style={{fontSize: '2rem',fontWeight: 'bolder'}}>RETAIL <span style={{display:'block'}}>SPACE</span></p>
                                        
                                        </div>
                                        <img className="res-img" src={require('../img/feature2.jpg')}  alt="fireSpot"/>
                                        
                                </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 mt-5">       
                                <div class="card card-border-orange">
                                        <div class="card-body">
                                        <h5 class="card-title" style={{fontSize: '2rem'}}>MEET</h5>
                                        <hr style={{height:'2px', border:'none',color:'#eb6b00',backgroundColor:'#eb6b00',width:'25px'}} />
                                        <p class="card-text text-primary" style={{fontSize: '2rem',fontWeight: 'bolder'}}>MEETING ROOM & <span style={{display:'block'}}>COWORKING SPACE</span></p>
                                        
                                        </div>
                                        <img className="res-img" src={require('../img/feature3.jpg')}  alt="fireSpot"/>
                                        
                                </div>
                        </div>
                </div>
        </div>

        </section>

        <div class="information__content1">
             <h4 class="information__content1__header heading-2">{t('content.part1.header')}</h4>
             <h4 class="information__content1__subheader heading-2" style={{display:"inline"}}>{t('content.part1.subheader')}</h4>
             <div class="information__content1__box" style={{marginTop:"30px"}}>
                <p>{t('content.part1.description')}</p>
             </div>     
        </div>

        <div class="information__content2">
        <h4 class="information__content2__header heading-2">{t('content.part2.header')}</h4>
        <h4 class="information__content2__subheader heading-2">{t('content.part2.subheader')}</h4>
        <div class="information__content2__box" style={{marginTop:"30px"}}>
                <div style={{margin:"30px 30px 30px 30px"}}>

                <p class="information__content2__boxheader" >{t('content.part2.boxheader')}</p>
                <p>{t('content.part2.iplace')}</p>
                <p>{t('content.part2.address')}</p>
                <br/>
                <a className="btn btn--animated" >{t('content.part2.googlemap')}</a>
                <br/>
                <br/>
                <p class="information__content2__boxheader">{t('content.part2.tellno')}</p>
                <p>{t('content.part2.call')}</p>
                <br/>
                <p class="information__content2__boxheader">{t('content.part2.openclose')}</p>
                <p>{t('content.part2.worktime')}</p>
                <br/>
                <a className="btn btn--animated">{t('content.part2.aboutus')}</a>
                <br/>
                
                </div>

        </div>
        </div>

        <div class="home-travel">
        <div style={{textAlign: 'center'}}><img src="/../img/t1.png" alt="t1" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>12.6<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.4rem'}}>{t('content.part3.pic1')}</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t2.png" alt="t2" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>0.5<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.4rem'}}>{t('content.part3.pic2')}</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t3.png" alt="t3" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>12.3<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.4rem'}}>{t('content.part3.pic3')}</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t4.png" alt="t4" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>9.5<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.4rem'}}>{t('content.part3.pic4')}</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t5.png" alt="t5" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>6.7<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.4rem'}}>{t('content.part3.pic5')}</span></div>
        </div>

        <div class="home_news">
        <h1 class="home_news__header">{t('content.part4.newsheader')}</h1>
        <a className="btn  btn--animated home_news__button">{t('content.part4.newsbutton')}</a>
        <p className="home_news__no-news heading-4">{t('content.part4.news')}</p>
        </div>

        <div class="home-sponsor">
        <Slider {...settings} class="home-sponsor-carousel">
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



 
      </div>
    );
  }
}

export default withTranslation('home')(Home);