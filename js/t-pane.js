(function($){
	var that;
	
	var Multipane = function (el) {
		that = this;
		that.init(el);
	};
	
	Multipane.prototype = {
		
		constructor: Multipane,

		init: function(el){
			$(el).each(function(){
				var $this = $(this);
				$('.slide-left', $this).each(function(){
					$(this).on('click', function(){
						$('.t-pane').animate({
							left: '+=100%',
						}, 'slow' );
					});
				});
				$('.slide-right', $this).each(function(){
					$(this).on('click', function(){
						$('.t-pane').animate({
							left: '-=100%',
						}, 'slow' );
					});
				});
			});
		},
	};


	$.fn.multipane = function (arg) {
		return this.each(function(){
			var $this = $(this),
				data = $this.data('multipane');
			
			if (data) {
				data[arg]();
			}
			else{
				$this.data('multipane', new Multipane($this));
			};
		});
	};


	$(function(){
		$('.t-pane').multipane();
	});

}(jQuery));