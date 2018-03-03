(function() {
  var parent = function(target, tag) {
    while ((target = target.parentElement) && target.nodeName != tag.toUpperCase());
    return target;
  }

  document.querySelector('#root').addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var target = event.target.nodeName == 'A' ? event.target : parent(event.target, 'a');

    mixpanel.track(target.dataset.trigger);
    window.location = target.getAttribute('href');
  });

  setTimeout(function() {
    document.querySelector('#logo').classList.add('loaded');
    mixpanel.track('loadComplete');
  }, 250);
}());
