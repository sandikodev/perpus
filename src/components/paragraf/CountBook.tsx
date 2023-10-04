import { Slot, component$ } from "@builder.io/qwik";

type Props = {
  color?: string
}
export const CountBook = component$<Props>(({ color = "red" }) => {
  return <span class={`bg-${color}-200 hover:bg-${color}-300 rounded px-1`}><Slot /></span>
});