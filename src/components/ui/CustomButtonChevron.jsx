import { ChevronRight, ChevronLeft } from "lucide-react";

export default function CustomButtonChevron({ direction, onClick }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      on:click={onClick}
      class="border-theme-gray hover:bg-theme-green flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-colors duration-200"
    >
      <span class="text-theme-gray">
        <Icon />
      </span>
    </button>
  );
}
