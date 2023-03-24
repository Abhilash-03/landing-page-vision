let section = document.querySelectorAll('section')
let menuTab = document.querySelectorAll('nav ul li a');

window.onscroll = ()=>{
    section.forEach((i)=>{
        let top = window.scrollY;
        let offset = i.offsetTop - 150;
        let height = i.offsetHeight;
        let id = i.getAttribute('id');

        if(top >= offset && top < offset + height){
            menuTab.forEach(link =>{
                link.classList.remove('active');
                document.querySelector(`nav ul li a[href*=${id}]`).classList.add('active');
            })
        }
    })
}

const reveal = ()=>{
    let reveal = document.querySelectorAll('.reveal');

    for(let i = 0; i<reveal.length; i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveal[i].getBoundingClientRect().top;
        let elementVisible = 70;

        if(elementTop < windowHeight - elementVisible){
            reveal[i].classList.add('active');
        }
        else{
            reveal[i].classList.remove('active');

        }
    }
}

window.addEventListener('scroll', reveal);
reveal();