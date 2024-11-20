export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

export async function readCatalog(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (!response.ok) throw new Error(`fetch error, ${response.status}`);
  return (await response.json()) as Product[];
}

export async function readProduct(productId: number): Promise<Product> {
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) throw new Error(`fetch error, ${response.status}`);
  return (await response.json()) as Product;
}
