import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, AfterViewInit {
  about:any;
  Adout: any;
  About_textt:any;
 

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.about= document.querySelector('.about');
    this.Adout = document.querySelector('#About');
  
   this.About_textt=document.querySelector('.About_textt')  

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    let skillsPosition = this.Adout.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (skillsPosition-10 < windowHeight) {
      this.about.classList.add('show');
      this.About_textt.classList.add('show');
 
    } else {
      this.about.classList.remove('show');
      this.About_textt.classList.remove('show');
    
    }
  }
}
