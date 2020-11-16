import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {
  story = {
    title: 'Mi primera vez',
    author: 'Carlo Patinski',
    imgUrl: 'https://blog.es.playstation.com/tachyon/sites/14/2020/05/unnamed-file-322.jpg?resize=1088,500&crop_strategy=smart',
    description: 'Mi primera vez con un elefante fue de lo mas inusual. Creia que la trompa..'
  };

  constructor() { }

  ngOnInit() {
  }

}
