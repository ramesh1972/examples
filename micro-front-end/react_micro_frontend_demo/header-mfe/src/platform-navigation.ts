import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Use Angular's Ivy tree-shaking for AOT compatibility
})
export class PlatformNavigation {
  constructor() {
    console.log('PlatformNavigation service initialized');
  }
}
