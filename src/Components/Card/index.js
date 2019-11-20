import React from 'react';
import { Text, View, Image, Platform } from 'react-native';

export default class Card extends React.Component {

	render() {
		const {
			color,
			title,
			value,
			icon,
		} = this.props;
		return (
			<View style={{
				flexDirection: 'row',
				margin: 6,
				height: 70,
				width: 165,
				borderRadius: 6,
				backgroundColor: '#fff',
				...Platform.select({
					ios: {
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 3,
						},
						shadowOpacity: 0.27,
						shadowRadius: 4.65,
					},
					android: {
						elevation: 10,
					},
				})
			}}>
				<View style={{
					height: 70,
					width: 4,
					borderRadius: 2,
					backgroundColor: '#FFA831',
					backgroundColor: color
				}}>
				</View>
				<View style={{
					marginTop: 8,
					flexDirection: 'row'
				}}>
					<View style={{
						paddingRight: 5,
						paddingLeft: 10,
						width: 130
					}}>
						<Text style={{
							fontFamily: 'Avenir-Heavy',
							fontSize: 10,
							color: '#9b9b9b',
							fontWeight: '800'
						}}>{title}</Text>
						<Text style={{
							fontFamily: 'Avenir-Medium',
							fontSize: 20,
							color: 'black',
						}}>{value}</Text>
					</View>
					<Image source={icon} />
				</View>
			</View >
		);
	}
}
