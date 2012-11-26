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
				$this.addClass("nav-small");
				$this.width("400px");
				$('.mid', el).hide();
				$('.nav-search-li', el).hide();
				$('.image', $this).each(function(){
					$(this).width("180px");
				});
				$('.nav-img', $this).on('click', function(){
					if ($this.hasClass("nav-small")){
						if ($(document).width()>1500){
							$this.animate({
								width: "100%",
								height: "90px",
							}, "fast",  function(){$this.removeClass("nav-small"); 	$('.mid', el).each(function(){
									$(this).show();
								}); $('.nav-search-li', el).show();} );
						}
						else{
							$this.animate({
								width: "100%",
								height: "200px",
							}, "fast",  function(){$this.removeClass("nav-small"); $(".image", $this).each(function(){
									$(this).width("16.6%");
								}); $('.mid', el).each(function(){
									$(this).show();
								}); $('.nav-search-li', el).show();} );
						};
					}
					else{
						$this.addClass("nav-small");
						$this.animate({
							width: "400px",
							height: "90px",
						});
						$('.mid', el).each(function(){
							$(this).hide("fast");
						});
						$('.nav-search-li', el).hide("fast");
						$('.image', $this).each(function(){
							$(this).width("180px");
						});
					};
				});
				$(window).on('resize', function(){
					if ($this.hasClass("nav-small")){
						pass
					}
					else{
						if ($(window).width()>1500){
							$this.height("90px");
							console.log($this);
						}
						else{
							$this.height("200px");
							console.log("small");
						}
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