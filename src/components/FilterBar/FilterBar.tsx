import React, { ChangeEvent, useEffect, useState } from 'react';
import Container from '../Container';
import Button from '../Button';
import styled from 'styled-components';
import Input from '../Input';
import { useDispatch } from 'react-redux';
import { addTournament } from '../../actions/tournaments';
import { createTourament } from '../../constants/api';
import theme from '../../theme';

type FilterBarProps = {
  onSearch: (value: string) => void;
};
const FilterBar = ({ onSearch }: FilterBarProps) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleCreateTournament = async () => {
    const name = window.prompt('New Tournament Name');

    if (!name) {
      return;
    }
    const newTournament = await createTourament({ name });
    dispatch(addTournament(newTournament));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(search);
    }, 400);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  return (
    <FilterBarContainer>
      <Input
        placeholder="Search tournament..."
        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
          setSearch(ev.target.value.toLowerCase())
        }
      />
      <Button title="Create tournament" onClick={handleCreateTournament}>
        Create tournament
      </Button>
    </FilterBarContainer>
  );
};

export default FilterBar;

const FilterBarContainer = styled(Container)`
  margin: ${theme.spacing(6)} 0 0;
  justify-content: space-between;
  display: flex;
`;
