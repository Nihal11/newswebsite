
function IconChanger(){

    let icon = document.getElementById("icons");
    icon.innerHTML = "search";
    
    setTimeout(function(){
        icon.innerHTML = "public";
    },2000);
    
  
  
   setTimeout(function(){
        icon.innerHTML = "person_pin";
    },4000);

  }
  
  IconChanger();
  
  setInterval(IconChanger,6000);