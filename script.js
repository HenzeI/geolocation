/* 

document.addEventListener("DOMContentLoaded", inicio)

function inicio() {
        navigator.geolocation.getCurrentPosition(function(position) {
          let latitud = position.coords.latitude;
          let longitud = position.coords.longitude;
          console.log("Latitud: " + latitud);
          console.log("Longitud: " + longitud);
        });

        navigator.geolocation.getCurrentPosition(function(position) {
            let latitud = position.coords.latitude
            let longitud = position.coords.longitude
            console.log(`latitud ${latitud} longitud ${longitud}`);
        })
} */

navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
});        

/* console.log('prueba');

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
    console.log("Tu ubicación actual es:");
    console.log(`Latitud : ${crd.latitude}`);
    console.log(`Longitud: ${crd.longitude}`);
    console.log(`Más o menos ${crd.accuracy} metros.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options); */