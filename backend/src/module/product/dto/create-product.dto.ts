export class CreateProductDto {
    name: string;
    category_id: string;
    description: string;
    standard_price: number;
    sale_percent: number;
    sale_price: number;
    shop_id: string;
    total_rating_star: number;
    quantity_sold: number;
    quantity_in_inventory: number;
    avatar: string;
    img: string[];
}