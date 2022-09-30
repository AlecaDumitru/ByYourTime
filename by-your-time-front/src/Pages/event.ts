export interface IEvents{
    id: number,
    name: string,
    description: string,
    price: number,
    date: string,
    location: string,
    numberOfSeats: number,
    isItOutdoor: boolean,
    typeOfEvent:string,
    created: string,
    eventCrew: [string]

}