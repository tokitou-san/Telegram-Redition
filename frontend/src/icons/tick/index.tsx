import { component$ } from "@builder.io/qwik";
import { Icon } from "~/types/components/icon";

export default component$<Icon>((props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      {
        props.variant === "single" ?
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m2.75 8.75l3.5 3.5l7-7.5"
          />
          :
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.1"
            d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
          />
      }
    </svg>
  )
})
