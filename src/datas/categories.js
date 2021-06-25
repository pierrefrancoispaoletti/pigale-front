import {
  faBurrito,
  faCheeseburger,
  faChild,
  faGlassCitrus,
  faSalad,
  faStroopwafel,
  faUtensils,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primary, secondary } from "../_const/_const";

const categories = [
  {
    name: "Cuisine",
    slug: "cuisine",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faCheeseburger}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
    subCategories: [
      {
        name: "Salades",
        slug: "salades",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faSalad}
            style={{ "--fa-secondary-color": "red" }}
          />
        ),
      },
      {
        name: "Omelettes",
        slug: "omelettes",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faBurrito}
            style={{ "--fa-secondary-color": "red" }}
          />
        ),
      },
      {
        name: "Le Chaud",
        slug: "chaud",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faUtensils}
            style={{ "--fa-secondary-color": "red" }}
          />
        ),
      },
    ],
  },
  {
    name: "Menu-Enfant",
    slug: "menuenfant",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faChild}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
  {
    name: "Desserts",
    slug: "desserts",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faStroopwafel}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
  {
    name: "Boissons",
    slug: "Boissons",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faGlassCitrus}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
];

export default categories;
