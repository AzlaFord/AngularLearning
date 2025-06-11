import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  host: {
    'ngSkipHydration': ''
  }
})

export class App {
  items: WishItem[] = [
    new WishItem("to learn Angular"),
    new WishItem("face ceva", true),
    new WishItem("find grass that cuts itself", false)
  ];

}
