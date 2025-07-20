// Add scroll event to change navbar style
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
