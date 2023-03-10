import { useWallet } from '@solana/wallet-adapter-react'
import {
	WalletMultiButton,
	WalletConnectButton,
} from '@solana/wallet-adapter-react-ui'
import React, { useEffect } from 'react'

require('@solana/wallet-adapter-react-ui/styles.css')
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addAdminWallet } from '../features/collabInfo'
import Icon from '../public/logo.png'
import Router from 'next/router'
export const Landing = () => {
	const walletAddress = useAppSelector(
		(state) => state.collabInfo.AdminWallet
	)

	const dispatch = useAppDispatch()
	const { publicKey, connected, connect } = useWallet()

	useEffect(() => {
		dispatch(addAdminWallet(publicKey?.toString()))
		if (connected) {
			Router.push('/reward')
		}
	}, [publicKey, connected])

	return (
		<>
			<div className='bgLanding md:grid md:grid-cols-2 '>
				<div className='logo'>
				</div>
				<main className='  flex flex-col justify-center space-y-20 min-h-screen aligned'>
					<h1 className='text-3xl font-extrabold uppercase super font-Lexend '>
						Collabs-on-Chain
					</h1>
					<div className='flex flex-col justify-center items-center text-center space-y-2'>
						<p className='text-transparent bg-clip-text text-xl xl:text-2xl 2xl:text-3xl tracking-tighter font-medium capitalize superdes font-Lexend'>
							{'"Reward Your Team As A NFT With '}
						</p>
						<p className=' text-xl 2xl:text-3xl xl:text-xl font-medium capitalize  font-Lexend flex flex-row gap-x-3 '>
							<span className='text-transparent bg-clip-text superdes tracking-tighter '>
								{'A Proof Of Collaboration"'}
							</span>
							🎉
						</p>
					</div>
					<div className='flex justify-center relative '>
						{' '}
						<WalletMultiButton />
					</div>
				</main>
			</div>
		</>
	)
}
