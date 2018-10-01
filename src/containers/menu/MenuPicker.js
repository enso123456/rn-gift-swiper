import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'react-native-paper';
import styles from './styles';
import Picker from 'react-native-picker';
import { camelCase } from '../../utils/helpers';

class MenuPicker extends PureComponent {
  showPickerWheel = () => {
    Picker.init({
      pickerData: this.props.choices.map(choice => camelCase(choice)),
      pickerTitleText: "Please select",
      pickerConfirmBtnText: "Confirm",
      pickerCancelBtnText: "Cancel",
      onPickerConfirm: data => {
        console.log(data);
      },
      onPickerCancel: data => {
        console.log(data);
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
    Picker.show();
  }

  render() {
    const { text } = this.props;
    return (
      <Button mode="contained" style={styles.button} onPress={this.showPickerWheel}>
        <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
      </Button>
    );
  }
}

MenuPicker.propTypes = {
  text: PropTypes.string.isRequired
};

export default MenuPicker;    