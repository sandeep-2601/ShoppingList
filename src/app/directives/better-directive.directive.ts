import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBetterDirective]'
})
export class AppBetterDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string;  
    constructor(private refElement: ElementRef, private renderer: Renderer2) { }
    
    ngOnInit(): void {
        // this.renderer.setStyle(this.refElement.nativeElement, 'background-color', 'yellow');
    }
    @HostListener('mouseover') mouseOver(event:Event) {
        this.renderer.setStyle(this.refElement.nativeElement, 'background-color', 'yellow');
    }
    @HostListener('mouseleave') mouseLeave(event:Event) {
        this.renderer.setStyle(this.refElement.nativeElement, 'background-color', 'transparent');
    }
    
}