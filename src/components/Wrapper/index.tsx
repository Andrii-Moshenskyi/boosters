import s from './index.module.sass'

export default function Wrapper({
	children
}: {
	children: React.ReactNode
}) {
	return <div className={s.wrapper}>
		{children}
	</div>
}