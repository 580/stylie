define(['src/app'], function (app) {

  var checkboxToVendorMap = {
    'moz': 'mozilla'
    ,'ms': 'microsoft'
    ,'o': 'opera'
    ,'webkit': 'webkit'
    ,'w3': 'w3'
  };

  function getPrefixList (app) {
    var prefixList = [];
    _.each(app.config.activeClasses, function (isActive, vendorName) {
      if (isActive) {
        prefixList.push(checkboxToVendorMap[vendorName]);
      }
    });

    return prefixList;
  }

  return Backbone.View.extend({

    'events': { }

    ,'initialize': function (opts) {
      _.extend(this, opts);
      this.$trigger.on('click', _.bind(this.onTriggerClick, this));
      this.$actorEl = $('#rekapi-canvas .rekapi-actor');
    }

    ,'onTriggerClick': function (evt) {
      this.renderCSS();
    }

    ,'renderCSS': function () {
      var cssClassName = app.view.cssNameField.$el.val();

      var cssOutput = app.kapi.toCSS({
        'vendors': getPrefixList(app)
        ,'name': cssClassName
        ,'iterations': app.$el.animationIteration.val()
        ,'isCentered': app.config.isCenteredToPath
        ,'fps': app.view.fpsSlider.getFPS()
      });

      this.$el.val(cssOutput);

      // Kapi#toCSS automatically adds the custom class name to the DOM
      // element, but that's not desirable here.
      this.$actorEl.removeClass(cssClassName);
    }

  });
});
