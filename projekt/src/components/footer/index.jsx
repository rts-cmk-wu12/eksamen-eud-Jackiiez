import Image from "next/image";
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import "./footer.scss"
export default function Footer() {
    return (
        <footer>
            <hr />
            <ul>
                <li><div className="swaphub">
                    <Image src="/Icon.png" alt="" width="40" height="40" quality={25} priority={true} />
                    <h1>Swaphub</h1></div>
                    <div>
                        <FaXTwitter />
                        <FaInstagram />
                        <FaYoutube />
                        <FaLinkedin />
                    </div>
                </li>
                <li>
                    <h3>About SwapHub</h3>
                    <p>how it works</p>
                    <p>Community guidelines</p>
                    <p>Our mission</p>
                    <p>Contact us</p>
                </li>
                <li>  <h3>Discover</h3>
                    <p>how it works</p>
                    <p>Browse categories</p>
                    <p>Successful stories</p>
                    <p>Upcoming events</p></li>
                <li>  <h3>Support</h3>
                    <p>Helpcenter</p>
                    <p>FAQs</p>
                    <p>Safety tips</p>
                    <p>Report an issue</p></li>
            </ul>
        </footer>
    );
}