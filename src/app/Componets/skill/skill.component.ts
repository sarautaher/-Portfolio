import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit, AfterViewInit {
  skill: any;
  framework: any;
  cont: any;
  Skills: any;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.skill = document.querySelector('.skill');
    this.framework = document.querySelector('.framework');  // Corrected 'frowork' to 'framework'
    this.cont = document.querySelector('.cont');
    this.Skills = document.querySelector('#Skills');

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    let skillsPosition = this.Skills.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (skillsPosition < windowHeight) {
      this.skill.classList.add('show');
      this.framework.classList.add('show');
      this.cont.classList.add('show');
    } else {
      this.skill.classList.remove('show');
      this.framework.classList.remove('show');
      this.cont.classList.remove('show');
    }
  }
}
