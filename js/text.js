const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const h1 = document.createElement('h1');
  h1.textContent = card.id;
  h1.style.display = 'none';

  card.appendChild(h1);

  card.addEventListener('mouseenter', function() {
    h1.style.display = 'block';
    console.log(this.id);
  });

  card.addEventListener('mouseleave', function() {
    h1.style.display = 'none';
  });
});
