
// 匹配中文字符的正则表达式： [u4e00-u9fa5]

// 匹配双字节字符(包括汉字在内)：[^x00-xff]
// 评注：可以用来计算字符串的长度（一个双字节字符长度计2，ASCII字符计1）
// 或者
function countLength(str) {
		var inputLength = 0;
		for (var i = 0; i < str.length; i++) {
			var countCode = str.charCodeAt(i);
			if (countCode >= 0 && countCode <=128) {
				inputLength += 1;
			} else {
				inputLength += 2;
			}
		}
		return inputLength;
//iP 
String.prototype.ipv4Address = function() {
  return /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]?|[1-9]?[0-9])(\.(?!$)|$)){4}$/.test(this);
}
// split() 方法用于把一个字符串分割成字符串数组
"hello".split("")	//可返回 ["h", "e", "l", "l", "o"];
"I am a man".split(' ') //返回["I", "am", "a", "man"]

//判断回文数
function palindrome(str) {
  str = str.replace(/[\W_]/g,'').toLowerCase();
  var reverseStr = str.split('').reverse().join('');
  if(str === reverseStr){
     return true;
  }else{
    return false;
  }
}
//找出一串字符中最长的那个 并返回这个单词长度
function findLongestWord(str) {
  var arr = [];
  var maxNum = 0;
  arr = str.split(' ');
  var len = arr.length;
  for(var i = 0;i<len;i++){
    if(arr[i].length>maxNum){
      maxNum = arr[i].length;
      str = arr[i];
    }
  }
  return maxNum;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//句子首字母大写
function titleCase(str) {
  str = str.toLowerCase();
  var arr = [];
  arr = str.split(' ');
  var len = arr.length;
  for(var i =0;i<len;i++){
    var arr1 = arr[i].split('');
    arr1[0] = arr1[0].toUpperCase();
    arr[i]= arr1.join('');
  }
  str = arr.join(' ');
  return str;
}

titleCase("I'm a little tea pot");

// 找出二维数组中每个子数组最大的数组成的数组
function largestOfFour(arr) {
  var len  = arr.length;
  for(var i =0;i<len;i++){
    var len1 = arr[i].length;
    var maxNum = arr[i][0];
    for(var j=1;j<len1;j++){
      if(maxNum<arr[i][j]){
        maxNum = arr[i][j];
      }
    }
    arr[i] = maxNum;
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 截断一个字符串！
// 如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。
// 切记，插入到字符串尾部的三个点号也会计入字符串的长度。
// 但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
function truncate(str, num) {
  len = str.length;
  if(num+3<=len){
    str= str.slice(0,(num-3))+"...";
  }
  if(num<=3){
    str = str.slice(0,num)+"...";
  }
  // Clear out that junk in your trunk
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);


//分割数组
function chunk(arr, size) {
 var arr1 = [];
  while(arr.length){
    arr1.push(arr.slice(0,size));
    arr = arr.slice(size);
  }
  return arr1;
}


// 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
// 举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。
// ["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。
// ["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。

function mutation(arr) {
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
  
  if(arr1.length>arr2.length){
    var temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }
  arr1 = arr1.split('');
  arr = true;
  for(var i = 0;i<arr1.length;i++){
    if(arr2.indexOf(arr1[i]) === -1){
      arr = false;
    }
  }
  return arr;
}

mutation(["hello", "hey"]);



// 让上帝的归上帝，凯撒的归凯撒。
// 下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。
// 移位密码也就是密码中的字母会按照指定的数量来做移位。
// 一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，'Z'↔'M'以此类推。
// 写一个ROT13函数，实现输入加密字符串，输出解密字符串。
// 所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。
//rot13("SERR PBQR PNZC") 应该解码为 "FREE CODE CAMP"
// rot13("SERR CVMMN!") 应该解码为 "FREE PIZZA!"
// rot13("SERR YBIR?") 应该解码为 "FREE LOVE?"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") 应该解码为 "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

function rot13(str) { // LBH QVQ VG!
  str = str.split(' ');
  for(var i = 0;i<str.length;i++){
    str[i]=str[i].split('');
    str[i] = str[i].map(function(ele){
      var num = ele.charCodeAt(0);
      if(num<=90&&num>=65){
        if((num+13)>90){
          num = num-13;
        }else{
          num = num+13;
        }
        ele =String.fromCharCode(num);      
        }
      else{
        ele = String.fromCharCode(num);
      }
       return ele;
    });
    str[i] =str[i].join('');
  }
  str = str.join(' ');
  return str;
}



function isPangram(s){
  var res = {};
  var count = 0;
  if(s.length<26) return false;
  for(let i in s){
  	if(!res[s[i]]){
  		res[s[i]] = 1;
  		count++;
  		if(count>=26){
  			return true;
  		}
  	}
  }
  return false;
}



// GET
function get(url){
	return new Promise(function(resolve,reject){
		var req = new XMLHttpRequest();
		req.open("GET",url);
		req.onload = function(){
			if(req.status===200){
				resolve(req.response);
			}else{
				reject(Error(req,statusText));
			}
		}
	});
	req.onerrr = function(){
		reject(Error("Network Error"));
	};
	req.send();
}

get("stoty.json").then(function(response){
	console.log("Success!",response);
},function(error){
	console.log("Failed",error);
})

var promise = new Promise(function(resolve,reject){
	resolve(1);
});

promise.then(function(val){
	console.log(val);
	return val+2;
}).then(function(val){
	console.log(val);
})


get("story,json").then(function(response){
	console.log("Success!",response);
})

get("story.json").then(function(response){
	return JSON.parse(response);
}).then(function(response){
	console.log("Yey JSON",response);
})


var storyPromise;

function getChapter(i){
	storyPromise = storyPromise||getJSON("story.json");

	return storyPromise.then(function(story){
		return getJSON(story.chapterUrls[i]);
	})
}

getChapter(0).then(function(chapter){
	console.log(chapter);
	return getChapter(1);
}).then(function(chapter){
	console.log(chapter);
})

get("story.json").then(function(response){
	console.log("Success!",response);
},function(error){
	console.log("Failed!",error);
})


function imgLoad(url){
	return new Promise(function(resolve,reject){
		// 创建XHR对象
		var request = new XMLHttpRequest();
		request.open('GET',url);
		request.responseType = "blob";
		// when the request loads check whether it was successful
		request.onload = function(){
			if(request.status===200){
				resolve(request.response);
			}else{
				reject(Error("Image didn\'t load successfully; error code: "+request.statusText));
			}
		};
		request.onerror = function(){
			reject(Error("There was a network error"));
		};
		// send the request
		request.send();  
	});
}
var body = document.querySelector('body');
var myImage = new Image();
imgLoad("").then(function(response){
	var imageURL = window.URL.createObjectURL(response);
	myImage.src = imageURL;
	body.append(myImage);
},function(Error){
	console.log(Error);
});
