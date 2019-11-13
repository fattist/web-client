(function() {
  var parent = function(target, tag) {
    while ((target = target.parentElement) && target.nodeName != tag.toUpperCase());
    return target;
  }

  window.fattist = {
    back: function(event) {
      var hamburger = document.querySelector('#hamburger');
      var nav = parent(hamburger, 'button');

      hamburger.innerHTML = 'arrow_forward';
      nav.dataset.target = 'back';
    },
    menu: function(event) {
      var body = document.querySelector('body');
      var nav = document.querySelector('#nav');
      var back = nav.dataset.target === 'back';
      var action = [].indexOf.call(body.classList, 'back') > -1 ? 'reset' :
        back ? 'back' :
        [].indexOf.call(body.classList, 'menu') > -1 ? 'reset' :'menu';
      var icon = action === 'reset' ? 'menu' : 'home';

      document.querySelector('#hamburger').innerHTML = icon;
      body.className = action;

      if (back) {
        setTimeout(function() {
          delete nav.dataset.target;
        }, 500);
      }
    },
    screen: function(target) {
      var body = document.querySelector('body');
      var root = document.querySelector('#root');
      var section = root.getElementsByTagName('aside');
      var screen = root.querySelector('#' + target);

      for (var index = 0; index < section.length; index++) {
        var element = section[index];

        if ([].indexOf.call(element.classList, 'active') > -1) {
          element.className = element.className.replace(/\bactive\b/, '');
        }
      }
      fattist.back();
      screen.className = 'active';
      body.className = 'screen';
    },
    track: function(event) {
      event.preventDefault();
      event.stopPropagation();

      try {
        var node = event.target.nodeName.toLowerCase();
        var match = ['a', 'button'].indexOf(node) > -1;
        var target = match ? event.target : parent(event.target, 'a');

        mixpanel.track(target.dataset.trigger);

        if (node === 'a') {
          window.location = target.getAttribute('href');
        } else {
          fattist.screen(target.dataset.trigger);
        }
      } catch(error) {
        console.warn(error);
      }
    }
  };

  setTimeout(function() {
    document.querySelector('#logo').classList.add('loaded');
    mixpanel.track('loadComplete');

    window.onbeforeunload = function() {
      window.scrollTo(0,0);
    }
  }, 250);
}());
