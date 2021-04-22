let map;

$(function() {
    $(".rslides").responsiveSlides();
  });
 
function initMap() {
  const paris = {lat: 48.862677512797156, lng: 2.2941865662724474};
  const chicago = {lat:41.89552258490193, lng:-87.62554129549383};
  const applehq = {lat:37.3320127724582,lng: -122.03089027320335};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: paris,
  });
  const towerMark = new google.maps.Marker({
    position: paris,
    map: map,
	animation: google.maps.Animation.DROP,
	title: 'Eiffel Tower'
  });
    const beanMark = new google.maps.Marker({
    position: chicago,
    map: map,
	animation: google.maps.Animation.DROP,
	title: 'Chicago Bean'
  });
     const apple = new google.maps.Marker({
    position: applehq,
    map: map,
	animation: google.maps.Animation.DROP,
	title: 'Apple Headquarters'
  });
 
}
