const header = document.querySelector('.main-header');
window.addEventListener('scroll', () =>{
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classNameList.add('scrolled');
    }else{
        header.classNameList.remove('scrolled');
    }
})