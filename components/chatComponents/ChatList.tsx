import { ScrollView } from "native-base";
import { ScreenProps } from "../../types/ScreenTypes";
import { useEffect, useState } from "react";
import userStore from "../../stores/userStore";
import { UserType } from "../../types/UserType";
import ChatUser from "./ChatUser";
import { TouchableOpacity } from "react-native";

const ChatList = ({ navigation }: ScreenProps) => {
    const [users, setUsers] = useState<UserType[]>();

    useEffect(() => {
        setUsers([]);
        userStore
            .getFollowedUsers()
            .then((result) => {
                result.result.map((role: UserType) => {
                    setUsers((roles) => [...(roles ?? []), role]);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleButtonClick = (user: UserType) => {
        navigation.navigate("ChatBox", user);
    };

    return (
        <ScrollView>
            {users?.map((user) => (
                <TouchableOpacity onPress={() => handleButtonClick(user)} key={user.email}>
                    <ChatUser user={user} />
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default ChatList;
