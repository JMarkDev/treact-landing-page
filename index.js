function openMenu() {
  document.body.classList += " menu--open "
}

console.log('seroy cute');

function closeMenu() {
  document.body.classList.remove('menu--open')
}

const arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow) {
  arrow.addEventListener('click', function() {
    const answer = this.parentNode.parentNode.querySelector('.answer');
    const otherAnswers = document.querySelectorAll('.answer.visible');
    
    // close other visible answers
    otherAnswers.forEach(function(otherAnswer) {
      if (otherAnswer !== answer) {
        otherAnswer.classList.remove('visible');
        otherAnswer.style.display = 'none';
        otherAnswer.parentNode.querySelector('.arrow').classList.remove('arrow--up');
      }
    });

    // toggle the visibility of the clicked answer
    answer.classList.toggle('visible');
    answer.style.display = answer.classList.contains('visible') ? 'block' : 'none';

    // toggle the arrow class
    if (this.classList.contains('arrow--up')) {
      this.classList.remove('arrow--up');
    } else {
      this.classList.add('arrow--up');
    }
  });
});

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const answer = question.querySelector('.answer');

  // hide the answer initially
  answer.style.display = 'none';
});
