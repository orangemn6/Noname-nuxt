export interface Product {
  id: string,
  name: string,
  prices: ProductPrices,
  description: string,
  image: string,
  fileGuid?: string,
  plans: ProductPlan[],
}

export interface ProductPlan {
  name: string;
  price: number;
  frequency: 'daily' | 'weekly' | 'monthly',
  interval: number;
  id: string;
}

export interface ProductPrices {
  physical: number,
  digital: number
}

const Products: Product[] = [
  {
    id: "demo-starry-night",
    name: "Starry Night",
    prices: {
      physical: 79.95, //this is the big size
      digital: 29.75 //this is the mini size, if you don't want a mini size set it to just 0
    },
    description: "High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.",
    image: "/images/starry-night.jpg",
    fileGuid: "09e589c7-3d18-4c2e-9cee-4f447e9f054a",
    plans: [],
},
]

export default Products;
