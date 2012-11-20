function draw (){
	var a=document.getElementById("pane1-canvas");
	var startheight,
		startright,
		startleft,
		latitude,
		pane;
	$(a).each(function(){
		pane = $(this).parent();
		$(".text-box", pane).each(function(){
			startheight = parseInt($(this).position().top + $(this).outerHeight());
			startright = parseInt($(this).position().left + $(this).outerWidth());
			startleft = parseInt($(this).position().left);
			latitude = parseInt($(this).position().top + $(this).outerHeight()/2);
		});
		a.height = pane.height();
		a.width = pane.width();
	});
	var slide_height = $('.slide-left', '.pane1').outerHeight();
	$('.slide').each(function(){
		$(this).css('top', latitude - slide_height/2 - 2);
	});
	var atx=a.getContext("2d");
	atx.lineWidth = 2;
	atx.moveTo($(window).width()/2, startheight);
	atx.lineTo($(window).width()/2, pane.height());
	atx.moveTo(startright, latitude);
	atx.lineTo($(window).width(), latitude);
	atx.moveTo(startleft, latitude);
	atx.lineTo(0, latitude);
	atx.strokeStyle = "rgba(255,255,255,0.6)";
	atx.stroke();
	
	var right=document.getElementById("t-pane-r-canvas");
	var leftedge;
	var lat_t;
	var lat_t_b;
	var lat_m;
	var lat_m_t;
	var lat_m_b;
	var lat_b;
	var lat_b_t;
	var lat_b_b;
	$(right).each(function(){
		pane = $(this).parent();
		$(".r-text-t", pane).each(function(){
			leftedge = parseInt($(this).position().left);
			lat_t = parseInt($(this).position().top) + $(this).outerHeight()/2;
			lat_t_b = parseInt($(this).position().top) + $(this).outerHeight();
		});
		$(".r-text-m", pane).each(function(){
			lat_m_t = parseInt($(this).position().top);
			lat_m = parseInt($(this).position().top) + $(this).outerHeight()/2;
			lat_m_b = parseInt($(this).position().top) + $(this).outerHeight();
		});
		$(".r-text-b", pane).each(function(){
			lat_b_t = parseInt($(this).position().top);
			lat_b = parseInt($(this).position().top) + $(this).outerHeight()/2;
			lat_b_b = parseInt($(this).position().top) + $(this).outerHeight();
		});
		right.height = pane.height();
		right.width = pane.width();
	});
	var rtx=right.getContext("2d");
	rtx.lineWidth = 2;
	rtx.moveTo(0, latitude);
	rtx.lineTo(leftedge/2, latitude);
	rtx.moveTo(leftedge/2, lat_t);
	rtx.lineTo(leftedge/2, lat_b);
	rtx.moveTo(leftedge/2, lat_t);
	rtx.lineTo(leftedge, lat_t);
	rtx.moveTo(leftedge/2, lat_m);
	rtx.lineTo(leftedge, lat_m);
	rtx.moveTo(leftedge/2, lat_b);
	rtx.lineTo(leftedge, lat_b);
	rtx.moveTo($(window).width()/2, lat_t_b);
	rtx.lineTo($(window).width()/2, lat_m_t);
	rtx.moveTo($(window).width()/2, lat_m_b);
	rtx.lineTo($(window).width()/2, lat_b_t);
	rtx.moveTo($(window).width()/2, lat_b_b);
	rtx.lineTo($(window).width()/2, pane.height());
	rtx.strokeStyle = "rgba(255,255,255,0.6)";
	rtx.stroke();
	
	var left=document.getElementById("t-pane-l-canvas");
	var l_lon_mid;
	var l_lat_top;
	var r_lon_mid;
	var r_lat_top;
	$(left).each(function(){
		pane = $(this).parent();
		$(".l-text-l", pane).each(function(){
			l_lon_mid = parseInt($(this).position().left) + $(this).outerWidth()/2;
			l_lat_top = parseInt($(this).position().top);
			l_lon_r = parseInt($(this).position().left) + $(this).outerWidth();
			l_lat_mid = parseInt($(this).position().top + $(this).outerHeight()/2);
		});
		$(".l-text-r", pane).each(function(){
			r_lon_mid = parseInt($(this).position().left) + $(this).outerWidth()/2;
			r_lat_top = parseInt($(this).position().top);
			r_lat_b = parseInt($(this).position().top) + $(this).outerHeight();
		});
		left.height = pane.height();
		left.width = pane.width();
	});
	var ltx=left.getContext("2d");
	ltx.lineWidth = 2;
	ltx.strokeStyle = "rgba(255,255,255,0.6)";
	ltx.moveTo($(window).width(), latitude);
	ltx.lineTo(l_lon_mid, latitude);
	ltx.moveTo(l_lon_mid, latitude);
	ltx.lineTo(l_lon_mid, l_lat_top);
	ltx.moveTo(r_lon_mid, latitude);
	ltx.lineTo(r_lon_mid, r_lat_top);
	ltx.moveTo(l_lon_r, l_lat_mid);
	ltx.lineTo($(window).width()/2, l_lat_mid);
	ltx.moveTo(r_lon_mid, r_lat_b);
	ltx.lineTo(r_lon_mid, l_lat_mid);
	ltx.lineTo($(window).width()/2, l_lat_mid);
	ltx.lineTo($(window).width()/2, pane.height());
	ltx.stroke();
	
	var b=document.getElementById("pane2-canvas");
	var startheight;
	var endheight;
	$(b).each(function(){
		pane = $(this).parent();
		$(".text-box", pane).each(function(){
			endheight = parseInt($(this).position().top);
			startheight = (parseInt($(this).position().top) + $(this).outerHeight());
		});
		b.height = pane.height();
		b.width = pane.width();
	});
	var btx=b.getContext("2d");
	btx.lineWidth = 2;
	btx.strokeStyle = "rgba(255,255,255,0.6)";
	btx.moveTo($(window).width()/2, 0);
	btx.lineTo($(window).width()/2, endheight);
	btx.moveTo($(window).width()/2, startheight);
	btx.lineTo($(window).width()/2, pane.height());
	btx.stroke();
	
	var c=document.getElementById("pane3-canvas");
	var startheight;
	var endheight;
	$(c).each(function(){
		pane = $(this).parent();
		$(".text-box", pane).each(function(){
			endheight = parseInt($(this).position().top);
			startheight = (parseInt($(this).position().top) + $(this).outerHeight());
		});
		c.height = pane.height();
		c.width = pane.width();
	});
	var ctx=c.getContext("2d");
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgba(255,255,255,0.6)";
	ctx.moveTo($(window).width()/2, 0);
	ctx.lineTo($(window).width()/2, endheight);
	ctx.moveTo($(window).width()/2, startheight);
	ctx.lineTo($(window).width()/2, pane.height());
	ctx.stroke();
	
	var d=document.getElementById("pane4-canvas");
	var startheight;
	var endheight;
	$(d).each(function(){
		pane = $(this).parent();
		$(".text-box", pane).each(function(){
			endheight = parseInt($(this).position().top);
			startheight = (parseInt($(this).position().top) + $(this).outerHeight());
		});
		d.height = pane.height();
		d.width = pane.width();
	});
	var dtx=d.getContext("2d");
	dtx.lineWidth = 2;
	dtx.strokeStyle = "rgba(255,255,255,0.6)";
	dtx.moveTo($(window).width()/2, 0);
	dtx.lineTo($(window).width()/2, endheight);
	dtx.moveTo($(window).width()/2, startheight);
	dtx.lineTo($(window).width()/2, pane.height());
	dtx.stroke();
	
	var e=document.getElementById("pane5-canvas");
	var startheight;
	var endheight;
	$(e).each(function(){
		pane = $(this).parent();
		$(".text-box", pane).each(function(){
			endheight = parseInt($(this).position().top);
			startheight = (parseInt($(this).position().top) + $(this).outerHeight());
		});
		e.height = pane.height();
		e.width = pane.width();
	});
	var etx=e.getContext("2d");
	etx.lineWidth = 2;
	etx.strokeStyle = "rgba(255,255,255,0.6)";
	etx.moveTo($(window).width()/2, 0);
	etx.lineTo($(window).width()/2, endheight);
	etx.moveTo($(window).width()/2, startheight);
	etx.lineTo($(window).width()/2, pane.height());
	etx.stroke();
	
	var f=document.getElementById("pane6-canvas");
	var startheight;
	var endheight;
	$(f).each(function(){
		var pane = $(this).parent();
		$(".text-box", pane).each(function(){
			endheight = parseInt($(this).position().top);
		});
		f.height = pane.height();
		f.width = pane.width();
	});
	var ftx=f.getContext("2d");
	ftx.lineWidth = 2;
	ftx.strokeStyle = "rgba(255,255,255,0.6)";
	ftx.moveTo($(window).width()/2, 0);
	ftx.lineTo($(window).width()/2, endheight);
	ftx.stroke();
}