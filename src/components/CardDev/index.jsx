import { FlexGroup, FlexColumnGroup } from "../UI/Elements";

import { formatDate } from "../../functions/format_date";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faLink, faHouseLaptop } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const CardDev = ({cardStyles, dataUser}) => {

    const {followers, following, avatar_url, name, login, location} = dataUser;
    const {html_url, bio, company, public_repos, twitter_username, created_at, blog} = dataUser;

    const {card, body, cardColor} = cardStyles;

    return(
        <article className={`w-full flex flex-col mt-6 p-8 rounded-lg items-end ${card}`}>

            <section className="w-full flex justify-between">
                <img className="rounded-full object-cover h-28 w-28" src={avatar_url} />

                <aside className="flex w-9/12 ml-4 align-top justify-between flex-col md:flex-row " > 
                    <div>
                        <h1 className="font-cardFont text-xl font-semibold mb-2">{name}</h1>
                        <a href={html_url} className="text-blue-400">{`@${login}`}</a>
                    </div>

                    <span className="font-cardFont text-sm font-normal mt-2 lg:mt-0">{`Joined ${formatDate(created_at)}`}</span>
                </aside>
            </section>

            <section className="w-full flex justify-end mt-6 md:mt-0">
                <div className="flex flex-col w-full md:w-9/12" > 
                    <p className={`text-base ${cardColor} mb-2`}>{bio ? bio : "Not Available"} </p>

                    <aside className={`flex p-6 rounded-lg my-2 space-x-4 md:space-x-8 ${body} ${cardColor}`}>
                        <FlexColumnGroup title="Repos" text={public_repos} />
                        <FlexColumnGroup title="Followers" text={followers} />
                        <FlexColumnGroup title="Following" text={following} />
                    </aside>

                    <ul className={`grid grid-cols-1 gap-x-8 gap-y-4 my-2 sm:grid-cols-2 ${cardColor}`}>
                        <FlexGroup icon={faLocationDot} title={location} />
                        <FlexGroup icon={faTwitter} title={twitter_username} />
                        <li className="font-cardFont flex items-center">
                            {blog 
                                ? [<FontAwesomeIcon icon={faLink} fixedWidth size="lg" />, <a href={blog} className={`ml-2 font-normal text-sm break-all`}>{blog}</a>]
                                : [<FontAwesomeIcon icon={faLink} fixedWidth size="lg" className="text-slate-400"/>, <a href={blog} className={`ml-2 font-normal text-sm text-slate-400 break-all`}>Not Available</a>]
                            }
                        </li>
                        <FlexGroup icon={faHouseLaptop} title={company} />
                    </ul>
                </div>
            </section>

        </article>
    )
}

export default CardDev;