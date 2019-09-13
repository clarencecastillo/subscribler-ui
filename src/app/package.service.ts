import { Injectable } from "@angular/core";
import { Package } from "src/models/package";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { PackageItem } from "src/models/package-item";
import { CycleSymbol, cycleSymbols, cycles } from "src/models/cycle";
import { SubscriptionPlan } from "src/models/subscription-plan";
import { of } from "rxjs";
import * as uuid from "uuid/v4";
import { CyclePipe } from "./cycle.pipe";

@Injectable({
  providedIn: "root"
})
export class PackageService {
  packages: Package[] = [
    {
      id: "b018400d-a81a-4a7e-8d1c-3dae05d062f6",
      merchantId: "fb8ce97d-2c03-432d-9090-75bf1e629f87",
      name: "Breakfast Pancakes with Coffee",
      description:
        "Slice into three golden brown and perfectly round discs of fluffy, buttery pancakes. Top it off with a drizzle of maple syrup or strawberry jam.",
      imageUrl:
        "http://localhost:4200/assets/images/b018400d-a81a-4a7e-8d1c-3dae05d062f6.jpg",
      cycle: "D",
      items: [
        {
          itemId: "184d716b-5299-4e55-811d-f10532202a6f",
          quantity: 3
        },
        {
          itemId: "61ec68e1-f8cd-41c6-8c4c-d3accacc823d",
          quantity: 1
        },
        {
          itemId: "c73c557b-94e2-44b1-9431-8deda0df0975",
          quantity: 1
        },
        {
          itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: "1b73589f-6783-449d-904f-50346a180561",
          name: "Weekly",
          cycles: 7,
          price: 82.45,
          description: ""
        },
        {
          id: "03b7566f-e6f4-41cf-b21a-4aef97339bdc",
          name: "Monthly",
          cycles: 31,
          price: 360.95,
          description: ""
        },
        {
          id: "b75ef953-fa3f-4fdf-9658-33203e748746",
          name: "Annual",
          cycles: 365,
          price: 4199,
          description: ""
        }
      ]
    },
    {
      id: "f35c3a92-1197-4889-b084-977c1f4dba3b",
      merchantId: "fb8ce97d-2c03-432d-9090-75bf1e629f87",
      name: "Peanut Butter & Jelly Toast with Coffee",
      description:
        "An irresistible spin on a breakfast classic – your favorite toast now comes cloaked in crushed biscuit.",
      imageUrl:
        "http://localhost:4200/assets/images/f35c3a92-1197-4889-b084-977c1f4dba3b.jpg",
      cycle: "D",
      items: [
        {
          itemId: "2327f694-e14d-4cad-b2d5-668e456fc8c9",
          quantity: 2
        },
        {
          itemId: "4eb138ec-ac9b-467b-b4cf-019319ce04e1",
          quantity: 1
        },
        {
          itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
          quantity: 1
        },
        {
          itemId: "c73c557b-94e2-44b1-9431-8deda0df0975",
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: "3d202d5b-9748-4261-906c-4149ed101105",
          name: "Weekly",
          cycles: 7,
          price: 82.45,
          description: ""
        },
        {
          id: "bf0a905e-7da6-4708-98a0-94e4462b4c6b",
          name: "Monthly",
          cycles: 31,
          price: 360.95,
          description: ""
        },
        {
          id: "5dd35f3b-a0dd-4648-a280-ba5ec6da6d07",
          name: "Annual",
          cycles: 365,
          price: 4199,
          description: ""
        }
      ]
    },
    {
      id: "c5fd2f6f-3ba3-4fe9-bbc9-8435d76a46c3",
      merchantId: "fb8ce97d-2c03-432d-9090-75bf1e629f87",
      name: "Four Cheese Toast with Coffee",
      description:
        "Melty mozzarella, white cheddar, gruyere and parmesan cheese are layered on toasty bread to create this cheesy breakfast goodness.",
      imageUrl:
        "http://localhost:4200/assets/images/c5fd2f6f-3ba3-4fe9-bbc9-8435d76a46c3.jpg",
      cycle: "D",
      items: [
        {
          itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
          quantity: 1
        },
        {
          itemId: "0e886426-d289-4446-a6b7-96229188ae71",
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: "078e45ba-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Weekly",
          cycles: 7,
          price: 82.45,
          description: ""
        },
        {
          id: "078e4790-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Monthly",
          cycles: 31,
          price: 360.95,
          description: ""
        },
        {
          id: "078e49a2-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Annual",
          cycles: 365,
          price: 4199,
          description: ""
        }
      ]
    },
    {
      id: "078e4aec-d09a-11e9-bb65-2a2ae2dbcce4",
      merchantId: "fb8ce97d-2c03-432d-9090-75bf1e629f87",
      name: "Turkey Ham & Omelette Sandwich with Coffee",
      description:
        "A delicious reason to get out of bed - turkey ham, egg omelette and cream cheese between two soft buns.",
      imageUrl:
        "http://localhost:4200/assets/images/078e4aec-d09a-11e9-bb65-2a2ae2dbcce4.jpg",
      cycle: "D",
      items: [
        {
          itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
          quantity: 1
        },
        {
          itemId: "6cc22d02-d09a-11e9-bb65-2a2ae2dbcce4",
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: "ad387c9c-d09a-11e9-826f-2a2ae2dbcce4",
          name: "Weekly",
          cycles: 7,
          price: 82.45,
          description: ""
        },
        {
          id: "ad387ff8-d09a-11e9-826f-2a2ae2dbcce4",
          name: "Monthly",
          cycles: 31,
          price: 360.95,
          description: ""
        },
        {
          id: "ad388174-d09a-11e9-826f-2a2ae2dbcce4",
          name: "Annual",
          cycles: 365,
          price: 4199,
          description: ""
        }
      ]
    },
    {
      id: "7f928620-d09a-11e9-bb65-2a2ae2dbcce4",
      merchantId: "fb8ce97d-2c03-432d-9090-75bf1e629f87",
      name: "Egg Mayo Multigrain Croissant with Coffee",
      description:
        "Bite into a soft, flaky multigrain croissant that is overflowing with flavorful egg mayo and cheese.",
      imageUrl:
        "http://localhost:4200/assets/images/7f928620-d09a-11e9-bb65-2a2ae2dbcce4.jpg",
      cycle: "D",
      items: [
        {
          itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
          quantity: 1
        },
        {
          itemId: "6cc22fc8-d09a-11e9-bb65-2a2ae2dbcce4",
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: "ad3889d0-d09a-11e9-826f-2a2ae2dbcce4",
          name: "Weekly",
          cycles: 7,
          price: 82.45,
          description: ""
        },
        {
          id: "ad388b38-d09a-11e9-826f-2a2ae2dbcce4",
          name: "Monthly",
          cycles: 31,
          price: 360.95,
          description: ""
        },
        {
          id: "ad388c64-d09a-11e9-826f-2a2ae2dbcce4",
          name: "Annual",
          cycles: 365,
          price: 4199,
          description: ""
        }
      ]
    },
    {
      id: "ad388d9a-d09a-11e9-826f-2a2ae2dbcce4",
      merchantId: "fb8ce97d-2c03-432d-9090-75bf1e629f87",
      name: "Chicken Ham & Cheese Panwich with Coffee",
      description:
        "Two breakfast favorites unite in one scrumptious panwich. Black pepper chicken ham and egg sits between two fluffy buttery pancakes.",
      imageUrl:
        "http://localhost:4200/assets/images/ad388d9a-d09a-11e9-826f-2a2ae2dbcce4.jpg",
      cycle: "D",
      items: [
        {
          itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
          quantity: 1
        },
        {
          itemId: "6cc23388-d09a-11e9-bb65-2a2ae2dbcce4",
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: "d156a766-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Weekly",
          cycles: 7,
          price: 82.45,
          description: ""
        },
        {
          id: "d156abda-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Monthly",
          cycles: 31,
          price: 360.95,
          description: ""
        },
        {
          id: "d156ad56-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Annual",
          cycles: 365,
          price: 4199,
          description: ""
        }
      ]
    },
    {
      id: "d156af5e-d09a-11e9-bb65-2a2ae2dbcce4",
      merchantId: "fb8ce97d-2c03-432d-9090-75bf1e629f87",
      name: "Egg White, Roasted Pepper, Mushroom & Cheddar Wrap with Coffee",
      description:
        "A soft tortilla wrap filled with sautéed mushrooms, caramelized pepper and egg white.",
      imageUrl:
        "http://localhost:4200/assets/images/d156af5e-d09a-11e9-bb65-2a2ae2dbcce4.jpg",
      cycle: "D",
      items: [
        {
          itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
          quantity: 1
        },
        {
          itemId: "6cc234c8-d09a-11e9-bb65-2a2ae2dbcce4",
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: "d156b38c-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Weekly",
          cycles: 7,
          price: 82.45,
          description: ""
        },
        {
          id: "d156b4ea-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Monthly",
          cycles: 31,
          price: 360.95,
          description: ""
        },
        {
          id: "d156b6ac-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Annual",
          cycles: 365,
          price: 4199,
          description: ""
        }
      ]
    },
    {
      id: "d156b7d8-d09a-11e9-bb65-2a2ae2dbcce4",
      merchantId: "fb8ce97d-2c03-432d-9090-75bf1e629f87",
      name: "Turkey Ham, Egg White and Cheddar Sandwich with Coffee",
      description:
        "A fluffy egg white patty served simply with turkey ham and aged cheddar cheese in a lightly toasted wholegrain bun. A breakfast classic.",
      imageUrl:
        "http://localhost:4200/assets/images/d156b7d8-d09a-11e9-bb65-2a2ae2dbcce4.jpg",
      cycle: "D",
      items: [
        {
          itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
          quantity: 1
        },
        {
          itemId: "6cc23694-d09a-11e9-bb65-2a2ae2dbcce4",
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: "ee764fcc-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Weekly",
          cycles: 7,
          price: 82.45,
          description: ""
        },
        {
          id: "ee765224-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Monthly",
          cycles: 31,
          price: 360.95,
          description: ""
        },
        {
          id: "ee76581e-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Annual",
          cycles: 365,
          price: 4199,
          description: ""
        }
      ]
    },
    {
      id: "ee7659b8-d09a-11e9-bb65-2a2ae2dbcce4",
      merchantId: "fb8ce97d-2c03-432d-9090-75bf1e629f87",
      name: "Rosemary Chicken & Emmental Cheese Croissant with Coffee",
      description:
        "This buttery flaky croissant is filled with chicken mayo and aromatic rosemary with emmental cheese, coupled with celery bits for that extra crunch in every bite.",
      imageUrl:
        "http://localhost:4200/assets/images/ee7659b8-d09a-11e9-bb65-2a2ae2dbcce4.jpg",
      cycle: "D",
      items: [
        {
          itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
          quantity: 1
        },
        {
          itemId: "7f927f9a-d09a-11e9-bb65-2a2ae2dbcce4",
          quantity: 1
        }
      ],
      subscriptionPlans: [
        {
          id: "ee765c24-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Weekly",
          cycles: 7,
          price: 82.45,
          description: ""
        },
        {
          id: "ee765d50-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Monthly",
          cycles: 31,
          price: 360.95,
          description: ""
        },
        {
          id: "ee765e7c-d09a-11e9-bb65-2a2ae2dbcce4",
          name: "Annual",
          cycles: 365,
          price: 4199,
          description: ""
        }
      ]
    }
  ];

