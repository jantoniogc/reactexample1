import React, { Component, PropTypes } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

import { Button, IconToggle } from 'react-native-material-ui'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonPair: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    padding: 10
  },
  buttonCategory: {
    marginBottom: 10
  }
})

const text = 'text'

export default class Buttons extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Buttons'
    })
  }

  constructor () {
    super()

    this.state = {
      color: null
    }

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    this.setState({
      color: this.state.color ? null : 'red'
    })
  }

  renderFlat = () =>
    <View style={styles.buttonCategory}>
      <View style={styles.buttonPair}>
        <View style={styles.buttonContainer}>
          <Button primary text={text}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button accent text={text}/>
        </View>
      </View>
      <View style={styles.buttonPair}>
        <View style={styles.buttonContainer}>
          <Button text={text}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button disabled text={text}/>
        </View>
      </View>
    </View>

  renderRaised = () =>
    <View style={styles.buttonCategory}>
      <View style={styles.buttonPair}>
        <View style={styles.buttonContainer}>
          <Button raised primary text={text}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button raised accent text={text}/>
        </View>
      </View>
      <View style={styles.buttonPair}>
        <View style={styles.buttonContainer}>
          <Button raised text={text}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button raised disabled text={text}/>
        </View>
      </View>
    </View>

  renderWithIcons = () =>
    <View style={styles.buttonCategory}>
      <View style={styles.buttonPair}>
        <View style={styles.buttonContainer}>
          <Button icon='check' primary text={text}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button icon='clear' accent text={text}/>
        </View>
      </View>
      <View style={styles.buttonPair}>
        <View style={styles.buttonContainer}>
          <Button icon='check' raised primary text={text}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button icon='clear' raised accent text={text}/>
        </View>
      </View>
    </View>

  renderIcons = () =>
    <View style={styles.buttonCategory}>
      <View style={styles.buttonPair}>
        <View style={styles.buttonContainer}>
          <IconToggle color={this.state.color} name='favorite' onPress={this.handlePress} />
        </View>
        <View style={styles.buttonContainer}>
          <IconToggle disabled name='favorite' />
        </View>
      </View>
    </View>

  render () {
    return (
      <ScrollView>
        {this.renderFlat()}
        {this.renderRaised()}
        {this.renderWithIcons()}
        {this.renderIcons()}
      </ScrollView>
    )
  }
}
