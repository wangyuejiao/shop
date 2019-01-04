//顶部悬浮
window.onload=function(){
	var header=document.getElementsByClassName("header")[0];
	// alert(header);
    window.onscroll=function(){
    	var st=document.documentElement.scrollTop||document.body.scrollTop;
    	if(st>170){
    		header.style.position="fixed"
    		header.style.margin="0 0 0 160px";
    	}else{
    		header.style.position="relative"
    	}
    }
}
