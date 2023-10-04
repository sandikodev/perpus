import { Slot, component$ } from "@builder.io/qwik";

export interface PagesProps {
    imageHead?: string
}

export const Pages = component$<PagesProps>((props) => {
    return (
        <div>
            {props.imageHead && (
                <div class="h-32 md:h-72 sm:h-52">
                    <img class="h-32 md:h-72 sm:h-52 object-cover w-full" src={props.imageHead} width={1600} height={1196} />
                </div>
            )}
            <div class="container mx-auto">
                <Slot />
            </div>
        </div>
    );
});