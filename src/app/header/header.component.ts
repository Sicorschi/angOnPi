import { Component, OnInit } from '@angular/core';
import { MainStreamService } from '../services/main-stream.service';
import { Router } from '@angular/router';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header = {
    home: true,
    pass: false,
    story: false
  };

  constructor(
    private router: Router,
    private mainService: MainStreamService
  ) { }

  ngOnInit() {
    this.mainService.getAllUsers().subscribe(
      users => {
        console.log(users);
      }
    );
  }

  setHomeBackground() {
    this.header = {
      home: true,
      pass: false,
      story: false
    }
  }

  setPassBackground() {
    this.header = {
      home: false,
      pass: true,
      story: false
    }
  }

  setStoryBackground() {
    this.header = {
      home: false,
      pass: false,
      story: true
    };
  }

}
