import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit{
  uid: string = '';
  user?: User;
  username = '';

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    
  }
}
