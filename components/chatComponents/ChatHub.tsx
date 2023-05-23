import { useEffect, useState } from "react";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { MessageLocalType } from "../../types/ChatType";

const ChatHub = () => {
    const [connection, setConnection] = useState<HubConnection | null>(null);
    const [messages, setMessages] = useState<MessageLocalType[]>([]);
    const [users, setUsers] = useState([]);
    const [isTyping, setIsTyping] = useState<boolean>();

    useEffect(() => {
        if (connection) {
            if (isTyping) {
                console.log("aaa");
                connection.invoke("Typing");
            } else {
                connection.invoke("StopTyping");
            }
        }
    }, [isTyping, connection]);

    const joinRoom = async (user: string) => {
        try {
            const connection = new HubConnectionBuilder()
                .withUrl("https://localhost:7136/chat")
                .configureLogging(LogLevel.Information)
                .build();

            connection.on("ReceiveMessage", (user: string, message: string) => {
                const messageObj: MessageLocalType = { senderName: user, message: message };
                setMessages((messages) => [...messages, messageObj]);
            });

            // connection.on("UsersInRoom", (users) => {
            //     setUsers(users);
            // });

            connection.on("UserTyping", (user) => {
                setIsTyping(true);
            });

            connection.on("UserStoppedTyping", (user) => {
                setIsTyping(false);
            });

            connection.onclose((e) => {
                setConnection(null);
                setMessages([]);
                setUsers([]);
            });

            await connection.start();
            // await connection.invoke("JoinRoom", { user });

            setConnection(connection);
        } catch (e) {
            console.log(e);
        }
    };

    const sendMessage = async (message: string) => {
        if (connection != null) {
            try {
                await connection.invoke("SendMessage", message);
            } catch (e) {
                console.log(e);
            }
        } else console.log("Connection object is null");
    };

    const closeConnection = async () => {
        if (connection != null) {
            try {
                await connection.stop();
            } catch (e) {
                console.log(e);
            }
        } else console.log("Connection object is null");
    };
};

export default ChatHub;
