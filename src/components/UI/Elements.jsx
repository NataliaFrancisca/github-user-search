import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FlexGroup = ({icon, title}) => {
    return(
        <li className="font-cardFont flex items-center">
            {title 
                ? [<FontAwesomeIcon icon={icon} fixedWidth size="lg" />, <p className={`ml-2 font-normal text-sm`}>{title}</p>]
                : [<FontAwesomeIcon icon={icon} fixedWidth size="lg" className="text-slate-400"/>, <p className={`ml-2 font-normal text-sm text-slate-400`}>Not Available</p>]
            }
        </li>
    )
}

export const FlexColumnGroup = ({title, text}) => {
    return(
        <span className="font-cardFont">
            <label className={`text-sm`}>{title}</label>
            <p className="mt-1 font-semibold text-lg">{text}</p>
        </span>
    )
}

export const MessageError = ({backgroundCard, statusCode}) => {
    return(
        <div className={`w-full flex flex-col mt-6 p-8 rounded-lg center ${backgroundCard}`}>
            <h1 className="text-6xl font-menuFont font-semibold">{statusCode}</h1>
            <span className="mt-4 text-lg font-menuFont font-semibold tracking-wide">something wrong, try another user!!!</span>
        </div>
    )
}