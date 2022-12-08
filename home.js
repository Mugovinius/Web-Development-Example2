//Nav bar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
//fixed navbar
const navbar = document.querySelector('.nav-body');
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight  > navHeight){
        navbar.classList.add('colored-nav');
    }else{
        navbar.classList.remove('colored-nav');
    }

});
const comments = [
    {
        id:1,
        name: "Samuel Patterson",
        info: "dimentum ac quam eu pretium. Quisque accumsan nisl sit amet arcu varius, quis tempus mauris viverra. Phasellus vitae ex metus. Quisque ullamcorper eu nisl in vulputate. Nulla gravida imperdiet nibh nec rhoncus. Maecenas viverra risus eget augue laoreet pharetra. Nullam scelerisque enim eros, nec blandit dui hendrerit sed."
    },
    {
        id:2,
        name: "Richard Henderson",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com."
    },
    {
        id:3,
        name: "Ariana Anderson & Steve Anderson",
        info: "Aliquam commodo velit at pretium viverra. Donec sed pulvinar massa. Curabitur sollicitudin nisl et condimentum suscipit. Phasellus lacinia interdum lorem, quis egestas nibh scelerisque vitae."
    }
]
//select items
const author = document.getElementById('author');
const desc = document.getElementById('info');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

//set starting item
let firstItem = 0;
//load initial item
window.addEventListener("DOMContentLoaded", function(){
    showComments();
});

//show person 
function showComments(){
    const item = comments[firstItem];
    author.textContent = item.name;
    desc.textContent = item.info;
}
//show next person
nextBtn.addEventListener('click', function(){
    firstItem++;
    if (firstItem > comments.length - 1){
        firstItem = 0;
    }
    showComments();
});
//show previous person
prevBtn.addEventListener('click', function (){
    firstItem--;
    if (firstItem < 0){
        firstItem = comments.length - 1;
    }
    showComments();
});