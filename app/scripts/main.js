// Height = width
function setH (target) {
	target.height(target.width());
}
function setEach (target) {
	target.each(function() {
		$(this).height($(this).width());
	});
}
// Paralax
function paralax (target, value) {
	target.css({
		'transform' : 'translate(0%, ' + value + '%'
	});
}

$(function() {
	console.log('DOM ready');

	var $romb = $('[class*=rt-w-]'),
		$rombs = $('.romb-targets'),
		$rombsBg = $('.byyd-targets-rombs-bg');
	setEach($romb);

	// Our works blocks width
	var $wBlock = $('.work-list-block');
	setH($wBlock);

	// Window actions
	$(window).resize(function() {
		setH($wBlock);
		setEach($romb);
	});
	$(window).scroll(function() {
		var scrT = $(this).scrollTop();

		paralax($rombs, -scrT/10);
		paralax($rombsBg, -scrT/80);
	});
});