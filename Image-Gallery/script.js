// Select all images in the gallery
const images = document.querySelectorAll('.gallery img');

// Create modal elements
const modal = document.createElement('div');
const modalImg = document.createElement('img');

modal.classList.add('modal');
modal.appendChild(modalImg);
document.body.appendChild(modal);

// Style the modal (you can move this to CSS file if preferred)
Object.assign(modal.style, {
  display: 'none',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000'
});

Object.assign(modalImg.style, {
  maxWidth: '90%',
  maxHeight: '90%',
  borderRadius: '10px'
});

// Show modal when image is clicked
images.forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.style.display = 'flex';
  });
});

// Hide modal when clicking outside image
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
