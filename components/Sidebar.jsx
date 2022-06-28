import {FiMenu} from "react-icons/fi";
import {slide as Menu} from "react-burger-menu";
import React, {useState} from "react";
import Link from 'next/link'
import CustomAd from "./CustomAd";

function Sidebar() {
    return (
        <div className={'col-md-4 sidebar__wrapper'}>
            <CustomAd
                url={'https://yandex.ru'}
                image={'https://storage.yandexcloud.net/ezflow-bucket/mig-credit.png'}
                title={'Вам одобрили займ до 30 000 рублей! Получите деньги сейчас'}
                text={'Займы онлайн под 0%. До 30 000 ₽. Одобрение 99%. Заберите деньги на карту за ' +
                    '3 мин! · Конфиденциально. Зачислим деньги за 30 сек.'}
                btnText={'Взять деньги'}
            />
        </div>
    )
}

export default Sidebar;