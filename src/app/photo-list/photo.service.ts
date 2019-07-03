import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { IPhoto } from "./photo";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  photoUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient,
              private router: Router) {}

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.photoUrl)
      .pipe( tap(photos => console.log(JSON.stringify(photos))),
      catchError(this.handleError));
  }

  getPhoto(Id: number): Observable<IPhoto> {
    return this.getPhotos().pipe(
      map( (photos: IPhoto[]) => photos.find(it => it.id === Id) )
    );
  }

  editPhoto(photo: IPhoto){
    var url = "http://jsonplaceholder.typicode.com/posts/" + photo.id;
    this.http.put(url, JSON.stringify(photo)).subscribe(
      (val) => {
          console.log("PATCH call successful value returned in body",
                      val);
      },
      response => {
          console.log("PATCH call in error", response);
      },
      () => {
          console.log("The PATCH observable is now completed.");
      });;
    console.log("updated");
  }

  deletePhoto(photo: IPhoto){
    var url = "http://jsonplaceholder.typicode.com/posts/" + photo.id;
    this.http.delete(url).subscribe(
      (val) => {
          console.log("DELETE call successful value returned in body",
                      val);
                      this.router.navigate(['/gallery']);

      },
      response => {
          console.log("DELETE call in error", response);
      },
      () => {
          console.log("The DELETE observable is now completed.");
      });;
    console.log("deleted");
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
