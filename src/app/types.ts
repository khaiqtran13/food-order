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
  date?: string;
  restaurantId: number;
  restaurantName?: string;
  restaurantImage?: string;
  menuItems: MenuItem[];
  customerName?: string;
  customerId: number;
  status?: string;
}
