import React from 'react';
import { Button, ConfigProvider, Space } from 'antd';
import { css } from '@emotion/css';

const App = () => {
  const linearGradientButton = css`
    position: relative;
    overflow: hidden;
    border-width: 0;

    &::before {
      content: '';
      background: linear-gradient(135deg, #6253e1, #04befe);
      position: absolute;
      inset: 0;
      opacity: 1;
      transition: opacity 0.3s;
      border-radius: inherit;
      z-index: 0;
    }

    > span {
      position: relative;
      z-index: 1;
    }

    &:hover::before {
      opacity: 0;
    }
  `;

  const wrapperStyle = css`
    display: flex;
    justify-content: flex-start; /* Alinha o botão à esquerda */
    align-items: center; /* Alinha o botão verticalmente no centro */
    height: 100vh; /* Ocupa toda a altura da página */
    padding-left: 20px; /* Espaçamento da borda esquerda */
    box-sizing: border-box; /* Inclui padding na altura total */
  `;

  const htmlBodyStyle = css`
    html, body {
      margin: 0;
      height: 100%;
    }
  `;

  return (
    <ConfigProvider>
      <style>{htmlBodyStyle}</style> {/* Adiciona o CSS global para altura */}
      <div className={wrapperStyle}>
        <Space>
          <Button className={linearGradientButton} type="primary" size="large">
            Conheça Mais
          </Button>
        </Space>
      </div>
    </ConfigProvider>
  );
};

export default App;
