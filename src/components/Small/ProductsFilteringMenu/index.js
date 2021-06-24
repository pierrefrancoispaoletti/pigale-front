import React from "react";
import { Menu } from "semantic-ui-react";
import { secondary, ternary } from "../../../_const/_const";

const ProductsFilteringMenu = ({
  subCategories,
  activeMenu,
  setActiveMenu,
}) => {
  return (
    <Menu
      compact
      borderless
      icon="labeled"
      className="categories-menu"
      style={{background: secondary}}
    >
      {subCategories.map((subCategory) => (
        <>
          <Menu.Item
            style={{ color: ternary}}
            key={subCategory.slug}
            className="menu-items"
            active={activeMenu === subCategory.slug}
            onClick={() => setActiveMenu(subCategory.slug)}
          >
            <Menu.Header>{subCategory.icon}</Menu.Header>
            {subCategory.name}
          </Menu.Item>
        </>
      ))}
    </Menu>
  );
};

export default ProductsFilteringMenu;
