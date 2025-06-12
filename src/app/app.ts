import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';
import { WishListForm } from './wish-list-form/wish-list-form';
import { WishList } from './wish-list/wish-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,WishListForm,WishList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  items: WishItem[] = [];

  listFilter: string = '0';

  get visibileItems(): WishItem[] {
    if (this.listFilter === '1') {
      return this.items.filter((i: WishItem) => i.isComplete);
    } else if (this.listFilter === '2') {
      return this.items.filter((i: WishItem) => !i.isComplete);
    }
    return this.items;
  }
}

