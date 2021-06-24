import {
  faBeer,
  faCheeseburger,
  faGlassChampagne,
  faGlassCitrus,
  faGlassWhiskeyRocks,
  faHatChef,
  faPepperHot,
  faWineBottle,
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
        slug: "tapas",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faHatChef}
            style={{ "--fa-secondary-color": "red" }}
          />
        ),
      },
      {
        name: "Épicerie",
        slug: "epicerie",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faPepperHot}
            style={{ "--fa-secondary-color": "red" }}
          />
        ),
      },
    ],
  },
  {
    name: "Vins",
    slug: "vins",
    icon: (
      <FontAwesomeIcon
        icon={faWineBottle}
        size="4x"
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
    subCategories: [
      {
        name: "Vins Rouges",
        slug: "rouges",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faWineBottle}
            style={{ "--fa-primary-color": "darkred" }}
          />
        ),
      },
      {
        name: "Vins Rosés",
        slug: "roses",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faWineBottle}
            style={{ "--fa-primary-color": "#fec5d9" }}
          />
        ),
      },
      {
        name: "Vins Blancs",
        slug: "blancs",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faWineBottle}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
      },
    ],
  },
  {
    name: "Champagnes",
    slug: "champagnes",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faGlassChampagne}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
    subCategories: [
      {
        name: "Brut",
        slug: "champagnes bruts",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassChampagne}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
      },
      {
        name: "Rosé",
        slug: "champagnes roses",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassChampagne}
            style={{ "--fa-primary-color": "#fec5d9" }}
          />
        ),
      },
      {
        name: "Blanc de Blancs",
        slug: "champagnes blanc de blancs",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassChampagne}
            style={{ "--fa-primary-color": "white" }}
          />
        ),
      },
      {
        name: "Millésimés",
        slug: "champagnes millésimés",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassChampagne}
            style={{ "--fa-primary-color": "gold" }}
          />
        ),
      },
    ],
  },
  {
    name: "Bières",
    slug: "bieres",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faBeer}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
  {
    name: "Alcools",
    slug: "alcools",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faGlassWhiskeyRocks}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
    subCategories: [
      {
        name: "Premiums",
        slug: "premiums",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassWhiskeyRocks}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
      },
      {
        name: "Classiques",
        slug: "classiques",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassWhiskeyRocks}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
      },
    ],
  },
  {
    name: "Softs",
    slug: "softs",
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
