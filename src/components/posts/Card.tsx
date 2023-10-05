import { component$ } from "@builder.io/qwik";

export interface CardProps {
    title: string
    excerpts: string
    date: string
}

export const Card = component$<CardProps>((props) => {
    const [day, time] = props.date
    const year = day.split('-')[0]
    const month = day.split('-')[1]
    const now = day.split('-')[2]
    console.log(time, year)
    return (
        <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" style="background-image: url(&quot;https://source.unsplash.com/random/240x320&quot;);">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a rel="noopener noreferrer" href="#" class="px-3 py-2 text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined">{props.title}</a>
                <div class="flex flex-col justify-start text-center dark:text-gray-100">
                    <span class="text-3xl font-semibold leadi tracki">{now}</span>
                    <span class="leadi uppercase">{month}</span>
                </div>
            </div>
            <h2 class="z-10 p-5">
                <a rel="noopener noreferrer" href="#" class="font-medium text-md hover:underline dark:text-gray-100">{props.excerpts.substring(0, 50)}</a>
            </h2>
        </div>
    );
});