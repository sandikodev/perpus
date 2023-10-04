import { component$ } from "@builder.io/qwik";
import type { LinkLiProps } from "./LinkLi";
import { LinkLi } from "./LinkLi";

export interface ListMenuProps {
    data: LinkLiProps[]
}

export const ListMenu = component$<ListMenuProps>((props) => {
    return (
        <ul class="ml-2">
            {props.data.map((menu, id) => <LinkLi key={id} to={menu.to} title={menu.title} />)}
        </ul>
    );
});