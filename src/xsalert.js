function XSAlert({ 
   icon,
   title,
   titleColor,
   titleFontSize,
   titleFontFamily,
   message,
   messageColor,
   messageFontSize,
   messageFontFamily,
   position,
   animation,
   okButtonText,
   cancelButtonText,
   thirdButtonText,
   okButtonBackgroundColor,
   okButtonTextColor,
   cancelButtonBackgroundColor,
   cancelButtonTextColor,
   thirdButtonBackgroundColor,
   thirdButtonTextColor,
   hideOkButton,
   hideCancelButton,
   buttonBorderRadius,
   closeOnOutsideClick,
   closeWithESC,
   backgroundColor,
   borderThinkness,
   borderColor,
   borderRadius,
   borderTopLeftRadius,
   borderTopRightRadius,
   borderBottomLeftRadius,
   borderBottomRightRadius,
   buttonsOnLeft,
   buttonsOnRight,
   shadow,
   overlayImageURL,
   footer,
   inputType,
   inputPlaceholder,
   inputValue,
   imageURL,
   imageWidth,
   imageHeight,
   autoCloseTimer,
   hideProgressBar,
   hideProgressIcon,
}) {
   return new Promise(function(resolve, reject) {
      setTimeout(function(){ 

         
         if(animation == null){ animation = 'scale-up-center'; }
         if(okButtonText == null){ okButtonText = 'OK'; }
         if(cancelButtonText == null){ cancelButtonText = 'Cancel'; }
         
         /* Icons */
         if(icon == 'success'){ icon = 'https://xsgames.co/xsalert/icons/success.png'; };
         if(icon == 'warning'){ icon = 'https://xsgames.co/xsalert/icons/warning.png'; };
         if(icon == 'error'){ icon = 'https://xsgames.co/xsalert/icons/error.png'; };
         if(icon == 'question'){ icon = 'https://xsgames.co/xsalert/icons/question.png'; };
         
         if(position == null){ position = 'center'; }
         
         /* Show alert */
         $('body').append(
            '<div id="xsoverlay" class="xsoverlay"></div><div id="xsalert" class="xsalert-'+position+ ' '+animation+' "><div id="xs-icon" class="xs-icon jello-diagonal"><img src="'+icon+'"></div><div id="xs-image" class="xs-image"><img src="'+imageURL+'" width="'+imageWidth+'" height="'+imageHeight+'"></div><div id="xs-title" class="xs-title">'+title+'</div><div id="xs-message" class="xs-message">'+message+'</div><input id="xs-input" class="xs-input" type="'+inputType+'" placeholder="'+inputPlaceholder+'" value="'+inputValue+'"><div id="xs-btn-container" class="xs-btn-container"><button id="xs-ok-btn" class="xs-ok-btn">'+okButtonText+'</button><button id="xs-third-btn" class="xs-third-btn">'+thirdButtonText+'</button><button id="xs-cancel-btn" class="xs-cancel-btn">'+cancelButtonText+'</button></div><div id="xs-footer" class="xs-footer"><hr>'+footer+'</div><img id="xs-progress-icon" class="xs-progress-icon" src="assets/loading.gif"><div id="xs-progress-bar" class="xs-progress-bar"></div></div>'
         );

         /* Additional styles/actions */
         if(title == null) { $('#xs-title').remove(); }
         if(titleColor != null) { $('#xs-title').css('color', titleColor); }
         if(message == null) { $('#xs-message').remove(); }
         if(messageColor != null) { $('#xs-message').css('color', messageColor); }
         if(borderThinkness != null) { $('#xsalert').css('border', borderThinkness+' solid ' +borderColor); }
         if(borderRadius != null) { $('#xsalert').css('border-radius', borderRadius); }
         if(okButtonBackgroundColor != null) { $('#xs-ok-btn').css('background', okButtonBackgroundColor); }
         if(okButtonTextColor != null) { $('#xs-ok-btn').css('color', okButtonTextColor); }
         if(cancelButtonBackgroundColor != null) { $('#xs-cancel-btn').css('background', cancelButtonBackgroundColor); }
         if(cancelButtonTextColor != null) { $('#xs-cancel-btn').css('color', cancelButtonTextColor); }
         if(thirdButtonBackgroundColor != null) { $('#xs-third-btn').css('background', thirdButtonBackgroundColor); }
         if(thirdButtonTextColor != null) { $('#xs-third-btn').css('color', thirdButtonTextColor); }
         if(hideCancelButton == true) { $("#xs-cancel-btn").remove(); }
         if(hideOkButton == true) { $("#xs-ok-btn").remove(); }
         if(backgroundColor != null) { $('#xsalert').css('background', backgroundColor); }
         if(overlayImageURL != null) { $('#xsoverlay').css('background', 'url("'+overlayImageURL+'")'); }
         if(borderTopLeftRadius != null) { $('#xsalert').css('border-top-left-radius', borderTopLeftRadius); }
         if(borderTopRightRadius != null) { $('#xsalert').css('border-top-right-radius', borderTopRightRadius); }
         if(borderBottomLeftRadius != null) { $('#xsalert').css('border-bottom-left-radius', borderBottomLeftRadius); }
         if(borderBottomRightRadius != null) { $('#xsalert').css('border-bottom-right-radius', borderBottomRightRadius); }
         if(buttonsOnLeft == true) { $('#xs-btn-container').css('text-align', 'left'); }
         if(buttonsOnRight == true) { $('#xs-btn-container').css('text-align', 'right'); }
         if(shadow == true) { $('#xsalert').css('box-shadow', '8px 8px 0px #525252'); }
         if(titleFontSize != null) { $('#xs-title').css('font-size', titleFontSize); }
         if(messageFontSize != null) { $('#xs-message').css('font-size', messageFontSize); }
         if(titleFontFamily != null) { $('#xs-title').css('font-family', titleFontFamily); }
         if(messageFontFamily != null) { $('#xs-message').css('font-family', messageFontFamily); }
         if(hideProgressBar == true) { $("#xs-progress-bar").remove(); } 
         if(hideProgressIcon == true) { $("#xs-progress-icon").remove();} 
         if(autoCloseTimer == null) { $("#xs-progress-bar").remove(); $("#xs-progress-icon").remove(); 
         } else { 
            var elem = document.getElementById("xs-progress-bar");   
            var width = 0;
            var id = setInterval(frame, autoCloseTimer/100);
            function frame() {
               if (width >= 98) { clearInterval(id); resolve('autoClosed'); closeXSAlert();
               } else { width++;  elem.style.width = width + '%'; }
            }
         }
         if(footer == null) { $('#xs-footer').remove(); }
         if(icon == null) { $('#xs-icon').remove(); }
         if(inputType == null) { $('#xs-input').remove(); }
         if(inputValue == null) { $('#xs-input').val(''); }
         if(imageURL == null) { $('#xs-image').remove(); }
         if(thirdButtonText == null) { $('#xs-third-btn').remove(); }
         if(buttonBorderRadius != null) { 
            $('#xs-ok-btn').css('border-radius', buttonBorderRadius); 
            $('#xs-cancel-btn').css('border-radius', buttonBorderRadius); 
            $('#xs-third-btn').css('border-radius', buttonBorderRadius); 
         }

         /* Prevent body to scroll behind the alert */
         let body = document.querySelector("body"); body.style.overflow = "hidden";
         /* Overlay onClick */
         if(closeOnOutsideClick){ $( "#xsoverlay" ).click(function() { closeXSAlert(); resolve('outside'); }); }
         /* OK button onClick */
         $('#xs-ok-btn').click(function() { closeXSAlert(); resolve('ok') });
         $("#xs-ok-btn").focus();
         /* Cancel button onClick */
         $('#xs-cancel-btn').click(function() { closeXSAlert(); resolve('cancel') });
         /* Third button onClick */
         $('#xs-third-btn').click(function() { closeXSAlert(); resolve('third') });
         /* Close with ESC key */
         if(closeWithESC != null && closeWithESC) { $(document).on('keydown', function(event) { if (event.key == "Escape") { closeXSAlert() } }) }
      }, 210); 
  })
}
/* Close XSAlert */
function closeXSAlert(){
   $('#xsalert').addClass('closing-anim');
   /* Make body scrollable again */
   let body = document.querySelector("body");
   body.style.overflow = "auto";
   setTimeout(function(){ 
      $("#xsalert").each(function() { $(this).remove(); })
      $("#xsoverlay").remove(); 
   }, 100);
}