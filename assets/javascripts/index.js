require.context('../images', true);

const updateScroll = (force = false) => {
  const scrollPos = window.scrollY

  if (force || scrollPos < window.innerHeight) {
    const banner = document.querySelector('#banner')
    const height = banner.offsetHeight / 3 * 2
    banner.style.setProperty("--offset-top", `${scrollPos * 0.2}px`)
    banner.style.setProperty("--banner-bg", `rgba(255,255,255,${0.3 - Math.min((scrollPos / height), 0.3)})`)
    banner.style.setProperty("--text-color", `rgba(0,0,0,${0.75 - Math.min((scrollPos / height), 0.75)})`)
    banner.style.setProperty("--backdrop-filter", `blur(${10 - Math.min((scrollPos / (height / 10)), 10)}px)`)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateScroll(true);
});

window.addEventListener('scroll', () => updateScroll(false));