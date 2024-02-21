import { wrap } from "framer-motion";
import imageData from "../../FashionData/ProductData.json";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import "./ProductCard.css";
const ProductCard = () => {
  console.log(imageData);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(4,1fr)`,
        gap: "10px",
        // padding: "0px",
        width: "100%",
        height: "100%",
        // padding:"2px"
        // border: "2px solid black",
      }}
    >
      {imageData.map((CardImage, index) => {
        const { image } = CardImage;
        return (
          <div
            key={index}
            style={{
              width: "300px",
              height: "300px",
              // border: "1px solid black",
              padding: "3px",
            }}
          >
            <div
            className="parentHover"
              style={{
                // border: "1px solid black",
                backgroundImage: `url(${image})`,
                objectFit: "cover",
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                borderRadius: "5px",
                padding: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "60%",
                  height: "60%",
                  border: "2px solid black",
                  padding: "10px 10px 10px 10px",
                  
                }}
                className="ShopNowContainer"
                >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <h1 style={{ margin: "0px", padding: "0px" }}>Woman</h1>
                  <p style={{ paddingLeft: "10px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, ad? Natus
                  </p>{" "}
                  <Button
                    variant="contained"
                    sx={{ margin: "0px", padding: "0px", width: "100px" }}
                  >
                    Shopnow
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductCard;
