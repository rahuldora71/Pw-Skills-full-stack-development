const container = document.getElementById('imageContainer');


const images = [
    './img1.png',
    './img2.png',
    './img3.png',
    './img4.png',
    './img5.png']

    let currentIndex = 0;

    function changeImage(index) {
  container.classList.add('fade-out');

  // Wait for fade-out to complete before changing image
  setTimeout(() => {
    container.style.backgroundImage = `url(${images[index]})`;
    container.classList.remove('fade-out');
  }, 300); // This should match the CSS transition duration
}


function nextImage() {
   currentIndex = (currentIndex + 1) % images.length;
  changeImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeImage(currentIndex);
}
