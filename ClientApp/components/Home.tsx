import * as React from 'react';

export default class Home extends React.Component<void, void> {
    public render() {
        return <div>
            <h1>Hello, world!</h1>

            <video className="video-header" autoPlay loop muted>
                <source src="./video/AIRxTOUCHBAR.mp4?version=3" data-wf-ignore=""></source>
            </video>

        </div>;
    }
}
