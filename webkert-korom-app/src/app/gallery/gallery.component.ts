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
