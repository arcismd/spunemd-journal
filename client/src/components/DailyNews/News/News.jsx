import React from 'react'
import { Link } from 'react-router-dom'
import comments from '../../../images/comments.png'
import views from '../../../images/views.png'

import './news.scss'

export const News = () => {
  return (
    <div className='news-wrapper'>
        <div className='news'>
            <div className='news-title'>
            Aproape 10.000 de persoane au participat la maraton în centrul Capitalei participat la maraton în centrul Capitalei participat la maraton în centrul Capitalei 
            </div>
            <div className='news-short-info'>
                <div className='views-comments'>
                    <Link 
                    to={'keka'}
                    >
                    <div className='comments'><img src={comments} width={12} height={12} alt='Comments' /><span className='comments-count'>0</span></div>
                    </Link>
                        <div className='views'>
                    <img src={views} width={12} height={12} alt='Views' /> <span>0</span></div>
                </div>
                <div className='red'>
                    <a href='kek'>spune.md</a> - redacţia
                </div>
            </div>
        </div>
    </div>
  )
}
