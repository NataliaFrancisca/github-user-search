import { FlexGroup, FlexColumnGroup } from "../UI/Elements";

const CardDev = ({backgroundCard, backgroundBody, cardColor, dataUser}) => {

    const {avatar_url, name, html_url, login, bio, company, location, public_repos, following, followers, twitter_username} = dataUser;

    return(
        <article className={`w-full flex justify-between mt-6 p-10 rounded-lg space-x-6 ${backgroundCard}`}>
             <img className="rounded-full object-cover h-24 w-24 md:h-32 md:w-32" 
                src={avatar_url} />

            <section className="w-5/6 font-cardFont">

                <aside className="flex align-top justify-between w-full flex-col md:flex-row" > 
                    <div>
                        <h1 className="font-cardFont text-xl font-semibold">{name}</h1>
                        <span className="mt-2 text-blue-400">{`@${login}`}</span>
                    </div>

                    <span className="font-cardFont text-sm font-normal"> Joined 25 Jan 2020</span>
                </aside>

                <p className={`my-4 text-base ${cardColor}`}>{bio}</p>

                <aside className={`flex p-6 rounded-lg ${backgroundBody} ${cardColor}`}>
                    <FlexColumnGroup title="Repos" text={public_repos} />
                    <FlexColumnGroup title="Followers" text={followers} />
                    <FlexColumnGroup title="Following" text={following} />
                </aside>

                <aside className={`grid grid-cols-2 gap-2 mt-4 ${cardColor}`}>
                    <FlexGroup icon="where_to_vote" title={location} />
                    <FlexGroup icon="public" title={twitter_username ? twitter_username : "Not Available"}/>
                    <FlexGroup icon="link" title='nat.com.br' />
                    <FlexGroup icon="home_work" title={company} />
                </aside>

            </section>
        </article>
    )
}

export default CardDev;