    var rainDrop = document.getElementById('rain');
    var height = $( window ).height();

    $(document).scroll(function () {
        var deep = $("html").scrollTop()
        
        var vol = 1;
        if (deep > height*0.75 && vol>0) {
            vol = 1-(deep-height)*3/height;
            if(vol>0 && vol<1){
            rainDrop.volume = vol;
            };
        }

    })





