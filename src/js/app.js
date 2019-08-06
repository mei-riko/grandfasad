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

  // Input mask
  if( $('.phone').length > 0 ) {
    $(".phone").inputmask({
      mask: "8 999 999 99 99",
      placeholder: " ",
      showMaskOnHover: true,
      onincomplete: function(){ 
        $(this).closest("form").addClass('error-phone'); 
        $(this).addClass('error'); 
        $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
      }, 
      oncomplete: function(){ 
          $(this).closest("form").removeClass('error-phone'); 
          $(this).removeClass('error'); 
          $(this).siblings(".error_phone").removeClass('error').html(''); 
      },
    })
  }
  $('input.phone').on('keydown', function(event) {
      if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
          event.preventDefault();
          $(this).blur();
          return false;
      }
  });
    
  // Index Slider
  $('.slider_index .slider__image').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      fade: true,
  });
  
  // Product Slider
  $('.slider_for .slider__image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: '.slider_for .slider__nav',
  });
  $('.slider__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider_for .slider__image',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });

  // Navbar
  $(".header .navbar-toggler").on("click", function(){
    $(".navbar.navbar_mobile").toggleClass("navbar_mobile--active");
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
		var navbar = $(".navbar.navbar_mobile.navbar_mobile--active"); // тут указываем ID элемента
		if (!navbar.is(e.target) && navbar.has(e.target).length === 0) {
      navbar.removeClass("navbar_mobile--active");
		}
  });
  
  // Maps
  if( $('#map').length > 0 ) {
    var coordinates = {lat: 59.87618673092533, lng: 30.283030271857573};

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
    
    var contentString = '<p>город Санкт-Петербург,  улица Броневая, дом 16</p>';
    
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
  }
});