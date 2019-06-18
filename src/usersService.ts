// import { HttpClient } from "./http-client";
import { inject, injectable } from "inversify";
import { TYPES } from "./types";

@injectable()
export class UsersService {
  // private http: HttpClient;

  constructor(@inject(TYPES.HttpClient) private http) {
    // this.http = new HttpClient();
  }

  getUsers(): Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
