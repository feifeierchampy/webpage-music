
           var currentSongNum;
           currentSongNum = 0;
           	var mySongsUrl = new Array();
    var mySongsName = new Array();
    	var my = document.getElementById("player"); 
    // currentSongNum = i;
    mySongsUrl[0] = "http://7xkxii.com1.z0.glb.clouddn.com/20151214Ifyou.mp3";
    mySongsUrl[1] = "http://7xt681.com2.z0.glb.clouddn.com/%E5%86%8D%E8%A7%81%E4%BA%8C%E4%B8%81%E7%9B%AE.mp3";
    mySongsUrl[2] = "http://7xt681.com2.z0.glb.clouddn.com/%E6%98%A5%E9%A3%8E%E5%8D%81%E9%87%8C.mp3";
    mySongsUrl[3] = "http://7xt681.com2.z0.glb.clouddn.com/Sons%20Of%20Day%20-%20Oceans%20Deep.mp3";
    mySongsName[0] = "if you";
    mySongsName[1] = "再见二丁目";
    mySongsName[2] = "春风十里";
    mySongsName[3] = "Oceans Deep";
function playmusic(i){
		
    currentSongNum = i;
    my.setAttribute("src",mySongsUrl[i]); 
	document.getElementById("mp3name").innerText  = "正在获取歌曲...";
	my.addEventListener("canplaythrough",
		function() {
			document.getElementById("mp3name").innerText  = mySongsName[i];
		},false);        
	my.play();
}
function next1() {
		currentSongNum++;
		if(currentSongNum>=mySongsUrl.length) {
			currentSongNum = 0;
		}
		my.setAttribute("src",mySongsUrl[currentSongNum]); 
		document.getElementById("mp3name").innerText  = "正在获取歌曲...";
		my.addEventListener("canplaythrough",
			function() {
				document.getElementById("mp3name").innerText  = mySongsName[currentSongNum];
			},false);        
		my.play();
	
}
