import { Injectable } from '@angular/core';
import { Item } from 'src/models/item';
import * as uuid from 'uuid/v4';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = [
    {
      id: '184d716b-5299-4e55-811d-f10532202a6f',
      name: 'Pancake',
      description: `A flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.`,
      unit: 'pc',
      imageUrl: 'https://lh3.google.com/u/0/d/14PDEwJ1hvQTW3t1YpT9COjPRy_EBaVqu=w3360-h1732-iv1'
    },
    {
      id: '61ec68e1-f8cd-41c6-8c4c-d3accacc823d',
      name: 'Maple Syrup',
      description: `Made from the xylem sap of sugar maple, red maple, or black maple trees, although it can also be made from other maple species.`,
      unit: 'pc',
      imageUrl: 'https://lh3.google.com/u/0/d/1IW3JPNhmxnLhmi3YdicVutI9J1NkLfJE=w1680-h1732-iv1'
    },
    {
      id: 'c73c557b-94e2-44b1-9431-8deda0df0975',
      name: 'Strawberry Jam',
      description: `Jam, jelly and preserves are all made from a combination of fruit and pectin, but jelly uses just the juice, jam uses crushed fruit and preserves use entire chunks of fruit. Use your strawberry jam in one of these tasty recipes.`,
      unit: 'pc',
      imageUrl: 'https://lh3.google.com/u/0/d/1paMoS42MwLm1Qu_DOxMQryQaHs4R_KJE=w1842-h1732-iv1'
    },
    {
      id: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
      name: 'Coffee',
      description: `Brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.`,
      unit: 'cup',
      imageUrl: 'https://lh3.google.com/u/0/d/1I37yG--lEFmxJSN_fxRvFl_IXYQkqAfE=w1680-h1732-iv1'
    },
    {
      id: '4eb138ec-ac9b-467b-b4cf-019319ce04e1',
      name: 'Peanut Butter',
      description: `Food paste or spread made from ground dry-roasted peanuts. It often contains additional ingredients that modify the taste or texture, such as salt, sweeteners, or emulsifiers. Peanut butter is popular in many countries.`,
      unit: 'pc',
      imageUrl: 'https://lh3.google.com/u/0/d/1xgaCuAS78fqwTrtFxk4MpSWHqzrV4y9M=w1842-h1732-iv1'
    },
    {
      id: '2327f694-e14d-4cad-b2d5-668e456fc8c9',
      name: 'Toast',
      description: `Bread that has been browned by exposure to radiant heat. This browning is the result of a Maillard reaction, altering the flavor of the bread and making it firmer so that it is easier to spread toppings on it.`,
      unit: 'slice',
      imageUrl: 'https://lh3.google.com/u/0/d/1NkfR3SIp4sPe9dwr0yDYxJFZK1wcBQlb=w1842-h1732-iv1'
    },
    {
      id: '0e886426-d289-4446-a6b7-96229188ae71',
      name: 'Cheese Toast',
      description: `Melty mozzarella, white cheddar, gruyere and parmesan cheese are layered on toasty bread to create this cheesy breakfast goodness.`,
      unit: 'slice',
      imageUrl: 'https://lh3.google.com/u/0/d/1D5pmiPqKnO_u1vSmnVy_sQK_uwbussHW=w1842-h1700-iv1'
    },
    {
      id: '6cc22d02-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Turkey Ham & Omelette Sandwich',
      description: `A delicious reason to get out of bed - turkey ham, egg omelette and cream cheese between two soft buns.`,
      unit: 'pc',
      imageUrl: 'https://lh3.google.com/u/0/d/1NttDGIdl80A-bjjp87UP1BCcA_gDnEL_=w1842-h1700-iv1'
    },
    {
      id: '6cc22fc8-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Egg Mayo Multigrain Croissant',
      description: 'Bite into a soft, flaky multigrain croissant that is overflowing with flavorful egg mayo and cheese.',
      unit: 'pc',
      imageUrl: 'https://lh3.google.com/u/0/d/1RWM8o5G_q9akkMy3JhDs6SqyCScF92-d=w1204-h1798-iv1'
    },
    {
      id: '6cc23388-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Chicken Ham & Cheese Panwich',
      description: 'Two breakfast favorites unite in one scrumptious panwich. Black pepper chicken ham and egg sits between two fluffy buttery pancakes.',
      unit: 'pc',
      imageUrl: 'https://lh3.google.com/u/0/d/1NZKcGWsTAcvvwniUj5cCcrXauAexpDHj=w1204-h1798-iv1'
    },
    {
      id: '6cc234c8-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Egg White, Roasted Pepper, Mushroom & Cheddar Wrap',
      description: 'A soft tortilla wrap filled with sautéed mushrooms, caramelized pepper and egg white.',
      unit: 'pc',
      imageUrl: 'https://lh3.google.com/u/0/d/1NjdyvXIx2QCpOj3KKw3-_sn0kKPuh_yP=w1204-h1798-iv1'
    },
    {
      id: '6cc23694-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Turkey Ham, Egg White and Cheddar Sandwich',
      description: 'A fluffy egg white patty served simply with turkey ham and aged cheddar cheese in a lightly toasted wholegrain bun. A breakfast classic.',
      unit: 'pc',
      imageUrl: 'https://lh3.google.com/u/0/d/1Bjw76ozHeOcfqDm34S8BmEhMYU9BI8Wf=w1204-h1798-iv1'
    },
    {
      id: '7f927f9a-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Rosemary Chicken & Emmental Cheese Croissant',
      description: 'This buttery flaky croissant is filled with chicken mayo and aromatic rosemary with emmental cheese, coupled with celery bits for that extra crunch in every bite.',
      unit: 'pc',
      imageUrl: 'https://lh3.google.com/u/0/d/1FOuY_fmlAGmXYw3mIFeZyjvk_yGX6XpB=w1204-h1798-iv1'
    }
  ];

  constructor(private http: HttpClient) { }

  public getItems(): Promise<Item[]> {
    // return this.http.get<Item[]>(`${environment.serverHost}/items`).toPromise();
    return Promise.resolve(this.items);
  }

  public getItem(itemId: string): Promise<Item> {
    return Promise.resolve(this.items.find(item => item.id === itemId));
  }

  public getItemsById(itemIds: string[]): Promise<Item[]> {
    return Promise.resolve(itemIds.map(itemId => this.items.find(item => item.id === itemId)));
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
