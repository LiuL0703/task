window.onload = function()
{
	var parper = document.getElementById("parper");
	var scissors = document.getElementById("scissors");
	var stone = document.getElementById("stone");
	var my_result = document.getElementById("my_result");
	var result = document.getElementById("result");
	var paper_src = "https://raw.githubusercontent.com/LiuL0703/ife/master/2015_summer/asset/bu.jpg";
	var scissors_src = "https://raw.githubusercontent.com/LiuL0703/ife/master/2015_summer/asset/jiandao.jpg" ;
	var stone_src = "https://raw.githubusercontent.com/LiuL0703/ife/master/2015_summer/asset/shitou.jpg";
	
	function random_choose(judge_text)
	{
		var choose = Math.random();  //取得电脑的随机选择结果

		if(choose<0.33)
		{
			if(judge_text == 0.33)
			{
				result.innerHTML = "Tie";
			}
			else if(judge_text == 0.66)
			{
				result.innerHTML = "Win";
			}
			else if(judge_text == 0.99)
			{
				result.innerHTML = "Lost";
			}

			choose =paper_src;     //布

		}
		else if(choose<0.66)
		{
			if(judge_text == 0.33)
			{
				result.innerHTML = "Lost";
			}
			else if(judge_text == 0.66)
			{
				result.innerHTML = "Tie";
			}
			else if(judge_text == 0.99)
			{
				result.innerHTML = "Win";
			}
			choose = scissors_src;   //剪刀
		}
		else
		{
			
			if(judge_text == 0.33)
			{
				result.innerHTML = "Win";
			}
			else if(judge_text == 0.66)
			{
				result.innerHTML = "Lost";
			}
			else if(judge_text == 0.99)
			{
				result.innerHTML = "Tie";
			}
			choose = stone_src;   //石头
		}

		return choose;
	}
	
	paper.onclick = function()
	{
		my_result.src = paper_src;
		computer_result.src = random_choose(0.33);
	};
	scissors.onclick = function()
	{
		my_result.src = scissors_src;
		computer_result.src = random_choose(0.66);
	};
	stone.onclick = function()
	{
		my_result.src = stone_src;
		computer_result.src = random_choose(0.99);
	};
}
