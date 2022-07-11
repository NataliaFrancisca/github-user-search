export const onChangeTheme = () => {
    const prevTheme = getTheme();
    prevTheme == 'light' ? setTeam('dark') : setTeam('light');
}

export const setTeam = (theme) => {
    localStorage.setItem("theme", theme)
    window.dispatchEvent(new Event("storage"));
}

export const getTheme = () => {
    return localStorage.getItem("theme")
}
