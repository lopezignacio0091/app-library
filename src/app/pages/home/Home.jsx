import { Grid, Container, Button } from "@mui/material";
import { isMobileOnly } from "react-device-detect";
import React , {useState} from "react";
import Slider from "../../components/slider/Slider";
import image1 from "../../../img/aguines_Banner.jpg";
import image2 from "../../../img/banner_eva.jpg";
import image3 from "../../../img/cosby_Banner.png";
import image4 from "../../../img/fitnes_Banner.jpg";
import image5 from "../../../img/fontana_Banner.jpg";
import image6 from "../../../img/lacasa_Banner.jpg";
import image1_mobile from "../../../img/mobile_Aguinis.jpg";
import image2_mobile from "../../../img/mobile_DICKER.jpg";
import image3_mobile from "../../../img/mobile_fitnes.jpg";
import image4_mobile from "../../../img/Mobile_King.jpg";
import image5_mobile from "../../../img/mobile_maldito.png";
import HeaderInfo from "./components/HeaderInfo";
import BodyInfo from "./components/BodyInfo";
import BasicModal from "../../components/modal/Modal";
import { useCallback } from "react";
import Book from "../book/Book";

const Home = () => {
  const [modalForm , setModalForm] = useState(false);

  const handleModal = useCallback(()=>{
    setModalForm((value)=>!value);
  },[])

  const imagesBanner = [
    { url: isMobileOnly ? image1_mobile : image1 },
    { url: isMobileOnly ? image2_mobile : image2 },
    { url: isMobileOnly ? image3_mobile : image3 },
    { url: isMobileOnly ? image4_mobile : image4 },
    { url: isMobileOnly ? image5_mobile : image5 },
    { url: isMobileOnly ? image3_mobile : image6 },
  ];

  return (
    <>
      <Slider images={imagesBanner} />
      <Container>
        {!isMobileOnly && (
          <Grid
            item
            md={12}
            mt={4}
            justifyContent="center"
            style={{ display: "flex" }}
          >
            <HeaderInfo />
          </Grid>
        )}
        <Grid
          container
          spacing={2}
          item
          md={4}
          p={2}
          sm={12}
          mt={3}
          justifyContent={isMobileOnly ? "space-evenly" : "space-around"}
        >
          <Button
            style={{
              backgroundColor: "#C4523A",
              borderColor: "#C4523A",
              color: "white",
            }}
            onClick={handleModal}
          >
            Disponible
          </Button>
          <Button
            variant="outlined"
            style={{ borderColor: "#C4523A", color: "#9C9998" }}
          >
            No Disponible
          </Button>
        </Grid>
        <Grid item md={12} mt={2}>
          <BodyInfo />
        </Grid>
      </Container>
      <BasicModal  handleClose={handleModal} open={modalForm} children={<Book/>}/>
    </>
  );
};

export default Home;
