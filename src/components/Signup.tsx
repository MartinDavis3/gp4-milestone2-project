import React from 'react';
import {RootState} from '../store';
import  {signUp } from  '../store/user/actions';
import {User} from '../store/user/types'
import { Grid, Form, Input, Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface ISignupProps
{
    signUp: typeof signUp,
    userList: User[]
}