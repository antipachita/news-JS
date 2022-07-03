import { articlecontentResponse, sourcearrayResponse } from '../interfaces/interfaces';
type callbackPrototype<T> = (data: T) => void;
class Loader {
  baseLink: string;

  options: { apiKey: string };

  constructor(baseLink: string, options: { apiKey: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: { sources?: string } },
    callback: callbackPrototype<sourcearrayResponse | articlecontentResponse> = () => {
      console.error('No callback for GET response');
    },
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response | void {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  makeUrl(options: { sources?: string }, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key): void => {
      url += `${key}=${urlOptions[key as keyof { sources: string; apiKey: string }]}&`;
    });

    return url.slice(0, -1);
  }

  load(
    method: string,
    endpoint: string,
    callback: callbackPrototype<sourcearrayResponse | articlecontentResponse>,
    options: { sources?: string },
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => (<Response>res).json())
      .then((data: articlecontentResponse | sourcearrayResponse) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