  constructor(private http: HttpClient, private cyclePipe: CyclePipe) {}

  private getCyclePeriod(cyclePeriod) {
    switch (cyclePeriod) {
      case 1:
        return "D";
      case 7:
        return "W";
      case 30:
        return "M";
      case 365:
        return "Y";
      default:
        return "D";
    }
  }

  private mapPackage(
    merchantId: string,
    backEndPackage: BackEndPackage
  ): Package {
    var newPackage: Package = {
      id: backEndPackage.id,
      name: backEndPackage.name || "",
      description: backEndPackage.description || "",
      imageUrl: backEndPackage.imageUrl || "",
      items: backEndPackage.items || [],
      merchantId: merchantId,
      subscriptionPlans: backEndPackage.subscriptionPlans || [],
      cycle: this.getCyclePeriod(backEndPackage.cyclePeriod)
    };
    return newPackage;
  }

  private toBackEndPackage(inPackage: PackageDetails): BackEndPackage {
    var backEndPackage: BackEndPackage = {
      id: "",
      name: inPackage.name,
      items: inPackage.items,
      subscriptionPlans: inPackage.subscriptionPlans,
      description: inPackage.description,
      imageUrl: inPackage.imageUrl,
      cyclePeriod: this.cyclePipe.transform(inPackage.cycle, "days") as number
    };
    return backEndPackage;
  }

