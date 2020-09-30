import React,{Fragment,useEffect} from 'react';
import 'owl.carousel';


function KataDept(props){
    const keong = {backgroundImage: 'url(images/' + props.image + ')'};
    useEffect(()=>{
        $('.owl-carousel').owlCarousel({
            items:1,
            nav:false,
            dots:true
        });
        $('.owl-nav').remove();
        console.log(window.location.pathname);
    });
    return(
        <Fragment>
            <div className="col-12">
                <div className="row">
                    <div className="col-md-6 h-300px bg-green mt-100px">
                        <div className="mx-auto bg-dept" style={keong} />
                    </div>
                    <div className="col-md-6 h-300px bg-green mt-md-100px mb-5">
                        <div className="row">
                            <div className="col-md-8 mt-2">
                                <h5 className="sub-title d-block px-9p mt-2 text-white">{props.dept}</h5>
                            </div>
                            <div className="col-xl-8 col-md-12 d-flex justify-content-center align-items-center" id="#coba">
                                <div className="card-kata-dept d-flex justify-content-center align-items-center">
                                    <div className="text-kata-dept">
                                        {props.kata}
                                        <br/>
                                        <br/>
                                        <div className="anggota-kata-dept">{props.anggota}</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default KataDept;