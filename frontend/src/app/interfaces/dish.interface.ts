export interface IDish {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    category: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}