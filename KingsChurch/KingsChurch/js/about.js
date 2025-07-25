const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;

    toggle.classList.toggle("active");
    content.classList.toggle("open");
  });
});






  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const icon = header.querySelector('.accordion-icon');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all accordions first (optional: for single-open behavior)
      // accordions.forEach(i => {
      //   i.classList.remove('active');
      //   i.querySelector('.accordion-icon').textContent = '+';
      // });

      if (isActive) {
        item.classList.remove('active');
        icon.textContent = '+';
      } else {
        item.classList.add('active');
        icon.textContent = '×';
      }
    });
  });









