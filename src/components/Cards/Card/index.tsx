import s from './index.module.sass'

export default function Card({
	name,
	color
}: {
	name: string
	color: 'pink' | 'orange' | 'yellow'
}) {
	return <div className={`${s.card} ${s[color]}`}>

		<strong>{name}</strong>

		<div className={s.img} />

	</div>
}