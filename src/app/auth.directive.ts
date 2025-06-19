import { Directive, effect, input, signal, TemplateRef, ViewContainerRef } from '@angular/core';

export type role = "admin" | "user"
@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {
  appAuth = input<role>("admin",{alias:"appAuth"})
  constructor(private templateRef:TemplateRef<any>,
    private viewContainerRef:ViewContainerRef
  ) { 
    effect(()=>{
      if (this.appAuth() === "admin"){
        this.viewContainerRef.createEmbeddedView(this.templateRef)
      } else  this.viewContainerRef.clear()
    })
  }
}
