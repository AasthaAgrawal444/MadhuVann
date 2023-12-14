import Carousel from "react-bootstrap/Carousel";
import "./IUCN.css";
import iucn from "../Assets/Group 164.png";

function IUCN() {
  return (
    <div className="carousel">
      <h1>IUCN Scale</h1>
      <p className="text1">
        The IUCN Red List is a global inventory that classifies species based on
        their risk of extinction. It divides species into nine categories,
        ranging from "Least Concern" (stable populations) to "Extinct" (no
        individuals remaining). This scale provides a critical tool for
        conservation efforts by highlighting species in need of immediate
        attention and guiding prioritization of resources. Scientists use
        various criteria, including population size, decline rate, and
        geographic distribution, to determine a species' category, making the
        Red List an invaluable resource for informing conservation strategies.
      </p>
      <img className="scale" src={iucn} style={{ maxWidth: "90vw" }} />
      <div className="bg" style={{ textAlign: "center" }}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item className="center">
            <div className="center">
              <h1
                style={{
                  height: "1.5em",
                  width: "1.5em",
                  background: "red",
                  margin: "auto",
                  borderRadius: "50%",
                  fontSize: "3em",
                  paddingTop: ".25em",
                }}
              >
                EX
              </h1>
            </div>
            <h3>Extinct</h3>
            <p className="text2">
              In the IUCN Red List, the category "EX" signifies extinction. This
              means no doubt exists that the last individual of a species has
              died. Extensive surveys throughout its historic range have failed
              to locate any individuals, leaving only direct evidence like
              discovered dead specimens to confirm its demise. While the number
              of documented "EX" extinctions likely falls short of reality, it
              underscores the urgency of conservation efforts to prevent future
              losses.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h1>EX</h1>
            <h3>Extinct</h3>
            <p className="text2">
              In the IUCN Red List, the category "EX" signifies extinction. This
              means no doubt exists that the last individual of a species has
              died. Extensive surveys throughout its historic range have failed
              to locate any individuals, leaving only direct evidence like
              discovered dead specimens to confirm its demise. While the number
              of documented "EX" extinctions likely falls short of reality, it
              underscores the urgency of conservation efforts to prevent future
              losses.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h1>EX</h1>
            <h3>Extinct</h3>
            <p className="text2">
              In the IUCN Red List, the category "EX" signifies extinction. This
              means no doubt exists that the last individual of a species has
              died. Extensive surveys throughout its historic range have failed
              to locate any individuals, leaving only direct evidence like
              discovered dead specimens to confirm its demise. While the number
              of documented "EX" extinctions likely falls short of reality, it
              underscores the urgency of conservation efforts to prevent future
              losses.
            </p>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <h1>EX</h1>
            <h3>Extinct</h3>
            <p className="text2">
              In the IUCN Red List, the category "EX" signifies extinction. This
              means no doubt exists that the last individual of a species has
              died. Extensive surveys throughout its historic range have failed
              to locate any individuals, leaving only direct evidence like
              discovered dead specimens to confirm its demise. While the number
              of documented "EX" extinctions likely falls short of reality, it
              underscores the urgency of conservation efforts to prevent future
              losses.
            </p>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <h1>EX</h1>
            <h3>Extinct</h3>
            <p className="text2">
              In the IUCN Red List, the category "EX" signifies extinction. This
              means no doubt exists that the last individual of a species has
              died. Extensive surveys throughout its historic range have failed
              to locate any individuals, leaving only direct evidence like
              discovered dead specimens to confirm its demise. While the number
              of documented "EX" extinctions likely falls short of reality, it
              underscores the urgency of conservation efforts to prevent future
              losses.
            </p>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <h1>EX</h1>
            <h3>Extinct</h3>
            <p className="text2">
              In the IUCN Red List, the category "EX" signifies extinction. This
              means no doubt exists that the last individual of a species has
              died. Extensive surveys throughout its historic range have failed
              to locate any individuals, leaving only direct evidence like
              discovered dead specimens to confirm its demise. While the number
              of documented "EX" extinctions likely falls short of reality, it
              underscores the urgency of conservation efforts to prevent future
              losses.
            </p>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <h1>EX</h1>
            <h3>Extinct</h3>
            <p className="text2">
              In the IUCN Red List, the category "EX" signifies extinction. This
              means no doubt exists that the last individual of a species has
              died. Extensive surveys throughout its historic range have failed
              to locate any individuals, leaving only direct evidence like
              discovered dead specimens to confirm its demise. While the number
              of documented "EX" extinctions likely falls short of reality, it
              underscores the urgency of conservation efforts to prevent future
              losses.
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default IUCN;
