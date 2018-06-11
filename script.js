var Counter = React.createClass({

    getDefaultProps() {
        console.log('getDefaultProps, dzięki niej można ustawić domyślne wartości propsów');
    },

    getInitialState() {
        console.log('getInitialState, dzięki niej ustalamy początkowy stan elementu');
    },

    componentWillMount() {
        console.log('componentWillMount możemy wykorzystać, kiedy na ekranie chcemy zobaczyć stan początkowy elementu.');
    },

    componentDidMount() {
        console.log('componentDidMount możemy wykorzystać do aktualizacji stanu elementu np. w wyniku wywołania AJAX.');
    },

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps możemy wykorzystać do sprawdzenia czy odświeżanie nastąpiło w wyniku zmiany obiektu this.props.');
    },

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate, dzięki niemu możemy np. anulować kolejne metody cyklu życia komponentu.');
        return true;
    },

    componentWillUpdate() {
        console.log('componentWillUpdate wywołujemy po to, aby przygotować się na nadchodzące zmiany');
    },

    componentDidUpdate() {
        console.log('componentDidUpdate, dzięki niemu możemy aktualizować stan komponentu.');
    },

    componentWillUnmount() {
        console.log('componentWillUnmount służy do wyczyszczenia pozostałości po działaniu komponentu');
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