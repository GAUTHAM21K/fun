const but1 = document.querySelector('.yes');
const but2 = document.querySelector('.no');
const but = document.querySelector('.container');
const head = document.querySelector('.ques');


but2.addEventListener("mouseover", () =>{
    var maxx = head.clientWidth - but.offsetWidth;
    var maxy = head.clientHeight; - but2.offsetHeight;
   
    var newx = Math.floor(Math.random()*600);
    var newy = Math.floor(Math.random()*600);
    
    console.log(newx);
    console.log(newy);

    but2.style.top = newx + 'px';
    but2.style.left = newy +'px';


});

but1.addEventListener('click', () =>{
    head.innerHTML = 'U GAY?'
})