import { API_ENDPOINT, URL } from "@/const/api";
import { log } from "console";

export interface Form {
    name: string;
    email: string;
    message: string;
    phone: string;
}

export const postForm = async (form: Form) => {
    const settings = {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    try {
        const res = await fetch(`${URL}/${API_ENDPOINT}/contact`, settings)
        const data = await res.json()
        console.log(data);
        
    } catch (err) {
        console.log(err);
    }

}