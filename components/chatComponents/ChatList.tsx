import { ScrollView } from "native-base";
import { ScreenProps } from "../../types/ScreenTypes";
import { useEffect, useState } from "react";
import userStore from "../../stores/userStore";
import { UserType } from "../../types/UserType";
import ChatUser from "./ChatUser";
import { TouchableOpacity } from "react-native";
import { HubConnection } from "@microsoft/signalr";
import { MessageLocalType } from "../../types/ChatType";
import { startConnection } from "./ChatHub";

const ChatList = ({ navigation }: ScreenProps) => {
    const [users, setUsers] = useState<UserType[]>();

    const [connection, setConnection] = useState<HubConnection | null>(null);
    const [messages, setMessages] = useState<MessageLocalType[]>([]);

    useEffect(() => {
        startConnection(setMessages, setConnection);
    }, []);

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
