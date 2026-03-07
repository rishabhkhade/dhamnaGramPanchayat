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
    {title: 'Image 6', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage_6.jpeg'},
    {title: 'Image 7', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage_7.jpeg'},
    {title: 'Image 8', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage_8.jpeg'},
    {title: 'Image 9', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage_9.jpeg'},
    {title: 'Image 10', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage_10.jpeg'},
    {title: 'Image 11', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage_11.jpeg'},
    {title: 'Image 12', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage_12.jpeg'},
    {title: 'Image 13', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage_13.jpeg'},
    {title: 'Image 14', subtitle: 'Special for today', image: 'assets/images/gallary_images/GallaryImage_14.jpeg'},
   { title: 'Image 15', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img1.jpeg'},
   { title: 'Image 16', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img2.jpeg'},
   { title: 'Image 17', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img3.jpeg'},
   { title: 'Image 18', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img4.jpeg'},
   { title: 'Image 19', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img5.jpeg'},
   { title: 'Image 20', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img6.jpeg'},
   { title: 'Image 21', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img7.jpeg'},
   { title: 'Image 22', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img8.jpeg'},
   { title: 'Image 23', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img9.jpeg'},
   { title: 'Image 24', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img10.jpeg'},
   { title: 'Image 25', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img11.jpeg'},
   { title: 'Image 26', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img12.jpeg'},
   { title: 'Image 27', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img13.jpeg'},
   { title: 'Image 28', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img14.jpeg'},
   { title: 'Image 29', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img15.jpeg'},
   { title: 'Image 30', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img16.jpeg'},
   { title: 'Image 31', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img17.jpeg'},
   { title: 'Image 32', subtitle: 'Special for today', image: 'assets/images/gallary_images/new_gallery/img18.jpeg'},

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
