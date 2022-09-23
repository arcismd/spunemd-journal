import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import logo from '../../images/spunemd-logo.png'
import pencil from '../../images/pencil.png'
import plus from '../../images/plus-community.png'
import './navbar.scss'

export const Navbar = () => {



  return (
    <>
        <div className='navbar-wrapper'>
            <div className='navbar'>
            <Link
                to={'/'}
                >
                    <div className='left-wrapper'>
                    <img className='nav-logo' src={logo} alt='Logo' />
                    <span>ce gândești</span>
                    </div>
                    </Link>
                    <div className='middle-wrapper'>
                    <div className='nav-search'>
                        <input type={'text'} placeholder={'Caută'}/>
                    </div>
                    <Link
                    to={'/spune'}
                    >
                    <div className='nav-right-wrapper'>
                    <div className='spune'>
                    <img src={pencil} alt='Pencil' />
                        <span>Spune</span>
                        </div>
                        <div className='add-community'>
                        <img src={plus} alt='Plus' />
                                Comunitate
                            </div>
                    </div>
                    </Link>
                    </div>
                <NavLink
                to={'/spune'}
                >
                    <div className='nav-login'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M20 12h-13l3 -3m0 6l-3 -3"></path></svg>
                        <span>Logare</span>
                    </div>
                </NavLink>
            </div>
        </div>
    </>
  )
}
