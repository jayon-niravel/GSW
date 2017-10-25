var map;
function initMap() {
  var customMapType = new google.maps.StyledMapType([
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        { color: '#a6a6a0' }
      ]
    },{
      featureType: "all",
      stylers: [
        { saturation: -80 },
        {lightness: 20}
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#f6f6f6" },
        { saturation: 0 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }

    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.372026, lng:  72.819791},
    zoom: 15,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });
  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}




