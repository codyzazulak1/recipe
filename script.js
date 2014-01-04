$(document).ready(function() {
  console.log("Script included!");
});

$(document).ready(function() {
	$('img').click(function() {
		$(this).fadeTo('slow', 0);
	});
});

$(document).ready(function(){
    $('li').click(function() {
        $(this).addClass('highlighted');
        });
    });

$(document).ready(function() {
	$('#imageContainer').click(function() {
		$(this).fadeTo('slow', 0);
	});
});