// Implementação

import { prisma } from "../../prisma";
import { ProductCreateData, ProductsRepository } from "../products-repository";

export class PrismaProductsRepository implements ProductsRepository {
    async create({name, description, image} : ProductCreateData){
        await prisma.products.create({
            data: {
                name, 
                description,
                image
            }
        })
    }
}