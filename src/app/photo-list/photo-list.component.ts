import { Component, OnInit } from "@angular/core";
import { IPhoto } from "./photo";
import { PhotoService } from "./photo.service";

@Component({
  selector: "app-photo-list",
  templateUrl: "./photo-list.component.html",
  styleUrls: ["./photo-list.component.css"]
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  photosToShow: IPhoto[] = [];
  counter: number = 0;
  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.counter += 1;
    console.log(this.counter);
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = this.photos;
      this.photosToShow = photos.slice(0, 10);
    });
  }
}
