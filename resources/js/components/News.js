import React from 'react';

function News(){
    return(
        <div className="news">
            <div className="row h-100px m-0">
                <img className="bg-dark col-4 col-md-4 img-news" src="images/fotoku.jpeg"></img>
                <div className="bg-white col-8 col-md-8 title-news">
                    <div className="news-capt">
                        <div className="news-dept">KADERISASI<span className="news-date">12 Agustus 2000</span></div>
                    </div>
                    <a href="http://himsiunair.com/">Pentingnya ngopi dikala pandemi</a>
                </div>
            </div>
        </div>
    );
}

export default News;