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
            <a className="btn btn--white btn--animated">ขอใบเสนอราคา</a>
          </div>
        </div>


        <section className="features">
            <div className="feature">
                <img src="img/house-1.jpeg" alt="House 1" className="feature__img"/>

                <h5 className="feature__name">SHOP</h5>
                <div className="feature__location">
                        <p>USA</p>
                </div>
                <div className="feature__rooms">

                        <p>5 rooms</p>
                </div>
                <div className="feature__area">

                        <p>325 m<sup>2</sup></p>
                </div>
                <div className="feature__price">

                        <p>$1,200,000</p>
                </div>
                <button className="btn feature__btn">Contact realtor</button>
            </div>

            <div className="feature">
                    <img src="img/house-2.jpeg" alt="House 2" className="feature__img"/>

                    <h5 className="feature__name">EAT</h5>
                    <div className="feature__location">

                            <p>Canada</p>
                    </div>
                    <div className="feature__rooms">

                            <p>6 rooms</p>
                    </div>
                    <div className="feature__area">

                            <p>450 m<sup>2</sup></p>
                    </div>
                    <div className="feature__price">

                            <p>$2,700,000</p>
                    </div>
                    <button className="btn feature__btn">Contact realtor</button>
            </div>

            <div className="feature">
                    <img src="img/house-3.jpeg" alt="House 3" className="feature__img"/>

                    <h5 className="feature__name">MEET</h5>
                    <div className="feature__location">

                            <p>UK</p>
                    </div>
                    <div className="feature__rooms">

                            <p>4 rooms</p>
                    </div>
                    <div className="feature__area">
    
                            <p>325 m<sup>2</sup></p>
                    </div>
                    <div className="feature__price">

                            <p>$900,000</p>
                    </div>
                    <button className="btn feature__btn">Contact realtor</button>
            </div>
        </section>

        <div class="information__content1">
             <h4 class="information__content1__header heading-2">ไอเพลส</h4>
             <h4 class="information__content1__subheader heading-2">ลาดกระบัง</h4>
             <div class="information__content1__box" style={{marginTop:"30px"}}>
                <p>{t('content.part1')}</p>
                <button onClick={() => changeLanguage('en')}>en</button>
             </div>     
        </div>

        <div class="information__content2">
        <h4 class="information__content2__header heading-2">ไอเพลส</h4>
        <h4 class="information__content2__subheader heading-2">ศูนย์การค้า</h4>
        <div class="information__content2__box" style={{marginTop:"30px"}}>
                <div style={{margin:"30px 30px 30px 30px"}}>

                <p class="information__content2__boxheader" >ที่อยู่:</p>
                <p>ไอเพลส พาร์ค</p>
                <p>เลขที่ 1 ซอยฉลองกรุง 31 แขวงลำปลาทิว เขตลาดกระบัง กรุงเทพมหานคร 10520</p>
                <br/>
                <a className="btn btn--animated" >ขอใบเสนอราคา</a>
                <br/>
                <br/>
                <p class="information__content2__boxheader">เบอร์โทรศัพท์</p>
                <p>+66 2 360 5300-1, +66 81 947 5863</p>
                <br/>
                <p class="information__content2__boxheader">เวลาเปิดปิด</p>
                <p>เปิดทำการทุกวัน 10:00 - 22:00</p>
                <br/>
                <a className="btn btn--animated">ขอใบเสนอราคา</a>
                <br/>
                
                </div>

        </div>
        </div>

        <div class="home-travel">
        <div style={{textAlign: 'center'}}><img src="/../img/t1.png" alt="t1" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>12.6<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.4rem'}}>Suvarnabhumi International Airport</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t2.png" alt="t2" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>0.5<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.4rem'}}>Lat Krabang Industrial Estate</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t3.png" alt="t3" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>12.3<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.4rem'}}>Airport Rail Link (Lat Krabang Station)</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t4.png" alt="t4" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>9.5<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.4rem'}}>Motorway no.7</span></div>
        <div style={{textAlign: 'center'}}><img src="/../img/t5.png" alt="t5" className=""/><span style={{display:'block' , fontSize:'4rem' , fontWeight:'450'}}>6.7<span style={{color:'#eb6b00',fontSize:'2rem'}}>km</span></span><span style={{fontSize:'1.4rem'}}>King Mongkut's Institute of Technology Ladkrabang</span></div>
        </div>

        <div class="home_news">
        <h1 class="home_news__header">iPLACE ข่าวสารและกิจกรรม</h1>
        <a className="btn  btn--animated home_news__button">อ่านข่าวทั้งหมด</a>
        <p className="home_news__no-news heading-4">No news at this time.</p>
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