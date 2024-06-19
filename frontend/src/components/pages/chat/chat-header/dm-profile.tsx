import { Show, createEffect, createSignal } from "solid-js";
import Avatar from "~/components/ui/avatar";
import { useChat } from "~/context/chat";
import { ChatRoom } from "~/types/chat";

const DMProfile = (props: ChatRoom) => {
  const [isOnline, setIsOnline] = createSignal(false);
    const { onlineUsers, activeRoom } = useChat();

  createEffect(() => {
    setIsOnline(
      onlineUsers()?.some((user) => user.user === activeRoom()?.member[0].id)
        ? true
        : false
    );
  });

  return (
    <>
      <div class="size-10">
        <Avatar
          src={props.member[0].avatar ?? ""}
          alt={props.member[0].full_name ?? "Telegram User"}
          class="rounded-full text-lg font-bold text-accent"
        />
      </div>
      <div class="text-secondary flex flex-col items-start leading-none">
        <span class="text-base font-medium text-accent">
          {props.member[0].full_name}
        </span>
        <Show
          when={isOnline()}
          fallback={
            <span class="text-sm font-normal text-neutral-100">
              last seen recently
            </span>
          }
        >
          <span class="text-xs font-normal">online</span>
        </Show>
      </div>
    </>
  )
}

export default DMProfile;
