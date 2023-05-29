import React from "react";
import "./footer.css";
import au_logo from "../../img/logo/au_travel_fullLogo.png";

export default function Footer() {

    return(
        <div className="au-footer">
            <div className="contact-footer">
                <img alt="au-travel-logo" src={au_logo} width="200px"></img>
                <p className="full-text">Путешествуй с нами и реализуй свою мечту! Покоряй красивые места, узнавай новые культуры и жизни!</p>
                <p><span className='bi bi-telephone-outbound-fill'></span><a id="phone_number" href="#">+996 (0)505 888 765</a></p>
                <p><span className='bi bi-envelope-fill'></span><a id="email" href="mailto:k.otonbaev@gmail.com">k.otonbaev@gmail.com</a></p>
                <p><span className='bi bi-pin-map-fill'></span><a id="website" href="#">www.au-travel.kg</a></p>
            </div>
            <div className="quick-links">
                <h6>Ссылки</h6>
                <ul>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Зарубежные туры</a></li>
                    <li><a href="#">Туры по Кыргызстану</a></li>
                    <li><a href="#">Наши услуги</a></li>
                    <li><a href="#">Связаться с нами</a></li>
                </ul>
            </div>
            <div className="support">
            <h6>Поддержка</h6>
                <ul>
                    <li><a href="#">Поддержка клиентов</a></li>
                    <li><a href="#">Политика и конфиденциальность</a></li>
                    <li><a href="#">Условия & сроки</a></li>
                    <li><a href="#">Форум</a></li>
                    <li><a href="#">Гид по сайту</a></li>
                </ul>
            </div>
            <div className="newsletter">
                <h6>Подписка на еженедельную рассылку</h6>
                <form>
                    <input className="newsletter_input" placeholder="Email"></input>
                    <button className="btn-btn-link newsletter_btn">Подпишись</button>
                </form>
            </div>
            <hr/>
            <div>
                <p id="copyright">Copyright @2022 Au Travel. Designed By Md Shamim Hossain</p>
            </div>
        </div>
    )
}