    export interface BasketItem {
        eventId: number;
        name: string;
        price: number;
        currency: string;
        quantity: number;
        pictureURL: string;
    }

    export interface Basket {
        id: number;
        buyerId: string;
        items: BasketItem[];
    }
