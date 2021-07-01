const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
  slide.addEventListener('click', evt=>{
    const activeSlide = document.querySelector('.active');
    if (!slide.classList.contains('active')){
      activeSlide.classList.remove('active');
      slide.classList.add('active');
    }
  })
})