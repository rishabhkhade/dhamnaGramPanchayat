import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public galleryImages = [
    {title: 'Image 1', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage-1.jpg'},
    {title: 'Image 2', subtitle: 'New Arrivals On Sale', image: 'assets/images/gallary_images/GallaryImage-2.jpg'},
    {title: 'Image 3', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage-3.jpg'},
    {title: 'Image 4', subtitle: 'New Arrivals On Sale', image: 'assets/images/gallary_images/GallaryImage-4.jpg'},
    {title: 'Image 5', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage-5.jpg'},

    // {title: 'Image 6', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage-1.jpg'},
    // {title: 'Image 7', subtitle: 'New Arrivals On Sale', image: 'assets/images/gallary_images/GallaryImage-2.jpg'},
    // {title: 'Image 8', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage-3.jpg'},
    // {title: 'Image 9', subtitle: 'New Arrivals On Sale', image: 'assets/images/gallary_images/GallaryImage-4.jpg'},
    // {title: 'Image 10', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage-5.jpg'},
];


  slideIndex = 0;
  slideOffset = 0;

  constructor() { }

  ngOnInit(): void {
    this.showSlide(this.slideIndex);
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }


  showSlide(index: number) {
    if (index < 0) {
      this.slideIndex = this.galleryImages.length - 1;
    } else if (index >= this.galleryImages.length) {
      this.slideIndex = 0;
    } else {
      this.slideIndex = index;
    }
    this.slideOffset = -this.slideIndex * 100;
  }
  prevSlide() {

    console.log("gdf");
    this.showSlide(this.slideIndex - 1);
  }

  nextSlide() {
    console.log("dfgdf");
    this.showSlide(this.slideIndex + 1);
  }

}
