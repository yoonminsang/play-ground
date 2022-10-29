import { render, screen, fireEvent } from '../../utils/testUtils';

import Tooltip from './Tooltip';

const context = describe;

describe('Tooltip', () => {
  const TOOLTIP_ID = 'test-tooltip';
  const TOOLTIP_TITLE = 'tooltip';
  const CHILDREN_TEXT = 'HOVER';

  context('when portalContainer case', () => {
    it('portalContainer가 없는 경우(docucument body)', () => {
      render(
        <Tooltip title={TOOLTIP_TITLE} data-testid={TOOLTIP_ID}>
          <div>{CHILDREN_TEXT}</div>
        </Tooltip>,
      );

      expect(document.body.childElementCount).toBe(1);
      fireEvent.mouseOver(screen.getByTestId(TOOLTIP_ID));
      expect(document.body.childElementCount).toBe(2);
      fireEvent.mouseOut(screen.getByTestId(TOOLTIP_ID));
      expect(document.body.childElementCount).toBe(1);
    });
  });

  it('portalContainer가 존재하는 경우', () => {
    const portalContainer = document.createElement('div');
    render(
      <Tooltip title={TOOLTIP_TITLE} data-testid={TOOLTIP_ID} portalContainer={portalContainer}>
        <div>{CHILDREN_TEXT}</div>
      </Tooltip>,
    );
    expect(portalContainer).not.toBeNull();
    expect(portalContainer.childElementCount).toBe(0);
    fireEvent.mouseOver(screen.getByTestId(TOOLTIP_ID));
    expect(portalContainer.childElementCount).toBe(1);
    fireEvent.mouseOut(screen.getByTestId(TOOLTIP_ID));
    expect(portalContainer.childElementCount).toBe(0);
  });
});
