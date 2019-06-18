import { injectable } from "inversify";

@injectable() // define as an injectable class
export class HttpClient {
  get(url: string): Promise<any> {
    return fetch(url).then(data => data.json());
  }
}
