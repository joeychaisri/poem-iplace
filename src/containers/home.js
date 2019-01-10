import React from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick-theme.scss"
import "../../node_modules/slick-carousel/slick/slick.scss"


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
                <p>อมมูนิตี้มอลล์ ใจกลางย่านธุรกิจ ภายใต้นิยามของการใช้ชีวิตสมัยใหม่ ที่ต้องการหลีกหนีความวุ่นวายพร้อมสิ่งอำนวยความสะดวกสบายครบวงจร ทางเลือกของคนเมืองที่จะเติมเต็มชีวิตคุณ ไอเพลส พาร์ค เป็นจุดนัดพบ ช้อปปิ้ง สังสรรค์ ในบรรยากาศสบายๆ เพราะเราเชื่อว่า การพักผ่อนที่ดีย่อมสร้างสุขภาพจิตที่ดี เช่นเดียวกับ ไอเพลส พาร์ค ที่มีความต้องการให้คุณได้พบกับสิ่งที่ดีที่เราต้องการมอบให้ เพราะคุณคือคนพิเศษที่เราพร้อมดูแลด้วยความใส่ใจ รวมถึงเป็นสถานที่ Hang Out แห่งใหม่ ก้าวสู่โลกแห่งความสุขและความผ่อนคลาย ตั้งอยู่บนพื้นที่ทำเลทองด้านหน้านิคมอุตสาหกรรมลาดกระบัง ติดถนนฉลองกรุง ซึ่งเป็นอาคาร 3 ชั้น แบ่งออกเป็น พื้นที่ชั้นที่ 1 และ 2 ประกอบไปด้วย ซุปเปอร์มาร์เก็ต ร้านอาหาร ธนาคาร ศูนย์ไอที และอื่นๆ ในส่วนพื้นที่ชั้น 3 ถูกจัดสรรให้เป็นพื้นที่บริการภายใต้ ARYU Executive Residence ที่พักรูปแบบใหม่ สไตล์มินิมอลสำหรับผู้บริหาร นักธุรกิจ และนักท่องเที่ยวที่ต้องการความสะดวกสบายในทุกๆด้าน ไม่ว่าจะเป็นการรับประทานอาหาร ช้อปปิ้ง หรือรวมไปถึงการทำธุรกรรมต่างๆ ในด้านของการเดินทางมีความสะดวก รวดเร็ว อยู่ใกล้สนามบินนานาชาติสุวรรณภูมิ นิคมอุตสาหกรรมลาดกระบัง มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง และมอเตอร์เวย์หมายเลข 7 กล่าวได้ว่าผู้ที่เข้ามาใช้บริการ ไอเพลส พาร์ค ลาดกระบัง แห่งนี้จะได้รับความสะดวกสบายและการบริการที่ครอบคลุมกับความต้องการในการใช้ชีวิตประจำวันได้อย่างแน่นอน</p>

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

        <div class="carousel">
        
        </div>

        <div class="home_news">
        <h1 class="home_news__header">iPLACE ข่าวสารและกิจกรรม</h1>
        <a className="btn  btn--animated home_news__button">อ่านข่าวทั้งหมด</a>
        <p className="home_news__no-news heading-4">No news at this time.</p>
        </div>

        <div class="sponsor">
        <Slider {...settings}>
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

export default Home;