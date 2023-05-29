export interface Restaurant {
  id: number;
  name: string;
  image?: string;
  menu?: MenuItem[];
  description?: string;
}

export interface MenuItem {
  id: number;
  name: string;
  image?: string;
}

export interface Order {
  id: number;
  restaurantId: number;
  menuItems: MenuItem[];
  customerName?: string;
  customerId: number;
  status?: string;
}
