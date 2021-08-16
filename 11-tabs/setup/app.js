const btns=document.querySelectorAll('.tab-btn');
const about=document.querySelector('.about');
const articles=document.querySelectorAll('.content');


//here we focus on current target not the event target
about.addEventListener('click',function(e){
   const id=e.target.dataset.id;
   if(id)
   {
       btns.forEach(function(btn){
          btn.classList.remove("active");
        });
          e.target.classList.add("active");
      //hide other articles
       articles.forEach(function(article){
           article.classList.remove("active");
           
       })
       //find active element 
       const element=document.getElementById(id);
       element.classList.add('active')
   }
});