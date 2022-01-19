import React,{createContext,useContext} from 'react'
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
const Context = createContext(themes.light)
function ConetxtFn(props){
    return (
        <Context.Provider value={themes.dark}>
            <Toolbar/>
        </Context.Provider>
    )
}
function Toolbar(props) {
 
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(Context);
    console.log(theme)
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
export default ConetxtFn