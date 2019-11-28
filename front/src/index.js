import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    render() {
        const test = 'Test';

        return (
        <div>
            <div className="test">{test}</div>
        </div>
        );
    }
}
  
class Page extends React.Component {
    render() {
        return (
        <div className="page">
            <div className="component">
            <Component />
            </div>
        </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);