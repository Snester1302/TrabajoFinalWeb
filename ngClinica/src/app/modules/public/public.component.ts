import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  scroll: boolean = false;

  @ViewChild('navbar') navbar!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    if ((<any>event.target).scrollTop > 30)
      this.navbar.nativeElement.classList.add('scroll');
    else
      this.navbar.nativeElement.classList.remove('scroll');
  }

  redirect() {
    this.router.navigate(['auth']);
    console.log('asd');

  }
}
