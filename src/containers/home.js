import React from 'react'
class Home extends React.Component {
  render () {
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

        <div class="information__pictures">
            <img src="img/story-1.jpeg" alt="Couple with new house" class="information__img--1"/>
            <img src="img/story-2.jpeg" alt="New house" class="information__img--2"/>
        </div>

        <div class="information__content">
            <h3 class="heading-3 mb-sm">Happy Customers</h3>
            <h2 class="heading-2 heading-2--dark mb-md">&ldquo; The best decision of our lives &rdquo;</h2>
            <p class="information__text"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, officia! In eveniet laudantium eaque numquam id fugit ipsa voluptatibus voluptas tempora quo, ducimus pariatur magnam iure corporis, veritatis nihil facilis?
            </p>
            <button class="btn">
                Find your own home
            </button>
        </div>

 
      </div>
    );
  }
}

export default Home;