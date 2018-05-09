// TODO

// var App = () => (
//   <div>Some cliche salutation</div>
// );

var GroceryList = (props) => (
  <div>
    <h2> My Grocery List </h2>
      <ul>
        {props.list.map(item =>
          <GroceryListItem list={item} />
        )}
      </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState( {
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return (
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.list}</li>
    )
  }
}

ReactDOM.render(<GroceryList list={['apple', 'banana', 'toothbrush', 'shower ball']}/>, document.getElementById("app"));
