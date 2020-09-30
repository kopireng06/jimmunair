import React from 'react';

function Card(props){
    return(
        <div className="card">
            <div className="zoom-card-img-top">
                <img className="card-img-top"  src={props.image} alt="Card image cap"/>
            </div>
            <div className="card-body">
                <div className="card-capt">
                    <span className="card-dept">{props.dept}</span>
                    <span className="card-date">{props.date}</span>
                </div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.text}
                    <a className="float-right" href="http://himsiunair.com/">Baca</a>
                </p>
            </div>
        </div>
    );
}

export default Card;