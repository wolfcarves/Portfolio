import { Link } from "react-router-dom"

const Button = ({ path, text }) => {
    const buttonCss = `
        .button {
            position: relative;
            background-color: #06fa47;
        }

        .blocker {
            position: absolute;
            width: 0%;
            height: 100%;
            background: #ffff;
            inset: 0;
            transition: 0.1s linear;
        }

        .button:hover .blocker {
            width: 100%;
        }
        
        `

    return (
        <div>
            <style>{buttonCss}</style>

            <Link to={path}
                className={`button
                        flex items-center px-20 py-8 mt-8 mx-1
                        inter-ff
                        text-black text-lg
                        `}>
                <div className="blocker"></div>
                <span className="absolute inset-0 m-auto h-max whitespace-nowrap font-bold">
                    {text}
                </span>
            </Link>
        </div>
    )
}

export default Button