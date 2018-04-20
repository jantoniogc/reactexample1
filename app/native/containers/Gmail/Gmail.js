import React, { Component, PropTypes } from 'react'
import { Text, View, ScrollView, StyleSheet, Image, Animated } from 'react-native'

import { Icon, ListItem, Divider, Avatar } from 'react-native-material-ui'

const emails = [
  {read: false, sender: 'Windows Central', subject: 'What does the perfect Windows phone look like?', body: 'What does the perfect Windows phone look like?'},
  {read: true, sender: 'Gitter Notifications', subject: 'Unread messages in redux-observable', body: '-> You have unread messages redux-observable'},
  {read: true, sender: 'Gitter Notifications', subject: 'Unread messages in reactjs/react-router', body: '-> You have unread messages reactjs/react-router'},
  {read: true, sender: 'Gitter Notifications', subject: 'Unread messages in callemall/material-ui', body: '-> You have unread messages callemall/material-ui'},
  {read: true, sender: 'WakaTime', subject: 'WakaTime Weekly Summary for 2017-03-06 until 2017-03-12', body: '18 hrs 12 mins More info Projects: open-tp-client'},
  {read: true, sender: 'WakaTime', subject: '[goal] Code 1hr per day in project 60mi', body: 'You need to code more to Code 1 hr per'},
  {read: true, sender: 'Gemnasium', subject: "Last week's package updates", body: 'Hello Daniel Ramos, 2 packages your projects'}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateRead: {
    color: '#a9a9a9'
  },
  dateUnread: {
    marginRight: 2,
    fontWeight: 'bold',
    color: '#4285f4'
  },
  primaryTextRead: {
    color: '#222222',
    fontSize: 16
  },
  primaryTextUnread: {
    color: '#222222',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textSecondaryRead: {
    color: '#a9a9a9'
  },
  textSecondaryUnread: {
    color: '#222222',
    fontWeight: 'bold'
  },
  textTerciaryRead: {
    color: '#a9a9a9'
  },
  star: {
    color: '#a9a9a9'
  },
  subject: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  avatarContainer: {
    backgroundColor: '#000',
    height: 40,
    width: 40,
    borderRadius: 64
  },
  avatarImage: {
    height: 40,
    width: 40,
    borderRadius: 64
  },
  listContainer: {
    height: 100
  },
  listViewContainer: {
    paddingRight: 3
  }
})

const EmailText = ({sender, subject, body, read}) =>
  <View>
    <View style={styles.subject}>
      <Text style={read ? styles.primaryTextRead : styles.primaryTextUnread}>{sender}</Text>
      <Text style={read ? styles.dateRead : styles.dateUnread}>13 mar.</Text>
    </View>
    <Text style={read ? styles.textSecondaryRead : styles.textSecondaryUnread}>{subject.length > 33 ? subject.slice(0, 33) + '...' : subject}</Text>
    <View style={styles.body}>
      <Text style={styles.textTerciaryRead}>{body.length > 33 ? body.slice(0, 36) + '...' : body}</Text>
      <Icon name='star-border' color={styles.star.color}/>
    </View>
  </View>

// Se supone que espera un objecto type con una Imagen, pero no funciona muy bien.
const AvatarImage = () =>
  <Image style={styles.avatarImage} source={require('../../img/persona.jpg')}/>

const Gmail = () =>
  <ScrollView style={styles.container}>
    {emails.map(({read, sender, subject, body}) =>
      <View key={body}>
        <ListItem
          leftElement={<Avatar style={{ container: styles.avatarContainer}} image={<AvatarImage />} />}
          centerElement={<EmailText sender={sender} subject={subject} body={body} read={read} />}
          style={{container: styles.listContainer, contentViewContainer: styles.listViewContainer}}
        />
        <Divider />
      </View>
    )}
  </ScrollView>

Gmail.navigationOptions = {
  drawer: () => ({
    label: 'Gmail'
  })
}

export default Gmail
