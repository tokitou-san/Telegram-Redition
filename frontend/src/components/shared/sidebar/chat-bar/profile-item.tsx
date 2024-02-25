import { A, useParams } from "solid-start";
import { destructure } from "@solid-primitives/destructure";
import { FormatDate } from "~/functions/format-date";
import { Match, Show, Switch, createEffect, createSignal } from "solid-js";
import { get_username } from "~/functions/get-username";
import { useAuth } from "~/context/auth";
import Tick from "~/icons/tick";
import { ChatRoom } from "~/types/chat.types";
import { useChat } from "~/context/chat";
import Verified from "~/icons/verified";
import Photo from "~/icons/photo";
import Gif from "~/icons/gif";
import { cn } from "~/functions/cn";

export const ProfileItem = (props: ChatRoom) => {
	const { user } = useAuth();
	const { onlineUsers, setActiveRoom, socket, activeRoom } = useChat();
	const [isActive, setIsActive] = createSignal(false);
	const [isOnline, setIsOnline] = createSignal(false);
	const params = useParams<{ username: string }>();

	const { message, member, unreads } = destructure(props);

	const chat_user = member()[0];
	const self_message = message().sender === user()?.id;
	const formated_timestamp = new FormatDate(message().timestamp).format_to_relative_time;

	const handleChatClick = () => {
		setActiveRoom(props);
	};

	createEffect(() => {
		setIsOnline(onlineUsers()?.some((user) => user.user === chat_user.id) ? true : false);
	}, [onlineUsers]);

	createEffect(() => {
		if (!params.username) return;
		setIsActive(get_username(params.username) === chat_user.username);
	}, [params.username]);

	return (
		<A
			href={`/@${chat_user.username}`}
			class={cn(isActive() && "!bg-primary", "btn w-full h-auto flex-nowrap flex select-none items-center gap-3 rounded-xl px-3 py-2 bg-transparent hover:bg-base-100 border-none")}
			onClick={handleChatClick}
		>
			<div class="relative size-12 flex-shrink-0">
				<img
					class="size-full rounded-full"
					src={chat_user.avatar ?? ""}
					alt={chat_user.username}
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
			<div
				class="flex w-full flex-col"
				classList={{
					"text-white": isActive(),
					"text-white/75": !isActive()
				}}
			>
				<div class="flex items-center justify-between">
					<div class="flex items-center md:gap-1">
						<span class="text-sm font-medium text-white">{chat_user.full_name}</span>
						<Show when={chat_user.is_verified}>
							<div
								classList={{
									"text-white": isActive(),
									"text-blue-500": !isActive()
								}}
							>
								<Verified />
							</div>
						</Show>
					</div>
					<div class="flex items-center gap-1">
						<Show when={self_message}>
							<Show
								when={message().is_read}
								fallback={
									<Tick
										variant="single"
										class="flex-shrink-0 md:size-4"
									/>
								}
							>
								<Tick
									variant="double"
									class="flex-shrink-0 text-blue-300 md:size-4"
									classList={{ "!text-white": isActive() }}
								/>
							</Show>
						</Show>
						<span class="text-xs uppercase font-normal">{formated_timestamp}</span>
					</div>
				</div>
				<div class="flex items-center justify-between md:gap-1">
					<Show
						when={message().type === "gif"}
						fallback={<span class="line-clamp-1 text-sm font-normal">{message().content}</span>}
					>
						<span class="text-sm">GIF</span>
					</Show>
					<Show
						when={self_message}
						fallback={
							<Show when={unreads() && !isActive()}>
								<span class="grid place-items-center rounded-full bg-blue-500 font-semibold leading-none md:size-5 md:text-xs">{unreads()}</span>
							</Show>
						}
					>
						<Switch>
							<Match when={message().type === "image"}>
								<Photo class="flex-shrink-0 md:size-4" />
							</Match>
							<Match when={message().type === "gif"}>
								<Gif class="flex-shrink-0 md:size-4" />
							</Match>
						</Switch>
					</Show>
				</div>
			</div>
		</A>
	);
};
