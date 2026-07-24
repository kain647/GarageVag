import React, { useState } from 'react';
import * as S from './styled';

const heroBg = "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80";

const galleryImages = [
    { title: "Audi Q7 — Изготовление кастомного выхлопа", img: "https://img.autohaus.cloud/huelpert/vehicles/7c6d63527f00010159493822ffd7d938_1.jpg" },
    { title: "VW Jetta 1.4 TSI — Диагностика и ТО", img: "https://imgcdn.zigwheels.my/large/gallery/exterior/29/265/volkswagen-jetta-front-angle-low-view-283281.jpg" },
    { title: "Skoda Octavia — Обслуживание DSG7", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFcwHFmF77HIvoel55sWAblecxU_65r0afOefOGjJ4YWZCWWr6AiYuok&s=10" }
];

export default function App() {
    const [formData, setFormData] = useState({ name: '', phone: '', model: '', service: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <S.Container>
            {/* HEADER */}
            <S.Header>
                <S.Logo>
                    <span>VAG</span> GARAGE
                </S.Logo>
                <S.Nav>
                    <S.NavLink href="#services">Услуги</S.NavLink>
                    <S.NavLink href="#works">Наши работы</S.NavLink>
                    <S.NavLink href="#booking">Запись</S.NavLink>
                    <S.PhoneBtn href="tel:+79990000000">+375 (29) 000-00-00</S.PhoneBtn>
                </S.Nav>
            </S.Header>

            {/* HERO SECTION */}
            <S.HeroSection $bgImage={heroBg}>
                <S.HeroContent>
                    <S.Badge>Специализированный сервис VAG</S.Badge>
                    <S.HeroTitle>
                        Профессиональный ремонт <br />
                        <span>VW, Audi, Škoda, SEAT</span>
                    </S.HeroTitle>
                    <S.HeroSubtitle>
                        Диагностика дилерского уровня (ODIS), ремонт DSG, двигателей TSI/TDI и кастомные выхлопные системы.
                    </S.HeroSubtitle>
                    <S.CtaBtn href="#booking">Записаться на диагностику</S.CtaBtn>
                </S.HeroContent>
            </S.HeroSection>

            {/* SERVICES */}
            <S.Section id="services">
                <S.SectionTitle>
                    Наши <span>услуги</span>
                </S.SectionTitle>
                <S.Grid>
                    <S.Card>
                        <S.CardIcon>💻</S.CardIcon>
                        <h3>Компьютерная диагностика</h3>
                        <p>Дилерское оборудование ODIS / VCDS. Кодирование блоков, чтение параметров, адаптации.</p>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon>⚙️</S.CardIcon>
                        <h3>Ремонт DSG / S-Tronic</h3>
                        <p>Замена сцепления, ремонт мехатроников DQ200, DQ250, DQ500, DL501. Прошивка и адаптация.</p>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon>🔧</S.CardIcon>
                        <h3>Двигатели TSI / TFSI / TDI</h3>
                        <p>Замена цепей ГРМ, устранение масложора, ремонт ТНВД, чистка впускных клапанов.</p>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon>💨</S.CardIcon>
                        <h3>Выхлопные системы</h3>
                        <p>Изготовление трасс из нержавейки, вварка резонаторов, замена банок, Downpipe, тюнинг звука.</p>
                    </S.Card>
                </S.Grid>
            </S.Section>

            {/* GALLERY */}
            <S.Section id="works" $dark>
                <S.SectionTitle>
                    Примеры <span>работ</span>
                </S.SectionTitle>
                <S.Grid>
                    {galleryImages.map((item, idx) => (
                        <S.GalleryCard key={idx}>
                            <S.GalleryImg src={item.img} alt={item.title} />
                            <S.GalleryTitle>{item.title}</S.GalleryTitle>
                        </S.GalleryCard>
                    ))}
                </S.Grid>
            </S.Section>

            {/* BOOKING */}
            <S.Section id="booking">
                <S.FormContainer>
                    <S.SectionTitle $mb="10px">
                        Запись на <span>сервис</span>
                    </S.SectionTitle>
                    <S.SubtitleText>
                        Оставьте заявку, и мы перезвоним для уточнения времени
                    </S.SubtitleText>

                    {submitted ? (
                        <S.SuccessMsg>
                            🎉 Заявка принята! Мы свяжемся с вами в течение 15 минут.
                        </S.SuccessMsg>
                    ) : (
                        <S.Form onSubmit={handleSubmit}>
                            <S.Input
                                type="text"
                                placeholder="Ваше имя"
                                required
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                            <S.Input
                                type="tel"
                                placeholder="Номер телефона"
                                required
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                            <S.Input
                                type="text"
                                placeholder="Модель авто (напр. Audi Q7 / Jetta 6)"
                                value={formData.model}
                                onChange={e => setFormData({...formData, model: e.target.value})}
                            />
                            <S.Select
                                value={formData.service}
                                onChange={e => setFormData({...formData, service: e.target.value})}
                            >
                                <option value="">Выберите услугу</option>
                                <option value="diag">Диагностика</option>
                                <option value="dsg">Ремонт DSG</option>
                                <option value="engine">Ремонт ДВС / ГРМ</option>
                                <option value="exhaust">Ремонт / Тюнинг выхлопа</option>
                                <option value="to">Техническое обслуживание (ТО)</option>
                            </S.Select>
                            <S.SubmitBtn type="submit">Отправить заявку</S.SubmitBtn>
                        </S.Form>
                    )}
                </S.FormContainer>
            </S.Section>
            {/* FOOTER */}
            <S.Footer>
                <S.SocialLinks>
                    {/* Telegram Bot */}
                    <S.SocialIcon
                        href="https://t.me/your_vag_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Запись через Telegram-бота"
                    >
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.87 7.97-3.43 3.8-1.58 4.59-1.86 5.1-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.22z"/>
                        </svg>
                    </S.SocialIcon>

                    {/* Instagram */}
                    <S.SocialIcon
                        href="https://instagram.com/your_vag_garage"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Мы в Instagram"
                    >
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </S.SocialIcon>
                </S.SocialLinks>

                <div>© 2026 VAG GARAGE. Все права защищены.</div>
                <div style={{ color: '#888', marginTop: '5px' }}>Обслуживание и ремонт автомобилей концерна VAG</div>
            </S.Footer>
            {/* FOOTER */}
        </S.Container>
        // test
    );
}