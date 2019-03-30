import { Injectable, Inject } from '@angular/core';
import { Observable, of, range } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { GALLERY_SERVICE_GLOBAL_CONFIG, GalleryServiceGlobalConfig } from '../config/app.config';
import { GalleryItemModel } from '../model/gallery-item.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(
    @Inject(GALLERY_SERVICE_GLOBAL_CONFIG) private globalConfig: GalleryServiceGlobalConfig
  ) { }

  getConfig(prop?: String | undefined): any {
    return typeof prop === 'string'
      ? (typeof this.globalConfig[prop] !== 'undefined' ? this.globalConfig[prop] : undefined)
      : this.globalConfig;
  }

  getPhotos(max?: number): Observable<GalleryItemModel[]> {
    const path = <string>this.getConfig('path');
    const maxItems: number = max ? max : <number>this.getConfig('maxItems');
    return ajax(path).pipe(
      map(response => <GalleryItemModel[]>response.response),
      map(items => {
        if (items.length > maxItems) {
          let selectedItems: GalleryItemModel[] = [];
          range(0, maxItems).subscribe(val => {
            const index = Math.random() * (items.length - 0) + 0;
            selectedItems.push(items.splice(index, 1).shift());
          });
          return selectedItems;
        }
        return items;
      }),
      catchError(() => {
        return of([]);
      })
    );
  }
}
