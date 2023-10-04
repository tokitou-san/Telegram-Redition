import { Component, Show, Signal, createSignal } from "solid-js";
import Clip from "../../assets/icons/Clip";
import Emoji from "../../assets/icons/Emoji";
import Mic from "../../assets/icons/Mic";
import Send from "../../assets/icons/Send";

export const ChatInput: Component = () => {
	const [message, setMessage]: Signal<string> = createSignal("");

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
		/* logic for adding message */

		/* logic for adding message */
		setMessage("");
	};

	return (
		<form onSubmit={handleSubmit} class="h-[3.75vw] flex gap-[1vw] items-center bg-stone-900 px-[1vw]">
			<button
				type="button"
				class="text-[1.75vw] text-white/50 hover:text-white/75 transition-colors"
			>
				<Clip />
			</button>
			<input
				value={message()}
				onInput={(e) => setMessage(e.currentTarget.value)}
				type="type"
				autocomplete="off"
				name="message"
				placeholder="Write a message..."
				class="flex-1 border-none outline-none bg-transparent text-white text-[1vw]"
			/>
			<button
				type="button"
				class="text-[1.5vw] text-white/50 hover:text-white/75 transition-colors"
			>
				<Emoji />
			</button>
			<button
				type="submit"
				class="text-[1.65vw] text-white/50 hover:text-white/75 transition-colors"
			>
				<Show
					when={message()}
					fallback={<Mic />}
				>
					<Send />
				</Show>
			</button>
		</form>
	);
};