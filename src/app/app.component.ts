import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app5';
  ngOnInit(): void {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: false
    });
    window.addEventListener('scroll', AOS.refresh );
   
    
  }
}
