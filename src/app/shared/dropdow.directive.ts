import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective
{
    constructor(private refElement:ElementRef,private renderer:Renderer2) {}

    @HostListener('click') clicked() {
        this.renderer.addClass(this.refElement.nativeElement,'open')
    }
}