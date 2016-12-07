var MapWrapper = function(container,center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  
  addMarker: function(coords, infoString){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    var infowindow = new google.maps.InfoWindow({
      content: infoString
    });
    marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);
    });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){ 
      var position = event.latLng;
      console.log(this);
      this.addMarker(position);
    }.bind(this));
  }
}






