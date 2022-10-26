// https://github.com/toss/slash 참조
import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { position } from './position';

expect.extend(matchers);

describe('position 테스트', () => {
  it("position('absolute', 0, 0, 0, 0)", () => {
    const { getByTestId } = render(<div data-testid="test" css={position('absolute', 0, 0, 0, 0)} />);

    const el = getByTestId('test');

    expect(el).toHaveStyleRule('position', 'absolute');
    expect(el).toHaveStyleRule('top', '0');
    expect(el).toHaveStyleRule('right', '0');
    expect(el).toHaveStyleRule('bottom', '0');
    expect(el).toHaveStyleRule('left', '0');
  });

  it('position(0, 0, 0, 0)', () => {
    const { getByTestId } = render(<div data-testid="test" css={position(0, 0, 0, 0)} />);

    const el = getByTestId('test');

    expect(el).toBeInTheDocument();

    expect(el).not.toHaveStyleRule('position', 'absolute');
    expect(el).toHaveStyleRule('top', '0');
    expect(el).toHaveStyleRule('right', '0');
    expect(el).toHaveStyleRule('bottom', '0');
    expect(el).toHaveStyleRule('left', '0');
  });

  it("position('absolute', {top: 0, left: 0})", () => {
    const { getByTestId } = render(<div data-testid="test" css={position('absolute', { top: 0, left: 0 })} />);

    const el = getByTestId('test');

    expect(el).toBeInTheDocument();

    expect(el).toHaveStyleRule('position', 'absolute');
    expect(el).toHaveStyleRule('top', '0');
    expect(el).not.toHaveStyleRule('bottom', '0');
    expect(el).not.toHaveStyleRule('right', '0');
    expect(el).toHaveStyleRule('left', '0');
  });
});
