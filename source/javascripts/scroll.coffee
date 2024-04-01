$ ->
  $(window).scroll ->
    scrollPos = $(this).scrollTop()  #unless "ontouchstart" of window
    $("#banner-text").css "margin-top": "calc(#{(scrollPos / 5)}px - 16.8%)"
    $("#banner-text").css "background-color": "rgba(255,255,255,#{0.3 - Math.min((scrollPos / 400), 0.3)})"
    $("#banner-text").css "border-color": "rgba(255,255,255,#{0.3 - Math.min((scrollPos / 400), 0.3)})"
    $("#banner-text").css "backdrop-filter": "blur(#{10 - Math.min((scrollPos / 20), 10)}px)"

  $(".scroll").click (e) ->
    $("html, body").animate
      scrollTop: $($.attr(this, "href")).offset().top
    , 500
    false