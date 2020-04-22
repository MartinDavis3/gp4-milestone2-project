import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import Login from './login';
import Mainheader from './mainheader';
import Signup from './signup';

export interface IMainProps {
}

export default class Main extends React.Component<IMainProps> {
  public render() {
    return (
     <Grid>
<Mainheader/>

<Login/>
<Grid.Row> 

<Signup/>
</Grid.Row> 

     </Grid>
    );
  }
}
