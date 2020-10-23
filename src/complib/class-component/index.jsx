import React from 'react';
import ImageCard from './image-card';
import SearchBox from './search-box';


const url = 'https://jsonplaceholder.typicode.com/photos';

class ClassComponent extends React.Component {

  constructor() {
    super();
    this.state = { items: [], query: '' }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
      fetch(url)
      .then(res => res.json())
      .then(items => this.setState({items: items.splice(0, 5)}))   
  }

  handleChange(e) {
    this.setState({ query: e.target.value})
  }
   
  
  render() {
    const { items, query } = this.state;
    
    if (items.length === 0 ) return <h2>loading</h2>
    
    return(
      <div>
        <SearchBox handleChange={this.handleChange} />
        { items
          .filter( item => item.title.toLowerCase().includes(query.toLowerCase()))
          .map( (item) => <ImageCard key={item.id} {...item}/>) 
        }
      </div>
    );
  }
}
export default ClassComponent;

