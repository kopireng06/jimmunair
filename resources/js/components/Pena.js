import React, { Fragment } from 'react';

function Pena(props){
    const keong = {
        pena1:{
            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(images/' + props.image + ')'
        },
        pena2:{
            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(images/' + props.image2 + ')'
        },
        pena3:{
            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(images/' + props.image3 + ')'
        }
    };
    return(
        <Fragment>
            <div className="col-lg-8 mb-2">
                <div className="big-pena" style={keong.pena1}>
                    <div className="pena-title-wrapper">
                        <a href="">
                            <div className="pena-title">
                                Mengenal Salahuddin Al-Ayyubi, sang penakluk Yerusalem
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-12 mb-2">
                        <div className="small-pena" style={keong.pena2}>
                            <div className="pena-title-wrapper">
                                <a href="#">
                                    <div className="pena-title">
                                        Kamu kader dakwah ? ayok ngoding kawan
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="small-pena" style={keong.pena3}>
                            <div className="pena-title-wrapper">
                                <a href="#">
                                    <div className="pena-title">
                                        Apapun yang terjadi , tetap sholat ya
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Pena;