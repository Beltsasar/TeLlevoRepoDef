import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-p',
  templateUrl: './index-p.page.html',
  styleUrls: ['./index-p.page.scss'],
})
export class IndexPPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedSegment: string = 'home';
}
