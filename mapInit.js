function initMap(){
    let location = {
        lat: 53.037454,
        lng : -1.200469,
    };
    let map = new google.maps.Map(document.querySelector('#map'),{
        zoom: 16, 
        center: location
    });
    new google.maps.Marker({
        position: location,
        map,
        title: "Levanas 10B High street HucknallNottingham NG15"
    })
}