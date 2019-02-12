import React from 'react'
class Footer extends React.Component {
render () {
    return (
        <div className="gallery">
            <div className="gallery-banner">
            </div>

            <div className="gallery-head">
                <h1 className="gallery-head-header" style={{margin:'30px 30px'}}>RETAIL SPACE </h1>
                <p className="gallery-head-paragraph">ไอเพลส พาร์ค ลาดกระบัง คอมมูนิตี้มอลล์ ศูนย์รวมร้านค้าต่างๆมากมายไว้คอยให้บริการ อำนวยความสะดวกสบาย เราใส่ใจทุกย่างก้าวที่ลูกค้าเข้ามาใช้บริการ อาทิ ซุปเปอร์มาเก็ต (ท็อป มาร์เก็ต), ร้านอาหาร (แมคโดนัล, เดอะ พิซซ่า คอมพานี, เคเอฟซี, เอสแอนด์พี, โออิชิ), ร้านกาแฟ (คาเฟ่ อเมซอน) ธนาคาร, ตู้เอทีเอม, ร้านขายยา และ ศูนย์รวมไอทีครบวงจร</p>
            </div>   

            

            <div className="gallery-main">
            
                <div className="container">
                    <div className=" btn-group"></div>
                        <button type="button" className="btn btn-danger dropdown-toggle offset-lg-11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        SORT BY
                        </button>
                        <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 center">
                            <div class="card" style={{width: '28rem' , margin:'0 auto' , marginTop:'10px'}}>
                                <img className="res-img" src={require('../img/gallery/home1.jpg')}  alt="fireSpot"/>
                                <div class="card-body">
                                    <h5 class="card-title">Home1</h5>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 center">
                            <div class="card" style={{width: '28rem' , margin:'0 auto' , marginTop:'10px'}}>
                                <img className="res-img" src={require('../img/gallery/home2.jpg')}  alt="fireSpot"/>
                                <div class="card-body">
                                    <h5 class="card-title">Home2</h5>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 center">
                            <div class="card" style={{width: '28rem' , margin:'0 auto' , marginTop:'10px'}}>
                                <img className="res-img" src={require('../img/gallery/home3.jpg')}  alt="fireSpot"/>
                                <div class="card-body">
                                    <h5 class="card-title">Home3</h5>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 center">
                            <div class="card" style={{width: '28rem' , margin:'0 auto' , marginTop:'10px'}}>
                                <img className="res-img" src={require('../img/gallery/home4.jpg')}  alt="fireSpot"/>
                                <div class="card-body">
                                    <h5 class="card-title">Home4</h5>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 center">
                            <div class="card" style={{width: '28rem' , margin:'0 auto' , marginTop:'10px'}}>
                                <img className="res-img" src={require('../img/gallery/home5.jpg')}  alt="fireSpot"/>
                                <div class="card-body">
                                    <h5 class="card-title">Home5</h5>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 center">
                            <div class="card" style={{width: '28rem' , margin:'0 auto' , marginTop:'10px'}}>
                                <img className="res-img" src={require('../img/gallery/home6.jpg')}  alt="fireSpot"/>
                                <div class="card-body">
                                    <h5 class="card-title">Home6</h5>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 center">
                            <div class="card" style={{width: '28rem' , margin:'0 auto' , marginTop:'10px'}}>
                                <img className="res-img" src={require('../img/gallery/home7.jpg')}  alt="fireSpot"/>
                                <div class="card-body">
                                    <h5 class="card-title">Home7</h5>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>        
        </div>
    );
}
}

export default Footer;