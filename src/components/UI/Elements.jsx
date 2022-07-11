import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FlexGroup = ({icon, title}) => {
    return(
        <span className="font-cardFont flex items-center">
            {title 
                ? [<FontAwesomeIcon icon={icon} />, <p className={`ml-2 font-normal text-sm`}>{title}</p>]
                : [<FontAwesomeIcon icon={icon} className="text-slate-400"/>, <p className={`ml-2 font-normal text-sm text-slate-400`}>Not Available</p>]
            }
        </span>
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