import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = {
    name: '',
    email: '',
    active: false
  };
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveUser() {
    const data = {
      name: this.user.name,
      email: this.user.email
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser() {
    this.submitted = false;
    this.user = {
      name: '',
      email: '',
      active: false
    };
  }

}
