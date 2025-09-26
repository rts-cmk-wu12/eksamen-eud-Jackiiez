

import "../../../components/ui/logincomponent/login.scss"

export const metadata={
    title:"Contact"
}




export default function Contact() {


    return (

        <form className="loginform" action={"/"}>
            <div className="loginoutter">
                <div>

                    <label className="loginform__label">
                        <span className="loginform__span">Email</span>
                        <input className="loginform__input" type="email" name="email" placeholder="Email" />

                    </label>
                </div>
                <div>
                    <label className="loginform__label">
                        <span className="loginform__span">name</span>
                        <input className="loginform__input" type="text"  placeholder="name" required />

                    </label>
                </div>
                    <div>
                    <label className="loginform__label">
                        <span className="loginform__span">I agree to receive newsletters and accept the privacy policy. <input className="loginform__input" type="checkbox" required  /></span>
                       

                    </label>
                </div>


                <button className="loginform__button" type="submit">kontakt os</button>
       
            </div>
          
        </form>

)
        ;
}