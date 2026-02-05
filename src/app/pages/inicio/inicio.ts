import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

import { Breadcrumb } from '../../component/shared/breadcrumb/breadcrumb';

@Component({
  selector: 'app-inicio',
  imports: [Breadcrumb],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
    });

    const hiddenElements = this.el.nativeElement.querySelectorAll('.scroll-animate');
    hiddenElements.forEach((el: any) => observer.observe(el));
  }
}
