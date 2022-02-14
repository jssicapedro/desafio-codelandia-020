function exp() {
    var amazon = document.querySelector('#amazon');
    var google = document.querySelector('#google');
    var agency = document.querySelector('#agency');

    var empresas = [amazon, google, agency]

    if( amazon.style.display === "block"){
        google.style.display = "none";
        agency.style.display = "none";
        
    }   else if (google.style.display === "block"){
        amazon.style.display = "none";
        agency.style.display = "none";

    }   else{
        agency.style.display = "block";
        amazon.style.display = "none";
        google.style.display = "none";
    }
}