jQuery(function() {

	$('#egg_button').click(function () {
			$('#egg').show(), $('#chicken').hide();

	});

	$('#chicken_button').click(function () {
			$('#egg').hide(), $('#chicken').show();

	});
});
