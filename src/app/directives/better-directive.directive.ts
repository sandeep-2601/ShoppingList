import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBetterDirective]'
})
export class AppBetterDirective implements OnInit {
    @Input() defaultColor: string;
    @Input() highlightColor: string;
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent ';  
    constructor(private refElement: ElementRef, private renderer: Renderer2) { }
    
    ngOnInit(): void {
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.refElement.nativeElement, 'background-color', 'yellow');
    }
    @HostListener('mouseover') mouseOver(event:Event) {
        // this.renderer.setStyle(this.refElement.nativeElement, 'background-color', 'yellow');
        this.backgroundColor = this.highlightColor
    }
    @HostListener('mouseleave') mouseLeave(event:Event) {
        this.renderer.setStyle(this.refElement.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
    
}