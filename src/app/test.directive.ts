import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appTest]',
  host:{
    '(click)': "readSyntax($event)"
  }
})
export class TestDirective {
  changeText = input('',{alias:'appTest'}) // alias must match the selector
  readSyntax (event: MouseEvent):void{
    (event.target as HTMLElement).textContent = this.changeText()
    
  }
}
