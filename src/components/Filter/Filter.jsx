import { FilterInput, FilterLabel } from './Filter.styled';
import { getFilter, setFilter } from 'redux/Slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export const Filter = ({ OnChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterContacts = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={filterContacts} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
