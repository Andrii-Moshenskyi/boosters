import s from './index.module.sass'
import top from './img/top.svg'
import bottom from './img/bottom.svg'

export default function Booster() {
	return <div className={s.booster}>
		<img src={top.src} alt='top' className={s.top} />
		<img src={bottom.src} alt='bottom' className={s.bottom} />
	</div>
}