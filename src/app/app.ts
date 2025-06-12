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

  newWishText =''

  addWish(){

    const textCurat = this.newWishText.trim();

    if(textCurat === ''){
      return
    }else{
      this.items.push(new WishItem(textCurat))
      this.newWishText =''
    }
  }

  listFilter : String = '0'

  get visibileItems() : WishItem[]{

    let value = this.listFilter
    
    if(value ==='0'){
      return this.items
    }else if (value === '1'){
      return this.items.filter(item => item.isComplete)
    }else{
      return this.items.filter(item => !item.isComplete)
    }
  }

    

  toggleItem(item:WishItem){
    item.isComplete = !item.isComplete
    console.log(item)
  }
}
