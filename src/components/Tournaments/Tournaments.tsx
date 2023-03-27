import React from 'react';
import { ITournament } from '../../actions/tournaments';
import { shallowEqual, useSelector } from 'react-redux';
import Tournament from './Tournament/Tournament';
import Container from '../Container';
import styled, { css } from 'styled-components';
import theme from '../../theme';
import Button from '../Button';

type TournamentsProps = {
  onRetry?: () => void;
};

const Tournaments = ({ onRetry }: TournamentsProps) => {
  const {
    data: tournaments,
    isLoading,
    error,
  } = useSelector((state: any) => state.tournaments, shallowEqual);

  if (error) {
    return (
      <ContainerCenter>
        <span>Something went wrong.</span>
        <Button onClick={onRetry}>Retry</Button>
      </ContainerCenter>
    );
  }

  if (isLoading) {
    return <ContainerCenter>Loading tournaments ...</ContainerCenter>;
  }
  if (!tournaments.length) {
    return <ContainerCenter>No tournaments found.</ContainerCenter>;
  }

  return (
    <TournamentsContainer itemsCount={tournaments.length}>
      {tournaments.map((tournament: ITournament) => {
        return (
          <Tournament
            key={`${tournament?.id!}-${tournament.name}`}
            tournament={tournament}
          />
        );
      })}
    </TournamentsContainer>
  );
};
export default Tournaments;

const TournamentsContainer = styled(Container)<{ itemsCount: number }>`
  display: grid;
  flex-direction: row;
  justify-content: space-between;
  grid-template: 'a b c';
  gap: ${theme.spacing(6)};
  margin: ${theme.spacing(6)} 0 0;
  ${({ itemsCount }) => {
    return (
      itemsCount < 3 &&
      css`
        display: flex;
        justify-content: flex-start;
      `
    );
  }};

  @media (max-width: ${theme.breakpoints.s}) {
    grid-template: none;
  }
`;

const ContainerCenter = styled(Container)`
  margin: ${theme.spacing(6)} 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing(6)};
`;
