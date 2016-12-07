var init = function(container, center, zoom){
  var container = document.getElementById('main-map');
  var udnyStation = {lat: 57.311606, lng: -2.153835};
  var tartyBurn = {lat: 57.312962, lng: -2.157912};
  var infoString = "Udny Station: Lat: " + udnyStation.lat + " Lng: " +udnyStation.lng;
  var infoString2 = "Tarty Burn: Lat: " + tartyBurn.lat + " Lng: " +tartyBurn.lng;
  var mainMap = new MapWrapper(container, udnyStation, 16);
  
  mainMap.addMarker(udnyStation, infoString);
  mainMap.addMarker(tartyBurn, infoString2);
  mainMap.addClickEvent();

  var button = document.querySelector('button');
  // handleButtonClick is an event handler
  button.onclick = handleButtonClick;
}

var handleButtonClick = function() {
  var container = document.getElementById('main-map');
  // center on inverness
  var center = {lat: 57.4778, lng: -4.2247};
  var mainMap = new MapWrapper(container, center, 10);  
}

window.onload = init;