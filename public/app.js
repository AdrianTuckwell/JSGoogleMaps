var init = function(container, center, zoom){
  var container = document.getElementById('main-map');
  var center = {lat: 57.311606, lng: -2.153835};
  var center2 = {lat: 57.312962, lng: -2.157912};
  var infoString = "Udny Station";
  var infoString2 = "Tarty Burn";
  var mainMap = new MapWrapper(container, center, 16);
  mainMap.addMarker(center, infoString);
  mainMap.addMarker(center2, infoString2);
  mainMap.addClickEvent();

  var button = document.querySelector('button');
  // handleButtonClick is an event handler
  button.onclick = handleButtonClick;
}



var handleButtonClick = function() {
  var container = document.getElementById('main-map');
  var center = {lat: 57.4778, lng: -4.2247};
   var mainMap = new MapWrapper(container, center, 10);  
}

window.onload = init;