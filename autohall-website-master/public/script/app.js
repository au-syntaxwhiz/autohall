$(document).ready(function (e) {
  const currentImageSpan = document.querySelector("._3iRvY");
  const currentImageDiv = currentImageSpan.querySelector("._1KEYJ");

  $("._2zQnf").on("touchstart", function (event) {
    console.log(event);
    const xClick = event.originalEvent.touches[0].pageX;

    $(this).on("touchmove", function (event) {
      const xMove = event.originalEvent.touches[0].pageX;
      const sensitivityInPx = 5;

      if (Math.floor(xClick - xMove) > sensitivityInPx) {
        plusSlides(1);
        $(this).off("touchmove");
      } else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
        plusSlides(-1);
        $(this).off("touchmove");
      }
    });
  });

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    // currentImageDiv.innerHTML = curSlide + 1 + "/" + (maxSlide + 1);

    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("_3qDGo");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.transition = "all 0.5s";
      slides[i].style.transform = `translateX(${100 * (i - slideIndex + 1)}%)`;
    }
    currentImageDiv.innerHTML = slideIndex + " / " + slides.length;

    // slides[slideIndex - 1].style.transform = `translateX(${100 * (n - slideIndex)}%)`;

    // slides[slideIndex - 1].style.display = "block";
  }

  const prevSlide = document.querySelector(".btn-prev");
  const nextSlide = document.querySelector(".btn-next");

  prevSlide.style.transform = "rotate(180deg)";
  prevSlide.addEventListener("click", function () {
    plusSlides(-1);
  });
  nextSlide.addEventListener("click", function () {
    plusSlides(1);
  });
});
