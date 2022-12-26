function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 28.724497985918816, lng: 77.11480596907037},
zoom: 18,
mapId: '99d8454374a4946d',
mapTypeControl:false,
fullscreenControl:false,
streetViewControl:false
});

const markers = [
  [
    "Your's location",
    28.724497985918816,
    77.11480596907037,
  "location.svg",
  45,
  45,
],
[
  "Fastfood things",
    28.72399438634217,
     77.11383082028041,
"fastfood.svg",
45,
45,
]
]


for( let i = 0 ; i < markers.length; i++) {
  const currmarker = markers[i];


   const marker = new google.maps.Marker({
    position: { lat: currmarker[1], lng: currmarker[2] },
    map,
    title:currmarker[0],
    icon:{
      url:currmarker[3],
      scaledSize: new google.maps.Size(currmarker[4],currmarker[5])
    },
    animation: google.maps.Animation.DROP
  });

  const infowindow = new google.maps.InfoWindow({
    content:"Your Location",
  });

  marker.addListner("click" , () => {
    infowindow.open(map, marker);

  });
}


}
