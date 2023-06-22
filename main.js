let menuBtn = document.querySelector('.menubar');
let sidebar = document.getElementById('sidebar');
let links = document.querySelectorAll('.main-nav a')


menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    sidebar.classList.toggle('show');
})

links.forEach(ele => {
    ele.addEventListener('click', function () {
        menuBtn.classList.remove('open');
        sidebar.classList.remove('show');
    })
})

let sections = document.querySelectorAll('section');


// let currentPos = document.documentElement.scrollTop;

window.onscroll = function () {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 125;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) { 
            links.forEach(link => {
                link.classList.remove('active');
                let selector = `.main-nav li a[href="#${id}"]`;
                document.querySelector(selector).classList.add('active');
            })
        }
    });
    
    let skillSection = document.querySelector('#skills');
    let progSpans = document.querySelectorAll('.progress span');

    if (window.scrollY >= skillSection.offsetTop - 100) {
        progSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}


// // skills progress animation once reaching the section
// let skillSection = document.querySelector('#skills');
// let progSpans = document.querySelectorAll('.progress span');

// window.onscroll = function () {
//     if (window.scrollY >= skillSection.offsetTop - 100) {
//         progSpans.forEach((span) => {
//             span.style.width = span.dataset.width;
//         })
//     }
// }
