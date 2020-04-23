import { Component, OnInit } from '@angular/core';
import { product } from '../../product_class';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.css']
})
export class ParentDemoComponent implements OnInit {
  value:string="Mobile";
  allProduct:product[]=[
    new product(1,"../../assets/img1.jpg","Oppo",50000,100),
    new product(2,"../../assets/img2.jpg","Samsung",40000,50),
    new product(3,"../../assets/img3.jpg","One Plus",60000,150),
    new product(4,"../../assets/img4.jpg","Sony",70000,200),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
