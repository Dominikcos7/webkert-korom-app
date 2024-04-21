import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GalleryService } from '../shared/services/gallery.service';
import { Image } from '../shared/model/Image'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  images: Image[] = [];
  // images: any[] = [];
  // urls = [
  //   '3c74fa6404556503ad6a6eceaa4df86f.jpg',
  //   '5ad9a6b9eb4341040c50a64b17e7e5ec.jpg',
  //   '15+ Cute Nails To Try This Spring.jpg',
  //   'Must Try Spring Nail Designs And Ideas.jpg',
  //   'bb448b4e50b2a8761b1cdbe9f73dd41a.jpg',
  //   'd35c88819d09d54b7b154fe4deb104bd.jpg'
  // ];
  currentImage?: any;
  imageIndex: number = 0;
  constructor(
    private galleryService: GalleryService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getImages();
  }

  async getImages(){
    await this.galleryService.getAllImages().then(qss => {
      qss.docs.forEach(dss => {
        const image: Image = {
          id: dss.data()['id'],
          description: dss.data()['description'],
          url: ''
        }
        this.images.push(image);
      });
    });
    this.images.forEach(image => {
      this.galleryService.getUrl(image.id).subscribe(url => image.url = url);
    });
    this.refreshImage();
  }

  previousImage(){
    this.imageIndex--;
    if(this.imageIndex < 0){
      this.imageIndex = this.images.length-1;
    }
    this.refreshImage();
  }

  nextImage(){
    this.imageIndex++;
    if(this.imageIndex >= this.images.length){
      this.imageIndex = 0;
    }
    this.refreshImage();
  }

  refreshImage(){
    this.currentImage = this.images[this.imageIndex];
  }
}
