import { component$ } from "@builder.io/qwik";
import type { JamLayanan } from "~/utils/Data";

export interface ListLayananProps {
    data: typeof JamLayanan
}

export const ListLayanan = component$<ListLayananProps>((props) => {

    return (
        <table class="table-fixed ml-2">
            <thead>
                <tr>
                    <th>Hari</th>
                    <th>Jam</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((layanan, id) => (
                    <tr key={id}>
                        <td>{layanan.day}</td>
                        <td>{layanan.time.start}-{layanan.time.end}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
});