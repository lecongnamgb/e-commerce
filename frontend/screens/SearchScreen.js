import { View, SafeAreaView, TextInput, Button } from 'react-native'
import React from 'react'
import styles from '../components/styles'
import { useNavigation } from '@react-navigation/native'
import HistorySearchList from '../components/searchComponents/HistorySearchList'
import {useState} from 'react'
import SearchBar from '../components/searchComponents/SearchBar'

export default function SearchScreen() {
  return (
    <SafeAreaView style = {[styles.bg_white]}>
        <SearchBar widthSearchInput = {"80%"} focus = {true}/> 
      <HistorySearchList/>
    </SafeAreaView>
  )
}