function click(){
   // alert("i got clicked");
    console.log(this.innerHTML);
    this.style.color="red";
    let sound=new Audio("sounds/"+this.innerHTML+".mp3")
    sound.play();


 



}
for(var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener('click',click)

    var buttonhtml=this.innerHTML;
    switch (buttonhtml) {
        case "w":
            let w=new Audio("sounds/w.mp3");
            w.play();
            
            break;
        case "a":
            let a=new Audio("sounds/a.mp3");
            a.play()
            break;
        case "d":
            let d=new Audio("sounds/d.mp3");
            d.play()
            break;
        case "j":
            let j=new Audio("sounds/j.mp3");
            j.play()
            break;
        case "k":
                let k=new Audio("sounds/k.mp3");
                k.play();
                
                break;       
        case "i":
                    let i=new Audio("sounds/i.mp3");
                    i.play();
                    
        break;
        case "s":
            let s=new Audio("sounds/s.mp3");
            s.play()
            break;     

    
        default:console.log(buttonhtml)
            break;
    }
}
 
function press(e){
    
    let sound=new Audio("sounds/"+e+".mp3")
    sound.play();
    document.getElementsByClassName(e)[0].style.color="green";
    document.getElementsByClassName(e)[0].classList.add("pressed");
    setTimeout(function(){
        
        document.getElementsByClassName(e)[0].classList.remove("pressed")
        document.getElementsByClassName(e)[0].style.color="#DA0463";

    
    
    }, 1000);

}
document.addEventListener("keydown",function(event){

    press(event.key);
    

});