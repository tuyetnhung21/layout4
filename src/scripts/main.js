// Main
$(document).ready(function () {
	// Phần Slider
	$('.home-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	});
	$('.home-review .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	});
	// Phần Clients
	$('.home-clients .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 2,
			},
			// breakpoint from 768 up
			768: {
				items: 4,
			},
			// breakpoint from 992 up
			992: {
				items: 6,
			}
		}
	});
});
function filter() {
$('.Filter .filter-nav ul li').on('click', function() {
	//  lấy giá trị data-filter của button vừa click
	var i = $(this).attr('data-open')
		// console.log(i);
	$('.Filter .filter-nav ul li').removeClass('active')
	$(this).addClass('active')
		//  fadeOut, fadeIn cũng như hide show vậy
	$('.Filter .filter-item .item').fadeOut(0)
		//  tìm đến những item có giá trị data-item giống với giá trị data-filter của button thì show ra
	$('.Filter .filter-item .item[data-open=' + i + ']').fadeIn(300)
	if (i == 'all') {
		$('.Filter .filter-item .item').fadeIn(300)
	}

})};