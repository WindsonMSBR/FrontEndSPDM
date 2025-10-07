export interface Product {
  id: string;
  name: string;
  description: string;
  price: {
    retail: number; // Preço para varejo
    wholesale: number; // Preço para atacado
  };
  stock: {
    quantity: number;
    lots: {
      lotNumber: string;
      expiryDate: string;
      quantity: number;
    }[];
  };
  category: string;
}