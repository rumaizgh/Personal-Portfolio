const Observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("fade-in");
        }
    });
});
const target = document.querySelector('.projects');
Observer.observe(target);
