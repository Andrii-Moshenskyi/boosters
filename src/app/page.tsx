'use client'
import { useState } from 'react'
import Booster from '@/components/Booster'
import Cards from '@/components/Cards'

export default function IndexPage() {

	const [isBoosterOpened, setIsBoosterOpened] = useState<boolean>(false)

	return <>

		<Cards {...{
			isBoosterOpened
		}} />

		<Booster {...{
			isBoosterOpened,
			setIsBoosterOpened
		}} />

	</>

}