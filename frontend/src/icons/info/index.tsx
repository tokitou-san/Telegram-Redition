import { Icon } from "~/types/icon.types";

export default function Info(props: Icon) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
		>
			<g
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width={2}
			>
				<circle
					cx={12}
					cy={12}
					r={10}
				/>
				<path d="M12 16v-4m0-4h.01" />
			</g>
		</svg>
	);
}
