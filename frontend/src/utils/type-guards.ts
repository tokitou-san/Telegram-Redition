import { ChatRoom, GroupChatRoom, DMChatRoom } from "~/types/chat";

export function isGroupChat(chatRoom: ChatRoom): chatRoom is GroupChatRoom {
  return chatRoom.type === "GROUP";
}

export function isDmChat(chatRoom: ChatRoom): chatRoom is DMChatRoom {
  return chatRoom.type === "DM";
}
