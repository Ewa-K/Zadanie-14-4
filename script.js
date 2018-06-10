var Counter = React.createClass({

    getDefaultProps: function() {
        console.log();
    },

    getInitialState: function() {
        return {
            counter: 0,
            counter1: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    increment1: function() {
        this.setState({
            counter1: this.state.counter1 + 1
        });
    },

    decrement1: function() {
        this.setState({
            counter1: this.state.counter1 - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', { onClick: this.increment }, 'Dodaj 1'),
            React.createElement('button', { onClick: this.decrement }, 'Odejmij 1'),
            React.createElement('span', {}, ' Licznik ' + this.state.counter + ' '),
            React.createElement('button', { onClick: this.increment1 }, 'Dodaj 1'),
            React.createElement('button', { onClick: this.decrement1 }, 'Odejmij 1'),
            React.createElement('span', {}, ' Licznik ' + this.state.counter1)
        );
    },
})


var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));