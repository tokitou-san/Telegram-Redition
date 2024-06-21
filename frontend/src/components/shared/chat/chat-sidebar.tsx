import { Show } from "solid-js";
import { useChat } from "~/context/chat";
import { useShared } from "~/context/shared";
import At from "~/icons/at";
import Close from "~/icons/close";
import Info from "~/icons/info";
import Avatar from "~/components/ui/avatar";

const ChatSidebar = () => {
  const { toggleShowSidebar } = useShared();
  const { activeRoom } = useChat();
  const IS_DM = activeRoom()?.type === "DM";

  return (
    <>
      <div class="absolute right-0 h-full whitespace-nowrap border-l border-neutral-300 bg-base-200 md:w-80 xl:static">
        <div class="flex h-14 items-center md:gap-4 md:px-5">
          <button
            onClick={toggleShowSidebar}
            class="grid place-items-center rounded-full text-neutral-100 hover:bg-base-300 md:size-10"
          >
            <Close class="md:size-7" />
          </button>
          <h3 class="flex items-center font-medium text-accent md:gap-3 md:text-lg">
            User Info
          </h3>
        </div>
        <div class="relative aspect-square object-cover">
          <Show
            when={IS_DM}
            fallback={
              <Avatar
                color={activeRoom()?.color ?? ""}
                src={activeRoom()?.avatar ?? ""}
                alt={activeRoom()?.name ?? ""}
                class="object-cover text-[15rem] font-bold text-accent"
              />
            }
          >
            <Avatar
              color={activeRoom()?.members[0].color}
              src={activeRoom()?.members[0].avatar ?? ""}
              alt={activeRoom()?.members[0].full_name ?? ""}
              class="object-cover text-[15rem] font-bold text-accent"
            />
          </Show>
          <div class="absolute inset-x-0 bottom-0 flex h-1/2 flex-col justify-end bg-gradient-to-t from-base-200/50 to-transparent md:gap-1.5 md:px-5 md:py-2">
            <span class="text-xl font-medium leading-none text-accent">
              {IS_DM ? activeRoom()?.members[0].full_name : activeRoom()?.name}
            </span>
            <span class="text-sm leading-none text-accent/50">
              last seen recently
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-3 p-5 text-accent">
          <div class="grid grid-cols-8">
            <At class="col-span-1 size-6 self-center text-neutral-100" />
            <div class="col-span-7 flex flex-col">
              <span>
                {IS_DM ? activeRoom()?.members[0].username : activeRoom()?.id}
              </span>
              <span class="select-none text-sm text-neutral-100">
                Username/Id
              </span>
            </div>
          </div>
          <div class="grid grid-cols-8">
            <Info class="col-span-1 size-[1.4rem] self-center text-neutral-100" />
            <div class="col-span-7 flex flex-col">
              <span class="whitespace-pre-line">
                {IS_DM ? activeRoom()?.members[0].bio : activeRoom()?.bio}
              </span>
              <span class="select-none text-sm text-neutral-100">Bio</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
