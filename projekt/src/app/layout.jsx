
import "../components/nav/navigation.scss"
import Navigation from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css"



export const metadata = {
  title:{
    template: "%s | Swapper",
    default: "Swapper"
  },
  description:"Eksamen på WU12"

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body >  <div className="root">
        <Navigation/>
        {children}
        <Footer></Footer></div>
      </body>
    </html>
  );
}
