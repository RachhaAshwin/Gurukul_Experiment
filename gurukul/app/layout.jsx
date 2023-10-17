import "../styles/globals.css";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const metadata = {
  title: "Gurukul",
  description: "An AI based Coding Mentor",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <ClerkProvider>
    <>
    <SignedIn>
      <>
        {/* <header className=""> */}
        {/* </header> */}
        <body>
        <UserButton className="absolute top-4 left-4 p-3 bg-gray-100 rounded-lg shadow-lg z-50 text-gray-800"/>

        {children}
        </body>
      </>
    </SignedIn>
    <SignedOut>
        <body>
        {children}
        </body>
    </SignedOut>
    </>
    </ClerkProvider>

  
  
  </html>
);

export default RootLayout;