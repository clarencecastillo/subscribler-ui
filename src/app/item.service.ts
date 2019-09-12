import { Injectable } from '@angular/core';
import { Item } from 'src/models/item';
import * as uuid from 'uuid/v4';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = [
    {
      id: '184d716b-5299-4e55-811d-f10532202a6f',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Pancake',
      description: `A flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.`,
      unit: 'pc',
      imageUrl: 'http://localhost:4200/assets/images/184d716b-5299-4e55-811d-f10532202a6f.jpg'
    },
    {
      id: '61ec68e1-f8cd-41c6-8c4c-d3accacc823d',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Maple Syrup',
      description: `Made from the xylem sap of sugar maple, red maple, or black maple trees, although it can also be made from other maple species.`,
      unit: 'pc',
      imageUrl: 'http://localhost:4200/assets/images/61ec68e1-f8cd-41c6-8c4c-d3accacc823d.jpg'
    },
    {
      id: 'c73c557b-94e2-44b1-9431-8deda0df0975',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Strawberry Jam',
      description: `Jam, jelly and preserves are all made from a combination of fruit and pectin, but jelly uses just the juice, jam uses crushed fruit and preserves use entire chunks of fruit. Use your strawberry jam in one of these tasty recipes.`,
      unit: 'pc',
      imageUrl: 'http://localhost:4200/assets/images/c73c557b-94e2-44b1-9431-8deda0df0975.jpg'
    },
    {
      id: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Coffee',
      description: `Brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.`,
      unit: 'cup',
      imageUrl: 'http://localhost:4200/assets/images/40db326c-aa8b-4297-9dc7-0d366320e6a7.jpg'
    },
    {
      id: '4eb138ec-ac9b-467b-b4cf-019319ce04e1',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Peanut Butter',
      description: `Food paste or spread made from ground dry-roasted peanuts. It often contains additional ingredients that modify the taste or texture, such as salt, sweeteners, or emulsifiers. Peanut butter is popular in many countries.`,
      unit: 'pc',
      imageUrl: 'http://localhost:4200/assets/images/4eb138ec-ac9b-467b-b4cf-019319ce04e1.jpg'
    },
    {
      id: '2327f694-e14d-4cad-b2d5-668e456fc8c9',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Toast',
      description: `Bread that has been browned by exposure to radiant heat. This browning is the result of a Maillard reaction, altering the flavor of the bread and making it firmer so that it is easier to spread toppings on it.`,
      unit: 'slice',
      imageUrl: 'http://localhost:4200/assets/images/2327f694-e14d-4cad-b2d5-668e456fc8c9.jpg'
    },
    {
      id: '0e886426-d289-4446-a6b7-96229188ae71',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Cheese Toast',
      description: `Melty mozzarella, white cheddar, gruyere and parmesan cheese are layered on toasty bread to create this cheesy breakfast goodness.`,
      unit: 'slice',
      imageUrl: 'http://localhost:4200/assets/images/0e886426-d289-4446-a6b7-96229188ae71.jpg'
    },
    {
      id: '6cc22d02-d09a-11e9-bb65-2a2ae2dbcce4',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Turkey Ham & Omelette Sandwich',
      description: `A delicious reason to get out of bed - turkey ham, egg omelette and cream cheese between two soft buns.`,
      unit: 'pc',
      imageUrl: 'http://localhost:4200/assets/images/6cc22d02-d09a-11e9-bb65-2a2ae2dbcce4.jpg'
    },
    {
      id: '6cc22fc8-d09a-11e9-bb65-2a2ae2dbcce4',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Egg Mayo Multigrain Croissant',
      description: 'Bite into a soft, flaky multigrain croissant that is overflowing with flavorful egg mayo and cheese.',
      unit: 'pc',
      imageUrl: 'http://localhost:4200/assets/images/6cc22fc8-d09a-11e9-bb65-2a2ae2dbcce4.jpg'
    },
    {
      id: '6cc23388-d09a-11e9-bb65-2a2ae2dbcce4',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Chicken Ham & Cheese Panwich',
      description: 'Two breakfast favorites unite in one scrumptious panwich. Black pepper chicken ham and egg sits between two fluffy buttery pancakes.',
      unit: 'pc',
      imageUrl: 'http://localhost:4200/assets/images/6cc23388-d09a-11e9-bb65-2a2ae2dbcce4.jpg'
    },
    {
      id: '6cc234c8-d09a-11e9-bb65-2a2ae2dbcce4',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Egg White, Roasted Pepper, Mushroom & Cheddar Wrap',
      description: 'A soft tortilla wrap filled with sautéed mushrooms, caramelized pepper and egg white.',
      unit: 'pc',
      imageUrl: 'http://localhost:4200/assets/images/6cc234c8-d09a-11e9-bb65-2a2ae2dbcce4.jpg'
    },
    {
      id: '6cc23694-d09a-11e9-bb65-2a2ae2dbcce4',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Turkey Ham, Egg White and Cheddar Sandwich',
      description: 'A fluffy egg white patty served simply with turkey ham and aged cheddar cheese in a lightly toasted wholegrain bun. A breakfast classic.',
      unit: 'pc',
      imageUrl: 'http://localhost:4200/assets/images/6cc23694-d09a-11e9-bb65-2a2ae2dbcce4.jpg'
    },
    {
      id: '7f927f9a-d09a-11e9-bb65-2a2ae2dbcce4',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
      name: 'Rosemary Chicken & Emmental Cheese Croissant',
      description: 'This buttery flaky croissant is filled with chicken mayo and aromatic rosemary with emmental cheese, coupled with celery bits for that extra crunch in every bite.',
      unit: 'pc',
      imageUrl: 'http://localhost:4200/assets/images/7f927f9a-d09a-11e9-bb65-2a2ae2dbcce4.jpg'
    }
  ];
  
  constructor(private http: HttpClient) { }

  public getItems(merchantId: string): Promise<Item[]> {
    return this.http.get<Item[]>(`${environment.serverHost}/merchants/${merchantId}/items`).toPromise();
  }

  public getItem(merchantId: string, itemId: string): Promise<Item> {
    return this.http.get<Item>(`${environment.serverHost}/merchants/${merchantId}/items/${itemId}`).toPromise();
  }

  public getItemsById(merchantId: string, itemIds: string[]): Promise<Item[]> {
    const promises = itemIds
      .map(itemId => `${environment.serverHost}/merchants/${merchantId}/items/${itemId}`)
      .map(url => this.http.get<Item>(url).toPromise());
    return Promise.all(promises);
  }

  public createItem(merchantId: string, item: NewItem): Promise<Item> {
    return this.http.post<Item>(`${environment.serverHost}/merchants/${merchantId}/items`, item).toPromise();
  }

  public async updateItem(merchantId: string, itemId: string, update: NewItem): Promise<Item> {
    return this.http.put<Item>(`${environment.serverHost}/merchants/${merchantId}/items/${itemId}`, update).toPromise();
  }

  public deleteItem(merchantId: string, itemId: string): Promise<Item> {
    return this.http.delete<Item>(`${environment.serverHost}/merchants/${merchantId}/items/${itemId}`).toPromise();
  }

}

export type NewItem = Pick<Item, 'name' | 'description' | 'unit' | 'imageUrl'>;
