import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Store data
  setItem(key: string, value: any): void {
    console.log('storing data');
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  // Retrieve data
  getItem(key: string): any {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting data from localStorage', error);
      return null;
    }
  }

  // Remove data
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data from localStorage', error);
    }
  }

  // Clear all data
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage', error);
    }
  }

  getAllItems(): any {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key: any = localStorage.key(i);
      const item: any = localStorage.getItem(key);
      items.push(parseInt(item));
    }
    return items;
  }
}
