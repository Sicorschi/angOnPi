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
  user: User = {};
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
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
    console.log(this.user);
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

  sendEditUser(): void {
    this.loadingUsers = true;
    const editUser = this.getNewUserData();
    editUser.id = this.user.id;
    this.mainService.editUser(editUser).subscribe(
      () => {
        this.snackBar.open('The user is succesfully edit', 'X', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.getAllUsers();
        this.cleanUserForm();
      }
    )
  }

  cleanUserForm(): void {
    this.userForm.setValue({
      name: '',
      password: '',
      description: '',
      imgUrl: ''
    });
  }

  deleteUser(user: User): void {
    this.loadingUsers = true;
    console.log(user);
    const id = user.id;
    this.mainService.deleteUser(id).subscribe(
      () => {
        this.snackBar.open('The user is succesfully destroyed', 'X', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.getAllUsers();
      }
    );
  }

  editUser(user: User): void {
    this.user = user;
    this.newUser = false;
    console.log(user);
    this.userForm.patchValue({
      name: user.name,
      password: user.password,
      description: user.description,
      imgUrl: user.imgUrl
    });
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
