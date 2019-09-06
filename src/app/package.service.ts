import { Injectable } from '@angular/core';
import { Package } from 'src/models/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  packages: Package[] = [
    {
      id: 'b018400d-a81a-4a7e-8d1c-3dae05d062f6',
      name: 'Breakfast Pancakes with Coffee',
      description: 'Slice into three golden brown and perfectly round discs of fluffy, buttery pancakes. Top it off with a drizzle of maple syrup or strawberry jam.',
      imageUrl: 'https://lh3.google.com/u/0/d/1ogm-vz5NEGJ1FCAKG0ZVkDqYXLJN2e_S=w1842-h1732-iv1',
      cycle: 'D',
      items: [
        {
          itemId: '184d716b-5299-4e55-811d-f10532202a6f',
          quantity: 3
        },
        {
          itemId: '61ec68e1-f8cd-41c6-8c4c-d3accacc823d',
          quantity: 1
        },
        {
          itemId: 'c73c557b-94e2-44b1-9431-8deda0df0975',
          quantity: 1
        },
        {
          itemId: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: '33183f68-23dc-481a-9114-b13bac3c1166',
          cycles: 1,
          price: 12.45,
          description: ''
        },
        {
          id: '1b73589f-6783-449d-904f-50346a180561',
          cycles: 7,
          price: 82.45,
          description: ''
        },
        {
          id: '03b7566f-e6f4-41cf-b21a-4aef97339bdc',
          cycles: 31,
          price: 360.95,
          description: ''
        },
        {
          id: 'b75ef953-fa3f-4fdf-9658-33203e748746',
          cycles: 365,
          price: 4199,
          description: ''
        }
      ]
    },
    {
      id: 'f35c3a92-1197-4889-b084-977c1f4dba3b',
      name: 'Peanut Butter & Jelly Toast with Coffee',
      description: 'An irresistible spin on a breakfast classic – your favorite toast now comes cloaked in crushed biscuit.',
      imageUrl: 'https://lh3.google.com/u/0/d/1GSrHK9CH2fM7nyFtNFcwEdl2P9F6UWQw=w3360-h1830-iv1',
      cycle: 'D',
      items: [
        {
          itemId: '2327f694-e14d-4cad-b2d5-668e456fc8c9',
          quantity: 2
        },
        {
          itemId: '4eb138ec-ac9b-467b-b4cf-019319ce04e1',
          quantity: 1
        },
        {
          itemId: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
          quantity: 1
        },
        {
          itemId: 'c73c557b-94e2-44b1-9431-8deda0df0975',
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: '3ef1b258-a57d-49c7-a7e6-d2039b1075e7',
          cycles: 1,
          price: 12.45,
          description: ''
        },
        {
          id: '3d202d5b-9748-4261-906c-4149ed101105',
          cycles: 7,
          price: 82.45,
          description: ''
        },
        {
          id: 'bf0a905e-7da6-4708-98a0-94e4462b4c6b',
          cycles: 31,
          price: 360.95,
          description: ''
        },
        {
          id: '5dd35f3b-a0dd-4648-a280-ba5ec6da6d07',
          cycles: 365,
          price: 4199,
          description: ''
        }
      ]
    },
    {
      id: 'c5fd2f6f-3ba3-4fe9-bbc9-8435d76a46c3',
      name: 'Four Cheese Toast with Coffee',
      description: 'Melty mozzarella, white cheddar, gruyere and parmesan cheese are layered on toasty bread to create this cheesy breakfast goodness.',
      imageUrl: 'https://lh3.google.com/u/0/d/1jDKVvV-v7DPKoadolKjVthFphpKd835r=w722-h1700-iv1',
      cycle: 'D',
      items: [
        {
          itemId: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
          quantity: 1
        },
        {
          itemId: '0e886426-d289-4446-a6b7-96229188ae71',
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: '078e429a-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 1,
          price: 12.45,
          description: ''
        },
        {
          id: '078e45ba-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 7,
          price: 82.45,
          description: ''
        },
        {
          id: '078e4790-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 31,
          price: 360.95,
          description: ''
        },
        {
          id: '078e49a2-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 365,
          price: 4199,
          description: ''
        }
      ]
    },
    {
      id: '078e4aec-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Turkey Ham & Omelette Sandwich with Coffee',
      description: 'A delicious reason to get out of bed - turkey ham, egg omelette and cream cheese between two soft buns.',
      imageUrl: 'https://lh3.google.com/u/0/d/1AGvzzWu8JCf6Kf6TlV7zDIheDJxFnJKK=w1842-h1700-iv1',
      cycle: 'D',
      items: [
        {
          itemId: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
          quantity: 1
        },
        {
          itemId: '6cc22d02-d09a-11e9-bb65-2a2ae2dbcce4',
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: 'ad3879c2-d09a-11e9-826f-2a2ae2dbcce4',
          cycles: 1,
          price: 12.45,
          description: ''
        },
        {
          id: 'ad387c9c-d09a-11e9-826f-2a2ae2dbcce4',
          cycles: 7,
          price: 82.45,
          description: ''
        },
        {
          id: 'ad387ff8-d09a-11e9-826f-2a2ae2dbcce4',
          cycles: 31,
          price: 360.95,
          description: ''
        },
        {
          id: 'ad388174-d09a-11e9-826f-2a2ae2dbcce4',
          cycles: 365,
          price: 4199,
          description: ''
        }
      ]
    },
    {
      id: '7f928620-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Egg Mayo Multigrain Croissant with Coffee',
      description: 'Bite into a soft, flaky multigrain croissant that is overflowing with flavorful egg mayo and cheese.',
      imageUrl: 'https://lh3.google.com/u/0/d/1uy1x-nxQ_GBUPw53dCgG4MDA6GAV_sgM=w1204-h1798-iv1',
      cycle: 'D',
      items: [
        {
          itemId: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
          quantity: 1
        },
        {
          itemId: '6cc22fc8-d09a-11e9-bb65-2a2ae2dbcce4',
          quantity: 1
        },
      ],
      subscriptionPlans: [
        {
          id: 'ad3882b4-d09a-11e9-826f-2a2ae2dbcce4',
          cycles: 1,
          price: 12.45,
          description: ''
        },
        {
          id: 'ad3889d0-d09a-11e9-826f-2a2ae2dbcce4',
          cycles: 7,
          price: 82.45,
          description: ''
        },
        {
          id: 'ad388b38-d09a-11e9-826f-2a2ae2dbcce4',
          cycles: 31,
          price: 360.95,
          description: ''
        },
        {
          id: 'ad388c64-d09a-11e9-826f-2a2ae2dbcce4',
          cycles: 365,
          price: 4199,
          description: ''
        }
      ]
    },
    {
      id: 'ad388d9a-d09a-11e9-826f-2a2ae2dbcce4',
      name: 'Chicken Ham & Cheese Panwich with Coffee',
      description: 'Two breakfast favorites unite in one scrumptious panwich. Black pepper chicken ham and egg sits between two fluffy buttery pancakes.',
      imageUrl: 'https://lh3.google.com/u/0/d/1wcXOqkXoGoaV5OdinNMtID5_PDgaDOKC=w1204-h1798-iv1',
      cycle: 'D',
      items: [
        {
          itemId: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
          quantity: 1
        },
        {
          itemId: '6cc23388-d09a-11e9-bb65-2a2ae2dbcce4',
          quantity: 1
        },
      ],
      subscriptionPlans: [
        {
          id: 'ad388ec6-d09a-11e9-826f-2a2ae2dbcce4',
          cycles: 1,
          price: 12.45,
          description: ''
        },
        {
          id: 'd156a766-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 7,
          price: 82.45,
          description: ''
        },
        {
          id: 'd156abda-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 31,
          price: 360.95,
          description: ''
        },
        {
          id: 'd156ad56-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 365,
          price: 4199,
          description: ''
        }
      ]
    },
    {
      id: 'd156af5e-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Egg White, Roasted Pepper, Mushroom & Cheddar Wrap with Coffee',
      description: 'A soft tortilla wrap filled with sautéed mushrooms, caramelized pepper and egg white.',
      imageUrl: 'https://lh3.google.com/u/0/d/1pXYOt5TUkXiGoSOPJMnCmA0bInlWOza2=w1204-h1798-iv1',
      cycle: 'D',
      items: [
        {
          itemId: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
          quantity: 1
        },
        {
          itemId: '6cc234c8-d09a-11e9-bb65-2a2ae2dbcce4',
          quantity: 1
        },
      ],
      subscriptionPlans: [
        {
          id: 'd156b09e-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 1,
          price: 12.45,
          description: ''
        },
        {
          id: 'd156b38c-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 7,
          price: 82.45,
          description: ''
        },
        {
          id: 'd156b4ea-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 31,
          price: 360.95,
          description: ''
        },
        {
          id: 'd156b6ac-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 365,
          price: 4199,
          description: ''
        }
      ]
    },
    {
      id: 'd156b7d8-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Turkey Ham, Egg White and Cheddar Sandwich with Coffee',
      description: 'A fluffy egg white patty served simply with turkey ham and aged cheddar cheese in a lightly toasted wholegrain bun. A breakfast classic.',
      imageUrl: 'https://lh3.google.com/u/0/d/1o6dr6Iputbh1L7tacGdjNebNUrQGfFFE=w1204-h1798-iv1',
      cycle: 'D',
      items: [
        {
          itemId: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
          quantity: 1
        },
        {
          itemId: '6cc23694-d09a-11e9-bb65-2a2ae2dbcce4',
          quantity: 1
        },
      ],
      subscriptionPlans: [
        {
          id: 'd156b9e0-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 1,
          price: 12.45,
          description: ''
        },
        {
          id: 'ee764fcc-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 7,
          price: 82.45,
          description: ''
        },
        {
          id: 'ee765224-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 31,
          price: 360.95,
          description: ''
        },
        {
          id: 'ee76581e-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 365,
          price: 4199,
          description: ''
        }
      ]
    },
    {
      id: 'ee7659b8-d09a-11e9-bb65-2a2ae2dbcce4',
      name: 'Rosemary Chicken & Emmental Cheese Croissant with Coffee',
      description: 'This buttery flaky croissant is filled with chicken mayo and aromatic rosemary with emmental cheese, coupled with celery bits for that extra crunch in every bite.',
      imageUrl: 'https://lh3.google.com/u/0/d/1yf7eygFRf8bkNo5qYHVH-I6LHPIebXQb=w1204-h1798-iv1',
      cycle: 'D',
      items: [
        {
          itemId: '40db326c-aa8b-4297-9dc7-0d366320e6a7',
          quantity: 1
        },
        {
          itemId: '7f927f9a-d09a-11e9-bb65-2a2ae2dbcce4',
          quantity: 1
        },
      ],
      subscriptionPlans: [
        {
          id: 'ee765af8-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 1,
          price: 12.45,
          description: ''
        },
        {
          id: 'ee765c24-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 7,
          price: 82.45,
          description: ''
        },
        {
          id: 'ee765d50-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 31,
          price: 360.95,
          description: ''
        },
        {
          id: 'ee765e7c-d09a-11e9-bb65-2a2ae2dbcce4',
          cycles: 365,
          price: 4199,
          description: ''
        }
      ]
    },
  ];

  constructor() { }

  async getPackages(): Promise<Package[]> {
    return Promise.resolve(this.packages);
  }

  getPackage(packageId: string) {
    return this.packages.find(p => p.id === packageId);
  }

  createPackage(): string {
    const packageId = 'package' + this.packages.length + 1;
    this.packages.push({
      id: 'package' + this.packages.length + 1,
      name: '',
      description: '',
      cycle: 'D',
      imageUrl: '',
      items: [],
      subscriptionPlans: [
        {
          id: '123',
          cycles: 1,
          price: undefined,
          description: ''
        }
      ]
    });
    return packageId;
  }

  updatePackage(packageId: string, update: PackageDetails): Promise<void> {
    const existingPackage = this.packages.find(p => p.id === packageId);
    if (!existingPackage) {
      return Promise.reject();
    }

    Object.keys(update).forEach(key => {
      existingPackage[key] = update[key];
    });

    return Promise.resolve();
  }

  deletePackage(packageId: string): Promise<void> {
    this.packages.splice(this.packages.findIndex(p => p.id === packageId), 1);
    return Promise.resolve();
  }
}

export type PackageDetails = Pick<Package, 'name' | 'description' | 'cycle' | 'items' | 'subscriptionPlans'>;
