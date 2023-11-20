import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const setBgColor = ({ eventType, theme }) => {
  switch (eventType) {
    case 'free':
      return theme.colors.red;
    case 'paid':
      return theme.colors.blue;
    case 'vip':
      return theme.colors.green;
    default:
      return theme.colors.black;
  }
};

export const Chip = styled.span`
  margin-bottom: 10px;
  color: ${setBgColor};
`;
