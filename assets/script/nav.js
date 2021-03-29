const navSlide = () => {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');

    icon.addEventListener('click', () => {
        nav.classList.toggle('icon-active');
        icon.classList.add('transform');
        links.forEach((link, index) => {
            link.style.animation = `linkTransition 1.5s ease forwards ${index / 10}s`;
        })
    });
    links.forEach((link) => {
        link.addEventListener('click', () => {
          nav.classList.toggle('icon-active');
          icon.classList.remove('transform');
          links.forEach((link) =>{
            link.style.animation = '';
          })
      })
    });

}

navSlide();