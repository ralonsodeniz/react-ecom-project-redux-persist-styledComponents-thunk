import styled from "styled-components";

import CollectionItem from "../../components/collection-item/collection-item.component";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollectionTitleContainer = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px 15px;
`;

export const CollectionPageCollectionItem = styled(CollectionItem)`
  margin-bottom: 30px;
  width: 22vw;
`;
