import { Component ,OnInit} from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { WishList } from '../wish-list/wish-list';

@Component({
  selector: 'app-wish-filter',
  imports: [],
  templateUrl: './wish-filter.html',
  styleUrl: './wish-filter.css'
})
export class WishFilter {
  this.filter.emit()
  get visibileItems(): WishItem[] {
  if (this.listFilter === '1') {
    return this.items.filter((i: WishItem) => i.isComplete);
  } else if (this.listFilter === '2') {
    return this.items.filter((i: WishItem) => !i.isComplete);
  }
  return this.items;
  }
}
