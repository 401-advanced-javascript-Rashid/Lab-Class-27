import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { conut: 0 }
    }
    

    increment() {
        let counter = this.state.conut;
        this.setState({ conut: counter + 1 })
    }

    decrement() {
        let counter = this.state.conut;
        this.setState({ conut: counter - 1 })
    }

    render() {
        return (
            <section>
                <div>
                    <div id="text">
                        <h2 id="h2">Cou<span id="offset">nter[{this.state.conut}]</span></h2>
                    </div>
                </div>
                <button id="rss2" onClick={() => this.increment()}>+</button>
                <button id="rss1" onClick={() => this.decrement()}>-</button>
            </section>

        );
    }
}
export default Counter ;