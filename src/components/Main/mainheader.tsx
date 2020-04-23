import * as React from 'react';
import {  Header } from 'semantic-ui-react';
export interface ImMainheaderProps {
}

export default class Mainheader extends React.Component<ImMainheaderProps> {
  public render() {
    return (
   
        <Header as='h1' color='blue' textAlign='center' size='huge'>
        Welcome to our social media website </Header>
       

     
        
    );
  }
}
