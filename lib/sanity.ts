import imageUrlBuilder from "@sanity/image-url"
import {createClient} from "next-sanity"

export const client = createClient({
    apiVersion:"2023-03-07",
    dataset: "production",
    projectId: "1jr3i9mf",
    useCdn: false
})


const builder = imageUrlBuilder(client);

export function urlFor(source:any) {
    return builder.image(source);
}