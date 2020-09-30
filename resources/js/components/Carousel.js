import React from 'react';

function Carousel(){
    return(
        <div id="carouselExampleControls" className="carousel slide mt-5" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-content">
                <div className="carousel-title animate__animated animate__fadeInDown animate__delay-1s"><span className="text-success">HIDUP BERARTI LALU MATI</span></div>
                <div className="carousel-hashtag animate__animated animate__fadeInDown animate__delay-2s ">#MyFriendMyFamilyAllahuAkbar</div>
                <div className="carousel-desc animate__animated animate__fadeInDown animate__delay-3s ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe autem sequi ea sed amet ut aliquid minus nam, 
                id est asperiores dolorum hic provident iusto dicta. Vel recusandae quasi tenetur.</div>
              </div>
              <img className="d-block w-100 item" src="images/IMG_9741.JPG" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <div className="carousel-title animate__animated animate__fadeInDown animate__delay-1s"><span className="text-success">JIMM MERANGKUL 2020</span></div>
                <div className="carousel-hashtag animate__animated animate__fadeInDown animate__delay-2s">#MyFriendMyFamilyAllahuAkbar</div>
                <div className="carousel-desc animate__animated animate__fadeInDown animate__delay-3s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe autem sequi ea sed amet ut aliquid minus nam, 
                id est asperiores dolorum hic provident iusto dicta. Vel recusandae quasi tenetur.</div>
              </div>
              <img className="d-block w-100 item" src="images/bg-scaled2.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <div className="carousel-title animate__animated animate__fadeInDown animate__delay-1s"><span className="text-success">PESANTREN MASA LIBUR 2020</span></div>
                <div className="carousel-hashtag animate__animated animate__fadeInDown animate__delay-2s">#MyFriendMyFamilyAllahuAkbar</div>
                <div className="carousel-desc animate__animated animate__fadeInDown animate__delay-3s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe autem sequi ea sed amet ut aliquid minus nam, 
                id est asperiores dolorum hic provident iusto dicta. Vel recusandae quasi tenetur.</div>
              </div>
              <img className="d-block w-100 item" src="images/IMG_0338.JPG" alt="First slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    );
}
function removeLeadSlash(path){
    return path.replace(/^\/+/g, '');
}

export default Carousel;