package health.ray;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate; // react-navigation-5
import com.facebook.react.ReactRootView; // react-navigation-5
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // react-navigation-5
import android.os.Bundle; // react-native-splash-screen >= 0.3.1
import com.facebook.react.ReactActivity; // react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // react-native-splash-screen >= 0.3.1

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
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);  // here
    super.onCreate(savedInstanceState);
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
