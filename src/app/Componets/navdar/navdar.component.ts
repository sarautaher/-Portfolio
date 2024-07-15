import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navdar',
  templateUrl: './navdar.component.html',
  styleUrl: './navdar.component.css'
})
export class NavdarComponent {
constructor(private _Router:Router ){

}
ScrollTocommand(id:string):void{
  const element=document.getElementById(id);
  this._Router.navigate(['/']).then(()=>{

if(element){
  element.scrollIntoView({
    behavior:'smooth',block:'start'
  });
}
  })
}
bark(){
  document.body.classList.toggle('dark-mode');
  document.getElementById('sun')?.classList.toggle('d-none');
  document.getElementById('moon')?.classList.toggle('d-none');
}
}