  public getPackages(merchantId: string): Promise<Package[]> {
    return this.http
      .get<BackEndPackage[]>(`${environment.serverHost}/merchants/12/packages`)
      .toPromise()
      .then(resPackages =>
        resPackages.map(resPackage => this.mapPackage(merchantId, resPackage))
      );
  }

  public getPackage(merchantId: string, packageId: string): Promise<Package> {
    return this.http
      .get<BackEndPackage>(
        `${environment.serverHost}/merchants/12/packages/${packageId}`
      )
      .toPromise()
      .then(backEndPackage => this.mapPackage(merchantId, backEndPackage));
  }

  public createPackage(merchantId: string): Promise<Package> {
    return this.http
      .post<BackEndPackage>(
        `${environment.serverHost}/merchants/12/packages`,
        {}
      )
      .toPromise()
      .then(backEndPackage => this.mapPackage(merchantId, backEndPackage));
  }

  updatePackage(
    merchantId: string,
    packageId: string,
    update: PackageDetails
  ): Promise<Package> {
    return this.http
      .put<BackEndPackage>(
        `${environment.serverHost}/merchants/12/packages/${packageId}`,
        this.toBackEndPackage(update)
      )
      .toPromise()
      .then(backEndPackage => this.mapPackage(merchantId, backEndPackage));
  }

  async deletePackage(merchantId: string, packageId: string): Promise<void> {
    await this.http
      .delete<Package>(
        `${environment.serverHost}/merchants/12/packages/${packageId}`
      )
      .toPromise();
  }
}

export type PackageDetails = Pick<
  Package,
  "name" | "description" | "cycle" | "items" | "subscriptionPlans" | "imageUrl"
>;
interface BackEndPackage {
  id: string;
  name: string;
  description: string;
  cyclePeriod: number;
  imageUrl: string;
  items: PackageItem[];
  subscriptionPlans: SubscriptionPlan[];
}
