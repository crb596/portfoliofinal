//Change picture to smiling on hover, to serious on hover exit
$("#homePicture").mouseover(function() {
    $("#homePicture").attr("src","images/smile.png");	//Change to smiling picture
}).mouseout(function() {
    $("#homePicture").attr("src","images/face.png");	//Change back to straight face
});

// Mouse highlighting (make the circle follow the mouse anytime the mouse moves)
$(document).on('mousemove', function(e){
    $('#circle').css('top', e.pageY-$('#circle').height()/2);
    $('#circle').css('left', e.pageX-$('#circle').width()/2);
});
