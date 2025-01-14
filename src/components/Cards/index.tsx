import s from './index.module.sass'
import Card from './Card'

export default function Cards({
	isBoosterOpened
}: {
	isBoosterOpened: boolean
}) {
	return <ul className={`${s.cards} ${isBoosterOpened ? s.opened : ''}`}>
		<Card
			name='Card Name 1'
			color='pink'
		/>
		<Card
			name='Card Name 2'
			color='orange'
		/>
		<Card
			name='Card Name 3'
			color='yellow'
		/>
	</ul>
}