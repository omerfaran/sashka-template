import { useState } from "react";
import "./styles.css";
import { ThemeProvider, css, Global } from "@emotion/react";
import MainContent from "./components/MainContent";
import { theme } from "./styled/Theme.styled";

import {
  Container,
  Header,
  Sidebar,
  Main,
  MiddleSidebar,
  SidebarList,
  SidebarLink,
  HiddenSidebar,
  MenuIconBtn,
  SidebarListItem,
  HamburgerIcon,
  HeartIcon,
  BellIcon,
  RefreshIcon,
  TrophyIcon,
} from "./styled/App.styled";

const globalStyles = css`
  body {
    background-color: ${theme.colors.background};
    font-family: "Source Sans Pro";
  }
`;

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const navbarArray = [
    {
      selector: "heart",
      iconComponent: (
        <HeartIcon className={`${activeIcon === "heart" ? "active" : ""}`} />
      ),
      text: "Website",
    },
    {
      selector: "refresh",
      iconComponent: (
        <RefreshIcon
          className={`${activeIcon === "refresh" ? "active" : ""}`}
        />
      ),
      text: "Will",
    },
    {
      selector: "bell",
      iconComponent: (
        <BellIcon className={`${activeIcon === "bell" ? "active" : ""}`} />
      ),
      text: "Fill Up",
    },
    {
      selector: "trophy",
      iconComponent: (
        <TrophyIcon className={`${activeIcon === "trophy" ? "active" : ""}`} />
      ),
      text: "Soon!",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header>
        <MenuIconBtn onClick={toggleSidebar}>
          <HamburgerIcon />
        </MenuIconBtn>
      </Header>
      <Container>
        <Sidebar className={`${sidebarOpen ? "open" : ""}`}>
          <MiddleSidebar>
            <SidebarList>
              {navbarArray.map((item) => {
                return (
                  <SidebarListItem
                    key={item.text}
                    className={`${
                      activeIcon === item.selector ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveIcon(item.selector);
                    }}
                  >
                    <SidebarLink
                      href="#"
                      className={`${sidebarOpen ? "open" : ""}`}
                    >
                      {item.iconComponent}
                      <HiddenSidebar className={`${sidebarOpen ? "open" : ""}`}>
                        {item.text}
                      </HiddenSidebar>
                    </SidebarLink>
                  </SidebarListItem>
                );
              })}
            </SidebarList>
          </MiddleSidebar>
        </Sidebar>
        <Main>
          <MainContent />
        </Main>
      </Container>
    </ThemeProvider>
  );
}
