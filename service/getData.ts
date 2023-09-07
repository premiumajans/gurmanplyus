import { API_ENDPOINT, URL } from "@/const/api";

export async function getData(endpoint: string) {
    const res = await fetch(`${URL}/${API_ENDPOINT}/${endpoint}`,{cache: "no-store"})
    return await res.json()
}