import React from "react";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <h1>Анкета для корпоративных клиентов</h1>
            <h2>Личные данные</h2>
            <div className="form-content">
                <form id="form" action="#">
                    <div className="div-flex">
                        <div className="form-control">
                            <p>Фамилия</p>
                            <input id="surname" type="text" className="input-left" placeholder="Иванов"/>
                        </div>
                        <div className="form-control">
                            <p>Имя</p>
                            <input id="name" type="text" className="input-center" placeholder="Иван"/>
                        </div>
                        <div className="form-control">
                            <p>Отчество</p>
                            <input id="middle-name" type="text" className="input-right" placeholder="Иванович"/>
                        </div>
                    </div>
                    <div className="div-flex">
                        <div className="form-control">
                            <p>Дата рождения</p>
                            <input id="birthday" type="date" placeholder=""/>
                        </div>
                        <div className="form-control">
                            <p>Фактическое место проживания</p>
                            <input id="address" type="text" className="address" placeholder="Бишкек"/>
                        </div>
                    </div>
                    <div className="div-flex">
                        <div className="form-control">
                            <p>Контактный номер</p>
                            <input id="phone-number" type="tel" placeholder="+996 555 000 000"/>
                        </div>
                        <div className="form-control">
                            <p>Электронный адрес</p>
                            <input id="email" type="email" placeholder="ivanov@mail.ru"/>
                        </div>
                    </div>
                    <h2>Паспортные данные</h2>
                    <div className="div-flex">
                        <div className="form-control">
                            <p>Серийный номер AN/ID</p>
                            <input id="passport" type="text" placeholder="AN1234567"/>
                        </div>
                        <div className="form-control">
                            <p>ИНН</p>
                            <input id="id-number" type="number" className="input-center" placeholder="12345678987654"/>
                        </div>
                        <div className="form-control">
                            <p>Дата получения</p>
                            <input id="date-receipt" type="date"/>
                        </div>
                    </div>
                    <div className="div-flex">
                        <div className="form-control">
                            <p>Наименование банка</p>
                            <select name="nameBank" id="name-bank">
                                <option value="">Выберите банк</option>
                                <option value="1">Бакай банк</option>
                                <option value="2">Дос кредо банк</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <p>Место проживания по прописке</p>
                            <input id="place" type="text" className="address" placeholder="Бишкек"/>
                        </div>
                    </div>
                    <h2>Данные о ваших доходах</h2>
                    <div className="div-flex">
                        <div className="form-control">
                            <p>Организация</p>
                            <input id="company" type="text" placeholder="Megacom"/>
                        </div>
                        <div className="form-control">
                            <p>Должность</p>
                            <input id="post" type="text" className="address" placeholder="Ведущий бухгалтер"/>
                        </div>
                    </div>
                    <div className="div-flex">
                        <div className="form-control">
                            <p>Заработная плата в  месяц</p>
                            <input id="salary" type="text" className="salary"/>
                        </div>
                        <div className="form-control">
                            <p>Заработная Плата  за посл.  3 месяца</p>
                            <input id="last-salary" type="text" className="salary"/>
                        </div>
                    </div>
                    <h2>Сведения о кредите</h2>
                    <div className="div-flex input-large">
                        <p>Покупка телефона ( наименование товара)</p>
                        <input id="product-name" type="text" className="product" placeholder="iPhone XS 256Gb"/>
                    </div>
                    <div className="div-flex">
                        <div className="form-control">
                            <p>Стоимость товара</p>
                            <input type="text" placeholder="65 000 сом"/>
                        </div>
                        <div className="form-control">
                            <p>Количество товара</p>
                            <input type="text" className="input-center" placeholder="1 шт"/>
                        </div>
                        <div className="form-control">
                            <p>Итого сумма кредита</p>
                            <input type="text" placeholder="65 000 сом"/>
                        </div>
                    </div>
                    <div className="div-flex">
                        <div className="form-control">
                            <p>Вид кредита</p>
                            <select name="" id="">
                                <option value="">кредит/ рассрочка</option>
                                <option value="1">кредит</option>
                                <option value="2">рассрочка</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <p>Срок кредита ( мес)</p>
                            <select name="" id="" className="input-center">
                                <option value="">мин 3 месяца</option>
                                <option value="1">3 месяца</option>
                                <option value="2">6 месяцев</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <p>Точка получения товара</p>
                            <select name="" id="">
                                <option value="">Выберите адрес</option>
                                <option value="1">Бишкек</option>
                                <option value="2">Ош</option>
                            </select>
                        </div>
                    </div>
                    <div className="btn-center">
                        <button type="submit">Оформить заявку</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App;



