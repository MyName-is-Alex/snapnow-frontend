import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { MessageLocalType } from "../../types/ChatType";
import { hubLink } from "../../apiRoutes";

import authService from "../../api-authorization/authenticationService";

export const startConnection = async (
    setMessages: React.Dispatch<React.SetStateAction<MessageLocalType[]>>,
    setConnection: React.Dispatch<React.SetStateAction<HubConnection | null>>
) => {
    const userEmail = await authService.getCurrentUserEmail();
    try {
        const connection = new HubConnectionBuilder()
            .withUrl(hubLink + `?email=${userEmail}`)
            .configureLogging(LogLevel.Information)
            .build();

        connection.on("ReceiveMessage", (user: string, message: string) => {
            const messageObj: MessageLocalType = { senderName: user, message: message };
            setMessages((prevMessages) => [...prevMessages, messageObj]);
        });

        connection.onclose((e) => {
            setConnection(null);
            setMessages([]);
        });

        await connection.start();
        setConnection(connection);
    } catch (e) {
        console.log(e);
    }
};

export const sendMessage = async (message: string, connection: HubConnection | null) => {
    if (connection != null) {
        try {
            await connection.invoke("SendMessage", message);
        } catch (e) {
            console.log(e);
        }
    } else console.log("Connection object is null");
};
