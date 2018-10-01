import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Title } from 'react-native-paper';
import MenuPicker from './MenuPicker';
import styles from './styles';

const menus = [
  {
    id: 1,
    text: "Pick Occasion",
    choices: [
      "birthday",
      "holiday",
      "office party",
      "wedding",
      "mother",
      "father"
    ]
  },
  {
    id: 2,
    text: "Pick Price",
    choices: [
      "20",
      "50",
      "100",
    ]
  },
  {
    id: 3,
    text: "Pick Age",
    choices: [
      "newborn",
      "todler",
      "child",
      "early teen",
      "teenager",
      "young adult",
      "adult",
      "senior"
    ]
  }
];

const Menu = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.headerText} >Search</Title>
      {menus.map(menu => <MenuPicker key={menu.id} {...menu} />)}
      <Button icon="" mode="contained" color={"green"} style={[styles.button, styles.buttonStarted]}>Get Started</Button>
    </ScrollView>
  )
}

export default Menu;