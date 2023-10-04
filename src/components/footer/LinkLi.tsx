import { component$ } from "@builder.io/qwik";

export interface LinkLiProps {
    to: string,
    title: string
}

export const LinkLi = component$<LinkLiProps>((props) => {
    return (
        <li class="hover:bg-red-200 my-1">
            <a href={props.to}>{props.title}</a>
        </li>
    );
});