import { Component } from '@angular/core';
import { MenuItem } from './interface/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'menu';
  title : string = 'Welcome to Chirpus Pizza!';

  pizzas: MenuItem[] = [
    {item: "Chicken Fingers", category: "dinner", price: 11.99},
    {item: "Pizza", category: "dinner", price: 11.99},
    {item: "Wings", category: "sides", price: 8.99},
    {item: "BreadSticks", category: "sides", price: 4.99},
    {item: "Ceasar Salad", category: "salads", price: 5.99},
    {item: "Cinnamon Roll", category: "dessert", price: 8.99},
    {item: "Sprite", category: "beverages", price: 2.59},
    {item: "Coke", category: "beverages", price: 2.99}

  ]

  singleItem: MenuItem = {item: "Coke", category: "beverages", price: 2.99}

  trackMenu(index: number, menu: MenuItem) {
    console.log("Track by Chirpus pizza " + menu.item);
    return menu.item;
  }


}
