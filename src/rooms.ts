export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface Rooms {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}

export class RoomsDTO {
    roomNumber?: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}