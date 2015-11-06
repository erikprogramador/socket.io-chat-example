(function($) {
	'use strict'

	var socket = io();

	$('form').submit(function(){
		var input = $('#m');

		if (input.val() != '') {
			socket.emit('chat message', input.val());
			input.val('');
			return false;
		}

		Materialize.toast('É necessario uma mensagem!', 4000);
		return false;
	});

	socket.on('chat message', function(msg){
		$('#messages').append('<li class="collection-item"><p class="text-justify">' + msg + '</p></li>');
	});

})(jQuery);
