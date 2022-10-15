import {Renderer2, Inject, Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ck-demo';

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document:any
  ) {}

  ngOnInit() {
    this.addScriptInComponent('assets/js/ckeditor-demo.js');
 }

 addScriptInComponent(url: string){
  const s = this.renderer2.createElement('script');
  s.type = 'text/javascript';
  s.src = url;
  s.text = ``;
  this.renderer2.appendChild(this._document.body, s);
 }
}
