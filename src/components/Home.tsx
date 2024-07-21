import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 24px;
  color: #888;
`;

const Home: React.FC = () => {
    return (
        <HomeContainer>
            환영합니다! 메뉴에서 원하는 항목을 선택하세요.
        </HomeContainer>
    );
};

export default Home;