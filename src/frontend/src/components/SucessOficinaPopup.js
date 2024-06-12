import React from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 500px;
`;

const SuccessMessage = styled.h3`
  font-family: 'Be Vietnam Pro Bold', sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
`;

const OkButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Be Vietnam Pro', sans-serif;
  color: white;
  background-color: #2f3192;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #23256e;
  }
`;

const SuccessMessagePopup = ({ onClose }) => {
  const handleOkClick = () => {
    onClose();
  };

  return (
    <PopupOverlay>
      <PopupContent>
        <SuccessMessage>Oficina criada com sucesso!</SuccessMessage>
        <OkButton onClick={handleOkClick}>Ok</OkButton>
      </PopupContent>
    </PopupOverlay>
  );
};

export default SuccessMessagePopup;
