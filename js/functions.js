 //submenu button
 function subMenu(b){
        
    if(b.shefa != 'Click'){
         b.shefa = "Click";
        document.getElementById("subMenu").style.display="block";
    //    document.getElementById("mobileNav").style.transition=".5s";
     }//end if

//When click it again..
   else if(b.shefa == 'Click'){
       b.shefa = "Unclick";
   document.getElementById("subMenu").style.display="none";
   //document.getElementById("mobileNav").style.transition=".5s";
     }//end else

   
}
