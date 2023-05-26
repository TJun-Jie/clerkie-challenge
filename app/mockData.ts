export enum FriendStatus {
    CloseFriends = "Close Friends",
    SuperCloseFriends = "Super Close Friends"
}


export interface Person {
    id: number,
    name: string;
    email: string;
    phoneNumber: string;
    status? : FriendStatus; 
}


const friendList: Person[] = [
    { id: 1, name: "Salley Cooper", email: "salleycooper@gmail.com", phoneNumber: "(470) 782-5471", status: FriendStatus.CloseFriends },
    { id: 2, name: "Judith Gonzalez", email: "jgonzalez@gmail.com", phoneNumber: "(123) 142-4123" },
    { id: 3, name: "George Bryant", email: "georgebryant@gmail.com", phoneNumber: "(123) 142-4123" },
    { id: 4, name: "Betty Wood", email: "betty@gmail.com", phoneNumber: "(123) 142-4123", status: FriendStatus.SuperCloseFriends },
    { id: 5, name: "Debra Russell", email: "eve@example.com", phoneNumber: "(123) 142-4123", status: FriendStatus.SuperCloseFriends },
    { id: 6, name: "Rebecca Flores", email: "rebeccaflores@gmail.com", phoneNumber: "(123) 142-4123", status: FriendStatus.CloseFriends },
    { id: 7, name: "Kim Holland", email: "kimholland@gmail.com", phoneNumber: "(123) 142-4123" },
    { id: 8, name: "Heidi", email: "heidi@example.com", phoneNumber: "(123) 142-4123" },
    { id: 9, name: "Ivan", email: "ivan@example.com", phoneNumber: "(123) 142-4123" },
    { id: 10, name: "Judy", email: "judy@example.com", phoneNumber: "(123) 142-4123" },
];

export default friendList;