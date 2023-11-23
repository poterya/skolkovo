document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".main__mobile__trp__text__decor__imgs__item");
    const prevBtn = document.querySelector(".main__mobile__bc__buttons__lbtn");
    const nextBtn = document.querySelector(".main__mobile__bc__buttons__rbtn");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slides[index].classList.add("active");
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      updateSlidePosition();
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
      updateSlidePosition();
    }
  
    function updateSlidePosition() {
      const slideWidth = slides[currentSlide].clientWidth;
      const newPosition = -slideWidth * currentSlide;
      document.querySelector(".main__mobile__trp__text__decor__imgs").style.transform = `translateX(${newPosition}px)`;
    }
  
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  
    showSlide(currentSlide);
  });