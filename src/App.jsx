import { useState, useEffect } from "react"

import { ButtonTheme } from "./components/ButtonTheme"
import { CardDev } from "./components/CardDev";
import { MessageError } from "./components/UI/Elements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { getTheme } from "./functions/change_theme";
import { darkTheme, lightTheme } from "./utils/theme_rules";

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

  const onGetUserInfo = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${userSearch}`)
      .then(response => {
        if(!response.ok){
          setShowError(response);
          setDataUser(null);
          throw new Error('Network response was not OK');
        }
        setShowError(false);
        return response.json();
      })
      .then(data => setDataUser(data))
      .catch((error) => console.log(error))
  }

  return (
    <main className={`transition ease-linear duration-500 min-h-screen flex flex-col justify-center items-center py-10 px-10 xl:px-80 ${theme.body}`}>
      <header className="flex justify-between w-full">
          <h1 className="font-menuFont text-2xl font-semibold">devfinder</h1>
          <ButtonTheme />
      </header>

      <form className={`w-full mt-6 p-4 rounded-lg flex items-center justify-between ${theme.card}`} onSubmit={event => onGetUserInfo(event)}>
        <FontAwesomeIcon icon={faSearch} className="font-semibold pr-2" />
        <input 
          onChange={(event) => setUserSearch(event.target.value)}
          type="text" name='user' className="bg-transparent p-2 outline-none w-11/12" placeholder="Search Github username..."/>

        <button type="submit" className="bg-blue-600 py-2 px-4 rounded-md text-gray-50">Search</button>
      </form>
       
      {showError ? <MessageError backgroundCard={theme.card} statusCode={showError.status} /> : null}
      {dataUser ? <CardDev cardStyles={theme} dataUser={dataUser}/> : null}
    </main>
  )
}

export default App
