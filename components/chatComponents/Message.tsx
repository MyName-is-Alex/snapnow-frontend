import { Box, Text } from "native-base";
import { useEffect, useState } from "react";

const Message = ({ senderNameProp, messageContextProp }: { senderNameProp: string; messageContextProp: string }) => {
    const [senderName, setSenderName] = useState<string>("");
    const [messageContext, setMessageContext] = useState<string>("");

    useEffect(() => {
        setSenderName(senderNameProp);
        setMessageContext(messageContextProp);
    }, []);

    return (
        <Box>
            <Text>{senderName}</Text>
            <Text>{messageContext}</Text>
        </Box>
    );
};

export default Message;
