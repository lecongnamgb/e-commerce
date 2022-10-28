export class CreateOrderDto {
    products: {
        id: string;
        quantity: number;
    };
    totalPrice: number;
    state: string;
    userId: string;
}