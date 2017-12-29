$(window).scroll( function(){
    
    /* Check the location of each desired element */
    $('.hide').each( function(i){

        var top_of_object = $(this).offset().top;
        var middle_of_window = $(window).scrollTop() + $(window).height()*2/3;
        
        /* If the object is completely visible in the window, fade it it */
        if( middle_of_window > top_of_object ){
            
            $(this).animate({'opacity':'1'},2000);
        }
        
    }); 
    
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    console.log(bottom_of_window);
    var bottom_of_fire = $("#fire_outer").offset().top + $("#fire_outer").height();
    console.log(bottom_of_fire);
    if(bottom_of_window > bottom_of_fire){
        $("#fire_outer").css("display","fixed");
    }


      
});