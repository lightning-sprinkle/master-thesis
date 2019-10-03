
Reveal.initialize({
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true },
    { src: 'plugin/zoom-js/zoom.js', async: true }
  ],
  hash: true,
  controls: false  
})

var header = $('#header').html();
if (window.location.search.match(/print-pdf/gi)) {
  Reveal.addEventListener('ready', function (event) {
    $('.slide-background').append(header)
  })
} else {
  $('div.reveal').append(header)
  $('#footer-left').hide()
  $('#footer-right').hide()
}

Reveal.addEventListener('slidechanged', (event) => {
  const isFirst = event.indexh === 0;
  Reveal.configure({ slideNumber: !isFirst });
  if (isFirst) {
    $('#footer-right').hide()
    $('#footer-left').hide()
  } else {
    $('#footer-right').show()
    $('#footer-left').show()
  }
});