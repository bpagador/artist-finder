import { renderHook, act } from '@testing-library/react-hooks';
import { useArtists } from './useArtists';

jest.mock('../models/Artist', () => ({
  useArtists(){
    return Promise.resolve([{
      'id': '1234abc',
      'name': 'beyonce'
    }]);
  }
}));

describe('useArtists hook', () => {
  it('has artists state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useArtists());
      return waitFor(() => {
        expect(result.current.artists).not.toBeUndefined();
      });
    });
  });
});
