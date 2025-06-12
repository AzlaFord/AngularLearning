import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'app-wish-list-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-list-form.html',
  styleUrls: ['./wish-list-form.css']
})
export class WishListForm {
  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = '';

  onSubmit() {
    const text = this.newWishText.trim();
    if (text) {
      this.addWish.emit(new WishItem(text));
      this.newWishText = '';
    }
  }
}
