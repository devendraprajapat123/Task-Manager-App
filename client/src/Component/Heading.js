import { Alert } from "react-bootstrap";

export function Heading({ title }) {

    return (
        <>
            <Alert className="text-center mt-3">{title}</Alert>
        </>
    )

}