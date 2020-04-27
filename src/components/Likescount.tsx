import React from 'react';
import { RootState } from '../store';
import { incrementLikeCounter } from '../store/news/actions'
import { NewsItem } from '../store/news/types'
import { connect } from 'react-redux';

export interface ILikescountProps {
    incrementLikeCounter: typeof incrementLikeCounter,
    newsItemList: NewsItem[],
    currentItem: number
}

export class Likescount extends React.Component<ILikescountProps>{
    onLikeClick(): void {
        this.props.incrementLikeCounter(this.props.currentItem);
    }



    render() {
        return (
            <button onClick={() => this.onLikeClick()} >
                <i className="fas fa-heart"></i>
            </button>

        )
    }

}

    const mapStateToProps = (state: RootState) => {
        return {
            newsItemList: state.news.newsItemList
        }
    }

        // Connect Redux and React using our values and "view!"
        export default connect(
            mapStateToProps,
            { incrementLikeCounter }
        )(Likescount);