import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gototop',
  templateUrl: './gototop.component.html',
  styleUrls: ['./gototop.component.scss']
})
export class GototopComponent implements OnInit {
  faArrowUp = faArrowUp;
  windowScrolled: boolean;
    constructor(@Inject(DOCUMENT) private document: Document) {}
    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    ngOnInit() {}

}
