import styled from 'styled-components';
import { device } from '../utilities/devices';

/* Card styles */
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: start;
  margin: 20px;

  div {
    padding: 4px 0px;
    text-align: left;
  }
`

export const Info = styled.div`

  div {
    overflow: hidden;
    max-width: 222px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const CardPanel = styled.div`
  max-width: 228px;
  box-shadow: inset 0 3px 10px rgba(0,0,0,.5), 0 1px 0 rgba(255,255,255,.15);
`

export const Image = styled.img`
  border-radius: 12px;
  max-width: 223px;
  max-height: 310px;
`

export const Name = styled.div`
  color: #e9f6ca;
`

export const Artist = styled.div`
  color:#89c196;
`

export const SetName = styled.div`
`

export const Type = styled.div`
`

/* Card List */
export const Loader = styled.img`
  margin: 40px 0;
`

export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: start;
  background: #151a1f;
  color: #e1e1e1;

  span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-content: start;
    min-height: 700px;
  }
`

/* Card page */
export const Title = styled.h2`
  color: #fdffdf;
  padding: 0 18px 18px 18px;
  border-bottom: 1px solid;
`

export const SearchBar = styled.div`
  margin: 0 24px;
  height: 38px;
  line-height: 38px;
`

export const SearchInput = styled.input`
  -webkit-appearance: none;
  background-color: #ddd;
  height: 25px;
  border: 1px solid #fdffdf;
`

export const SeachButton = styled.button`
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  -webkit-appearance: none;
  height: 28px;
  color: #fff;
  background-color: #325a5a;
  background-image: linear-gradient(to bottom,#325a5a 0%,#2a4d4d 50%,#254343 100%);
`

export const SortBar = styled.div`
  height: 38px;
  line-height: 38px;
  @media ${device.mobile} {
    margin-left: 24px;
  }
`

export const SortButton = styled.button`
  border: 1px solid transparent;
  border-bottom: ${props => props.selected ? '1px solid #e1e1e1' : 'none'};
  background: #151a1f;
  color: #e1e1e1;
  font-size: 13px;
  cursor: pointer;
  outline: none;
`

export const ActionBar = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.mobile} {
    flex-direction: column;
  }
`

export const CardCounts = styled.div`
  margin: 20px 0 0 20px;
`

export const SelectBar = styled.div`
  @media ${device.mobile} {
    margin-left: 24px;
  }
`

/* selector styles */
export const selectStyles = {
  container: (styles) => ({
    ...styles,
    width: '140px'
  }),
  control: (styles) => ({
    ...styles,
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    outline: 0
  }),
  option: (styles) => {
    return {
      ...styles,
      minWidth: '100px',
      "&:hover": {
        backgroundColor: "#89c196",
        color: '#fff'
      }
    }
  },
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none'
  }),
  singleValue: (styles) => {
    return {
      ...styles,
      color: '#e1e1e1'
    }
  },
  valueContainer: styles => ({
    ...styles,
    color: '#e1e1e1',
    borderLeft: '1px solid #fdffdf',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }),
  menu: (styles) => {
    return {
      ...styles,
      background: '#151a1f',
      color: '#e1e1e1',
      border: `1px solid #fdffdf`,
      borderRadius: 0,
      paddingTop: '5px',
      paddingBottom: '5px',
    }
  }
}
