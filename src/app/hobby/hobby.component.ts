import { Component } from '@angular/core';
import { Hobby } from '../hobby';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent {
  hobby: Hobby = new Hobby('tree shaping', 'It\'s a very cool hobby in which you train living trees and other woody plants into artistic shapes or useful structures. Think about growing your own chair! It might take a while though.', '../assets/images/tree-shaping.jpg', '../assets/images/pete-in-garden-chair.jpg');
}
