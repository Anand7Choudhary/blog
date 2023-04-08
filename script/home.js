const changeTheme=(n)=>{
    let modeDiv = document.getElementById("innerModeDiv");
    if(n==1){
        modeDiv.style.transform="translateX(-50%)";
        document.querySelector("html").className="dark";
        document.getElementById("signImg1").style.display="none";
        document.getElementById("signImg2").style.display="block";
    }else{
        modeDiv.style.transform = "translateX(0)";
        document.querySelector("html").className = "light";
        document.getElementById("signImg2").style.display = "none";
        document.getElementById("signImg1").style.display = "block";
    }
}