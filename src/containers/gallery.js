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
                    <div className="row">
                        <div className="col-3">
                            <div className="card" style={{width: '18rem'}}>
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '18rem'}}>
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '18rem'}}>
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '18rem'}}>
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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