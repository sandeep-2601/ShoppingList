import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appCustomDirective]'
})
export class AppCustomDirective {

    @Input() set appCustomDirective (condition: boolean) {
        condition != true ? this.viewRef.createEmbeddedView(this.tempRef) : this.viewRef.clear();
    }
    constructor(private tempRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }
}