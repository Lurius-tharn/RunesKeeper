import React, {useRef} from "react";
import {Animated, StyleSheet, Pressable, Text, View, Modal} from "react-native";
import Colors from "../constants/Colors";

export interface Props {
	sortBy: any;
	trie?: any;
}

interface State {
	modalVisible: boolean;
	push: number;

}

export class BooksByComponent extends React.Component<Props,State> {

	constructor (props:any) {
		super (props);
		this.state = {
			modalVisible:false,
			push:0
		}

	}
	 translation = useRef(new Animated.Value(0)).current;
	 fadeAnim = useRef(new Animated.Value(0)).current;
	 translationy = useRef(new Animated.Value(0)).current;


	animation = (animatedStyle: any ,animatedToValue:any) => {
		Animated.timing(animatedStyle, {
			toValue: animatedToValue,
			delay: 20,
			useNativeDriver: true,
			duration: 500
		}).start();
	}

	openModal = () => {
		this.animation(this.translation, 30);
		this.animation(this.fadeAnim, 1);
		this.animation(this.translationy, 50);
		this.setState({modalVisible:true})

	};

	closeModal = () => {
		this.animation(this.translation, 0);
		this.animation(this.fadeAnim, 0);
		this.animation(this.translationy, 0);
		setTimeout(() => {
			this.setState({modalVisible:false})
		}, 500);


	};

	 Item = (props:any) => (
		<Pressable
			style={({pressed}) => [
				{
					opacity: pressed ? 0.5 : 1.0,
				}, styles.item
			]}
			onPress={({}) => {
				console.log("On veut trier par : " + props.trierPar)
				this.props.trie(props.trierPar)
			}}
		>
			{/*<SvgComponent title={props.titre} size={props.taille} color={props.couleur}/>*/}
			<Text style={styles.title}>{props.titre}</Text>
		</Pressable>

	);

	 renderItem = (props:any) => (
		<this.Item taille={props.item.taille} couleur={props.item.couleur} titre={props.item.titre} trierPar={props.item.trierPar}/>);

render () {
	return (
		<View style={styles.container}>

			<Pressable
				onPress={({}) => {
					this.setState({push:this.state.push})
					this.state.push % 2 == 0 ? this.openModal() : this.closeModal()

				}}

			>
				<View style={styles.fadingContainer}/>
				<Animated.View
					style={[
						styles.fadingContainer,
						{
							transform: [{translateX: this.translation}],
						}
					]}/>

				<View style={styles.fadingContainer}/>

			</Pressable>

			<Modal
				transparent={true}
				visible={this.state.modalVisible}
				onRequestClose={() => this.closeModal()}

			>
				<Pressable style={styles.outsideModal}
						   onPress={(event) => {
							   if (event.target == event.currentTarget) {
								   this.closeModal()
							   }
						   }}>

					<Animated.FlatList

						style={{
							opacity: this.fadeAnim,
							transform: [{translateY: this.translationy}],
							borderRadius: 15,
							backgroundColor: '#3B404D',
							flexGrow: 0,
							position: "absolute",
							margin: 90,


						}}
						data={this.props.sortBy}

						renderItem={this.renderItem}
						keyExtractor={item => item.titre}>

					</Animated.FlatList>
				</Pressable>
			</Modal>
		</View>
	);
}



}
const styles = StyleSheet.create({
	container: {

		flex: 1,
		alignItems: "flex-start",
		justifyContent: "flex-start",
		position: "relative",

	},
	fadingContainer: {
		margin: 20,

		width: 60,
		height: 6,
		backgroundColor: "#484E5F",
		marginBottom: 2,
		marginTop: 2,


	},
	fadingText: {
		fontSize: 28
	},
	buttonRow: {
		flexBasis: 100,
		justifyContent: "space-evenly",
		marginVertical: 16,

	},
	item: {
		padding: 5,
		paddingBottom: 15,

		zIndex: 1,
		paddingHorizontal: 5,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		borderBottomColor: '#4A5061',
		borderBottomWidth: 0.5,
		position: "relative"


	},
	title: {
		marginLeft: 15,
		fontSize: 20,
		fontFamily: "Montserrat",
		fontWeight: "200",
		color: Colors.light.text,
		justifyContent: 'center',
	},

	outsideModal: {
		flex: 1,
	}
});
