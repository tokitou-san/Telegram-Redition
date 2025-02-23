import { destructure } from "@solid-primitives/destructure";
import Arrow from "~/icons/arrow";
import Menu from "~/icons/menu";
import Pencil from "~/icons/pencil";

type Props = {
  toggleView: () => void;
};

export const SettingsHeader = (props: Props) => {
  const { toggleView } = destructure(props);

  return (
    <div class="flex h-14 items-center justify-between gap-3 px-3 text-accent">
      <div class="flex items-center gap-3">
        <button
          onClick={toggleView()}
          class="grid size-10 place-items-center rounded-full text-2xl text-neutral-100 hover:bg-base-300"
        >
          <Arrow variant="left" />
        </button>
        <h3 class="select-none text-lg font-medium">Settings</h3>
      </div>
      <div class="flex items-center gap-1">
        <button class="grid size-10 place-items-center rounded-full text-xl text-neutral-100 hover:bg-base-300">
          <Pencil />
        </button>
        <button class="grid size-10 place-items-center rounded-full text-xl text-neutral-100 hover:bg-base-300">
          <Menu variant="dots" />
        </button>
      </div>
    </div>
  );
};
