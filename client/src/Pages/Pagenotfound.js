import { Link } from "react-router-dom";
import { Layout } from "../Component/Layout";

export function PagenotFound() {
    return (
        <Layout >
            <div className="color">


                <div className="pnf">
                    <h1 className="pnf-title">404</h1>
                    <h2 className="pnf-heading">Oops ! This Page is Under Process</h2>
                    <Link to='/' className="pnf-btn">Go Back</Link>
                </div>
            </div>
        </Layout>
    )

}