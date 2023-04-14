function showTime() {
    let d = new Date(); 
    let h = d.getHours();
    let m = d.getMinutes(); let s = d.getSeconds();
    let hr = h*(360/12)+m/2;
    let min = m*(360/60);
    let sec = s*(360/60);
   
    document.getElementById("h").style.transform="rotate("+hr+"deg)";
    document.getElementById("m").style.transform="rotate("+min+"deg)";
    document.getElementById("s").style.transform="rotate("+sec+"deg)";    
}
   
setInterval(showTime, 100) 
//setTimeout(showTime, 100)