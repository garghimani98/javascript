// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date=document.getElementById("date");
date.innerHTML=new Date().getFullYear;
// ********** close links ************
const navToggle=document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container");
const links=document.querySelector(".links");

navToggle.addEventListener('click',function(){
    const containerHeight=linksContainer.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;
    if(containerHeight===0)
    {
        linksContainer.style.height=`${linksHeight}px`;
        //linksContainer.classList.add("show-links")
        //linksContainer.classList.toggle("show-links")
    }
    //console.log(linksHeight);
    //console.log(containerHeight);
    else
    {
        linksContainer.style.height=0;

    }
    
})

// ********** fixed navbar ************
const navbar=document.querySelector(".nav");
const toplink=document.querySelector(".top-link");
 window.addEventListener("scroll",function(){
     const scrollHeight=window.pageYOffset;
     const navHeight=navbar.getBoundingClientRect().height;
     if(scrollHeight>navHeight){
         navbar.classList.add("fixed-nav");
     }
     else{
        navbar.classList.remove("fixed-nav");
    }
    if(scrollHeight>300)
    {
        toplink.classList.add("show-link");
    }
else{
    toplink.classList.remove("show-link");
}
 });


// ********** smooth scroll ************
// select links  To hide the navbar on clicking any link in nav and top reach that section


const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights