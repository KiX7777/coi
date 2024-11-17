class ToggleSection extends HTMLElement {
  constructor() {
    super();

    const btn = this.querySelector('button');
    const txt = this.querySelector('.text');
    const alternateText = this.querySelector('.alternateText');

    btn.addEventListener('click', () => {
      txt.classList.toggle('show');
      alternateText.classList.toggle('show');
    });

    const observerOptions = {
      root: null,
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.classList.add('visible');
        } else {
          this.classList.remove('visible');
        }
      });
    }, observerOptions);

    observer.observe(this);
  }
}

customElements.define('toggle-section', ToggleSection);
