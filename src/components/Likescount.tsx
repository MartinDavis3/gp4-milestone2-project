import React from 'react';
import {RootState} from '../store';
import {incrementLikeCounter} from '../store/news/actions'
import {NewsItem} from '../store/news/types'
import { Grid, Form, Input, Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface ILikeProps
{
    incrementLikeCounter: typeof incrementLikeCounter,
      newsItemList: NewsItem []
}

export class Like extends React.Component<ILikeProps>
{
    generateLikes = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 1000);
    randomNumber += this.props.newsItemList.length;
    return randomNumber;

}

 render ()
 {
     return (
     <button>
         <i className = "fas fa-heart"></i>
     </button>
 
     )}
}

const mapStateToProps = ( state: RootState ) => {
    return {
      newsItemList: state.news.newsItemList
    }
  }
  
  // Connect Redux and React using our values and "view!"
  export default connect(
    mapStateToProps,
    { incrementLikeCounter }
  )( Like );