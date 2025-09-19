import { useState, useEffect } from "react";
import './Nav.css'
import styled from 'styled-components';
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 1.2vw;
`;

const NavLinkList = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2vw; 

  @media (max-width: 48rem) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  font-size: 0.8vw; 
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #c1c1c1ff;
  }
`;

const NavItems = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 1.2vw;
  font-size: 1.6vw; 
  right:30px;
  justify-content: flex-end;
`;

const MenuButton = styled.button`
  color: white;
  background: none;
  border: none;
  font-size: 0.8vw;
  font-weight: 300;
  cursor: pointer;
  display: none;
  margin-left: 1vw;

  @media (max-width: 48rem) {
    display: block;
    font-size: 0.7rem;
    margin-left:7vw;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 150%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.86);
  border-top: 3px solid rgba(230, 230, 230,0.86);
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 10rem;
  z-index: 9999;

  &::before {
    content: "";
    position: absolute;
    top: -0.68rem; /* 드롭다운 메뉴 상단 위로 이동 */
    left: 50%; /* 화살표 위치 조정 */
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-color: transparent transparent rgba(230, 230, 230,0.86)transparent;
  }

  
  
  & > ${NavLink} {
    color: white;
    font-size: 0.7rem;
    padding: 0.313rem;
    width: 100%;
  }
`;

export default function Nav() {
  const [show, setShow] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "홈", href: "/" },
    { name: "시리즈", href: "/" },
    { name: "영화", href: "/" },
    { name: "게임", href: "/" },
    { name: "NEW! 요즘 대세 콘텐츠", href: "/" },
    { name: "내가 찜한 리스트", href: "/" },
    { name: "언어별로 찾아보기", href: "/" },
  ];

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <LogoContainer>
        <a href="/">
          <img
            alt="netfilix logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/500px-Netflix_2015_logo.svg.png"
            className="nav__logo"
          />
        </a>

        {/* ✅ 데스크톱 메뉴와 모바일 메뉴 버튼을 분리 */}
        <NavLinkList>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href}>{link.name}</NavLink>
          ))}
        </NavLinkList>

        <MenuButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>메뉴  ▾</MenuButton>
        {isDropdownOpen && (
          <DropdownMenu>
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.href}>{link.name}</NavLink>
            ))}
          </DropdownMenu>
        )}
      </LogoContainer>
      
      <NavItems>
        <IoSearch />
        <FaRegBell />
        <img
          alt="User logged"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          className="nav__avatar"
        />
      </NavItems>
    </nav>
  );
}