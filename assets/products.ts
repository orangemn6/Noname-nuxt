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
    id: "Superman",
    name: "Superman - Mousepad",
    prices: {
      physical: 0, //this is just for now until we get a better price so leave it to change for the future
      digital: 25.00
    },
    description: "High quality mousepads with stitched edges and clean swirl design..",
    image: "/images/starry-night.jpg",
    fileGuid: "09e589c7-3d18-4c2e-9cee-4f447e9f054a",
    plans: [],
},

{
    id: "Redtiger",
    name: "Red Tiger - Mousepad",
    prices: {
      physical: 0, //this is just for now until we get a better price so leave it to change for the future
      digital: 25.00
    },
    description: "High quality mousepads with stitched edges and clean swirl design..",
    image: "/images/starry-night.jpg",
    fileGuid: "09e589c7-3d18-4c2e-9cee-4f447e9f054a",
    plans: [],
},

{
    id: "Tsunami",
    name: "Tsunami - Mousepad",
    prices: {
      physical: 0, //this is just for now until we get a better price so leave it to change for the future
      digital: 25.00
    },
    description: "High quality mousepads with stitched edges and clean swirl design..",
    image: "/images/starry-night.jpg",
    fileGuid: "09e589c7-3d18-4c2e-9cee-4f447e9f054a",
    plans: [],
},

{
    id: "Vintage",
    name: "Vintage - Mousepad",
    prices: {
      physical: 0, //this is just for now until we get a better price so leave it to change for the future
      digital: 25.00
    },
    description: "High quality mousepads with stitched edges and clean swirl design..",
    image: "/images/starry-night.jpg",
    fileGuid: "09e589c7-3d18-4c2e-9cee-4f447e9f054a",
    plans: [],
},


{
    id: "Vortex",
    name: "Vortex - Mousepad",
    prices: {
      physical: 0, //this is just for now until we get a better price so leave it to change for the future
      digital: 25.00
    },
    description: "High quality mousepads with stitched edges and clean swirl design..",
    image: "/images/starry-night.jpg",
    fileGuid: "09e589c7-3d18-4c2e-9cee-4f447e9f054a",
    plans: [],
},

{
    id: "Bengal",
    name: "Bengal - Mousepad",
    prices: {
      physical: 0, //this is just for now until we get a better price so leave it to change for the future
      digital: 25.00
    },
    description: "High quality mousepads with stitched edges and clean swirl design..",
    image: "/images/starry-night.jpg",
    fileGuid: "09e589c7-3d18-4c2e-9cee-4f447e9f054a",
    plans: [],
},
]

export default Products;
