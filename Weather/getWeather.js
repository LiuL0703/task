$(document).ready(function() {
	
		$("button")[0].onclick = function(){
			var oInput = $('#input').val();
			var aSpan =$("div > ul > li >span");
			var sUrl = "https://free-api.heweather.com/v5/now?city="+oInput+"&key=79f28bd9c2fc4d6e94e3fbb6634761e6";
			var oPic = 'http://files.heweather.com/cond_icon/100.png'; 
			$.ajax({
				type:'get',
				async:true,
				url:sUrl,
				dataType:'json',
				jsonp:"callback",
				jsonpCallback:'getWeather',
				success:function(data){
					aSpan[0].innerHTML = data.HeWeather5[0].basic.cnty
										+" "+data.HeWeather5[0].basic.city;
					aSpan[1].innerHTML = data.HeWeather5[0].now.cond.txt;
					$('div>ul>li>img').attr("src",oPic.replace(/\d{3}/,data.HeWeather5[0].now.cond.code));
					$('div>ul>li>img').css('display', 'inline');
					aSpan[2].innerHTML  = data.HeWeather5[0].now.tmp+" ℃";
					aSpan[3].innerHTML = data.HeWeather5[0].basic.update.loc;
				},
				error:function(){
	                 alert('fail');
	            }
			});
		};
		
	});