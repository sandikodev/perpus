import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Card } from "~/components/posts/Card";
import { wordpressQuery } from "~/utils/WP";

type FeaturedImage = {
    mediaItemUrl: string,
    srcSet: string,
    sizes: string,
    altText: string
}

type Author = {
    name: string
}

type Post = {
    title: string,
    slug: string,
    date: string,
    featuredImage?: {
        node: FeaturedImage
    }
    content: string,
    author: {
        node: Author
    }
}

export const useBlogPosts = routeLoader$(async () => {
    // This code runs only on the server, after every navigation
    const data = await wordpressQuery({
        query: `
            query LoadAllPosts {
                posts {
                    nodes {
                        title
                        slug
                        date
                        featuredImage {
                            node {
                                mediaItemUrl
                                srcSet
                                sizes
                                altText
                            }
                        }
                        content(format: RENDERED)
                        author {
                            node {
                                name
                            }
                        }
                    }
                }
            }
        `,
    });

    // console.log(data.posts.nodes)

    // return {
    //     title: "judul",
    //     content: "isian konten"
    // } as Post

    // return data.posts.nodes.map((article: any) => {
    //     return {
    //         params: { slug: article.slug },
    //         props: { article },
    //     };
    // });
    return data.posts.nodes as Post[]
});

export default component$(() => {
    const signal = useBlogPosts();
    console.log(signal.value.map(post => post.date.split('T')))
    return (
        <div>
            <div class="max-w-screen-xl p-5 mx-auto text-white dark:bg-gray-800 dark:text-gray-100 mb-10">
                <div id="title" class="text-start mb-2 mt-8">
                    <h1 class="font-semibold text-gray-800 text-xl">Artikel Terkini</h1>
                    <p class="font-bold text-gray-900 text-3xl">Graha Waskita Kencana</p>
                </div>
                <div class="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                    {
                        signal.value.slice(0, 4).map(post => <Card title={post.title} excerpts={post.content} date={post.date} />)
                    }
                </div>
            </div>
            <div class="max-w-screen-xl p-5 mx-auto text-white dark:bg-gray-800 dark:text-gray-100">
                <div id="title" class="text-end mb-2 mt-8">
                    <p class="font-bold text-gray-900 text-3xl">Lainnya</p>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
                    <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500" style="background-image: url(https://source.unsplash.com/random/245x320);">
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">Art</a>
                            <div class="flex flex-col justify-start text-center dark:text-gray-100">
                                <span class="text-3xl font-semibold leadi tracki">31</span>
                                <span class="leadi uppercase">Jul</span>
                            </div>
                        </div>
                        <h2 class="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" class="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100">Fuga ea ullam earum assumenda, beatae labore eligendi.</a>
                        </h2>
                    </div>
                    <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style="background-image: url(&quot;https://source.unsplash.com/random/240x320&quot;);">
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">Politics</a>
                            <div class="flex flex-col justify-start text-center dark:text-gray-100">
                                <span class="text-3xl font-semibold leadi tracki">04</span>
                                <span class="leadi uppercase">Aug</span>
                            </div>
                        </div>
                        <h2 class="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" class="font-medium text-md group-hover:underline dark:text-gray-100"> Autem sunt tempora mollitia magnam non voluptates</a>
                        </h2>
                    </div>
                    <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style="background-image: url(&quot;https://source.unsplash.com/random/241x320&quot;);">
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">Health</a>
                            <div class="flex flex-col justify-start text-center dark:text-gray-100">
                                <span class="text-3xl font-semibold leadi tracki">01</span>
                                <span class="leadi uppercase">Aug</span>
                            </div>
                        </div>
                        <h2 class="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" class="font-medium text-md group-hover:underline dark:text-gray-100">Inventore reiciendis aliquam excepturi</a>
                        </h2>
                    </div>
                    <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style="background-image: url(&quot;https://source.unsplash.com/random/242x320&quot;);">
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">Science</a>
                            <div class="flex flex-col justify-start text-center dark:text-gray-100">
                                <span class="text-3xl font-semibold leadi tracki">28</span>
                                <span class="leadi uppercase">Jul</span>
                            </div>
                        </div>
                        <h2 class="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" class="font-medium text-md group-hover:underline dark:text-gray-100">Officiis mollitia dignissimos commodi optio vero animi</a>
                        </h2>
                    </div>
                    <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style="background-image: url(&quot;https://source.unsplash.com/random/243x320&quot;);">
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">Sports</a>
                            <div class="flex flex-col justify-start text-center dark:text-gray-100">
                                <span class="text-3xl font-semibold leadi tracki">19</span>
                                <span class="leadi uppercase">Jul</span>
                            </div>
                        </div>
                        <h2 class="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" class="font-medium text-md group-hover:underline dark:text-gray-100">Doloribus sit illo necessitatibus architecto exercitationem enim</a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
});
