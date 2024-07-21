import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div<{ isOpen: boolean }>`
    width: ${props => props.isOpen ? '200px' : '50px'};
    background-color: #f0f0f0;
    transition: width 0.3s;
`;

const Sidebar: React.FC<{ isOpen: boolean; toggle: () => void }> = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <span>cld</span>
            <button onClick={toggle}>toggle</button>
            <nav>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/calendar">캘린더</Link></li>
                    <li><Link to="/settings">속성 설정</Link></li>
                </ul>
            </nav>
        </SidebarContainer>
    );
};

export default Sidebar;