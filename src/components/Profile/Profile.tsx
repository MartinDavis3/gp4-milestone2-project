import * as React from 'react';
import ProfileCard from './ProfileCard';


export interface IProfileProps {

}

export default class Profile extends React.Component<IProfileProps> {

    public render() {
        
        return (
            <div>
<ProfileCard/>
            </div>
        );
    }
}
