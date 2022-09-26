import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LinksIcons } from './LinksIcons';
import styles from '../header.module.scss'
import RadioSwitch from '../../RadioSwitch/RadioSwitch';
import LangDropDown from './LangDropDown';

export const NavDesktop = ({ links, onOpenConnectModal }: any) => {
	const router = useRouter();
	const { systemTheme, theme, setTheme } = useTheme();

	const darkBackgroundPages = ['/', '/multiverse'];

	const currentTheme = theme === 'system' ? systemTheme : theme;
	const handleClick = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark');
	}

	const isDarkBackgroundPage = () => darkBackgroundPages.includes(router.pathname);

	const isInceptionPage = () => (['/inceptionnft']).includes(router.pathname);

	const handleConnectClick = () => {
		onOpenConnectModal()
	}

	return (
		<nav className={`${styles.navbar} ${isDarkBackgroundPage() ? styles.darkPage : ''} ${isInceptionPage() ? styles.inceptionPage : ''}`}>
			<div>
				{links.map((link: any, index: any) => {
					if (link.link === 'whitepaper') {
						return (
							<a className={styles.option} key={index} href='https://whitepaper.redcatmultiverse.io/' target='_blank' rel="noreferrer">
								{index !== 0 && <span>|</span>}
								{link.name}
							</a>
						)
					}
					if (link.link === 'blog') {
						return (
							<a className={styles.option} key={index} href='https://blog.redcatmultiverse.io/' target='_blank' rel="noreferrer">
								{index !== 0 && <span>|</span>}
								{link.name}
							</a>
						)
					}
					if (link.link === 'connect') {
						return (
							<a className={styles.option} key={index} target='_blank' rel="noreferrer" onClick={handleConnectClick}>
								{index !== 0 && <span>|</span>}
								{link.name}
							</a>
						)
					}
					if (link.finished === false) {
						return (
							<a key={index} className={styles.soonPage} rel="noreferrer">
								{index !== 0 && <span>|</span>}
								{link.name}
								{link.finished === false && (<div className={styles.soonBadge}>soon</div>)}
							</a>
						)
					}
					return (
						<Link key={index} href={`/${link.link.toLowerCase()}`}>
							<a>
								{index !== 0 && <span>|</span>}
								{link.name}
							</a>
						</Link>
					)
				})}
			</div>
			{/* nav icons social media */}
			<LinksIcons />
			<LangDropDown isDarkPage={isDarkBackgroundPage()} />
			<RadioSwitch className={styles.themeSwitch} onChange={handleClick} checked={currentTheme === 'dark'} />
		</nav>
	)
}
