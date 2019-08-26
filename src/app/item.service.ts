import { Injectable } from '@angular/core';
import { Item } from 'src/models/item';
import * as uuid from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = [
    {
      id: 'itema',
      name: 'Coffee',
      description: `Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.
      The genus Coffea is native to tropical Africa and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.`,
      unit: 'cup',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
    }
  ];

  constructor() { }

  public getItems(): Promise<Item[]> {
    return Promise.resolve(this.items);
  }

  public getItem(itemId: string): Promise<Item> {
    return Promise.resolve(this.items.find(item => item.id === itemId));
  }

  public getItemsById(itemIds: string[]): Promise<Item[]> {
    return Promise.resolve(this.items.filter(item => itemIds.includes(item.id)));
  }

  public createItem(item: ItemDetails): Promise<string> {
    const id = uuid();
    this.items.push({ id, ...item });
    return Promise.resolve(id);
  }

  public updateItem(itemId: string, update: ItemDetails): Promise<void> {
    const item = this.items.find(i => i.id === itemId);
    if (!item) {
      return Promise.reject();
    }

    Object.keys(update).forEach(key => {
      item[key] = update[key];
    });

    return Promise.resolve();
  }

  public deleteItem(itemId: string): Promise<void> {
    this.items.splice(this.items.findIndex(item => item.id === itemId), 1);
    return Promise.resolve();
  }

}

export type ItemDetails = Pick<Item, 'name' | 'description' | 'unit' | 'imageUrl'>;
