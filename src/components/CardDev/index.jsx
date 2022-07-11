import { FlexGroup, FlexColumnGroup } from "../UI/Elements";

import { formatDate } from "../../functions/format_date";

import { faLocationDot, faLink, faHouseLaptop } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const CardDev = ({backgroundCard, backgroundBody, cardColor, dataUser}) => {

    const { followers, following } = dataUser;
    const { avatar_url, name, login, location } = dataUser;
    const { html_url, bio, company, public_repos, twitter_username, created_at} = dataUser;

    return(
        <article className={`w-full flex flex-col mt-6 p-8 rounded-lg items-end ${backgroundCard}`}>

            <section className="w-full flex justify-between">
                <img className="rounded-full object-cover h-24 w-24" src={avatar_url} />

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
                    <p className={`text-base ${cardColor}`}>{bio ? bio : "Not Available"} </p>

                    <aside className={`flex p-6 rounded-lg my-2 space-x-4 md:space-x-8 ${backgroundBody} ${cardColor}`}>
                        <FlexColumnGroup title="Repos" text={public_repos} />
                        <FlexColumnGroup title="Followers" text={followers} />
                        <FlexColumnGroup title="Following" text={following} />
                    </aside>

                    <aside className={`grid grid-cols-1 gap-2 my-2 sm:grid-cols-2 ${cardColor}`}>
                        <FlexGroup icon={faLocationDot} title={location} />
                        <FlexGroup icon={faTwitter} title={twitter_username} />
                        <FlexGroup icon={faLink} title={'nat@mail.com'} />
                        <FlexGroup icon={faHouseLaptop} title={company} />
                    </aside>
                </div>
            </section>

        </article>
    )
}

export default CardDev;