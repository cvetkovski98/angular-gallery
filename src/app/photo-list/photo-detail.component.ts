import { Component, OnInit, Input } from "@angular/core";
import { IPhoto } from "./photo";
import { PhotoService } from "./photo.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-photo-detail",
  templateUrl: "./photo-detail.component.html"
})
export class PhotoDetailComponent implements OnInit {
  displayPhoto: IPhoto;
  newName = "";
  changeId: number;
  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get("id");
    if (param) {
      const id = +param;
      this.getPhoto(id);
      this.changeId = +param;
    }
  }

  getPhoto(param: number): void {
    this.photoService
      .getPhoto(param)
      .subscribe(photo => (this.displayPhoto = photo));
    // this.newName = this.displayPhoto.title;
  }

  onBack() {
    this.displayPhoto.title = this.newName;
    this.photoService.editPhoto(this.displayPhoto);
    return this.router.navigate(["/gallery"]);
  }
}
