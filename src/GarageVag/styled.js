import styled, { createGlobalStyle } from 'styled-components';

// Глобальные сбросы: убирают вылеты за границы экрана
export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        overflow-x: hidden;
        background-color: #0f0f12;
    }
`;

export const Container = styled.div`
    background-color: #0f0f12;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background-color: rgba(15, 15, 18, 0.95);
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid #222;
    backdrop-filter: blur(10px);

    @media (min-width: 768px) {
        padding: 20px 40px;
    }
`;

export const Logo = styled.div`
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1px;

    span {
        color: #e63946;
    }

    @media (min-width: 768px) {
        font-size: 24px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 12px;
    align-items: center;

    @media (min-width: 768px) {
        gap: 25px;
    }
`;

export const NavLink = styled.a`
    color: #ccc;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
        color: #ffffff;
    }

    /* Скрываем текстовые ссылки на мобилках, оставляя только кнопку звонка */
    @media (max-width: 600px) {
        display: none;
    }

    @media (min-width: 768px) {
        font-size: 15px;
    }
`;

export const PhoneBtn = styled.a`
    background-color: #e63946;
    color: #fff;
    padding: 8px 12px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    font-size: 13px;
    white-space: nowrap;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #d62839;
    }

    @media (min-width: 768px) {
        padding: 8px 16px;
        font-size: 15px;
    }
`;

export const HeroSection = styled.section`
    padding: 50px 16px;
    background-size: cover;
    background-position: center;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${props => `linear-gradient(rgba(15,15,18,0.85), rgba(15,15,18,0.95)), url(${props.$bgImage})`};

    @media (min-width: 768px) {
        padding: 120px 20px;
    }
`;

export const HeroContent = styled.div`
    max-width: 800px;
    width: 100%;
`;

export const Badge = styled.div`
    display: inline-block;
    background-color: rgba(230, 57, 70, 0.2);
    color: #e63946;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 15px;
    border: 1px solid rgba(230, 57, 70, 0.4);

    @media (min-width: 768px) {
        padding: 6px 14px;
        font-size: 13px;
        margin-bottom: 20px;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 26px;
    font-weight: 900;
    line-height: 1.25;
    margin-bottom: 15px;
    word-wrap: break-word;

    span {
        color: #e63946;
    }

    @media (min-width: 576px) {
        font-size: 34px;
    }

    @media (min-width: 768px) {
        font-size: 48px;
        margin-bottom: 20px;
    }
`;

export const HeroSubtitle = styled.p`
    font-size: 14px;
    color: #ccc;
    margin-bottom: 25px;
    line-height: 1.5;

    @media (min-width: 768px) {
        font-size: 18px;
        margin-bottom: 35px;
        line-height: 1.6;
    }
`;

export const CtaBtn = styled.a`
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    background-color: #e63946;
    color: #fff;
    padding: 14px 20px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #d62839;
    }

    @media (min-width: 576px) {
        width: auto;
        padding: 16px 36px;
        font-size: 16px;
    }
`;

export const Section = styled.section`
    padding: 40px 16px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: ${props => props.$dark ? '#141419' : 'transparent'};

    @media (min-width: 768px) {
        padding: 80px 40px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 22px;
    font-weight: 800;
    text-align: center;
    margin-bottom: ${props => props.$mb || '25px'};

    span {
        color: #e63946;
    }

    @media (min-width: 768px) {
        font-size: 32px;
        margin-bottom: ${props => props.$mb || '50px'};
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;

    @media (min-width: 576px) {
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 25px;
    }
`;

export const Card = styled.div`
    background-color: #18181f;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #282830;

    h3 {
        font-size: 17px;
        margin: 10px 0;
    }

    p {
        font-size: 14px;
        color: #aaa;
        line-height: 1.5;
    }

    @media (min-width: 768px) {
        padding: 30px;
    }
`;

export const CardIcon = styled.div`
    font-size: 30px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        font-size: 36px;
        margin-bottom: 15px;
    }
`;

export const GalleryCard = styled.div`
    background-color: #18181f;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #282830;
`;

export const GalleryImg = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 200px;
    }
`;

export const GalleryTitle = styled.div`
    padding: 12px 15px;
    font-weight: bold;
    font-size: 14px;

    @media (min-width: 768px) {
        padding: 15px;
        font-size: 15px;
    }
`;

export const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: #18181f;
    padding: 20px 16px;
    border-radius: 10px;
    border: 1px solid #282830;

    @media (min-width: 768px) {
        padding: 40px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 768px) {
        gap: 15px;
    }
`;

export const Input = styled.input`
    background-color: #0f0f12;
    border: 1px solid #333;
    padding: 12px;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    outline: none;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        border-color: #e63946;
    }

    @media (min-width: 768px) {
        padding: 14px;
        font-size: 15px;
    }
`;

export const Select = styled.select`
    background-color: #0f0f12;
    border: 1px solid #333;
    padding: 12px;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    outline: none;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        border-color: #e63946;
    }

    @media (min-width: 768px) {
        padding: 14px;
        font-size: 15px;
    }
`;

export const SubmitBtn = styled.button`
    background-color: #e63946;
    color: #fff;
    padding: 14px;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 5px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #d62839;
    }

    @media (min-width: 768px) {
        padding: 15px;
        font-size: 16px;
        margin-top: 10px;
    }
`;

export const SuccessMsg = styled.div`
    background-color: rgba(46, 204, 113, 0.15);
    color: #2ecc71;
    padding: 15px;
    border-radius: 6px;
    text-align: center;
    font-size: 14px;
    border: 1px solid rgba(46, 204, 113, 0.3);

    @media (min-width: 768px) {
        padding: 20px;
        font-size: 16px;
    }
`;

export const SubtitleText = styled.p`
    text-align: center;
    color: #aaa;
    margin-bottom: 20px;
    font-size: 14px;

    @media (min-width: 768px) {
        margin-bottom: 30px;
        font-size: 16px;
    }
`;

export const Footer = styled.footer`
    text-align: center;
    padding: 20px 16px;
    border-top: 1px solid #222;
    font-size: 13px;
    color: #666;

    @media (min-width: 768px) {
        padding: 30px;
        font-size: 14px;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #18181f;
  border: 1px solid #282830;
  color: #ccc;
  transition: all 0.25s ease;

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  &:hover {
    color: #ffffff;
    background-color: #e63946;
    border-color: #e63946;
    transform: translateY(-3px);
  }

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;