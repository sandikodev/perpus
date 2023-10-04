import { component$ } from "@builder.io/qwik";

export interface TitleFooterProps {
    title: string
}

export const TitleFooter = component$<TitleFooterProps>((props) => {
    return (<h1 class="font-bold py-2">{props.title}</h1>);
});