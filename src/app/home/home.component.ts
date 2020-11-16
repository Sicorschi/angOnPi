import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/users.model';
import { MainStreamService } from '../services/main-stream.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imgUrl: new FormControl('', Validators.required)
  });
  loadingUsers = false;
  newUser = true;

  constructor(
    private mainService: MainStreamService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.mainService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  getAllUsers(): void {
    this.mainService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        this.loadingUsers = false;
      }
    )
  }

  createNewUser(): void {
    this.loadingUsers = true;
    const newUser = this.getNewUserData();
    this.mainService.addNewUser(newUser).subscribe(
      (newUser: User) => {
        console.log(newUser);
        this.snackBar.open('The new user is succesfully created', 'X', {
          duration: 2000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.getAllUsers();
      }
    );
  }

  deleteUser(user: User): void {
    console.log(user);
    const id = user.id;
    this.mainService.deleteUser(id).subscribe(
      (jsonMessage) => {
        this.snackBar.open(jsonMessage.message, 'X', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
      }
    );
  }

  editUser(user: User): void {
    console.log(user);
  }

  getNewUserData(): User {
    const data: User = {
      name: this.userForm.value.name,
      password: this.userForm.value.password,
      description: this.userForm.value.description,
      imgUrl: this.userForm.value.imgUrl
    };
    return data;
  }
}
