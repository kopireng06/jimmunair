import React from 'react';

function Footer(){
    return(
        <div className="row row-p-card footer">
            <div className="col-sm-4">
                <div className="jimm-footer">
                    JIMM UNAIR
                </div>
            </div>
            <div className="col-sm-3">
                <div className="medsos-footer">
                    Media Sosial
                </div>
                <div className="d-flex">
                    <div>
                        <a href="https://himsiunair.com"><img className="instagram-logo" src="images/instagram.svg"></img></a>
                        <a href="https://himsiunair.com"><img className="facebook-logo" src="images/facebook.svg"></img></a>
                        <a href="https://himsiunair.com"> <img className="twitter-logo" src="images/twitter.svg"></img></a>
                    </div>
                    <div className="ml-3">
                        <a href="https://himsiunair.com"><img className="youtube-logo" src="images/youtube.svg"></img></a>
                        <a href="https://himsiunair.com"><img className="line-logo" src="images/line.svg"></img></a>
                        <a href="https://himsiunair.com"><img className="spotify-logo" src="images/spotify.svg"></img></a>    
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="medsos-footer mb-2">
                    Kontak Kami
                </div>
                    <div className="row">
                        <div className="px-3 d-block">
                            <img className="location-logo" src="images/location.svg"/>
                        </div>
                        <div className="w-75 d-block">
                            <div className="text-white">Masjid Ulul Albab , Fakultas Sains dan Teknologi 
                            Universitas Airlangga</div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="d-block" style={{paddingLeft:"13px"}}>
                            <img className="email-logo" src="images/email.svg"/>
                        </div>
                        <div className="w-75 d-block">
                            <div className="d-inline-block text-white" style={{width:"245px"}}>jimm.fst.ua@gmail.com</div>
                        </div>
                    </div>
            </div>
            <div className="col-12 text-white mt-5 text-center">
                Copyright 2020. Jamaah Intelektual Mahasiswa Musim . All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;