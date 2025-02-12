import s from './index.module.sass'
import top from './img/top.svg'
import bottom from './img/bottom.svg'

export default function Booster({
	isBoosterOpened,
	setIsBoosterOpened
}: {
	isBoosterOpened: boolean
	setIsBoosterOpened: React.Dispatch<React.SetStateAction<boolean>>
}) {
	return <div
		className={`${s.booster} ${isBoosterOpened ? s.opened : ''}`}
		onClick={() => setIsBoosterOpened(state => !state)}
	>
		<img src={top.src} alt='top' className={s.top} />
		<img src={bottom.src} alt='bottom' className={s.bottom} />
	</div>
}