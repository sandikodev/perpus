import { component$ } from "@builder.io/qwik";
import { TitleFooter } from "./footer/TitleFooter";
import { ListMenu } from "./footer/ListMenu";
import { Contact, JamLayanan, Menu } from "~/utils/Data";
import { ListLayanan } from "./footer/ListLayanan";

export const Footer = component$(() => {
    return (

        <footer class="bg-gray-100 pt-4">
            <div class="container mx-auto">
                <div class="max-w-4xl mx-auto px-4">
                    <div class="flex sm:flex-row sm:justify-between flex-col">
                        <div class="w-full flex flex-col sm:flex-row sm:justify-around">
                            <div class="">
                                <TitleFooter title="Menu" />
                                <ListMenu data={Menu} />
                            </div>
                            <div class="">
                                <TitleFooter title="Informasi" />
                                <ul class="ml-2">
                                    {Contact.map((contact, id) => (<li key={id} class="mb-1"><b class="font-medium">{contact.title}</b>: {contact.detail}</li>))}
                                    <li class="mb-1"><b class="font-medium">Instagram</b>: <a href="https://www.instagram.com/grahawaskita">Graha Waskita Kencana</a></li>
                                    <li class="mb-1"><b class="font-medium">Facebook</b>: <a href="https://www.facebook.com/profile.php?id=100077738111157">FB GWK</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="shrink-0">
                            <TitleFooter title="Layanan" />
                            <ListLayanan data={JamLayanan} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col p-2 items-center">
                <p class="w-full text-center text-gray-500">
                    © 2023 SMP N 1 Srandakan | &nbsp;Powered by&nbsp;Tim ICT Sransa
                </p>
                <span class="text-gray-400">butuh bantuan ? <a href="/support" class="hover:text-gray-500">
                    hubungi kami
                </a></span>
            </div>
        </footer>

    )
});