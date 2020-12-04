import React, { useState } from "react";
import { FlatList } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "Lore",
    image: require("../assets/mosh.jpeg"),
  },
  {
    id: 2,
    title: "E1",
    description:
      "lknaslnsndnaskjcnkjsndvjknasdvasdv;oasndvasndvsdv sjvsjhdvjhvasdghvacdghvashdcvghvchwevdjkhwfhjawjhkasdbhcvsjhkfvweghfvtweyfvuasvghksvcuvwecasdjhkvjkasygfjhwefvusvdcjhvducbwevhfvwjhcvweyhcbwehjgcvwejhfv8wefb3hgvfy832ufuhsdvcyuhvfy7o32vfuh23v8yuvcuefr3yuv687fcvuhwefvy8vru2v8cvyivfy8234g",
    image: require("../assets/mosh.jpeg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id != message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Messahe Seleceted", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            ...messages,
            {
              id: messages[messages.length - 1].id + 1,
              title: "E" + messages[messages.length - 1].id + 1,
              description: "F" + messages[messages.length - 1].id + 1,
              image: require("../assets/mosh.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
