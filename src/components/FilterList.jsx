import React from "react";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

import CheckboxList from "./CheckboxList";
import CollapsibleListItem from "./CollapsibleListItem";

const FiltersList = ({ setFilter }) => {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "#f7dccb" }}
      component="nav"
      aria-labelledby="search-by"
      subheader={
        <ListSubheader component="div" id="search-by">
          Search by:
        </ListSubheader>
      }
    >
      <CollapsibleListItem title="Price">
        <CheckboxList
          name="priceRange"
          options={[
            {
              label: "< $250",
              value: "<250",
            },
            {
              label: "$250 - $500",
              value: "250-500",
            },
            {
              label: "$500 - $750",
              value: "500-750",
            },
            {
              label: "$750 >",
              value: "750>",
            },
          ]}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Brand">
        <CheckboxList
          name="brand"
          options={[
            {
              label: "Samsung",
              value: "samsung",
            },
            {
              label: "Apple",
              value: "apple",
            },
            {
              label: "Huawei",
              value: "huawei",
            },
            {
              label: "LG",
              value: "lg",
            },
            {
              label: "HTC",
              value: "htc",
            },
          ]}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Color">
        <CheckboxList
          name="color"
          options={[
            {
              label: "Black",
              value: "black",
            },
            {
              label: "White",
              value: "white",
            },
            {
              label: "Grey",
              value: "grey",
            },
          ]}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="OS">
        <CheckboxList
          name="os"
          options={[
            {
              label: "Android",
              value: "android",
            },
            {
              label: "iOS",
              value: "ios",
            },
          ]}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Internal memory">
        <CheckboxList
          name="internalMemory"
          options={[
            {
              label: "16GB",
              value: "16",
            },
            {
              label: "64GB",
              value: "64",
            },
            {
              label: "128GB",
              value: "128",
            },
            {
              label: "256GB",
              value: "256",
            },
          ]}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="RAM">
        <CheckboxList
          name="ram"
          options={[
            {
              label: "1GB",
              value: "1",
            },
            {
              label: "3GB",
              value: "3",
            },
            {
              label: "4GB",
              value: "4",
            },
            {
              label: "6GB",
              value: "6",
            },
          ]}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Display size">
        <CheckboxList
          name="displaySize"
          options={[
            {
              label: "4.5''",
              value: "4.5",
            },
            {
              label: "5.1''",
              value: "3",
            },
            {
              label: "5.5''",
              value: "",
            },
            {
              label: "5.8''",
              value: "",
            },
            {
              label: "6.0''",
              value: "6.0",
            },
            {
              label: "6.3''",
              value: "6.3",
            },
          ]}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Display resolution">
        <CheckboxList
          name="displayResolution"
          options={[
            {
              label: "540x960",
              value: "540x960",
            },
            {
              label: "1080x1920",
              value: "1080x1920",
            },
            {
              label: "1125x2436",
              value: "1125x2436",
            },
            {
              label: "1440x2560",
              value: "1440x2560",
            },
            {
              label: "1440x2880",
              value: "1440x2880",
            },
            {
              label: "1440x2960",
              value: "1440x2960",
            },
          ]}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="Camera">
        <CheckboxList
          name="camera"
          options={[
            {
              label: "8Mpix",
              value: "8",
            },
            {
              label: "12Mpix",
              value: "12",
            },
            {
              label: "13Mpix",
              value: "13",
            },
            {
              label: "16Mpix",
              value: "16",
            },
          ]}
          onChange={setFilter}
        />
      </CollapsibleListItem>
      <CollapsibleListItem title="CPU">
        <CheckboxList
          name="cpu"
          options={[
            {
              label: "Quad Core",
              value: "quad_core",
            },
            {
              label: "Hexa Core",
              value: "hexa_core",
            },
            {
              label: "Octa Core",
              value: "octa_core",
            },
          ]}
          onChange={setFilter}
        />
      </CollapsibleListItem>
    </List>
  );
};

export default FiltersList;
