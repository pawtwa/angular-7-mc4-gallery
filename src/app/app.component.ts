import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryService } from './gallery/service/gallery.service';
import { Observable } from 'rxjs';
import { GalleryItemModel } from './gallery/model/gallery-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  photos$: Observable<GalleryItemModel[]>;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.photos$ = this.galleryService.getPhotos();
  }

  ngOnDestroy() {
  }
}
