import { Component } from '@angular/core';

interface IImages{
  imgSrc:string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images: IImages[] = 
  [
    {
      imgSrc:'/assets/poert1.png',
    },
    {
      imgSrc:'/assets/port2.png'
    },
    {
      imgSrc:'/assets/port3.png'
    },
    {
      imgSrc:'/assets/poert1.png',
    },
    {
      imgSrc:'/assets/port2.png'
    },
    {
      imgSrc:'/assets/port3.png'
    }

  ] 

  selectedImage:string | null = null ;

  showImage(image:string):void{
    this.selectedImage = image
  }
  closeImage(): void {
    this.selectedImage = null;
  }
}
