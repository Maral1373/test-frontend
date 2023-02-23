import React from "react";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

import CheckboxList from "./CheckboxList";
import CollapsibleListItem from "./CollapsibleListItem";

import { PRODUCT_TAGS } from "../consts/consts";

const FiltersList = ({ setFilter }) => {
  return (
    <List
      sx={{ width: "100%", bgcolor: "#f7dccb" }}
      component="nav"
      aria-labelledby="search-by"
      subheader={
        <ListSubheader component="div" id="search-by">
          Search by:
        </ListSubheader>
      }
    >
      <CollapsibleListItem isOpen={true} title="Price">
        <CheckboxList
          name="priceRange"
          options={PRODUCT_TAGS.priceRange}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Brand">
        <CheckboxList
          name="brand"
          options={PRODUCT_TAGS.brand}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Color">
        <CheckboxList
          name="color"
          options={PRODUCT_TAGS.color}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="OS">
        <CheckboxList
          name="os"
          options={PRODUCT_TAGS.os}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Internal memory">
        <CheckboxList
          name="internalMemory"
          options={PRODUCT_TAGS.internalMemory}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="RAM">
        <CheckboxList
          name="ram"
          options={PRODUCT_TAGS.ram}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Display size">
        <CheckboxList
          name="displaySize"
          options={PRODUCT_TAGS.displaySize}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Display resolution">
        <CheckboxList
          name="displayResolution"
          options={PRODUCT_TAGS.displayResolution}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Camera">
        <CheckboxList
          name="camera"
          options={PRODUCT_TAGS.camera}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="CPU">
        <CheckboxList
          name="cpu"
          options={PRODUCT_TAGS.cpu}
          onChange={setFilter}
        />
      </CollapsibleListItem>
    </List>
  );
};

export default FiltersList;
