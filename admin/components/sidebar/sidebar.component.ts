import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { Router, ActivationStart } from '@angular/router';
import { filter } from 'rxjs';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() menu: boolean = false;
  @Output() menuChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  menuTimeOut: any;

  constructor(
    public elementRef: ElementRef,
    private renderer2: Renderer2,
    private router: Router,
    public tokenService: TokenService
  ) {
    router.events.pipe(filter(event => event instanceof ActivationStart)).subscribe(() => {
      if (window.innerWidth <= 650)
        this.menuChange.emit(false)
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const items = (<HTMLElement>(
      this.elementRef.nativeElement
    )).getElementsByClassName('cbo');

    Array.from(items).forEach((item) => {
      this.renderer2.listen(item, 'click', () => {
        var ul: HTMLUListElement =
          item.parentElement!.getElementsByTagName('ul')[0];

        var lis = ul.getElementsByTagName('li');
        var spans = ul.getElementsByTagName('span');

        Array.from(lis).forEach(
          (item) => (item.style.transition = 'min-height .3s')
        );
        Array.from(spans).forEach(
          (item) => (item.style.transition = 'height .3s')
        );

        if (!item.classList.toggle('cbo-show'))
          Array.from(spans).forEach((item) =>
            item.classList.remove('cbo-show')
          );

        clearTimeout(this.menuTimeOut);
        this.menuTimeOut = setTimeout(() => {
          Array.from(lis).forEach((item) => (item.style.transition = '.0s'));
          Array.from(spans).forEach((item) => (item.style.transition = '.0s'));
        }, 300);
      });
    });
  }
}