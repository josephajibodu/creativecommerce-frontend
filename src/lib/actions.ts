"use server"

export async function joinWaitlist(prevState: any, formData: FormData) {
    const formId = process.env.CONVERTKIT_FORM_ID
    const apiKey = process.env.CONVERTKIT_KEY

    if (!formId || !apiKey) {
        throw new Error("Environment variables CONVERTKIT_FORM_ID and CONVERTKIT_KEY must be set");
    }

    const data = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
    } as { firstname?: string, lastname?: string, email: string }

    if (!data.email) {
        throw new Error("Email is required");
    }

    const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: "POST",
        body: JSON.stringify({
            "first_name": data.firstname,
            "email": data.email,
            "fields": {
                "last_name": data.lastname
            },
            "tags": ['main website', 'flitsell', 'buildspace'],
            "api_key": apiKey
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return res.json()
}