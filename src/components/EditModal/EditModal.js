import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const EditModal = ({ noteToEdit }) => {

  const OuterContainer = styled.div`
    ${tw`left-0 right-0 bottom-0 top-0 absolute flex items-center justify-center`}
    background: rgba(255, 250, 215, 0.80);
  `;

  const InnerContainer = styled.div`
    ${tw`w-3/5`}
    background: #a0aec0;
    height: 250px;
  `;  

  return (  
    noteToEdit ? (
      <OuterContainer>
        <InnerContainer>

        </InnerContainer>
      </OuterContainer>
    ) : null
  );
}
 
export default EditModal;