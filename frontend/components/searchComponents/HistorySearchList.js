import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import HistorySearchItem from './HistorySearchItem'
import styles from '../styles'

const dumpData = [
    {
        title: 'bàn ikea'
    },
    {
        title: 'Rèm'
    },
    {
        title: 'Air pod pro'
    },
    {
        title: 'Air pod pro 2'
    },
    {
        title: 'Air pod pro 3'
    },
    {
        title: 'Tai nghe iphone'
    },
    {
        title: 'Iphone Xs Max'
    },

]

function LimitedItem() {
    return (
        <ScrollView>
            <HistorySearchItem title = {dumpData[0].title} />
            <HistorySearchItem title = {dumpData[1].title} />
            <HistorySearchItem title = {dumpData[2].title} />
        </ScrollView>
    )
}

function AllItem() {
    return (
        <ScrollView>
            {dumpData.map((item, index) => 
                <HistorySearchItem 
                    title = {item.title} 
                    key = {index}/>
            )}
        </ScrollView>
    )
}

export default function HistorySearchList() {

    const [showMore, setShowMore] = useState(false);

  return (
    <View>
        {showMore ? <LimitedItem/> : <AllItem/>}
        <TouchableOpacity activeOpacity={1} onPress= {() => {
            showMore ? setShowMore(false): setShowMore(true)
        }}>
            <Text style = {[{color: '#737373', textAlign: 'center'}, styles.pt_5, styles.pb_5]}>
                {showMore? "Hiển thị nhiều hơn": "Ẩn bớt"}
            </Text>
        </TouchableOpacity>
    </View>
  )
}