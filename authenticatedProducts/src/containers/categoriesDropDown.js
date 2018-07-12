import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts as baseFetchProducts, fetchCategories as baseFetchCategories } from '../actions';

class CategoriesDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: '' };
  }

  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  onSelectChange(event) {
    const { fetchProducts } = this.props;
    const selectedCategory = event.target.value;
    this.setState({ selectedCategory });
    if (selectedCategory !== 'select') {
      fetchProducts(selectedCategory);
    }
  }

  render() {
    const { selectedCategory } = this.state;
    const { categories } = this.props;

    return (
      <select value={selectedCategory} onChange={event => this.onSelectChange(event)}>
        <option value="select">
Select a category
        </option>
        <option value={0}>
All
        </option>
        {
          categories && categories.categories && categories.categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))
        }
      </select>
    );
  }
}

function mapStateToProps({ categories }) {
  return { categories };
}
const actions = { fetchProducts: baseFetchProducts, fetchCategories: baseFetchCategories };
export default connect(mapStateToProps, actions)(CategoriesDropDown);
