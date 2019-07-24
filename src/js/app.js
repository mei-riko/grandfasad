import $ from 'jquery'
$(document).ready(() =>{
    $("a.scroll").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
    });
    
    // Index Slider
    $('.slider .slider__image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
    });

    // Navbar
    // if( $("body").scrollTop() > 100 ){
    //     $(".index .header .navbar").fadeOut();
    // }

    // $(window).scroll(function(){
    //     var scroll=$(document).scrollTop();
    //     if( scroll > 100 ){
    //         $(".index .header .navbar").fadeOut();
    //     }else{
    //         $(".index .header .navbar").fadeIn();
    //     }
    // });

    // Maps
    var coordinates = {lat: 59.92577096038783, lng: 30.347231626510624};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        scrollwheel: false,
        zoom: 17,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#fbf0da"
                }
              ]
            },
            {
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#3a3c40"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3a3c40"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
    });
    
    var contentString = '<p>город Санкт-Петербург,  переулок Свечной, дом 2/12, лит. А, пом. 8Н.</p>';
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    
    var markerImage = new google.maps.MarkerImage(
        "./img/flag.svg",
        new google.maps.Size(71, 71),
        null,
        null,
        new google.maps.Size(45, 45)
    );

    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
    });

    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    
});