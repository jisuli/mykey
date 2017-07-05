new Swiper('.swiper-container',{
		pagination:'.swiper-pagination',
		paginationClickable:true
	});
$('.centerAdd').on('click',function(){
	$('.mark').fadeIn();
	$('.animated').addClass('bounceInDown').removeClass('bounceOutDown')
})