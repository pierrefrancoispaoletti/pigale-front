import { faHeartCircle, faSearch } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Translator, Translate } from "react-auto-translate";
import React from "react";
import { Header } from "semantic-ui-react";
import "./productitem.css";
import {
  GOOGLE_API_KEY,
  primary,
  secondary,
  ternary,
} from "../../../_const/_const";

const ProductItem = ({
  product,
  _id,
  name,
  type,
  region,
  description,
  price,
  category,
  subCategory,
  choice,
  visible,
  image,
  user,
  setOpenImageModal,
  setSelectedProduct,
}) => {
  const userLang = navigator.language || navigator.userLanguage;

  const cacheProvider = {
    get: (language, key) =>
      ((JSON.parse(localStorage.getItem("translations")) || {})[key] || {})[
        language
      ],
    set: (language, key, value) => {
      const existing = JSON.parse(localStorage.getItem("translations")) || {
        [key]: {},
      };
      existing[key] = { ...existing[key], [language]: value };
      localStorage.setItem("translations", JSON.stringify(existing));
    },
  };

  return (
    <div
      className="productitem"
      style={{
        display: visible ? "" : user ? "" : "none",
        background: primary,
        border: `1px solid ${secondary}`,
      }}
    >
      <div className="productitem-header">
        <Header
          as="h3"
          style={
            type === "vins" && category === "rouges"
              ? { color: "darkred" }
              : type === "vins" && category === "roses"
              ? { color: "#fec5d9" }
              : type === "vins" && category === "blancs"
              ? { color: "#f1f285" }
              : { color: ternary }
          }
        >
          {!visible ? "Caché : " : ""}
          {name}
          {image && (
            <FontAwesomeIcon
              style={{ color: ternary, margin: 8 }}
              icon={faSearch}
              onClick={() => {
                setSelectedProduct(product);
                setOpenImageModal(true);
              }}
            />
          )}
          {choice ? (
            <FontAwesomeIcon
              className="bosschoice alvp__icon"
              icon={faHeartCircle}
              style={{
                "--fa-primary-color": primary,
                "--fa-secondary-color": secondary,
              }}
              size="2x"
            />
          ) : (
            ""
          )}
        </Header>
        {price !== 0 && (
          <span
            className="price"
            style={{ background: secondary, color: ternary }}
          >
            {price.toFixed(2)}
            <small>€</small>
          </span>
        )}
      </div>
      {region && (
        <div
          className="region"
          style={{ background: secondary, color: ternary }}
        >
          {region}
        </div>
      )}
      {description && (
        <Translator
          cacheProvider={cacheProvider}
          from="fr"
          to={userLang.substr(0, 2)}
          googleApiKey={GOOGLE_API_KEY}
        >
          <p
            className="description"
            style={{ background: secondary, color: ternary }}
          >
            <Translate>{description}</Translate>
          </p>
        </Translator>
      )}
    </div>
  );
};

export default ProductItem;
