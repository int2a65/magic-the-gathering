import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Select from 'react-select'
import { get } from '../services/api';
import { GET_CARDS } from '../services/constants';
import Card from './Card';
import { List, Loader, Title, SearchBar, SearchInput, SortBar,
  SeachButton, SortButton, ActionBar, CardCounts, SelectBar, selectStyles } from './CardStyles';

const LOADER_SRC = "https://loading.io/spinners/flask/index.flask-loader.svg"

const filterCards = (data) => {
  return data.filter((val) => {
    return val.multiverseid; //Only exists if the card has a multiverse id.
  })
};

const options = [
  { value: 'creature', label: 'Creature' },
  { value: 'instant', label: 'Instant' },
  { value: 'artifact', label: 'Artifact' },
  { value: 'enchantment', label: 'Enchantment' },
  { value: 'land', label: 'Land' },
  { value: 'planeswalker', label: 'Planeswalker' },
  { value: 'sorcery', label: 'Sorcery' }
];

export default class CardPage extends Component {
  static defaultProps = {};
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      cardsData: [],
      loading: true,
      page: 1,
      pageSize: 20,
      hasMore: true,
      searchTerm: null,
      sortBy: 'name',
      totalCards: 0,
      type: 'creature'
    }
  }

  componentDidMount () {
    this.getCards()
  }

  getCards() {
    const { page, pageSize, cardsData, searchTerm, sortBy, type } = this.state

    let hasMore = true;
    let curPage = page;
    let curCardsData = cardsData

    get(`${GET_CARDS(type, sortBy, page, pageSize, searchTerm)}`).then((res)=>{

      if (res.headers.link && res.headers.link.indexOf(`rel="next"`) > -1) {
        curPage += 1;
        hasMore = true;
      } else {
        hasMore = false;
        curPage = 1;
      }
      let totalCards = res.headers && res.headers['total-count'] ? res.headers['total-count'] : null
      this.setState({
        cardsData: curCardsData.concat(filterCards(res.data.cards)),
        loading: false,
        page: curPage,
        hasMore,
        totalCards
      });
    })
  }

  loadMoreCards = () => {
    this.getCards()
  }

  onSearch = () => {
    this.setState({
      loading: true,
      page: 1,
      cardsData: []
    }, ()=> {
      this.getCards()
    })
  }

  onSearchInputChange = (e) => {
    const searchTerm = e.target.value;
    // escape/sanitize user input if necessary
    this.setState({
      searchTerm
    })
  }

  onSort = type => {
    this.setState({
      loading: true,
      sortBy: type,
      page: 1,
      cardsData: []
    }, ()=> {
      this.getCards()
    })
  }

  handleChange = (selectedOption) => {
    this.setState({
      loading: true,
      cardsData: [],
      totalCards: 0,
      page: 1,
      type: selectedOption.value
    }, ()=> {
      this.getCards()
    })
  }

  render () {
    const { cardsData, loading, hasMore, sortBy, totalCards} = this.state
    const cards = cardsData.map((card) => {
      return <Card data={card} key={card.id} />
    });
    const loadedCards = cardsData.length;

    return (
      <Fragment>
        <Title>Magic: The gathering</Title>
        <ActionBar>
          <SearchBar>
            <SearchInput type="text" placeholder="Search for a card..." onChange={this.onSearchInputChange} />
            <SeachButton onClick={this.onSearch}>Search</SeachButton>
          </SearchBar>
          <SortBar>
            Sort by:
            <SortButton selected={sortBy=== 'name'} onClick={() => this.onSort('name')}>Name</SortButton>
            <SortButton selected={sortBy=== 'set'} onClick={() => this.onSort('set')}>Set</SortButton>
            <SortButton selected={sortBy=== 'artist'} onClick={() => this.onSort('artist')}>Artist</SortButton>
          </SortBar>
          <SelectBar>
          <Select
            defaultValue={options[0]}
            styles={selectStyles}
            label="Select a type"
            onChange={this.handleChange}
            options={options} />
          </SelectBar>
        </ActionBar>
        <CardCounts>{`Total number of Cards: ${totalCards}. Cards loaded: ${loadedCards}`}</CardCounts>
        <List>{
          loading ? <Loader src={LOADER_SRC} /> :
          <InfiniteScroll
            element={'span'}
            pageStart={1}
            threshold={10}
            loadMore={this.loadMoreCards}
            hasMore={hasMore}
            loader={<Loader src={LOADER_SRC} />}>
            {cards}
          </InfiniteScroll>
        }</List>
      </Fragment>
    )
  }
}