import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DogsService {
  url: string = "https://dog.ceo/api/breeds/image/all";

  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  gelAllBreeds(): Observable<Object> {
    return this.http.get<Object>("https://dog.ceo/api/breeds/list/all");
  }
}
