define(function () {
  return {

    // publish/subscribe message names
    'PATH_CHANGED': 'path-changed'
    ,'ACTOR_ORIGIN_CHANGED': 'actor-origin-changed'
    ,'UPDATE_CSS_OUTPUT': 'update-css-output'
    ,'ANIMATION_LENGTH_CHANGED': 'animation-length-changed'
    ,'ALERT_ERROR': 'error-alert'
    ,'KEYFRAME_ORDER_CHANGED': 'keyframe-order-changed'
    ,'ROTATION_MODE_START': 'rotation-mode-start'
    ,'ROTATION_MODE_STOP': 'rotation-mode-stop'
    ,'ANIMATION_SAVED': 'animation-saved'

    ,'INITIAL_ANIMATION_DURATION': 2000
    ,'RENDER_GRANULARITY': 100
    ,'TOGGLE_FADE_SPEED': 200
    ,'INITIAL_KEYFRAMES': 2
    ,'ALERT_TIMEOUT': 6000
    ,'NEW_KEYFRAME_X_OFFSET': 200
    ,'NEW_KEYFRAME_MILLISECOND_OFFSET': 1000
    ,'DEFAULT_CSS_OUTPUT_FPS': 30
    ,'MAXIMUM_CSS_OUTPUT_FPS': 60
    ,'MINIMUM_CSS_OUTPUT_FPS': 1
  };
});
