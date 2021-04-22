let map;

function initMap() {
	const paris = {lat: 48.862677512797156, lng: 2.2941865662724474}
	const chicago = {lat:41.89552258490193, lng:-87.62554129549383}
	const applehq = {lat:37.3320127724582,lng: -122.03089027320335}
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.76, lng: -73.983 },
    zoom: 15,
    mapTypeId: "satellite",
    heading: 90,
    tilt: 45,
  });
  Tower = new google.maps.Marker({
    center: paris,
    zoom: 15,
    mapTypeId: "satellite",
    heading: 90,
    tilt: 45,
  });
    bean = new google.maps.Marker({
    center: chicago,
    zoom: 15,
    mapTypeId: "satellite",
    heading: 90,
    tilt: 45,
  });
     apple = new google.maps.Marker({
    center: applehq,
    zoom: 15,
    mapTypeId: "satellite",
    heading: 90,
    tilt: 45,
  });
  
}

function rotate90() {
  const heading = map.getHeading() || 0;
  map.setHeading(heading + 90);
}

function autoRotate() {
  // Determine if we're showing aerial imagery.
  if (map.getTilt() !== 0) {
    window.setInterval(rotate90, 3000);
  }
}
