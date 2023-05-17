export enum FriendStatus {
    CloseFriends = "Close Friends",
    SuperCloseFriends = "Super Close Friends"
}
export interface Person {
    name: string;
    email: string;
    phoneNumber: string;
    status? : FriendStatus; 
}


const friendList: Person[] = [
    {
        name: "Salley Cooper",
        email: "salleycooper@gmail.com",
        phoneNumber: "(470) 782-5471",
        status: FriendStatus.CloseFriends
    },
    {
        name: "Judith Gonzalez",
        email: "jgonzalez@gmail.com",
        phoneNumber: "(123) 142-4123",
    },
    {
        name: "George Bryant",
        email: "georgebryant@gmail.com",
        phoneNumber: "(123) 142-4123",
    },
    {
        name: "Betty Wood",
        email: "betty@gmail.com",
        phoneNumber: "(123) 142-4123",
        status: FriendStatus.SuperCloseFriends,
    },
    {
        name: "Debra Russell",
        email: "eve@example.com",
        phoneNumber: "(123) 142-4123",
        status: FriendStatus.SuperCloseFriends,
    },
    {
        name: "Rebecca Flores",
        email: "rebeccaflores@gmail.com",
        phoneNumber: "(123) 142-4123",
        status: FriendStatus.CloseFriends,
    },
    {
        name: "Kim Holland",
        email: "kimholland@gmail.com",
        phoneNumber: "(123) 142-4123",
    },
    {
        name: "Heidi",
        email: "heidi@example.com",
        phoneNumber: "(123) 142-4123",
    },
    {
        name: "Ivan",
        email: "ivan@example.com",
        phoneNumber: "(123) 142-4123",
    },
    {
        name: "Judy",
        email: "judy@example.com",
        phoneNumber: "(123) 142-4123",
    },
];

export default friendList;