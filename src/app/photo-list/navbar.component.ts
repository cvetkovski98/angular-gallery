import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit{
  brand: string;
  photoViewed: string;

  ngOnInit(): void {
    this.brand = 'Gallery';
    this.photoViewed = '';
  }
}
