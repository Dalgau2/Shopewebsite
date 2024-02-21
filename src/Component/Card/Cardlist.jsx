
import cardData from "../FashionData/CardData.json";
import OfferCard from "./Card";
import { motion } from "framer-motion";
import DividerHeading from "../Dvider/Divider";
const CardList = () => {
  return (
    <>
  <DividerHeading heading={<h6>Dudwala</h6>}/>
    <div
      style={{
        //   border: "2px solid black",
        marginTop: "2px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "10px",
        // padding:"5px"
      }}
    >
      {cardData.map((cardDataDetail) => {
        const { id } = cardDataDetail;
        return (
          <motion.div
            whileHover={{ scale: 1.1 , boxShadow: "3px 3px 0 rgba(0, 0, 0, 0.2)"}}
            whileTap={{ scale: 0.9 }}
            transition={{ duration:0.3}}
            
            
            key={id}
            style={{
                
            //   border: "1px solid lightgray",
              gap: "2px",
              borderRadius: "5px",
                        }}
          >
            <OfferCard data={cardDataDetail} />
          </motion.div>
        );
      })}
    </div>
    </>
  );
};
export default CardList;
