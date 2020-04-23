import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { InlineTemplateDemoComponent } from './inline-template-demo/inline-template-demo.component';
import { ExternalTemplateDemoComponent } from './external-template-demo/external-template-demo.component';
import { ChildDemoComponent } from './Parent-Child Communication/Parent-To-Child/child-demo/child-demo.component';
import { ParentDemoComponent } from './Parent-Child Communication/Parent-To-Child/parent-demo/parent-demo.component';
import { ChildComponentComponent } from './Parent-Child Communication/Child-To-Parent/child-component/child-component.component';
import { ParentComponentComponent } from './Parent-Child Communication/Child-To-Parent/parent-component/parent-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineTemplateDemoComponent,
    ExternalTemplateDemoComponent,
    ChildDemoComponent,
    ParentDemoComponent,
    ChildComponentComponent,
    ParentComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
