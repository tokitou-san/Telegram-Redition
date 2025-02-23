import { destructure } from "@solid-primitives/destructure";
import { Show, createEffect, createSignal } from "solid-js";
import Avatar from "~/components/ui/avatar";
import { useAuth } from "~/context/auth";
import { useChat } from "~/context/chat";
import { FormatDate } from "~/functions/format-date";
import Tick from "~/icons/tick";
import Verified from "~/icons/verified";
import { DMChatRoom } from "~/types/chat";

interface Props {
  room: DMChatRoom;
  isActive: boolean;
}

const DMRoom = (props: Props) => {
  const { room, isActive } = destructure(props);
  const { chatStore } = useChat();
  const { user } = useAuth();
  const [isOnline, setIsOnline] = createSignal(false);

  const chat_user = room().members[0];
  const self_message = room().message.sender.id === user()?.id;
  const formated_timestamp = new FormatDate(room().message.created_at)
    .format_to_relative_time;

  createEffect(() => {
    setIsOnline(
      chatStore.onlineUsers.some((user) => user.user === chat_user.id)
        ? true
        : false
    );
  });

  return (
    <>
      <div class="relative size-14 flex-shrink-0">
        <Avatar
          color={chat_user.color}
          src={chat_user.avatar}
          alt={chat_user.username}
          class={"size-full rounded-full text-2xl font-bold text-accent"}
        />
        <Show when={isOnline()}>
          <div
            class="absolute bottom-0 right-0 rounded-full ring-4 md:size-2.5"
            classList={{
              "ring-primary bg-accent": isActive(),
              "ring-base-200 bg-primary": !isActive()
            }}
          />
        </Show>
      </div>
      <div class="flex w-full flex-col">
        <div class="flex items-center justify-between">
          <div class="flex items-center md:gap-1">
            <span class="text-base font-medium text-accent">
              {chat_user.full_name}
            </span>
            <Show when={chat_user.is_verified}>
              <div
                classList={{
                  "text-accent": isActive(),
                  "text-primary": !isActive()
                }}
              >
                <Verified />
              </div>
            </Show>
          </div>
          <div class="flex items-center gap-1">
            <Show when={self_message}>
              <Show
                when={room().message.is_read}
                fallback={
                  <Tick
                    variant="single"
                    class="flex-shrink-0 text-primary md:size-5"
                    classList={{
                      "!text-accent": isActive()
                    }}
                  />
                }
              >
                <Tick
                  variant="double"
                  class="flex-shrink-0 text-primary md:size-4"
                  classList={{
                    "!text-accent": isActive()
                  }}
                />
              </Show>
            </Show>
            <span
              class="text-xs font-normal uppercase text-neutral-200"
              classList={{
                "!text-accent": isActive()
              }}
            >
              {formated_timestamp}
            </span>
          </div>
        </div>
        <div class="flex items-center justify-between md:gap-1">
          <Show
            when={room().message.type === "gif"}
            fallback={
              <span
                class="line-clamp-1 text-base font-normal text-neutral-100"
                classList={{
                  "!text-accent": isActive()
                }}
              >
                {room().message.content}
              </span>
            }
          >
            <span
              class="text-sm text-neutral-100"
              classList={{
                "!text-accent": isActive()
              }}
            >
              GIF
            </span>
          </Show>
          <Show when={room().unreads}>
            <span
              class="grid aspect-square place-items-center rounded-full font-semibold leading-none md:size-5 md:text-xs"
              classList={{
                "bg-accent text-primary": isActive(),
                "bg-primary": !isActive()
              }}
            >
              {room().unreads}
            </span>
          </Show>
        </div>
      </div>
    </>
  );
};

export default DMRoom;
