import Loader from './loader';
import adress from '../const/url';

class AppLoader extends Loader {
  constructor() {
    super(adress.url, {
      apiKey: adress.apiKey,
    });
  }
}

export default AppLoader;
