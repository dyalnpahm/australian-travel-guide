
              function initMap(){
                  // Map options 
                  var options = {
                      zoom:3,
                      center: {lat:-25.8688, lng:133.7751}
                  }
                  // New map
          
                  var map = new google.maps.Map(document.getElementById('map'), options);
                 
                  var markers = [
                  {
                    coords:{lat:-33.8688,lng:151.2093},
                    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                    content:'<h1>sydney</h1>'
                  },
                  {
                    coords:{lat:-36.9848,lng:143.3906},
                    content:'<h1>Victoria</h1>'
                  },
                  {
                    coords:{lat:-22.5752,lng:144.0848},
                    content:'<h1>QueensLand</h1>'
                  },
                  {
                    coords:{lat:-31.9523,lng:115.8613},
                    content:'<h1>Perth</h1>'
                  }
                ];
          
                // Loop through markers
                for(var i = 0;i < markers.length;i++){
                  // Add marker
                  addMarker(markers[i]);
                }
          
                // Add Marker Function
                function addMarker(props){
                  var marker = new google.maps.Marker({
                    position:props.coords,
                    map:map,
                    //icon:props.iconImage
                  });
          
                  // Check for customicon
                  if(props.iconImage){
                    // Set icon image
                    marker.setIcon(props.iconImage);
                  }
          
                  // Check content
                  if(props.content){
                    var infoWindow = new google.maps.InfoWindow({
                      content:props.content
                    });
          
                    marker.addListener('click', function(){
                      infoWindow.open(map, marker);
                    });
                  }
                }
              }
          
          
            