import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
	return (
		<>
			<Stack>
				<Stack.Screen
					name='sign-in'
					options={{
						haeaderShown: false,
					}}
				/>
				<Stack.Screen
					name='sign-up'
					options={{
						haeaderShown: false,
					}}
				/>
			</Stack>
			<StatusBar backgroundColor='#161622' style='light' />
		</>
	)
}

export default AuthLayout
