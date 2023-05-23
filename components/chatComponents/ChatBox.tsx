import { Box } from "native-base";
import { ScreenProps } from "../../types/ScreenTypes";
import React, { useState, useEffect } from "react";
import Message from "./Message";

const ChatBox = ({ navigation, route }: ScreenProps) => {
    const [headerTitle, setHeaderTitle] = useState<string>("Test");

    useEffect(() => {
        var title: string = route.params!.email;
        if (title.length > 13) {
            title = title.substring(0, 13) + "...";
        }
        setHeaderTitle(title);
    }, []);

    useEffect(() => {
        navigation.setOptions({ headerTitle: headerTitle });
    }, [headerTitle]);

    return (
        <Box>
            <Message senderNameProp="testName" messageContextProp="testMessage" />
        </Box>
    );
};

export default ChatBox;
