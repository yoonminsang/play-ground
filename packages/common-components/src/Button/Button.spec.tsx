import userEvent from '@testing-library/user-event';

import { render, screen } from '../../utils/testUtils';

import Button from './Button';

describe('Button', () => {
  const BUTTON_ID = 'test-button';
  const BUTTON_CHILDREN_TEXT = '확인';

  it('children rendering', () => {
    render(
      <Button variant="filled" color="blue" size="md" testId={BUTTON_ID}>
        {BUTTON_CHILDREN_TEXT}
      </Button>,
    );

    expect(screen.getByTestId(BUTTON_ID).children).not.toBeNull();
    expect(screen.getByTestId(BUTTON_ID).firstElementChild).toHaveTextContent(BUTTON_CHILDREN_TEXT);
  });

  it('클릭하면 onClick 콜백을 실행', async () => {
    const mockOnClick = jest.fn();

    render(
      <Button variant="filled" color="blue" size="md" testId={BUTTON_ID} onClick={mockOnClick}>
        {BUTTON_CHILDREN_TEXT}
      </Button>,
    );

    await userEvent.click(screen.getByTestId(BUTTON_ID));

    expect(screen.getByTestId(BUTTON_ID)).toBeEnabled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('disabled일때 클릭하면 onClick 콜백을 실행x', async () => {
    const mockOnClick = jest.fn();

    render(
      <Button variant="filled" color="blue" size="md" testId={BUTTON_ID} disabled onClick={mockOnClick}>
        {BUTTON_CHILDREN_TEXT}
      </Button>,
    );

    await userEvent.click(screen.getByTestId(BUTTON_ID));

    expect(screen.getByTestId(BUTTON_ID)).toBeDisabled();
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
