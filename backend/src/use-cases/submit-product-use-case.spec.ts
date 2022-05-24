import { SubmitProductUseCase } from "./submit-product-use-case"

const createProductSpy = jest.fn()

const submitProduct = new SubmitProductUseCase(
    { create: createProductSpy}
)

describe('Submit product', () => {
    it('should be ableto submit a product', async () => {
        await expect(submitProduct.execute({
            name: "batata",
            description: "muito boa",
            image: 'data:image/png;base64,18927871',
        })).resolves.not.toThrow();

        expect(createProductSpy).toHaveBeenCalled()
    })
})