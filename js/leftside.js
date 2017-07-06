$(function(){
	var $nav = $('.leftside img');

		function a(){
			this.start=function(){
				var index=$nav.index($nav.filter(".show"));
				// console.log(index);
				timer=setInterval(function(){
					index++;
					if(index==$nav.length){
						index=0;
					}
					
					$nav.eq(index).fadeIn('slow').addClass('show').siblings().fadeOut('slow').removeClass('show');					
					// $nav.eq(index).show().siblings().hide();
					
				},2000);
			}
			this.pause=function(){
				clearInterval(timer);
			}
		}
		var a=new a();
		a.start();
		$nav.hover(function(){
			a.pause();
		},function(){
			a.start();
		});
	})