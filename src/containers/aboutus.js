import React from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick-theme.scss"
import "../../node_modules/slick-carousel/slick/slick.scss"
import GoogleMapReact from 'google-map-react';


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
    return (
        <div class="aboutus">
            <div class="aboutus-banner">
            </div>

            <div class="aboutus-iplace">
            <h1 class="aboutus-iplace-header" style={{margin:'30px 30px'}}>RETAIL SPACE </h1>
            <p className="aboutus-iplace-paragraph">คอมมูนิตี้มอลล์ ใจกลางย่านธุรกิจ ภายใต้นิยามของการใช้ชีวิตสมัยใหม่ ที่ต้องการหลีกหนีความวุ่นวายพร้อมสิ่งอำนวยความสะดวกสบายครบวงจร ทางเลือกของคนเมืองที่จะเติมเต็มชีวิตคุณ iPLACE PARK เป็นจุดนัดพบ ช้อปปิ้ง สังสรรค์ ในบรรยากาศสบายๆ เพราะเราเชื่อว่า การพักผ่อนที่ดีย่อมสร้างสุขภาพจิตที่ดี เช่นเดียวกับ iPLACE PARK ที่มีความต้องการให้คุณได้พบกับสิ่งที่ดีที่เราต้องการมอบให้ เพราะคุณคือคนพิเศษที่เราพร้อมดูแลด้วยความใส่ใจ รวมถึงเป็นสถานที่ Hang Out แห่งใหม่ ก้าวสู่โลกแห่งความสุขและความผ่อนคลาย ตั้งอยู่บนพื้นที่ทำเลทองด้านหน้านิคมอุตสาหกรรมลาดกระบัง ติดถนนฉลองกรุง ซึ่งเป็นอาคาร 3 ชั้น แบ่งออกเป็น พื้นที่ชั้นที่ 1 และ 2 ประกอบไปด้วย ซุปเปอร์มาร์เก็ต ร้านอาหาร ธนาคาร ศูนย์ไอที และอื่นๆ ในส่วนพื้นที่ชั้น 3 ถูกจัดสรรให้เป็นพื้นที่บริการภายใต้ ARYU Executive Residence ที่พักรูปแบบใหม่ สไตล์มินิมอลสำหรับผู้บริหาร นักธุรกิจ และนักท่องเที่ยวที่ต้องการความสะดวกสบายในทุกๆด้าน ไม่ว่าจะเป็นการรับประทานอาหาร ช้อปปิ้ง หรือรวมไปถึงการทำธุรกรรมต่างๆ ในด้านของการเดินทางมีความสะดวก รวดเร็ว อยู่ใกล้ท่าอากาศยานสุวรรณภูมิ นิคมอุตสาหกรรมลาดกระบัง มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง และมอเตอร์เวย์หมายเลข 7 กล่าวได้ว่าผู้ที่เข้ามาใช้บริการ iPLACE PARK Lat Krabang แห่งนี้จะได้รับความสะดวกสบายและการบริการที่ครอบคลุมกับความต้องการในการใช้ชีวิตประจำวันได้อย่างแน่นอน
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
             <h4 class="aboutus__content1__header heading-2">ไอเพลส</h4>
             <h4 class="aboutus__content1__subheader heading-2">ลาดกระบัง</h4>
             <div class="aboutus__content1__box" style={{marginTop:"30px"}}>
                <p>อมมูนิตี้มอลล์ ใจกลางย่านธุรกิจ ภายใต้นิยามของการใช้ชีวิตสมัยใหม่ ที่ต้องการหลีกหนีความวุ่นวายพร้อมสิ่งอำนวยความสะดวกสบายครบวงจร ทางเลือกของคนเมืองที่จะเติมเต็มชีวิตคุณ ไอเพลส พาร์ค เป็นจุดนัดพบ ช้อปปิ้ง สังสรรค์ ในบรรยากาศสบายๆ เพราะเราเชื่อว่า การพักผ่อนที่ดีย่อมสร้างสุขภาพจิตที่ดี เช่นเดียวกับ ไอเพลส พาร์ค ที่มีความต้องการให้คุณได้พบกับสิ่งที่ดีที่เราต้องการมอบให้ เพราะคุณคือคนพิเศษที่เราพร้อมดูแลด้วยความใส่ใจ รวมถึงเป็นสถานที่ Hang Out แห่งใหม่ ก้าวสู่โลกแห่งความสุขและความผ่อนคลาย ตั้งอยู่บนพื้นที่ทำเลทองด้านหน้านิคมอุตสาหกรรมลาดกระบัง ติดถนนฉลองกรุง ซึ่งเป็นอาคาร 3 ชั้น แบ่งออกเป็น พื้นที่ชั้นที่ 1 และ 2 ประกอบไปด้วย ซุปเปอร์มาร์เก็ต ร้านอาหาร ธนาคาร ศูนย์ไอที และอื่นๆ ในส่วนพื้นที่ชั้น 3 ถูกจัดสรรให้เป็นพื้นที่บริการภายใต้ ARYU Executive Residence ที่พักรูปแบบใหม่ สไตล์มินิมอลสำหรับผู้บริหาร นักธุรกิจ และนักท่องเที่ยวที่ต้องการความสะดวกสบายในทุกๆด้าน ไม่ว่าจะเป็นการรับประทานอาหาร ช้อปปิ้ง หรือรวมไปถึงการทำธุรกรรมต่างๆ ในด้านของการเดินทางมีความสะดวก รวดเร็ว อยู่ใกล้สนามบินนานาชาติสุวรรณภูมิ นิคมอุตสาหกรรมลาดกระบัง มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง และมอเตอร์เวย์หมายเลข 7 กล่าวได้ว่าผู้ที่เข้ามาใช้บริการ ไอเพลส พาร์ค ลาดกระบัง แห่งนี้จะได้รับความสะดวกสบายและการบริการที่ครอบคลุมกับความต้องการในการใช้ชีวิตประจำวันได้อย่างแน่นอน</p>

             </div>     
            </div>

            <div class="aboutus__content2">
            <h4 class="aboutus__content2__header heading-2">ไอเพลส</h4>
            <h4 class="aboutus__content2__subheader heading-2">ศูนย์การค้า</h4>
            <div class="aboutus__content2__box" style={{marginTop:"30px"}}>
                    <div style={{margin:"30px 30px 30px 30px"}}>

                    <p class="aboutus__content2__boxheader" >ที่อยู่:</p>
                    <p>ไอเพลส พาร์ค</p>
                    <p>เลขที่ 1 ซอยฉลองกรุง 31 แขวงลำปลาทิว เขตลาดกระบัง กรุงเทพมหานคร 10520</p>
                    <br/>
                    <a className="btn btn--animated" >ขอใบเสนอราคา</a>
                    <br/>
                    <br/>
                    <p class="aboutus__content2__boxheader">เบอร์โทรศัพท์</p>
                    <p>+66 2 360 5300-1, +66 81 947 5863</p>
                    <br/>
                    <p class="aboutus__content2__boxheader">เวลาเปิดปิด</p>
                    <p>เปิดทำการทุกวัน 10:00 - 22:00</p>
                    <br/>
                    <a className="btn btn--animated">ขอใบเสนอราคา</a>
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
                <h2 className="aboutus-amenities-heading"> <span className="aboutus-amenities-heading-span">อำนวยความสะดวกใน</span> ไอเพลส ลาดกระบัง </h2>
                <div className="aboutus-amenities-list">
                    <div className="aboutus-amenities-list-group">
                        <div><i class="fas fa-fw fa-wheelchair"></i>ที่จอดรถคนพิการ</div>
                        <div><i class="fas fa-fw fa-parking"></i>ที่จอดรถ</div>
                        <div><i class="fas fa-fw fa-bicycle"></i>เส้นทางจักรยาน</div>
                    </div>
                    <div className="aboutus-amenities-list-group">
                        <div><i class="fas fa-fw fa-wifi"></i>อินเตอร์เน็ต</div>
                        <div><i class="fas fa-fw fa-sign"></i>แผนผังอาคาร</div>
                        <div><i class="fas fa-fw fa-baby"></i>ห้องเปลี่ยนผ้าอ้อม</div>
                    </div>
                    <div className="aboutus-amenities-list-group">
                        <div><i class="fas fa-fw fa-toilet"></i>ห้องน้ำ</div>
                        <div><i class="fas fa-fw fa-credit-card"></i>เอทีเอ็ม</div>
                        <div><i class="fas fa-fw fa-bus"></i>ป้ายรถประจำทาง</div>
                    </div>
                </div>
            </div>

            <div class="aboutus-carousel2" style={{marginTop: '80px'}}>
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



            
       
        
      </div>
    );
  }
}

export default aboutus;