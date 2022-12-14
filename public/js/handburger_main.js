 const menuBtn = document.querySelector('.menu-btn');
 let menuOpen = false;
 menuBtn.addEventListener('click', () =>{
     if(!menuOpen){
         menuBtn.classNameList.add('open');
         menuOpen = true;
     }else{
         menuBtn.classNameList.remove('open');
         menuOpen = false;
     }
 }); 