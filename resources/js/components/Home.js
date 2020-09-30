import React, { Fragment } from 'react';
import Carousel from './Carousel';
import Card from './Card';
import NewsContainer from './NewsContainer';
import Quotes from './Quotes';
import KataDept from './KataDept';
import Pena from './Pena';
import Footer from './Footer';
import 'animate.css';

function Home(){
    return(
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <Carousel/>
                    <div className="limit-carousel">Jamaah Intelektual Mahasiswa Muslim</div>
                </div>
            </div>
            <div className="row row-p-card">
                <div className="col-12">
                    <h4 className="sub-title">Kabar JIMM</h4>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-4">
                    <Card image="images/line_11586271006482.jpg" title="Yuk Intip Keseruan Pengurus 
                    Saat Berlibur di Coban Talun" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velit atque dolores, 
                    molestias error libero sapiente pariatur voluptates." date="06 Januari 2020" dept="KADERISASI" />
                </div>
                <div className="col-sm-12 col-md-6 col-xl-4">
                    <Card image="images/IMG_6715.JPG" title="Mengisi luang waktu saat liburan UTS, para pengurus adakan mondok di Jombang" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velit atque dolores, 
                    molestias error libero sapiente pariatur voluptates." date="19 Juli 2020" dept="SYIAR" />
                </div>
                <div className="col-md-12 col-xl-4">
                    <NewsContainer/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Quotes/>
                </div>
                <div className="col-md-12 px-7p">
                    <h4 className="sub-title">Kata Departemen</h4>
                </div>
            </div>
            <div className="row owl-carousel owl-theme" style={{overflow:"hidden"}}>
                <KataDept image="nopal.png" dept="Badan Pengurus Inti" 
                kata={"\"Salah satu cara mengakrabkan kader adalah dengan cara ngopi bersama\""} anggota="Naufal GA - Wakil Ketua" />
                <KataDept image="ilham.png" dept="Badan Usaha Milik JIMM" 
                kata={"\"Ingat kawan 9 dari 10 pintu rezeki ada pada berjualan\""} 
                anggota="Ilham - Kabiro BUMJ" />
            </div>
            <div className="row row-p-card">
                <div className="col-md-12 mb-3">
                    <h4 className="sub-title">Pena JIMM</h4>
                </div>
                <Pena image="salahuddin2.jpg" image2="coding.jpg" image3="solat.jpg" />
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Home;
