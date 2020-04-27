import * as React from 'react';
import Button " ... " from  `../img/background`;

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    
    let background = " ... ";
    return (
        <React.Fragment>
            <Button " ... " icon={default.jpg}/>
            <Button " ... " icon={lake.jpg}/>
            <Button " ... " icon={mountain.jpg}/>
            <Button " ... " icon={valley.jpg}/>
        </React.Fragment>
    );
}
}