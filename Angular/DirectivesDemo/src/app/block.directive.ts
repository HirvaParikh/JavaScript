import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRoundBlock]'
})
export class BlockDirective implements OnInit {
  
  @Input() appRoundBlock: string;

  constructor(public elmref: ElementRef, public renderer: Renderer2) { }

  ngOnInit(): void {
    
    let roundVal = `${this.appRoundBlock}`;
    this.renderer.setStyle(this.elmref.nativeElement, 'border-radius', roundVal);

  }

}
