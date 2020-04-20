package com.rayhealth;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate; // react-navigation-5
import com.facebook.react.ReactRootView; // react-navigation-5
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // react-navigation-5

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RayHealth";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
