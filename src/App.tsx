import { Provider } from "react-redux";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import { LayoutContainer } from "./styled-components";
import store from "./redux/store";
import { teal } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: teal[100],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <LayoutContainer>
          <Home />
        </LayoutContainer>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
