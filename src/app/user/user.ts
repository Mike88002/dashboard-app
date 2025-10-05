import {Component, Input, input, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
/*  selectedUser = signal(DUMMY_USERS[randomIndex]) ;
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar )
  //a signal is a container of values, angular is notified when I change values contained into the signal, I can also change them with set method
  //Computed requires a function inside its function

  // getter method, used like a property in html even if it is a method
  /!*get imagePath() {
    return 'assets/users/' + this.selectedUser().avatar;
  }*!/


  //state: data that impact on user's state
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }*/

  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
 /* avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  })*/
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {

  }
}
