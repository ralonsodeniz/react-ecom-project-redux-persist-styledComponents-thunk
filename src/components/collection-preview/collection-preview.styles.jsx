import styled from "styled-components";

import CollectionItem from "../collection-item/collection-item.component";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  gr
`;

export const CollectionItemPreview = styled(CollectionItem)`
  margin-bottom: 30px;
  width: 22vw;
`;
