import {FiMenu} from "react-icons/fi";
import {slide as Menu} from "react-burger-menu";
import React, {useState} from "react";
import Link from 'next/link'

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className={'row'}>
            <div className={'col-12 main-header'}>
                <div className={'logo'}>
                    <Link href='/'>
                        <a>
                            <svg width="218" height="80" className="css-1j8o68f" viewBox="0 0 280 102">
                                <rect
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="280"
                                    height="102"
                                    fill="#cc442a"
                                    rx="10"
                                    ry="10"
                                />
                                <path
                                    fill="#f6f6f6"
                                    d="M8.1 20H5.14v-5.8H3.56V20H.6V5.5h2.96v6.2h1.58V5.5H8.1V20zm4.38-11.96c-.173 0-.26.093-.26.28v8.84c0 .107.017.183.05.23s.11.07.23.07h1.1c.12 0 .197-.023.23-.07s.05-.123.05-.23V8.32c0-.187-.087-.28-.26-.28h-1.14zm4.34 9.9c0 .28-.033.543-.1.79s-.18.463-.34.65-.373.337-.64.45-.6.17-1 .17h-3.36c-.4 0-.733-.057-1-.17s-.48-.263-.64-.45-.273-.403-.34-.65-.1-.51-.1-.79V7.38c0-.573.157-1.03.47-1.37s.81-.51 1.49-.51h3.6c.68 0 1.177.17 1.49.51s.47.797.47 1.37v10.56zM23.74 5.5l.72 2.7h-1.94V20h-2.96V8.2h-1.94l.76-2.7h5.36zm4.4 2.54v3.8h1.36c.107 0 .193-.03.26-.09s.1-.157.1-.29V8.32c0-.187-.087-.28-.26-.28h-1.46zm1.76 6.42c0-.16-.04-.27-.12-.33s-.187-.09-.32-.09h-1.32v3.42h1.46c.12 0 .2-.023.24-.07s.06-.123.06-.23v-2.7zm2.74-3.22c0 .36-.07.67-.21.93s-.403.443-.79.55c.4.027.69.167.87.42s.27.54.27.86v3.76c0 .8-.167 1.373-.5 1.72s-.92.52-1.76.52h-5.26V5.5h5.66c.573 0 1.003.16 1.29.48s.43.747.43 1.28v3.98zm3.6 8.76c-.84 0-1.427-.173-1.76-.52s-.5-.92-.5-1.72V5.5h2.96v11.64c0 .107.017.187.05.24s.11.08.23.08h1.02c.12 0 .197-.027.23-.08s.05-.133.05-.24V5.5h2.96v12.26c0 .8-.167 1.373-.5 1.72s-.92.52-1.76.52h-2.98zm9.88-2.7h2.72l-.5 2.7h-6.12l3.26-11.8h-3.02l.5-2.7h6.28zm7.34 0h2.72l-.5 2.7h-6.12l3.26-11.8H49.8l.5-2.7h6.28z"
                                    transform="matrix(4.28725 0 0 4.28725 17.428 -3.58)"
                                />
                            </svg>
                        </a>
                    </Link>

                </div>
                <div className={'header-menu'}>
                    <FiMenu className={'open-menu'} size={36} onClick={() => setOpenMenu(!openMenu)}/>
                    <Menu isOpen={openMenu} onClose={() => setOpenMenu(false)} right width={'320px'}>

                        <ul className={'list-inline'}>
                            <li><a href={'#'}>Шоу-бизнес</a></li>
                            <li><a href={'#'}>Общество</a></li>
                            <li><a href={'#'}>Размещение рекламы</a></li>
                        </ul>

                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Header;