import friendList, { Person } from "../../mockData";
import styles from "./styles.module.css";

const fetchFriendById = (id: number) => {
    return new Promise<Person>((resolve, reject) => {
        setTimeout(() => {
            const friend = friendList.find((person) => person.id === id);

            if (friend) {
                resolve(friend);
            } else {
                reject(new Error('No friend found with the given id'));
            }
        }, 1000);
    });
};
const FriendDetail = async ({id}) => {
    const friend = await(fetchFriendById(id));
    return (
        <div className={styles.friendDetailDiv}>
            <div>Name: {friend.name}</div>
            <div>Email: {friend.email}</div>
            <div>Phone Number: {friend.phoneNumber}</div>
            {friend.status && <div>Status: {friend.status}</div>}
        </div>
    );
};

export default FriendDetail;