import type { Icon } from "~/types/icon";

export default function License(props: Icon) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 13q-1.25 0-2.125-.875T9 10q0-1.25.875-2.125T12 7q1.25 0 2.125.875T15 10q0 1.25-.875 2.125T12 13m0 8l-4.675 1.55q-.5.175-.913-.125t-.412-.8v-6.35q-.95-1.05-1.475-2.4T4 10q0-3.35 2.325-5.675T12 2q3.35 0 5.675 2.325T20 10q0 1.525-.525 2.875T18 15.275v6.35q0 .5-.413.8t-.912.125zm0-5q2.5 0 4.25-1.75T18 10q0-2.5-1.75-4.25T12 4Q9.5 4 7.75 5.75T6 10q0 2.5 1.75 4.25T12 16"
      />
    </svg>
  );
}
