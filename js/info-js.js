/* about-me particle effect */
particlesJS("particles-js", { "particles": { "number": { "value": 108, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;

/* alow active pills when scroll */
$(document).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
    $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
        var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
            SectionOneOffset = $('#navbar').offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
            SectionTwoOffset = $('.about-me').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.
        SectionThreeOffset = $('.my-projects').offset().top;
        SectionFourOffset = $('.my-skills').offset().top;

        if (Scroll >= SectionOneOffset) { // If you have scrolled past section one do this.
            $(".item-0").addClass("active"); // Adds class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section one do this.
            $(".item-0").removeClass("active"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        }
        if (Scroll >= SectionTwoOffset) {
            $(".item-1").addClass("active");
            $(".item-0").removeClass("active");
        } else {
            $(".item-1").removeClass("active");
        }
        if (Scroll >= SectionThreeOffset) {
            $(".item-2").addClass("active");
            $(".item-1").removeClass("active");
        } else {
            $(".item-2").removeClass("active");
        }
        if (Scroll >= SectionFourOffset) {
            $(".item-3").addClass("active");
            $(".item-2").removeClass("active");
        } else {
            $(".item-3").removeClass("active");
        }
    });
});