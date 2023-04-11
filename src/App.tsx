import './App.css'
import { ColorModeProvider, theme, ThemeProvider} from "@chakra-ui/react";
import Login from "./components/pages/Authentication/Login";
import ThemeToggler from "./components/ThemeToggler";

function CSSReset() {
    return null;
}
function App() {
    const onSubmitHandler = (data: any) => {
        console.log(data);
    }
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
                <CSSReset/>
                <ThemeToggler/>
                <Login onSubmit={(data) => onSubmitHandler(data)}/>
            </ColorModeProvider>
        </ThemeProvider>
    )
}

export default App
