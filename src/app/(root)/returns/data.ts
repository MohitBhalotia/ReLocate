export type ReturnItem = {
  id: number;
  product: string;
  reason: string;
  action: 'Restock' | 'Repair' | 'Resale';
  dropLocation: string;
};

export const activeReturns: ReturnItem[] = [
  {
    id: 1,
    product: 'Air Fryer',
    reason: 'Ordered By Mistake',
    action: 'Restock',
    dropLocation: 'Store A',
  },
  {
    id: 2,
    product: 'Vacuum',
    reason: 'Damaged',
    action: 'Repair',
    dropLocation: 'Original Warehouse',
  },
  {
    id: 3,
    product: 'Shoes',
    reason: 'Exchange',
    action: 'Restock',
    dropLocation: 'Store B',
  },
  {
    id: 4,
    product: 'Laptop',
    reason: 'Wrong Item Sent',
    action: 'Resale',
    dropLocation: 'Store C',
  },
  {
    id: 5,
    product: 'Headphones',
    reason: 'Ordered By Mistake',
    action: 'Restock',
    dropLocation: 'Store A',
  },
  {
    id: 6,
    product: 'Smartphone',
    reason: 'Damaged',
    action: 'Repair',
    dropLocation: 'Original Warehouse',
  },
  {
    id: 7,
    product: 'Watch',
    reason: 'Exchange',
    action: 'Restock',
    dropLocation: 'Store B',
  },
  {
    id: 8,
    product: 'Tablet',
    reason: 'Wrong Item Sent',
    action: 'Resale',
    dropLocation: 'Store C',
  },
  {
    id: 9,
    product: 'Camera',
    reason: 'Ordered By Mistake',
    action: 'Restock',
    dropLocation: 'Store A',
  },
  {
    id: 10,
    product: 'Monitor',
    reason: 'Damaged',
    action: 'Repair',
    dropLocation: 'Original Warehouse',
  },
  {
    id: 11,
    product: 'Keyboard',
    reason: 'Exchange',
    action: 'Restock',
    dropLocation: 'Store B',
  },
  {
    id: 12,
    product: 'Mouse',
    reason: 'Wrong Item Sent',
    action: 'Resale',
    dropLocation: 'Store C',
  },
  {
    id: 13,
    product: 'Printer',
    reason: 'Ordered By Mistake',
    action: 'Restock',
    dropLocation: 'Store A',
  },
  {
    id: 14,
    product: 'Router',
    reason: 'Damaged',
    action: 'Repair',
    dropLocation: 'Original Warehouse',
  },
  {
    id: 15,
    product: 'Speaker',
    reason: 'Exchange',
    action: 'Restock',
    dropLocation: 'Store B',
  },
  {
    id: 16,
    product: 'Smartwatch',
    reason: 'Wrong Item Sent',
    action: 'Resale',
    dropLocation: 'Store C',
  },
];

export type ChartData = {
  name: string;
  value: number;
};

export const returnOutcomeData: ChartData[] = [
  { name: 'Restock', value: 80 },
  { name: 'Repair', value: 60 },
  { name: 'Resale', value: 40 },
];
