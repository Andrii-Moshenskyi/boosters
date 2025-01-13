'use client'
import { useState } from 'react'
import s from './index.module.sass'
import top from './img/top.svg'
import bottom from './img/bottom.svg'

export default function Booster() {

	const [isBoosterOpened, setIsBoosterOpened] = useState<boolean>()

	return <div
		className={`${s.booster} ${isBoosterOpened ? s.opened : ''}`}
		onClick={() => setIsBoosterOpened(state => !state)}
	>
		<img src={top.src} alt='top' className={s.top} />
		<img src={bottom.src} alt='bottom' className={s.bottom} />
	</div>

}