document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq_item');

  faqItems.forEach(item => {
    item.querySelector('.faq_question').addEventListener('click', () => {
      const answer = item.querySelector('.faq_answer');
      const icon = item.querySelector('.icon');
      const isOpen = answer.style.display === 'block';

      document.querySelectorAll('.faq_answer').forEach(a => a.style.display = 'none');
      document.querySelectorAll('.icon').forEach(i => i.textContent = '+');

      if (!isOpen) {
        answer.style.display = 'block';
        icon.textContent = '-';
      }
    });
  });
});
