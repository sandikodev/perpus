import { Slot, component$ } from "@builder.io/qwik";

export interface PagesProps {
    imageHead?: string
    isContainer?: boolean
    class?: string
}

export const Pages = component$<PagesProps>((props) => {
    const { isContainer = true } = props //default is true
    return (
        <div class={`flex w-full ${isContainer ? 'flex-col': 'flex-row'}`}>
            {props.imageHead && (
                <div class="h-32 md:h-72 sm:h-52">
                    <img class="h-32 md:h-72 sm:h-52 object-cover w-full" src={props.imageHead} width={1600} height={1196} />
                </div>
            )}
            {
                isContainer ? (
                    <div class="container mx-auto">
                        <Slot />
                    </div>
                ) : (
                    <Slot />
                )
            }
        </div>
    );
});