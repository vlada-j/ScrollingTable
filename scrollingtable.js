+function ($) {
	"use strict";

	var ScrollingTable = function (ele, op) {
		ele = $(ele);
		var wrapper = null,
			hors=ele.find('.headerHor'),
			vers=ele.find('.headerVer');

		ele.wrap('<div class="scrollingTable"/>');
		wrapper = $(ele.parent());
		wrapper.bind('scroll',
			function() {
				hors.css('top', wrapper.scrollTop());
				vers.css('left', wrapper.scrollLeft());
			}
		);
	};

	ScrollingTable.DEFAULTS = {};

	$.fn.ScrollingTable = function (option) {
		return this.each(function () {
			var $this	= $(this),
				data	= $this.data('ScrollingTable'),
				options	= $.extend({}, ScrollingTable.DEFAULTS, $this.data(), typeof option == 'object' && option)

			if (!data) {
				$this.data('ScrollingTable', (data = new ScrollingTable(this, options)));
			}
		});
	};

	$.fn.ScrollingTable.Constructor = ScrollingTable;

}(window.jQuery);