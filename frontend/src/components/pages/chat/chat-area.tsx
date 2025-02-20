import { For, Show } from "solid-js";
import { groupChatBySender } from "~/functions/chat/group";
import ChatBubble from "./chat-bubble";
import { useAuth } from "~/context/auth";
import Avatar from "~/components/ui/avatar";
import { isGroupChat } from "~/utils/type-guards";
import { useChat } from "~/context/chat";

const ChatArea = () => {
  const { chatStore } = useChat();
  const { user } = useAuth();

  return (
    <div class="relative mx-auto flex flex-1 flex-col gap-3 overflow-y-scroll px-5 pt-10 [scrollbar-color:_rgba(255,255,255,0.1)_transparent] [scrollbar-width:none] md:w-[42.5rem]">
      <For each={groupChatBySender(chatStore.messages)}>
        {(group) => (
          <div class="flex items-end md:gap-1.5">
            <Show
              when={
                isGroupChat(chatStore.activeRoom) &&
                group.sender.id !== user()?.id
              }
            >
              {/* TODO: use chatroom reference here as well */}
              <a href={"/@" + group.sender.username}>
                <Avatar
                  src={group.sender.avatar}
                  alt={group.sender.full_name || group.sender.username}
                  color={group.sender.color}
                  class="aspect-square rounded-full font-bold text-accent md:size-9"
                />
              </a>
            </Show>
            <div
              class="flex w-full flex-col gap-1.5"
              classList={{
                "items-end": group.sender.id === user()?.id
              }}
            >
              <For each={group.chats}>
                {(message, idx) => {
                  const isFirstMsg =
                    group.chats[idx() - 1]?.sender.id !== message.sender.id;
                  const isLastMsg =
                    group.chats[idx() + 1]?.sender.id !== message.sender.id;

                  return (
                    <ChatBubble
                      message={message}
                      self={message.sender.id === user()?.id}
                      firstMsg={isFirstMsg}
                      lastMsg={isLastMsg}
                    />
                  );
                }}
              </For>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default ChatArea;
