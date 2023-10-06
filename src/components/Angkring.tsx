import { component$ } from "@builder.io/qwik";
export interface AngkringProps {
    id: string
    title: string
}

export const Angkring = component$<AngkringProps>((props) => {
    return (
        <div class="shrink-0 flex flex-col bg-red-200 w-[80%] p-2" id={props.id}>
            <h1 class="text-3xl font-semibold">{props.title}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, eius necessitatibus voluptate tempore, reiciendis exercitationem, hic quisquam reprehenderit dolore quibusdam soluta ab et excepturi delectus aut vero nisi. Quod, molestias.
                Quia adipisci natus perferendis voluptates. Tenetur saepe ducimus sint, delectus quidem quia hic! Placeat maiores quae illum laborum atque, excepturi non reprehenderit labore ab. Culpa qui sit mollitia aperiam id?
                Ratione quas culpa saepe voluptate repellendus eaque, sunt id repudiandae veniam ex velit dolore similique accusantium! Dolores reiciendis quo reprehenderit consequatur labore. Accusantium, ipsum dolor vel qui aut numquam ut.
                Reiciendis eius, tem.</p>
        </div>
    )
});