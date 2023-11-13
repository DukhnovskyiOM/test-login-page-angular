import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UsersData, UserData } from 'src/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  readonly ROOT_URL = 'https://randomuser.me/api/'

  users: UserData[] = [];

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
      this.http.get<UsersData>(this.ROOT_URL).subscribe((data:UsersData) => {

        if(Object.keys(data).includes('results')){
          console.log(data);
          this.users = data.results
          console.log(this.users);
          
        }
    })
  }
  logout() {
    this.authService.logout();
  }
}
