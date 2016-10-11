/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {

       /* button  #btnKira */
    $(document).on("click", "#btnKira", function(evt)

    {
        /* your code goes here */
						   /* kod ni kena cek semula*/
		//function validinput(In){
			//var jenisInput = /^[0-9]*/gm;
			/*var jenisInput =! isNaN;
			if(document.getElementById("txtInput").value.match(jenisInput) || document.getElementById("txtPenyebut").value.match(jenisInput) || document.getElementById("txtPembilang").value.match(jenisInput))
				{
					return true;
				}
			else;
				{
					navigator.notification.alert("Input nombor sahaja ok");
					//document.getElementById("demo").innerHTML ="Salah ni!";
					return false;
				}
		} sampai sini*/

		$("#popJawapan").modal("toggle");

        var nInput =+document.getElementById("txtInput").value;
        var nPenyebut =+document.getElementById("txtPenyebut").value;
        var nPembilang =+document.getElementById("txtPembilang").value;

		function toHektar(h){
			if(document.getElementById("selectUnit").value == "hektar"){
			return (nPenyebut/nPembilang)*nInput;
			}
			else if(document.getElementById("selectUnit").value == "ekar"){
			return (nPenyebut/nPembilang)*(nInput/2.47105);
			}
			else if(document.getElementById("selectUnit").value == "meter"){
			return (nPenyebut/nPembilang)*(nInput/10000);
			}
			else if(document.getElementById("selectUnit").value == "kaki"){
			return (nPenyebut/nPembilang)*(nInput/107640);
			}
		}
        function toEkar(e){
			if(document.getElementById("selectUnit").value == "hektar"){
			return (nPenyebut/nPembilang)*(nInput*2.47105);
			}
			else if(document.getElementById("selectUnit").value == "ekar"){
			return (nPenyebut/nPembilang)*nInput;
			}
			else if(document.getElementById("selectUnit").value == "meter"){
			return (nPenyebut/nPembilang)*(nInput/4046.86);
			}
			else if(document.getElementById("selectUnit").value == "kaki"){
			return (nPenyebut/nPembilang)*(nInput*2.29568418910972e-05);
			}
		}
		function toMetersq(m){
			if(document.getElementById("selectUnit").value == "hektar"){
			return (nPenyebut/nPembilang)*(nInput*10000);
			}
			else if(document.getElementById("selectUnit").value == "ekar"){
			return (nPenyebut/nPembilang)*(nInput*4046.86);
			}
			else if(document.getElementById("selectUnit").value == "meter"){
			return (nPenyebut/nPembilang)*nInput;
			}
			else if(document.getElementById("selectUnit").value == "kaki"){
			return (nPenyebut/nPembilang)*(nInput/10.764);
			}
		}
		function toKakisq(k){
			if(document.getElementById("selectUnit").value == "hektar"){
			return (nPenyebut/nPembilang)*(nInput*107639);
			}
			else if(document.getElementById("selectUnit").value == "ekar"){
			return (nPenyebut/nPembilang)*(nInput*43560);
			}
			else if(document.getElementById("selectUnit").value == "meter"){
			return (nPenyebut/nPembilang)*(nInput/0.092903);
			}
			else if(document.getElementById("selectUnit").value == "kaki"){
			return (nPenyebut/nPembilang)*nInput;
			}
		}
		function toIncisq(i){
			if(document.getElementById("selectUnit").value == "hektar"){
			return (nPenyebut/nPembilang)*((nInput*10000)/0.00645);
			}
			else if(document.getElementById("selectUnit").value == "ekar"){
			return (nPenyebut/nPembilang)*((nInput*4046.86)/0.00645);
			}
			else if(document.getElementById("selectUnit").value == "meter"){
			return (nPenyebut/nPembilang)*(nInput/0.00645);
			}
			else if(document.getElementById("selectUnit").value == "kaki"){
			return (nPenyebut/nPembilang)*(nInput*144);
			}
		}


		document.getElementById("txtNhektar").value = toHektar();
        document.getElementById("txtNekar").value = toEkar();
        document.getElementById("txtNmeter").value = toMetersq();
        document.getElementById("txtNkaki").value = toKakisq();
        document.getElementById("txtNinci").value = toIncisq();

		return false;
    });


        /* button  .uib_w_15 */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals
            */

         $("#popPP").modal("toggle");
         return false;
    });


     /* button  #btnKosongkan */
    $(document).on("click", "#btnKosongkan", function(evt)
    {
        /* your code goes here */
		document.getElementById("txtInput").value = "";
        document.getElementById("txtPenyebut").value = "";
        document.getElementById("txtPembilang").value = "";
         return false;
    });


        /* button  #btnmenu */
    $(document).on("click", "#btnmenu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are:
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */

         uib_sb.toggle_sidebar($("#bartepi"));
         return false;
    });

        /* button  About */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_page */
         activate_page("#about");
         return false;
    });

        /* button  #btnBalik */
    $(document).on("click", "#btnBalik", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage");
         return false;
    });

        /* button  Kira Pecahan Tanah */


        /* button  Kira Pecahan Tanah */


        /* button  #btnBalik2 */
    $(document).on("click", "#btnBalik2", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage");
         return false;
    });

        /* button  Panduan Urusan */
    $(document).on("click", ".uib_w_31", function(evt)
    {
         /*global activate_page */
         activate_page("#panduan");
         return false;
    });

        /* button  .uib_w_30 */


        /* button  .uib_w_30 */
    $(document).on("click", ".uib_w_30", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are:
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */

         uib_sb.toggle_sidebar($("#bartepi"));
         return false;
    });

        /* button  #btnClose */
    $(document).on("click", "#btnClose", function(evt)
    {
     		 if(navigator.app){
        	navigator.app.exitApp();
		 }else if(navigator.device){
        	navigator.device.exitApp();
		 }
         return false;
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
