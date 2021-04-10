import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import storeContext from "../Context";
import { Pagination } from "react-bootstrap";

const PokemonsPagination = () => {
  const store = useContext(storeContext);
  return (
    <div>
      <Pagination>
        {store.previousUrl && (
          <Pagination.Prev onClick={store.goToPreviousUrl}>
            Previous
          </Pagination.Prev>
        )}
        {store.nextUrl && (
          <Pagination.Next onClick={store.goToNextUrl}>Next</Pagination.Next>
        )}
      </Pagination>
    </div>
  );
};

export default observer(PokemonsPagination);
