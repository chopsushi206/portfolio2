const navSlide = () => {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');

    icon.addEventListener('click', () => {
        nav.classList.toggle('icon-active');
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
            link.style.animation = `linkTransition 1.5s ease forwards ${index / 10}s`;
            }
            link.addEventListener('click', () => {
              nav.classList.toggle('icon-active');
              icon.classList.toggle('transform');
          })
        });
        icon.classList.toggle('transform');
    });

}

navSlide();