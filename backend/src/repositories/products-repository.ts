// Contrato

export interface ProductCreateData {
    name: string;
    description: string;
    image?: string;
}

export interface ProductsRepository {
    create: (data: ProductCreateData) => Promise<void>
}