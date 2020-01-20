import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventListAttende extends Component {
  render() {
    return (
      <List.Item>
        <Image
          as="a"
          size="mini"
          circular
          src="https://randomuser.me/api/portraits/women/4.jpg"
        ></Image>
      </List.Item>
    );
  }
}
export default EventListAttende;
