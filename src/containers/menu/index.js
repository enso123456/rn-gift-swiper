import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Title, Divider } from 'react-native-paper';
import { Link } from 'react-router-native';
import MenuPicker from './MenuPicker';
import styles from './styles';

const menus = [
  {
    id: 1,
    text: "Pick Occasion",
    choices: [
      "any",
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
      "any",
      "20",
      "50",
      "100",
    ]
  },
  {
    id: 3,
    text: "Pick Age",
    choices: [
      "any",
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
      <Divider />
      <Link to={'/products'}>
        <Button
          icon="search"
          mode="contained"
          color={"green"}
          style={[styles.button, styles.buttonStarted]}
        >Get Started</Button>
      </Link>
    </ScrollView>
  )
}

export default Menu;