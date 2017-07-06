$(function(){
		$('#nav li').on('click',function(){
			$(this).addClass('selected').siblings().removeClass('selected');
			// console.log($(this).index());
			$('.rightside div:eq('+$(this).index()+')').show().siblings().hide();//这个方法运行比较好
			// $('.tab_box div').eq($(this).index()).show().siblings().hide();
		});

	})