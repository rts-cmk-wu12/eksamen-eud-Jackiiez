"use client";
//kode brugt fra tidlere projekt stackoverflow, hjælp af venner og youtube
import doTheLoginThing from "@/actions/dotheloginthing";
import { useActionState } from "react";
import "./login.scss"

import { success } from "zod";


const override = {
    display: "block",
    margin: "0 auto",
}



//funktion til at registrere en bruger med en post request med nedståene info som bliver tastet ind i inputsne
async function registrerBruger(formData) {
    const response = await fetch("http://localhost:4000/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",

        }, body: new URLSearchParams(formData).toString(),
    });


    const responseData = await response.json();
    console.log("parsed data", responseData)
    return responseData
}


//håndtering af registrering og login(når man klikker på knappen køre formaction som aktivere handle register som
//  så getter username og password og vi bruger den i dotheloginthing(vi henter formData))
async function handleRegister(state, formData) {
    const username = formData.get("username");
    const password = formData.get("password");


    console.log({ username, password })

    const registerResponse = await registrerBruger({
        username, password
    })


    //check om registrering var succesfuld
    if (registerResponse && registerResponse.id) {
        const loginresponse = await doTheLoginThing(state, formData)
        return loginresponse;
    }
    //error vis noget gik galt
    return {
        success: false,
        errors: ["Registrering fejlede", "uventet svar"],
    };
}



//component for loginformen
export default function LoginForm() {

    //status for loading osv
    //use actionstate er en react hook som tager imod 2 states og en funktion, en
    const [formState, formAction, isPending] = useActionState(handleRegister);

    return isPending ? (
        <>loading</>
    ) :

        <form className="loginform" action={formAction}>
            <div className="loginoutter">
                <div>

                    <label className="loginform__label">
                        <span className="loginform__span">Email</span>
                        <input className="loginform__input" type="email" name="email" placeholder="Email" />

                    </label>
                </div>
                <div>
                    <label className="loginform__label">
                        <span className="loginform__span">Adgangskode</span>
                        <input className="loginform__input" type="password" name="password" placeholder="Adgangskode" />

                    </label>
                </div>


                <button className="loginform__button" type="submit">Sign in</button>
                <p>Forgot Password?</p>
            </div>
            <p>{formState?.errors}</p>
            <p>{formState?.message}</p>
        </form>


        ;
}