import { useState, useEffect } from "react"

import ButtonTheme from "./components/ButtonTheme"
import CardDev from "./components/CardDev";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { MessageError } from "./components/UI/Elements";
import { getTheme } from "./functions/change_theme";

const lightTheme = { body: "bg-bg_light text-black", card: "bg-card_light text-black", cardColor: "text-black" };
const darkTheme = { body: "bg-bg_dark text-white", card: 'bg-card_dark text-white', cardColor: "text-gray-300"}

function App() {

  const [theme, setTheme] = useState(lightTheme);
  const [userSearch, setUserSearch] = useState();
  const [dataUser, setDataUser] = useState();
  const [showError, setShowError] = useState(false);

  const onChangeCSS = () => getTheme() == "light" ? setTheme(lightTheme) : setTheme(darkTheme);

  window.addEventListener('storage', () => onChangeCSS());

  useEffect(() => {
    onChangeCSS();
  },[])

  const onGetUserInfo = () => {
    fetch(`https://api.github.com/users/${userSearch}`)
      .then(response => {
        if(!response.ok){
          setShowError(response);
          setDataUser(null)
          throw new Error('Network response was not OK');
        }
        setShowError(false);
        return response.json();
      })
      .then(data => setDataUser(data))
      .catch((error) => console.log(error))
  }

  return (
    <div className={`transition ease-linear duration-500 min-h-screen flex flex-col justify-center items-center py-10 px-10 xl:px-80 ${theme.body}`}>
      <header className="flex justify-between w-full">
          <h1 className="font-menuFont text-2xl font-semibold">devfinder</h1>
          <ButtonTheme />
      </header>

      <section className={`w-full mt-6 p-4 rounded-lg flex items-center justify-between ${theme.card}`}>
        <form className="flex items-center w-11/12">
          <FontAwesomeIcon icon={faSearch} className="font-semibold pr-2" />
          <input 
            onChange={(event) => setUserSearch(event.target.value)}
            type="text" name='user' className="bg-transparent p-2 outline-none w-11/12" placeholder="Search Github username..."/>
        </form>
       
        <button className="bg-blue-600 py-2 px-4 rounded-md text-gray-50" onClick={onGetUserInfo}>Search</button>
      </section>

    {showError ? <MessageError backgroundCard={theme.card} statusCode={showError.status} /> : null}
    {dataUser ? <CardDev backgroundCard={theme.card} backgroundBody={theme.body} cardColor={theme.cardColor} dataUser={dataUser}/> : null}

    </div>
  )
}

export default App
