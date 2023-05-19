import React from 'react'
import { FlatList, View,Text} from 'react-native';
import Contact from "../Components/Contact";

const ContactsScreen = ({navigation}) => {
    const contacts=[
        {name:"Herbert Ofori",number:"0244852180"},
        {name:"Nicholas Ofori",number:"0244852181"},
        {name:"Eric Ofori",number:"0244852182"},
        {name:"Emmilia Ofori",number:"0244852183"},
        {name:"Matilda Ofori",number:"0244852184"},
        {name:"Isaac Ofori",number:"0244852185"},
        {name:"Herbert Ofori",number:"0244852180"},
        {name:"Nicholas Ofori",number:"0244852181"},
        {name:"Eric Ofori",number:"0244852182"},
        {name:"Emmilia Ofori",number:"0244852183"},
        {name:"Matilda Ofori",number:"0244852184"},
        {name:"Isaac Ofori",number:"0244852185"},
        {name:"Herbert Ofori",number:"0244852180"},
        {name:"Nicholas Ofori",number:"0244852181"},
        {name:"Eric Ofori",number:"0244852182"},
        {name:"Emmilia Ofori",number:"0244852183"},
        {name:"Matilda Ofori",number:"0244852184"},
        {name:"Isaac Ofori",number:"0244852185"},
    ]
  return (
    <View>
       <FlatList 
       data={contacts}
       renderItem={({item})=>{
        return<Contact 
        name={item.name}
        phone={item.number}
         />
       }}
       keyExtractor={(item)=>item.number}
       />
    </View>
  )
}
export default ContactsScreen