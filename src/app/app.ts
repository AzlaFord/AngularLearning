import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';
import { WishListForm } from './wish-list-form/wish-list-form';
import { WishList } from './wish-list/wish-list';
import { WishFilter } from "./wish-filter/wish-filter";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, WishListForm, WishList, WishFilter],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  items: WishItem[] = [];

  listFilter: string = '0';


}

