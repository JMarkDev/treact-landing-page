console.log("hello world")

const arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow) {
  arrow.addEventListener('click', function() {
    const answer = this.parentNode.parentNode.querySelector('.answer');
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const arrow = question.querySelector('.arrow');
  const answer = question.querySelector('.answer');

  arrow.addEventListener('click', () => {
    if (answer.classList.contains('visible')) {
      answer.classList.remove('visible');
      arrow.classList.remove('arrow--up');
    } else {
      answer.classList.add('visible');
      arrow.classList.add('arrow--up');
    }
  });
});




