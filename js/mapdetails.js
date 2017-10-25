function initMapListing() {
  var myLatLng = {lat: 47.6205588, lng: -122.3212725};
  var map = new google.maps.Map(document.getElementById('listing-map'), {
    zoom: 15,
    center: myLatLng,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
