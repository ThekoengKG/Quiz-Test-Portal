import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {
  @Input() correctAnswer: boolean = false;

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) { }

  @HostListener ('click') onAnswered() {
    
    if(this.correctAnswer){
      this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'green');
     
    } else {
      this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'skyblue');
    }
      
    
    

  }


}
