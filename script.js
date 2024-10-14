document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

   // JavaScript for the hamburger menu toggle
   const hamburger = document.getElementById('hamburger');
   const menu = document.getElementById('menu');

   hamburger.addEventListener('click', () => {
       menu.classList.toggle('show');
   });
