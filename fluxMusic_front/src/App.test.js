import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history';

test('Verifica se a rota `/` renderiza corretamente se existe 3 botões na página', () => {
  const history = createMemoryHistory();
  
  render(<App history={history}/>);

  history.push('/');
  const pathname = history.location.pathname;
  expect(pathname).toBe('/');

  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(3);
});

test('Verifica se existe um link News na página', () => {
  render(<App />);
  const linkNews = screen.getByText('News');
  expect(linkNews).toBeInTheDocument();
  expect(linkNews).toBeEnabled();
});

test('Verifica se a rota `/artists` renderiza corretamente e se existe um link `Artists` na página', () => {
  const history = createMemoryHistory();

  render(<App history={history}/>);

  history.push('/artists');
  const pathname = history.location.pathname;
  expect(pathname).toBe('/artists');
  
  const linkArtists = screen.getByText('Artists');
  expect(linkArtists).toBeInTheDocument();
  expect(linkArtists).toBeEnabled();
});

test('Verifica se a rota `/abums` renderiza corretamente e se existe um link `Albums` na página', () => {
  const history = createMemoryHistory();

  render(<App history={history}/>);

  history.push('/albums');
  const pathname = history.location.pathname;
  expect(pathname).toBe('/albums');

  const linkAlbums = screen.getByText('Albums');
  expect(linkAlbums).toBeInTheDocument();
  expect(linkAlbums).toBeEnabled();
});
