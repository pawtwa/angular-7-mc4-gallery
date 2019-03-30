import { InjectionToken } from '@angular/core';

export const GALLERY_SERVICE_GLOBAL_CONFIG = new InjectionToken<GalleryServiceGlobalConfig>('gallery-service-global-config');
 
export interface GalleryServiceGlobalConfig {
  path: number;
  maxItems: number;
  multiple: boolean;
}