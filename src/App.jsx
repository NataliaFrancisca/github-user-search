import { useState } from "react"
import { useEffect } from "react"
import ButtonTheme from "./components/ButtonTheme"
import CardDev from "./components/CardDev";

import { getTheme } from "./functions/ChangeTheme";

const lightTheme = { body: "bg-bg_light text-black", card: "bg-card_light text-black", cardColor: "text-black" };
const darkTheme = { body: "bg-bg_dark text-white", card: 'bg-card_dark text-white', cardColor: "text-gray-300"}

function App() {

  const [theme, setTheme] = useState(lightTheme);
  const [dataUser, setDataUser] = useState();

  const onChangeCSS = () => getTheme() == "light" ? setTheme(lightTheme) : setTheme(darkTheme);

  window.addEventListener('storage', () => onChangeCSS());

  useEffect(() => {
    onChangeCSS();
  },[])


  const onSearchUser = () => {
    fetch("https://api.github.com/users/nataliaFrancisca")
    .then(data => data.json())
    .then(result => setDataUser(result))
  }

  useEffect(() => {
    console.log(dataUser)
  },[dataUser])

  return (
    <div className={`transition ease-linear duration-500 min-h-screen flex flex-col justify-center items-center px-10 lg:px-72 ${theme.body}`}>
      <header className="flex justify-between w-full">
          <h1 className="font-menuFont text-2xl font-semibold">devfinder</h1>
          <ButtonTheme />
      </header>

      <section className={`w-full mt-6 p-4 rounded-lg flex items-center justify-between ${theme.card}`}>
        <form className="flex items-center w-11/12">
          <span className="material-symbols-outlined font-semibold pr-2">search</span>
          <input type="text" name='user' className="bg-transparent p-2 outline-none w-11/12" placeholder="Search Github username..."/>
        </form>
       
        <button className="bg-blue-600 py-2 px-4 rounded-md text-gray-50" onClick={onSearchUser}>Search</button>
      </section>

    {dataUser ?  <CardDev backgroundCard={theme.card} backgroundBody={theme.body} cardColor={theme.cardColor} dataUser={dataUser}/> : null}

     

    </div>
  )
}

export default App
