if (/iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
  $('#banner').backstretch($('#banner').data('bg-url'));
}