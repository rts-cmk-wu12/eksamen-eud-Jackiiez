"use server";

//kode brugt fra tidlere projekt og youtube videoer og stackoverflow


//side til at validere og lave cookies så sessionen husker at vi er logget ind
import { cookies } from "next/headers";
import z, { success } from "zod";

export default async function doTheLoginThing(prevState, formData) {
    //vi henter alt der er blevet tastet og postet i userfelterne
    const email = formData.get("email");
    const password = formData.get("password");

    //zod validering
    const schema = z.object({
        email: z.string().min(1, { message: "Email skal være udfyldt" }),
        password: z.string().min(1, { message: "Adgangskode skal være udfyldt" }),

    });

    const validated = schema.safeParse({
        email, password
    });
  
    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }


    //post request til at validere vores inputs for at få vores session/auth token fra apiet (/auth/login)

    const response = await fetch(`http://localhost:4000/api/v1/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",

        },
        body: new URLSearchParams({
            email: validated.data.email,
            password: validated.data.password,

        })

    });

    //fejlhåndtering
    if (!response.ok) {
        const errorText = await response.text();
        console.error("error response:", errorText)
        return {
            success: false,
            errors: ["fejl på server" + errorText]
        }
    }


    const json = await response.json();

    //vis alt går godt får vi en cookie hvor vi gemmer session token som er kaldt (json)
    if (json && json.id) {
        const cookieStore = await cookies()
        cookieStore.set("Success", "Du er nu logget ind!", {
            maxAge: 60 * 30
        }



        )
        return { success: true,
             email: json ,
            message: ["Du er logget nu ind!"]
        };
    }
    return {
        success: false,
        errors: ["brugeren kunne ik oprettes"],
    };


}