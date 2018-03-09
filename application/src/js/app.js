(function() {
  var parent = function(target, tag) {
    while ((target = target.parentElement) && target.nodeName != tag.toUpperCase());
    return target;
  }

  window.fattist = {
    menu: function(event) {
      var body = document.querySelector('body');
      var action = [].indexOf.call(body.classList, 'active') > -1 ? 'reset' : 'active';
      var icon = action === 'reset' ? 'menu' : 'arrow_back';

      document.querySelector('#hamburger').innerHTML = icon;
      body.className = action;
    },
    track: function(event) {
      event.preventDefault();
      event.stopPropagation();

      try {
        var target = event.target.nodeName == 'A' ? event.target : parent(event.target, 'a');

        mixpanel.track(target.dataset.trigger);
      } catch(error) {
        console.warn(error);
      }

      window.location = target.getAttribute('href');
    }
  };

  setTimeout(function() {
    document.querySelector('#logo').classList.add('loaded');
    mixpanel.track('loadComplete');
  }, 250);
}());
