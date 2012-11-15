(function($){
	var that;
	
	var Foldable = function (el) {
		that = this;
		that.init(el);
	};
	
	Foldable.prototype = {
		
		constructor: Foldable,

		init: function(el){
			$(el).each(function(){
				var $this = $(this);
				$(this).addClass("nav-small");
				$(this).width("400px");
				$('.mid', el).each(function(){
					$(this).hide();
				});
				$('.image', $this).each(function(){
					$(this).width("180px");
				});
				$('.nav-img', $this).on('click', function(){
					if ($this.hasClass("nav-small")){
						$this.animate({
							width: "100%",
						}, "fast",  function(){$this.removeClass("nav-small"); 	$('.mid', el).each(function(){
								$(this).show();
							});} );
						$(".image", $this).each(function(){
							$(this).width("16.6%");
						});
					}
					else{
						$this.addClass("nav-small");
						$this.animate({
							width: "400px",
						});
						$('.mid', el).each(function(){
							$(this).hide("fast");
						});
						$('.image', $this).each(function(){
							$(this).width("180px");
						});
					};
				});
			});
		},
	};


	$.fn.foldable = function (arg) {
		return this.each(function(){
			var $this = $(this),
				data = $this.data('foldable');
			
			if (data) {
				data[arg]();
			}
			else{
				$this.data('foldable', new Foldable($this));
			};
		});
	};


	$(function(){
		$('.topnav').foldable();
	});

}(jQuery));