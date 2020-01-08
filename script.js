// sticky header animation 

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


// accordion

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}