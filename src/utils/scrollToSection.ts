function scrollToSection(sectionId: string): void {
  const htmlEl = document.documentElement;
  htmlEl.classList.add('smooth-scroll');
  setTimeout(() => {
    htmlEl.classList.remove('smooth-scroll');
  }, 600);

  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default scrollToSection;
