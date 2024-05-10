
  document.querySelector('.burger-btn').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = (nav.style.display === 'block' || nav.style.display === '') ? 'none' : 'block';
  });
