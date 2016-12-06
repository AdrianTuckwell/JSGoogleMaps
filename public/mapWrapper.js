var MapWrapper = function(container,center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    var contentString = "<p>Udny Station</p>";
    var infowindow = new google.maps.InfoWindow({
      content: contentString
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






