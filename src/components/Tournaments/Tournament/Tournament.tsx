import React from 'react';
import {
  ITournament,
  removeTournament,
  updateTournament,
} from '../../../actions/tournaments';
import styled from 'styled-components';
import ContainerST from '../../Container';
import theme from '../../../theme';
import H6 from '../../H6';
import { format } from 'date-fns';
import Button from '../../Button';
import { useDispatch } from 'react-redux';

type TournamentProps = {
  tournament: ITournament;
};
const Tournament = ({ tournament }: TournamentProps) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeTournament(tournament));
  };

  const handleUpdate = () => {
    const name = window.prompt('New Tournament Name', tournament.name);
    if (!name) {
      return;
    }
    dispatch(updateTournament({ ...tournament, name: name! }));
  };

  return (
    <Container>
      <H6>{tournament.name}</H6>
      <Data>
        <DetailsRow>Organizer: {tournament.organizer}</DetailsRow>
        <DetailsRow>Game: {tournament.game}</DetailsRow>
        <DetailsRow>
          Participants: {tournament.participants?.current}/
          {tournament.participants?.max}
        </DetailsRow>
        <DetailsRow>
          Start:{' '}
          {format(new Date(tournament.startDate!), 'dd/MM/yyyy HH:mm:ss')}
        </DetailsRow>
        <ButtonRow>
          <Button onClick={handleUpdate}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </ButtonRow>
      </Data>
    </Container>
  );
};

export default Tournament;

const Container = styled(ContainerST)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 272px;
  width: 272px;
  min-height: 160px;
  padding: ${theme.spacing(4)};
  margin: 0;
  background-color: ${theme.palette.background.base};

  @media (max-width: ${theme.breakpoints.m}) {
    max-width: 192px;
    width: 192px;
  }

  @media (max-width: ${theme.breakpoints.s}) {
    max-width: none;
    width: calc(100% - 32px);
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  justify-content: flex-end;
`;

const DetailsRow = styled.div`
  color: ${theme.palette.text};
`;

const ButtonRow = styled(ContainerST)`
  display: flex;
  width: 100%;
  margin: ${theme.spacing(2)} 0 0;
  gap: ${theme.spacing(2)};
`;
