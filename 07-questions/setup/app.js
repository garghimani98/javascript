//using selectors inside the element



 //const minusbtn=document.querySelector(".minus-icon");
 //const plusicon=document.querySelector(".plus-icon");
 //const questiontext=document.querySelector(".question-text");

 const questions=document.querySelectorAll(".question");

 questions.forEach(function(question){
    const ques=question.querySelector(".question-btn");
    ques.addEventListener('click',function(){
       questions.forEach(function(item){
          if(item!=question()){
             question.classList.remove("show-text");
          }

       });
       question.classList.toggle("show-text");
    });
 });

// traversing the dom
// const btns=document.querySelectorAll(".question-btn");
// btns.forEach(function(btn){
//    btn.addEventListener('click',function(e){

 //       const question=e.currentTarget.parentElement.parentElement;
 //      question.classList.toggle("show-text")
 //});
 
 //});


 //plusbtn.addEventListener('click',function(){
  //  btns.classList.remove(".plus-icon");
  //  btns.classList.add(".questiontext");
  //  btns.classList.add(".minus-icon")
  //   });
    