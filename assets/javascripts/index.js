require.context('../images', true);

const updateScroll = (force = false) => {
  const scrollPos = window.scrollY;

  if (force || scrollPos < window.innerHeight) {
    const banner = document.querySelector('#banner');
    const height = banner.offsetHeight / 2;

    const scrollProgression = Math.max(1 - scrollPos / height, 0);

    document.body.style.setProperty("--offset-top", `${scrollPos * 0.2}px`);
    document.body.style.setProperty('--scroll-progression', scrollProgression);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateScroll(true);
});

window.addEventListener('scroll', () => updateScroll(false));