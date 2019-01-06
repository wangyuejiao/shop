//顶部悬浮
window.onload=function(){
	var header=document.getElementsByClassName("header2")[0];
	// alert(header);
    window.onscroll=function(){
    	var st=document.documentElement.scrollTop||document.body.scrollTop;
    	if(st>170){
    		header.style.position="fixed"
    	}else{
    		header.style.position="relative"
    	}
    }
}
