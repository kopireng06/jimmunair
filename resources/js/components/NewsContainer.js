import React from 'react';
import News from './News';

function NewsContainer(){
    return(
        <div className="news-container">
            <div className="row m-0">
                <div className="col-xl-12 col-md-6 col-sm-12 p-0">
                    <News/> 
                </div>
                <div className="col-xl-12 col-md-6 col-sm-12 p-0">
                    <News/> 
                </div>
                <div className="col-xl-12 col-md-6 col-sm-12 p-0">
                    <News/> 
                </div>
                <div className="col-xl-12 col-md-6 col-sm-12 p-0">
                    <News/> 
                </div>
            </div>
        </div>
    );
}

export default NewsContainer;