export const FlexGroup = ({icon, title}) => {
    return(
        <span className="font-cardFont flex items-center">
            <label class="material-symbols-outlined">{icon}</label>
            <p className={`ml-2 font-normal text-sm`}>{title}</p>
        </span>
    )
}


export const FlexColumnGroup = ({title, text}) => {
    return(
        <span className="pr-20 font-cardFont">
            <label className={`text-sm`}>{title}</label>
            <p className="mt-1 font-semibold text-lg">{text}</p>
        </span>
    )
}