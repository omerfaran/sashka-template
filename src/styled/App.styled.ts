import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Navicon, Bell, Heart, Refresh, Trophy } from "@emotion-icons/evil";
import { theme } from "./Theme.styled";

export const Container = styled.div`
  display: flex;
`;

export const Header = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  background-color: #fff;
  box-shadow: 2px -3px 8px 2px rgb(0 0 0 / 20%);
  padding: 0 0.5rem;
  padding-left: calc(${theme.sizes.iconDimension} / 2);
  height: ${theme.sizes.headerHeight};
`;

export const Sidebar = styled.aside`
flex-shrink: 0;
z-index: 100;
background-color: ${theme.colors.sidebar};
width: calc(${theme.sizes.iconDimension} * 2 );
// padding-top: 1rem;
// border-right: 1px solid ${theme.colors.lightGray};
box-shadow: -1px 5px 5px 0px rgb(0 0 0 / 20%);
display: flex;
flex-direction: column;
height: calc(100vh - ${theme.sizes.headerHeight});
align-items: center;
justify-content: stretch;
transition: width ${theme.animations.AnimationDuration}
  ${theme.animations.AnimationTimingCurve};
position: sticky;
left: 0;
top: ${theme.sizes.headerHeight});

&.open {
  width: 200px;
}
`;

export const Main = styled.main`
  position: absolute;
  // width: 500px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MiddleSidebar = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  margin: 1rem 0;
  width: 100%;
`;

export const SidebarList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const SidebarLink = styled.a`
  display: flex;
  width: 100%;
  padding: 0.5rem 0;
  color: ${theme.colors.lightGray};
  text-decoration: none;
  align-items: center;
  padding-left: calc(${theme.sizes.iconDimension} / 2);

  &.open {
    justify-content: flex-start;
  }
`;

export const HiddenSidebar = styled.div`
  margin-left: 1.5rem;
  white-space: nowrap;
  opacity: 0;
  width: 0;
  &:active {
    color: ${theme.colors.lightGray};
  }
  transition: opacity ${theme.animations.AnimationDuration}
    ${theme.animations.AnimationTimingCurve};
  &.open {
    height: auto;
    width: 100%;
    opacity: 1;
  }
`;

export const MenuIconBtn = styled.button`
  background: none;
  border: 0;
  padding: 0;
`;

export const SidebarListItem = styled.li`
  position: relative;
  width: 100%;
  fill: ${theme.colors.lightestGray};
  &:hover {
    background-color: ${theme.colors.lightestGray};
  }
  &.active {
    fill: ${theme.colors.accent};
    background-color: ${theme.colors.lightestGray};
  }
  &.active:before {
    content: "";
    background-color: ${theme.colors.accent};
    height: 100%;
    left: 0;
    width: 3px;
    position: absolute;
  }
`;

export const HamburgerIcon = styled(Navicon)`
  width: ${theme.sizes.iconDimension};
  height: ${theme.sizes.iconDimension};
  fill: ${theme.colors.mediumGray};
  cursor: pointer;
`;

const iconProps = css`
  width: ${theme.sizes.iconDimension};
  height: ${theme.sizes.iconDimension};
  flex-shrink: 0;
  &.active {
    stroke: ${theme.colors.accent};
  }
`;

export const HeartIcon = styled(Heart)`
  ${iconProps}
`;

export const BellIcon = styled(Bell)`
  ${iconProps}
`;

export const RefreshIcon = styled(Refresh)`
  ${iconProps}
`;

export const TrophyIcon = styled(Trophy)`
  ${iconProps}
`;
