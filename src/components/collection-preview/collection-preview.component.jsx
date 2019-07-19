import React from "react";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
  ItemsContainer,
  CollectionItemPreview
} from "./collection-preview.styles";
// import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        <ItemsContainer>
          {items
            .filter((item, itemIndex) => itemIndex < 4) // we do the filter so we only show 4 items in the collection preview
            .map(item => {
              return <CollectionItemPreview key={item.id} item={item} />;
            })}
        </ItemsContainer>
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
