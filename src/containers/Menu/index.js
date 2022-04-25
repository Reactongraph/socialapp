import React, { useEffect, useState } from 'react';
import { Text, View, Image, Dimensions, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { SvgXml } from "react-native-svg";
import SVGImages from "../../utils/svg";

const SVG = new SVGImages();

const Menu = ({ navigation }) => {
    const [data, setData] = useState("")
    const [comment, setComment] = useState("")
    const [showComment, setShowComment] = useState(false)
    const [currentid, setCurrentId] = useState("")
    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=1&limit=25')
            .then(response => response.json())
            .then(res => setData(res));
    }, [])
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;



    const renderItem = ({ item }) => {
        const handleCommentChange = (text) => {
            setComment(text)
        }

        const handleComment = (item) => {
            setCurrentId(item.id)
            setShowComment(true)
        }

        const handleCommentSend = () => {
            setComment("")
            setShowComment(false)
        }
        return (
            <View style={styles.cardcontainer}>
                <Text style={{ color: '#428df5', fontSize: 25, marginLeft: 30 }}>{item.author}</Text>
                <Image source={{ uri: item.download_url }} style={{ height: 300, width: windowWidth - 10 }} />
                <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                    <TouchableOpacity>
                        <SvgXml xml={SVG.like_svg("#428df5", 25, 25)} style={{ marginTop: 10, marginBottom: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleComment(item)}>
                        <SvgXml xml={SVG.dislike("#428df5", 25, 25)} style={{ marginTop: 10, marginBottom: 10, marginLeft: 20 }} />
                    </TouchableOpacity>
                </View>
                {(showComment && currentid === item.id) ?
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.commentinput}
                            onChangeText={(text) => handleCommentChange(text)}
                            value={comment}
                        />
                        <TouchableOpacity onPress={() => handleCommentSend()}>
                            <Text style={{ color: '#428df5' }}>send</Text>
                        </TouchableOpacity>
                    </View> : null
                }
            </View >
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <SvgXml xml={SVG.header_back_foggy("#428df5", 25, 25)} style={{ marginTop: 10, marginBottom: 10, marginLeft: -200 }} />
            </TouchableOpacity>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardcontainer: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#428df5',
        borderRadius: 40,
        marginTop: 10
    },
    commentinput: {
        height: 40,
        marginLeft: 30,
        marginBottom: 10,
        borderColor: '#428df5',
        borderBottomWidth: 1,
        textAlign: 'center',
        width: 330,
    },
});
export default Menu;
