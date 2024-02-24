import { Divider } from "@mui/material";
const DividerHeading = ({heading}) => {

  return (
    <>
      <div>
        <Divider sx={{fontSize:"2rem",fontWeight:"700",margin:"10px",marginTop:"5px",borderColor:"1px solid red"}}>{heading}</Divider>
      </div>
    </>
  );
};
export default DividerHeading;
