//Nav bar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

//change color navbar
const navbar = document.getElementById('nav');
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight  > navHeight+200){
        navbar.classList.add('colored-nav');
    }else{
        navbar.classList.remove('colored-nav');
    }

});
