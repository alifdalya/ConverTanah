document.addEventListener("deviceready", function(){
            navigator.geolocation.getCurrentPosition(function(position) {
            var mapProp = {
                center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
                zoom:30,
                mapTypeId:google.maps.MapTypeId.ROADMAP};
            var map=new google.maps.Map(document.getElementById("geolocation"),
                                        mapProp);
            var marker=new google.maps.Marker( {
                position:new google.maps.LatLng(position.coords.latitude,position.coords.longitude)});
            marker.setMap(map);
            },

/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }
//function kiraArea() {
 // var nHektar = +document.getElementById("txtHektar").value;
 // var nPenyebut =+document.getElementById("txtPenyebut").value;
 // var nNhektar = nHektar * nPenyebut;
 // document.getElementById("txtNhektar").value = nNhektar;

//}

// ...additional event handlers here...
