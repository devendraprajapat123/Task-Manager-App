import { Link } from 'react-router-dom'
export function Footer() {
    return (
        <>
            <div className="footer" >

                <h4 className="text-center">
                    All Right Reserved &copy; Task Manager - App
                </h4>
                <p className="text-center mt-3">
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/policy'>Privacy Policy</Link>


                </p>
            </div>
        </>
    )

}