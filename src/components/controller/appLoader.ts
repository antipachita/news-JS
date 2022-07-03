import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '017ed0b4d1774ecfa6c5a1e72fee8a8c',
    });
  }
}

export default AppLoader;
