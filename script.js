function toggleContact() {
  const contactForm = document.getElementById('contact');
  contactForm.style.display = (contactForm.style.display === 'block') ? 'none' : 'block';
}

function createBackground() {
  const container = document.querySelector('.background-animation');
  
  for (let i = 0; i < 50; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.top = `${Math.random() * 100}vh`;
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.animationDuration = `${Math.random() * 5 + 3}s`;
    container.appendChild(dot);
  }

  for (let i = 0; i < 30; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    line.style.top = `${Math.random() * 100}vh`;
    line.style.left = `${Math.random() * 100}vw`;
    line.style.animationDuration = `${Math.random() * 6 + 4}s`;
    container.appendChild(line);
  }
}

createBackground();
