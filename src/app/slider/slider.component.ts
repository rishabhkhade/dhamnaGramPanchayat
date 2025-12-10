import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface, SwiperPaginationInterface} from 'ngx-swiper-wrapper';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

    images = [
        {url: 'assets/images/slider_images/sliderImage-1.jpeg', alt: 'Slide 1'},
        {url: 'assets/images/slider_images/sliderImage-2.jpeg', alt: 'Slide 2'},
        {url: 'assets/images/slider_images/sliderImage-3.jpeg', alt: 'Slide 3'},
        {url: 'assets/images/slider_images/sliderImage-4.jpeg', alt: 'Slide 4'}
    ];

    slideIndex = 0;
    slideOffset = 0;

    constructor() {}

    ngOnInit(): void {
        this.showSlide(this.slideIndex);
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }


    showSlide(index: number) {
        if (index < 0) {
            this.slideIndex = this.images.length - 1;
        } else if (index >= this.images.length) {
            this.slideIndex = 0;
        } else {
            this.slideIndex = index;
        }
        this.slideOffset = -this.slideIndex * 100;
    }
    prevSlide() {
        this.showSlide(this.slideIndex - 1);
    }

    nextSlide() {
        this.showSlide(this.slideIndex + 1);
    }
}