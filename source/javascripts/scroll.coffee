$ ->
  $(window).scroll ->
    scrollPos = window.scrollY
    banner = document.querySelector('#banner')
    height = banner.offsetHeight / 3 * 2
    banner.style.setProperty("--offset-top", "calc(#{scrollPos * 2.2}px - 16.8%)")
    banner.style.setProperty("--banner-bg", "rgba(255,255,255,#{0.3 - Math.min((scrollPos / height), 0.3)})")
    banner.style.setProperty("--text-color", "rgba(0,0,0,#{0.75 - Math.min((scrollPos / height), 0.75)})")
    banner.style.setProperty("--backdrop-filter", "blur(#{10 - Math.min((scrollPos / (height / 10)), 10)}px)")


  $(".scroll").click (e) ->
    $("html, body").animate
      scrollTop: $($.attr(this, "href")).offset().top
    , 500
    false