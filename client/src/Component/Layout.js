
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }) {
    return (
        <>
            <Header />
            <main style={{ minHeight: "70vh" }}>{children}</main>
            <Footer />


        </>
    )

}