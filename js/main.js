$(document).ready(function() {
	var menu_btn = $('.menu_btn');
	var menu = $('.header_ul');
	var leftside = $('.aside_btn');
	menu_btn.on('click', function(event) {
		event.preventDefault();
		$(menu).toggleClass('header_ul_active');
	});
	leftside.on('click', function(event) {
		event.preventDefault();
		$('.aside_left_menu').toggleClass('aside_left_menu_active');
	});
	$('.aside_right_blocks').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 380,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	
	var elem = document.querySelector('.sum_range');
	var init = new Powerange(elem, { min: 100000, max: 3000000, start: 100000, hideRange: true, step: 10000 });
	var per, month, result, radio;
	var money = +$('.sum_range').val();
	var monthly;


	$('input[name="program"]').on('change', function() {
		money = +$('.sum_range').val();
		month = +$(this).attr('data-month');
		per = +$(this).attr('data-per');
		result = Math.round(per / 12 * month * money);
		var all = result + money;
		monthly = parseInt(result / month);
		$('.sum_end_year span').text(all.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "));
		$('.sum_end_month span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "))
	});

});


$('.sum_range').on('change', function() {
	$('.sum_inv_window span').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + ' руб.');
	var radio = $('input[name="program"]');
	money = +$(this).val();
	month = +$(radio).attr('data-month');
	per = +$(radio).attr('data-per');
	result = Math.round(per / 12 * month * money);
	var all = result + money;
	monthly = parseInt(result / month);
	$('.sum_end_year span').text(all.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "));
	$('.sum_end_month span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "))
});

$('.object_btn').on('click', function(event) {
	event.preventDefault();
	$('.modal').show();
});
$('.modal_close').on('click', function(event) {
	event.preventDefault();
	$('.modal').hide();
});

