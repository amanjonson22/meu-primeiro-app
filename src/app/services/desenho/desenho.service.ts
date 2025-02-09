import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesenhoService {

  constructor() { }

  getAll():String[]{
    return [
      '/app/assets/desenhosCarrossel/desenho-1.png',
      '/app/assets/desenhosCarrossel/desenho-2.png',
      '/app/assets/desenhosCarrossel/desenho-3.png'
    ]
  }
}
