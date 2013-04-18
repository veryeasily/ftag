
$(function() {

    var arr, $slider, $pictures, pictures, yo

    /* This is a weirder parser kind of thing
     * I had this idea that it would be cool to define
     * new HTML elements by <F>slider {commands here}</f>.
     * That helps fix the namespacing problems with tagging,
     * only requiring the one tag <F>.
     */

    yo = function parsey(m) {
        console.log(m.tagName);
        if (m.tagName !== 'F') {
            return
        }
        command = (htm = m.innerHTML).slice(0, temp = htm.search(/\s+/))
        htm = htm.slice(temp)
        m.innerHTML = htm.slice(htm.search(/[^ \t\r\n\v\f]/));
        console.log(m.innerHTML);
        $(m).data('.command', command);
        console.log($(m))
        console.log("just added data!");
        return m
    }
    
    console.log("it at least started!");
    list = $.map($('f'), function (elt) {
        console.log("testing f's!");
        return yo(elt); } );
    console.log(list);
    $(list).each( function (i, elt) { 
        console.log("Made it into the each!");
        console.log(elt);
        console.log($(elt).data('.command'));
        if (($slider = $(elt)).data('.command') !== 'slider') {
           return void(0); }
        console.log($slider.html());
        pictures = $slider.html().split(/\s+/);
        console.log(pictures);
        $pictures = $(
                pictures.forEach(
                    function(url, i) { this.push(tempy = document.createElement('img')), tempy.setAttribute('src', url); }, arr = []));
        console.log(arr);
        $slider.replaceWith($(arr))
    });


});

