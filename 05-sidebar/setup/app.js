const togglebtn=document.querySelector(".sidebar-toggle");
const sideclass=document.querySelector(".sidebar");
const closebtn=document.querySelector(".close-btn")

togglebtn.addEventListener('click',function(){
    sideclass.classList.toggle("show-sidebar");
});

closebtn.addEventListener('click',function(){
    sideclass.classList.remove("show-sidebar");
});