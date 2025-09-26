# Dokumentation for Swapper (Eksamen)
# Jackie Hansen
## sådan kommer du igang
`cd projekt`  
`npm i`
`npm run dev`

`cd api` 
`npm i` 
`npm run start` 


 
https://minadresse.dk/iplaymusic
jeg har lavet "valgfri" opgave C
 
 
 
 
# tech stack
* Nextjs, et front-end framework baseret på React.js......
* **React** Et bibliotek der giver mulighed for at lave compnenter
og håndtere states på en god og let måde. React har et kæmpe community
med et stort modul bibliotet som er aktivt, vel-dokomenteret og vel-understøttet.
det er også det mest brugte frontend-bibliotek i verden, så efterspørgelsen på react udviklere er stor
 
* **git** et versioncontrols værktøj(VCS) som lader mig lave branches og versioner
af min kode, så jeg let kan gå tilbage til tidligere versioner,
vis jeg for eksempel har lavet en fejl. jeg bruger git sammen med github
 

* **Sass**
En udvidelse til css, som lader mig lave funktioner,variabler, nesting og mixins
* **React icons**
et ikon-bibliotek som er beregnet på React.
 
* **Swapper API**
Et interface til at få adgang til Eksamens data, så
jeg kan lave min egen app. Man skal klone APIet ned fra github og derefter `cd api`  `npm i` og `npm run start` og så køre APIet på port 4000 hvor vi har en dokumentation
 
 
 
 
 
## code example
Projekt/Src/components/ui/logincomponent/index.jsx
```jsx
"use client";

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
 
 
```
 
  Når man sender aktivere formen så køre form action som er en react hook som tager 2 states og en funktion 
  hvor vi i actionstatet sætter vores handleregister funktion som aktivere vores "dotheloginthing" funktion fra vores
  anden fil og vis det går godt så får vi et nice response som vi har defineret og valideret og gemt i cookie 
  inde i dotheloginthing








 # ÆNDRINGER
  * Forside: har ik inkluderet advanced filter søgning i venstre side og har ik pagination da jeg ik har prøvet at lave det før så prioteret min tid udfra det
 
  