import React from 'react';
import {RootState} from '../store';
import {incrementLikeCounter} from '../store/news/actions'
import {NewsItem} from '../store/news/types'
import { Grid, Form, Input, Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';


