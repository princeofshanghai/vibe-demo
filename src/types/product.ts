export interface Product {
  id: string;
  key: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'deprecated';
  category: string;
  pricing?: {
    tier: string;
    price: number;
    currency: string;
  };
  features: string[];
  lastModified: Date;
}