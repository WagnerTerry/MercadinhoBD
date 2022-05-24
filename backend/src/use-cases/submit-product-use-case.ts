import { ProductsRepository } from "../repositories/products-repository";

interface SubmitProductUseCaseRequest {
    name: string;
    description: string;
    image?: string;
}

export class SubmitProductUseCase {
    constructor(
        private productsRepository: ProductsRepository,
    ) {}

    async execute(request: SubmitProductUseCaseRequest){
        const { name, description, image } = request;

        await this.productsRepository.create({
            name,
            description,
            image
        })
    }
}