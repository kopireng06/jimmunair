import React , {useEffect} from 'react';


// CapitaLetter = (str)=> {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

function Tentang(){
    useEffect(() => {
        // const locate = window.location.pathname;
        // locate = locate.replace(/\//g, "");
        // document.title = CapitaLetter(locate);
    });
    return(
        <div className="btn btn-primary">TENTANG</div>
    )
}

export default Tentang;