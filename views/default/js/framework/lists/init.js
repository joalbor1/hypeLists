define(['jquery', 'elgg', 'hypeList'], function ($, elgg) {

	$(document).on('initialize', '.elgg-list', function () {
		var $container = $(this).parent('.elgg-list-container');
		if ($container.length) {
			var options = $container.data();
			if (typeof $.fn.hypeList !== 'undefined') {
				$(this).hypeList(options);
			}
		}
	});

	$('.elgg-list').trigger('initialize');
});
