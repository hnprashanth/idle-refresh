$(document).ready(function(){
   idleTime = 0;
   //Increment the idle time counter every second.
   var idleInterval = setInterval(timerIncrement, 1000);
   function timerIncrement()
   {
     idleTime++;
     if (idleTime > 60)
     {
       doRefresh();
     }
   }
   //Zero the idle timer on mouse movement.
   $(this).mousemove(function(e){
      idleTime = 0;
   });
   function doRefresh()
   {
     window.location = "http://www.styletag.com";
   }
})