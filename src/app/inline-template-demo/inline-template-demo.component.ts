import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template-demo',
  template:`<input type="text" value="Hello World">`,
  styleUrls: ['./inline-template-demo.component.css']
})
export class InlineTemplateDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
