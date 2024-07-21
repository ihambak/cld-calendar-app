import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px;
`;

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <LayoutContainer>
            <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
            <Content>{children}</Content>
        </LayoutContainer>
    );
};

export default Layout;