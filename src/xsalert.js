function XSAlert({
   icon,
   title,
   message,
   position,
   animation,
   okButtonText,
   cancelButtonText,
   dismissOnOutsideClick,
   borderThinkness,
   borderColor,
   borderRadius,

}) {
   return new Promise(function(resolve, reject) {

      if(animation == null){ animation = 'scale-up-center'; }
  
      if(okButtonText == null){ okButtonText = 'OK'; }
      if(cancelButtonText == null){ cancelButtonText = 'Cancel'; }
      var dismissOverlay = '';
      if(dismissOnOutsideClick == true){ dismissOverlay = 'closeXSAlert()'; }

      // Icons
      if(icon == 'success'){ icon = 'https://xsgames.co/xsalert/icons/success.png'; };
      if(icon == 'warning'){ icon = 'https://xsgames.co/xsalert/icons/success.png'; };
      
      if(position == null){ position = 'center'; }


      // Show alert
      $('body').append(
         '<div id="xsoverlay" class="xsoverlay" onClick="'+dismissOverlay+'"></div>'+
         '<div id="xsalert" class="xsalert-'+position+ ' '+animation+' ">'+
         '<div class="xsicon jello-diagonal"><img src="'+icon+'"></div>'+
         '<div class="xs-title">'+title+'</div>'+
         '<div class="xs-message"'+message+'</div>'+
         '<button id="xs-ok-btn" class="xs-ok-btn">'+okButtonText+'</button>'+
         '<button class="xs-cancel-btn" onclick="closeXSAlert()">'+cancelButtonText+'</button>'+
       
         '</div>'
      );

      if(borderThinkness != null) { $('#xsalert').css('border', borderThinkness+' solid ' +borderColor); }
      if(borderRadius != null) { $('#xsalert').css('border-radius', borderRadius); }
      

      // OK Button
      $( "#xs-ok-btn" ).click(function() { closeXSAlert() });
      $('#xs-ok-btn').click(function(event) {
         if(event.target !== event.currentTarget) return;
         resolve(true);                    
      });

  }); //./ Promise
}

/*
function XSAlert({
   title,
   message,
   position,
   animation,
   okButtonText,
   cancelButtonText,
   dismissOnOutsideClick,

}) {

let xsPromise = new Promise(function(resolve, reject){
   resolve('I am doing something');


   var animName;
   switch(animation){
      case 'top': animName = 'slide-top'; break;
      case 'bottom': animName = 'slide-bottom'; break;

      default: animName = 'slide-top'; break;
   }
  
   if(okButtonText == null){ okButtonText = 'OK'; }
   if(cancelButtonText == null){ cancelButtonText = 'Cancel'; }
   var dismissOverlay = '';
   if(dismissOnOutsideClick == true){ dismissOverlay = 'closeXSAlert()'; }

   // Show alert
   $('body').append(
      '<div id="xsoverlay" class="xsoverlay" onClick="'+dismissOverlay+'"></div>'+
    
      '<div id="xsalert" class="xsalert-'+position+ ' '+animName+' ">'+
      '<div class="xs-title">'+title+'</div>'+
      '<div class="xs-message"'+message+'</div>'+
      '<button id="xs-ok-btn" class="xs-ok-btn">'+okButtonText+'</button>'+
      '<button class="xs-cancel-btn" onclick="closeXSAlert()">'+cancelButtonText+'</button>'+
    
      '</div>'
    );

   // OK Button
   $( "#xs-ok-btn" ).click(function() { closeXSAlert() });

}).then(function(value){
   $('#xs-ok-btn').click(function(event) {
      if(event.target !== event.currentTarget) return;
      console.log(value);                     
   });

    
});

} //./ XSAlert
*/

// Close XSAlert
function closeXSAlert(){
  $("#xsalert").remove();
  $("#xsoverlay").remove();
}