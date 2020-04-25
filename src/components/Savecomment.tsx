import React from 'react';
import { RootState} from '../store';
import {saveComment} from '../store/news/actions';
import {NewsItem} from '../store/news/types';
import { Grid, Form, Input, Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface ICommentProps{
    saveComment: typeof saveComment
    newsItemList: NewsItem []
}

export class Comment extends React.Component<ICommentProps>
{
    generateID = (): number => {
        let randomNumber: number = Math.floor( Math.random() * 1000 );
        randomNumber += this.props.newsItemList.length;
        return randomNumber;
                               }

     newComment = (event:any) =>{
         event.preventDefault();
     }

}