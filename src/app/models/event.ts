export interface Event{

    _id?:any|string;
    tittle: string;
    description: string;
    date: Date;
    location: string;
    ticketsAvailable: number;
    ticketsSold?: number;
    feedback?:{user:string, comment: string}[];

};