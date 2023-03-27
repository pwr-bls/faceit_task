import React, { useCallback, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import H4 from './components/H4';
import FilterBar from './components/FilterBar/FilterBar';
import { fetchTouramentsData } from './constants/api';
import {
  addTournaments,
  errorTournament,
  loadTournament,
} from './actions/tournaments';
import Tournaments from './components/Tournaments/Tournaments';

const App = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    dispatch(loadTournament());
    fetchTouramentsData(search)
      .then((data) => dispatch(addTournaments(data)))
      .catch(() => {
        dispatch(errorTournament());
      });
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <FilterBar onSearch={setSearch} />
      <Tournaments onRetry={fetchData} />
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
