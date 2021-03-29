const navSlide = () => {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');

    icon.addEventListener('click', () => {
      console.log("icon clicked") //let's just see when this function is running!
        nav.classList.toggle('icon-active');
        icon.classList.toggle('transform');
    });

    links.forEach((link, index) => {
        link.style.animation = `linkTransition 1.5s ease forwards ${index / 10}s`;
        link.addEventListener("click", function(){
          console.log(nav.classList.value.indexOf("icon-active"))
          if(nav.classList.value.indexOf("icon-active") != -1){
            nav.classList.toggle('icon-active')
          }
        })
    });


}

navSlide();