import express from 'express'
import { prisma } from './prisma'
import { PrismaProductsRepository } from './repositories/prisma/prisma-products-repository';
import { SubmitProductUseCase } from './use-cases/submit-product-use-case';

export const routes = express.Router()

routes.get("/products", async (req, res) => {
    // método get simples {
    //     const products = await prisma.products.findMany()
    //     return res.status(200).send(products)
    // }
})

routes.post("/products", async (req, res) => {
    // metodo post simples {
        // const products = await prisma.products.create({
        //     data: {
        //         name: req.body.name,
        //         description: req.body.description,
        //         image: req.body.image
        //     }
        // })
        // return res.status(201).json({data: products})
    //}
    const { name, description, image} = req.body;
    const response = {name, description, image}

    const prismaProductsRepository = new PrismaProductsRepository()
    const submitProductUseCase = new SubmitProductUseCase(
        prismaProductsRepository
    )

    await submitProductUseCase.execute({
        name,
        description,
        image
    })

     return res.status(201).send(response)
 })