function draw (){
	var slide_height = $('.slide-left', '.pane1').outerHeight(),
		a=document.getElementById("pane1-canvas"),
		right=document.getElementById("t-pane-r-canvas"),
		left=document.getElementById("t-pane-l-canvas"),
		b=document.getElementById("pane2-canvas"),
		c=document.getElementById("pane3-canvas"),
		d=document.getElementById("pane4-canvas"),
		e=document.getElementById("pane5-canvas"),
		f=document.getElementById("pane6-canvas"),
		startheight,
		endheight,
		startright,
		startleft,
		latitude,
		leftedge,
		lat_t,
		lat_t_b,
		lat_m,
		lat_m_t,
		lat_m_b,
		lat_b,
		lat_b_t,
		lat_b_b,
		l_lon_mid,
		l_lat_top,
		r_lon_mid,
		r_lat_top,
		pane,
		stroke_style = "rgba(255,255,255,0.6)",
		line_width = 2;
		

	//*********PANE1	
	var pane = $(a).parent();
	a.height = pane.height();
	a.width = pane.width();
	//PLACE TEXTBOX
	$(".text-box", pane).each(function(){
		startheight = parseInt($(this).position().top + $(this).outerHeight());
		startright = parseInt($(this).position().left + $(this).outerWidth());
		startleft = parseInt($(this).position().left);
		latitude = parseInt($(this).position().top + $(this).outerHeight()/2);
	});
	
	//SET HEIGHT OF SLIDER ARROWS (must happen AFTER previous function)
	$('.slide').each(function(){
		$(this).css('top', latitude - slide_height/2 - 2);
	});
	
	//DRAW LINES
	var atx=a.getContext("2d");
	atx.lineWidth = line_width;
	atx.strokeStyle = stroke_style;
	
	atx.moveTo($(window).width()/2, startheight);
	atx.lineTo($(window).width()/2, pane.height());
	atx.moveTo(startright, latitude);
	atx.lineTo($(window).width(), latitude);
	atx.moveTo(startleft, latitude);
	atx.lineTo(0, latitude);
	
	atx.stroke();
	
	
	//***********PANE RIGHT
	pane = $(right).parent();
	right.height = pane.height();
	right.width = pane.width();
	
	//SET TEXT BOXES
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
	
	//DRAW LINES
	var rtx=right.getContext("2d");
	rtx.lineWidth = line_width;
	rtx.strokeStyle = stroke_style;
	
	rtx.moveTo(0, latitude);
	rtx.lineTo(leftedge/2, latitude);
	rtx.moveTo(leftedge/2, lat_t);
	rtx.lineTo(leftedge/2, lat_b);
	rtx.lineTo(leftedge, lat_b);
	rtx.moveTo(leftedge/2, lat_t);
	rtx.lineTo(leftedge, lat_t);
	rtx.moveTo(leftedge/2, lat_m);
	rtx.lineTo(leftedge, lat_m);
	rtx.moveTo(leftedge/2, lat_b);
	rtx.moveTo($(window).width()/2, lat_t_b);
	rtx.lineTo($(window).width()/2, lat_m_t);
	rtx.moveTo($(window).width()/2, lat_m_b);
	rtx.lineTo($(window).width()/2, lat_b_t);
	rtx.moveTo($(window).width()/2, lat_b_b);
	rtx.lineTo($(window).width()/2, pane.height());
	
	rtx.stroke();

	
	//********PANE LEFT
	pane = $(left).parent();
	left.height = pane.height();
	left.width = pane.width();
	
	//PLACE TEXT BOXES
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
	
	//DRAW LINES
	var ltx=left.getContext("2d");
	ltx.lineWidth = line_width;
	ltx.strokeStyle = stroke_style;
	
	ltx.moveTo($(window).width(), latitude);
	ltx.lineTo(l_lon_mid, latitude);
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
	
	//***********PANE2
	pane = $(b).parent();
	b.height = pane.height();
	b.width = pane.width();
	
	//SET TEXTBOXES
	$(".text-box", pane).each(function(){
		endheight = parseInt($(this).position().top);
		startheight = (parseInt($(this).position().top) + $(this).outerHeight());
	});
	
	//DRAW LINES
	var btx=b.getContext("2d");
	btx.lineWidth = line_width;
	btx.strokeStyle = stroke_style;
	
	btx.moveTo($(window).width()/2, 0);
	btx.lineTo($(window).width()/2, endheight);
	btx.moveTo($(window).width()/2, startheight);
	btx.lineTo($(window).width()/2, pane.height());
	
	btx.stroke();
	

	//********PANE3
	pane = $(c).parent();
	c.height = pane.height();
	c.width = pane.width();
	
	//PLACE TEXTBOXES
	$(".text-box", pane).each(function(){
		endheight = parseInt($(this).position().top);
		startheight = (parseInt($(this).position().top) + $(this).outerHeight());
	});

	//DRAW LINES
	var ctx=c.getContext("2d");
	ctx.lineWidth = line_width;
	
	ctx.strokeStyle = stroke_style;
	ctx.moveTo($(window).width()/2, 0);
	ctx.lineTo($(window).width()/2, endheight);
	ctx.moveTo($(window).width()/2, startheight);
	ctx.lineTo($(window).width()/2, pane.height());
	
	ctx.stroke();
	

	//*******PANE4
	pane = $(d).parent();
	d.height = pane.height();
	d.width = pane.width();
	
	//PLACE TEXTBOXES
	$(".text-box", pane).each(function(){
		endheight = parseInt($(this).position().top);
		startheight = (parseInt($(this).position().top) + $(this).outerHeight());
	});

	//DRAW LINES
	var dtx=d.getContext("2d");
	dtx.lineWidth = line_width;
	dtx.strokeStyle = stroke_style;
	
	dtx.moveTo($(window).width()/2, 0);
	dtx.lineTo($(window).width()/2, endheight);
	dtx.moveTo($(window).width()/2, startheight);
	dtx.lineTo($(window).width()/2, pane.height());
	
	dtx.stroke();
	

	//*******PANE5
	pane = $(e).parent();
	e.height = pane.height();
	e.width = pane.width();
	
	//SET TEXTBOXES
	$(".text-box", pane).each(function(){
		endheight = parseInt($(this).position().top);
		startheight = (parseInt($(this).position().top) + $(this).outerHeight());
	});
	
	//DRAW LINES
	var etx=e.getContext("2d");
	etx.lineWidth = line_width;
	etx.strokeStyle = stroke_style;
	
	etx.moveTo($(window).width()/2, 0);
	etx.lineTo($(window).width()/2, endheight);
	etx.moveTo($(window).width()/2, startheight);
	etx.lineTo($(window).width()/2, pane.height());
	
	etx.stroke();
	

	//********PANE6
	var pane = $(f).parent();
	f.height = pane.height();
	f.width = pane.width();
	
	//SET TEXTBOX
	$(".text-box", pane).each(function(){
		endheight = parseInt($(this).position().top);
	});

	//DRAW LINES
	var ftx=f.getContext("2d");
	ftx.lineWidth = line_width;
	ftx.strokeStyle = stroke_style;
	
	ftx.moveTo($(window).width()/2, 0);
	ftx.lineTo($(window).width()/2, endheight);
	
	ftx.stroke();
}