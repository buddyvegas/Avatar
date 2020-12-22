import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import AvatarSvg from './AvatarSvg.svelte';

describe('Avatar SVG', () => {
  it('Shows the avatar with the name initial', () => {
    const { getByText } = render(AvatarSvg, { name: 'Homer Simpson' });

    expect(getByText('HS')).toBeInTheDocument();
  });
});