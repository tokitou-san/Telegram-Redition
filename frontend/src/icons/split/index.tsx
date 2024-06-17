import type { Icon } from "~/types/icon";

export default function Split(props: Icon) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
    >
      <path
        fill="currentColor"
        d="M5.5 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5m-3 1H4v1H2.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H4v1H2.5A1.5 1.5 0 0 1 1 8.5v-5A1.5 1.5 0 0 1 2.5 2m6 7H7v1h1.5A1.5 1.5 0 0 0 10 8.5v-5A1.5 1.5 0 0 0 8.5 2H7v1h1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5"
      />
    </svg>
  );
}
