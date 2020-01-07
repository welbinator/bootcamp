const syllabus = document.querySelector('#syllabus');
const header = document.querySelector('header');
const options = {
    root: null,
    threshold: 0.6
};

const observer = new IntersectionObserver(function(entries, observer) {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        header.classList.add('active');
       
    } else {
        header.classList.remove('active');
        
    }
    console.log(entry.isIntersecting);
})
}, options);



observer.observe(syllabus);