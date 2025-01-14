import s from './index.module.sass'

export default function Card({
	name,
	color
}: {
	name: string
	color: 'pink' | 'orange' | 'yellow'
}) {
	return <li className={s.card}>

		<div className={s.label}>New</div>

		<div className={`${s.inner} ${s[color]}`}>

			<strong>{name}</strong>

			<div className={s.img} />

		</div>

	</li>
}