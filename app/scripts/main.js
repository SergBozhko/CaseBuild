// =============== CONTROLLS ================
// Height = width
function setH (target) {
	target.height(target.width());
}
function setEach (target) {
	target.each(function() {
		$(this).height($(this).width());
	});
}
// Parallax
function parallax (target, value) {
	target.css({
		'transform' : 'translate(0%, ' + value + '%'
	});
}
// Parallax mouse
function pMouse (target, sensX, sensY) {
	target.css({
		'transform' : 'translate(' + sensX + '%, ' + sensY + '%)'
	});
};

// ================= DOM =================
$(function() {
	console.log('DOM ready');

	// Paralax var's
	var $romb = $('[class*=rt-w-]'),
		$rombs = $('.romb-targets'),
		$rombsBg = $('.byyd-targets-rombs-bg');
	setEach($romb);

	// Bonus config
	var $bonusResize = $('.bonus-resize'),
		$textCloud = $('.bonus-text-cloud');
	setEach($bonusResize);
	setEach($textCloud);

	var $bonusTCloud1 = $('.bt-cloud-1'),
		$bonusTCloud2 = $('.bt-cloud-2'),
		$bonusTCloud3 = $('.bt-cloud-3'),
		$bonusTCloud4 = $('.bt-cloud-4'),
		$bi1 = $('.bi-1'), $bi2 = $('.bi-2'),
		$bi3 = $('.bi-3'), $bi4 = $('.bi-4'),
		$bi5 = $('.bi-5'), $bi6 = $('.bi-6'),
		$bic1 = $('.bic-1'), $bic2 = $('.bic-2'),
		$bic3 = $('.bic-3'),
		$bonusCircles = $('.bonus-circles');
    $(".byyd-bonus").mousemove(function(e) {
        var pOfset = $(this).offset();
        var pOfsetX = (e.pageX - pOfset.left);
        var pOfsetY = (e.pageY - pOfset.top);

        pMouse($bonusCircles, -pOfsetX/1000, -pOfsetY/1000);
        pMouse($bonusTCloud1, -pOfsetX/100, -pOfsetY/600);
        pMouse($bonusTCloud2, pOfsetX/800, pOfsetY/1000);
        pMouse($bonusTCloud3, -pOfsetX/450, -pOfsetY/300);
        pMouse($bonusTCloud4, pOfsetX/200, pOfsetY/1000);
        pMouse($bi1, pOfsetX/400, 0);
        pMouse($bi2, -pOfsetX/400, 0);
        pMouse($bi3, -pOfsetX/400, 0);
        pMouse($bi4, -pOfsetX/300, 0);
        pMouse($bi5, pOfsetX/250, 0);
        pMouse($bi6, pOfsetX/100, 0);
        pMouse($bic1, -pOfsetX/150, 0);
        pMouse($bic2, pOfsetX/100, 0);
        pMouse($bic3, -pOfsetX/100, 0);
    });

	// Our works blocks width
	var $wBlock = $('.work-list-block');
	setH($wBlock);

	// Slick slider init
	$('.byyd-clients-list-mobile').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});

	// Easy anchor
	$('.anchor').click(function(e) {
		e.preventDefault();

		var anchorId = $(this).attr('href'),
			anchorTarget = $(anchorId).offset().top;
		console.log('Scrolled to $(' + anchorId + ')');

		$('body, html').animate({scrollTop: anchorTarget}, 500);
	});

	// Window actions
	$(window).resize(function() {
		setH($wBlock);
		setEach($romb);
		setEach($bonusResize);
		setEach($textCloud);
	});
	$(window).scroll(function() {
		var scrT = $(this).scrollTop();

		parallax($rombs, -scrT/10);
		parallax($rombsBg, -scrT/80);
	});
});