import { Component, For, JSX, Show } from "solid-js";
import { useShared } from "~/context/shared";
import Menu from "~/icons/menu";
import Phone from "~/icons/phone";
import Search from "~/icons/search";
import Split from "~/icons/split";

export const ChatHeader: Component = () => {
	const { toggleShowSidebar, activeChatUser } = useShared();

	const icon_mapping: {
		[key: string]: {
			icon: JSX.Element;
			onClick?: () => void;
		};
	} = {
		search: {
			icon: <Search />
		},
		phone: {
			icon: <Phone />
		},
		split: {
			icon: <Split />,
			onClick: () => toggleShowSidebar()
		},
		menu: {
			icon: <Menu variant="dots" />
		}
	};

	return (
		<div class="flex h-12 select-none items-center justify-between border-b-[0.1vw] border-black/50 bg-stone-900 px-3">
			<button
				onClick={toggleShowSidebar}
				class="flex items-center gap-3"
			>
				<img
					src={activeChatUser()?.avatar ?? ""}
					alt="anya-forger"
					class="size-8 rounded-full"
				/>
				<div class="flex flex-col items-start leading-none">
					<span class="text-sm font-medium text-white">
						{activeChatUser()?.first_name + " " + activeChatUser()?.last_name}
					</span>
					<Show
						when={activeChatUser()?.online}
						fallback={ <span class="text-xs text-white/50">Offline</span> }
					>
						<span class="text-xs text-blue-300">Online</span>
					</Show>
				</div>
			</button>
			<div class="flex items-center gap-3 text-lg text-white/50">
				<For each={Object.values(icon_mapping)}>
					{(icon) => (
						<button
							onClick={icon.onClick}
							class="transition-colors hover:text-white/75"
						>
							{icon.icon}
						</button>
					)}
				</For>
			</div>
		</div>
	);
};
