var tag=0;
var flag=0;
function showFaculty(){
$('#faculty').css("display","block");

}
function showContacts(){
$('#contacts').css("display","block");

}
$('html').on ('mousewheel', function (e) {
    var delta = e.originalEvent.wheelDelta;

    if (delta < 0) {
        $("#header").addClass('shiftNavbar');
        if(tag==0){
         
        $('#tag1 div').addClass('fadeOutUp');
        $('#tag1').delay( 800 ).queue(function(){
         
            $(this).css("display","none"); 
            $('#tag2 div').addClass('bounceIn');
            $('#tag2').css("display","block");
            $('#tag1 div').removeClass('fadeOutUp').delay(800).queue(function(){         $('#tag2 div').removeClass('bounceIn'); 
});            tag++;
             $('#logo').css("display","block");
            });
        
        }
        else if(tag==1){
        $('#tag2 div').addClass('fadeOutUp');
        $('#tag2').delay( 800 ).queue(function(){
            $(this).css("display","none"); 
            $('#tag3 div').addClass('bounceIn');
            $('#tag3').css("display","block");
            $('#tag2 div').removeClass('fadeOutUp').delay(800).queue(function(){         $('#tag3 div').removeClass('bounceIn'); 
});         tag++;
            });
//         $('#tag3 div').removeClass('bounceIn'); 

        }
        else if(tag==2){
                     console.log($('#faculty').is(":visible"));
             $('#faculty').show();
            tag++;
//            $('#faculty').delay(800).queue(function(){ 
//                $(this).show();
//                $(this).css("display","block");
//                tag++;
//                });
        
        }
        else if(tag==3 && $(window).scrollTop() >100){
            $('#contacts').css("display","block");
            tag++;
        }
//        
} 
else if (delta > 0) {
//    console.log($(window).scrollTop());
            $("#header").removeClass('shiftNavbar');
      if(tag==4 && $(window).scrollTop() <700){
         $('#contacts').css("display","none");
          tag--;

    }
    if(tag==3 && $(window).scrollTop() <50){
         $('#faculty').hide();
          tag--;

    }

}
//        if(tag==1){
//            $('#tag2 div').addClass('fadeOutDown');
//        $('#tag2').delay( 800 ).queue(function(){
//            $(this).css("display","none"); 
//            $('#tag1 div').addClass('bounceIn');
//            $('#tag1').css("display","block");
//            $('#tag2 div').removeClass('fadeOutDown').delay(800).queue(function(){              $('#tag1 div').removeClass('bounceIn'); 
//            });
//            });
//        tag--;
//                        console.log(tag);
//
//        }
//       else if(tag==2){
//            $('#tag3 div').addClass('fadeOutDown');
//        $('#tag3').delay( 800 ).queue(function(){
//            $(this).css("display","none"); 
//            $('#tag2 div').addClass('bounceIn');
//            $('#tag2').css("display","block");
//            $('#tag3 div').removeClass('fadeOutDown').delay(800).queue(function(){              $('#tag2 div').removeClass('bounceIn');
//            });
//            });
//        tag--;
//                       console.log(tag);
//
//        }
//    }
    
});

/*
$(window).scroll(function() {
     didScroll = true;
    alert("scccc");
    /*
  if ($(document).scrollTop() > 50) {
    $('#headTitle').addClass('shrink');
    $('#navbar').addClass('onshrink');
  } else {
    $('#headTitle').removeClass('shrink');    $('#navbar').removeClass('onshrink');

      
  }*/
//});