document.addEventListener('DOMContentLoaded', ()=>{
    const container1 = document.querySelector('.container1');
    const container2 = document.querySelector('.container2');
    const container3 = document.querySelector('.container3');
    const container4 = document.querySelector('.container4');
    const container5 = document.querySelector('.container5');
    const container6 = document.querySelector('.container6');
    const container7 = document.querySelector('.container7');
    const container8 = document.querySelector('.container8');
    const container9 = document.querySelector('.container9');
    const container10 = document.querySelector('.container10');
    const container11 = document.querySelector('.container11');
    const container12 = document.querySelector('.container12');
    const container13 = document.querySelector('.container13');
    const container14 = document.querySelector('.container14');
    const container15 = document.querySelector('.container15');
    const container16 = document.querySelector('.container16');
    const container17 = document.querySelector('.container17');
    const container18 = document.querySelector('.container18');
    const container19 = document.querySelector('.container19');
    const container20 = document.querySelector('.container20');
    const container21 = document.querySelector('.container21');
    const container22 = document.querySelector('.container22');
    const container23 = document.querySelector('.container23');
    const container24 = document.querySelector('.container24');
    const container25 = document.querySelector('.container25');
    const container26 = document.querySelector('.container26');
    const container27 = document.querySelector('.container27');
    const container28 = document.querySelector('.container28');
    const cb = function(entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const ta = new TextAnimation(entry.target);
                ta.animate();
                observer.unobserve(entry.target);
            }
        })
    };
   
    const io = new IntersectionObserver(cb);
    io.observe(container1);
    io.observe(container2);
    io.observe(container3);
    io.observe(container4);
    io.observe(container5);
    io.observe(container6);
    io.observe(container7);
    io.observe(container8);
    io.observe(container9);
    io.observe(container10);
    io.observe(container11);
    io.observe(container12);
    io.observe(container13);
    io.observe(container14);
    io.observe(container15);
    io.observe(container16);
    io.observe(container17);
    io.observe(container18);
    io.observe(container19);
    io.observe(container20);
    io.observe(container21);
    io.observe(container22);
    io.observe(container23);
    io.observe(container24);
    io.observe(container25);
    io.observe(container26);
    io.observe(container27);
    io.observe(container28);
})

class TextAnimation{
    constructor(el){
        this.el = el;
    }
    animate(){
        this.el.classList.toggle('inview');
    }
}   