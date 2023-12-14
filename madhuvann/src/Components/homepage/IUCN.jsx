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
              <p
                style={{
                  height: "2.5em",
                  width: "2.5em",
                  background: "black",
                  margin: "auto",
                  borderRadius: "50%",
                  fontSize: "2em",
                  paddingTop: ".5em",
                  color: "red",
                }}
              >
                EX
              </p>
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
          <Carousel.Item className="center">
            <div className="center">
              <p
                style={{
                  height: "2.5em",
                  width: "2.5em",
                  background: "black",
                  margin: "auto",
                  borderRadius: "50%",
                  fontSize: "2em",
                  paddingTop: ".5em",
                  color: "white",
                }}
              >
                EW
              </p>
            </div>
            <h3>Extinct In Wild</h3>
            <p className="text2">
              The Extinct in the Wild (EW) category within the IUCN Red List
              signifies a species teetering on the brink of complete extinction
              in its natural habitat. While these species might still exist in
              captivity or through reintroduction programs, their wild
              populations are unfortunately considered functionally extinct.
              This delicate state necessitates a closer look at what defines the
              EW category and its implications for conservation efforts.
            </p>
          </Carousel.Item>
          <Carousel.Item className="center">
            <div className="center">
              <p
                style={{
                  height: "2.5em",
                  width: "2.5em",
                  background: "red",
                  margin: "auto",
                  borderRadius: "50%",
                  fontSize: "2em",
                  paddingTop: ".5em",
                  color: "white",
                }}
              >
                CR
              </p>
            </div>
            <h3>Critically Endangered</h3>
            <p className="text2">
              Critically Endangered (Cr) is the highest risk category assigned
              by the IUCN for wild species. Critically endangered species means
              a species numbers have decreased, or will decrease by 80% within
              three generations. It is therefore considered to be facing an
              extremely high risk of extinction in the wild.
            </p>
          </Carousel.Item>
          <Carousel.Item className="center">
            <div className="center">
              <p
                style={{
                  height: "2.5em",
                  width: "2.5em",
                  background: "Orange",
                  margin: "auto",
                  borderRadius: "50%",
                  fontSize: "2em",
                  paddingTop: ".5em",
                  color: "white",
                }}
              >
                EN
              </p>
            </div>
            <h3>Endangered</h3>
            <p className="text2">
              Endangered (EN) species is a population of organisms which is at
              risk of becoming extinct because it is either few in numbers, or
              threatened by changing environmental or predation parameters. Also
              it could mean that due to deforestation there may be a lack of
              food and/or water. It is therefore considered to be facing a very
              high risk of extinction in the wild.{" "}
            </p>
          </Carousel.Item>
          <Carousel.Item className="center">
            <div className="center">
              <p
                style={{
                  height: "2.5em",
                  width: "2.5em",
                  background: "#d5d60a",
                  margin: "auto",
                  borderRadius: "50%",
                  fontSize: "2em",
                  paddingTop: ".5em",
                  color: "white",
                }}
              >
                VU
              </p>
            </div>
            <h3>Vulnerable</h3>
            <p className="text2">
              Vulnerable (VU) species is a species which has been categorised by
              the IUCN as likely to become endangered unless the circumstances
              threatening its survival and reproduction improve. It is therefore
              considered to be facing a high risk of extinction in the wild.
            </p>
          </Carousel.Item>
          <Carousel.Item className="center">
            <div className="center">
              <p
                style={{
                  height: "2.5em",
                  width: "2.5em",
                  background: "#006400",
                  margin: "auto",
                  borderRadius: "50%",
                  fontSize: "2em",
                  paddingTop: ".5em",
                  color: "white",
                }}
              >
                NT
              </p>
            </div>
            <h3>Near Threatened</h3>
            <p className="text2">
              The Near Threatened (NT) category within the IUCN Red List
              occupies a critical space, marking species precariously balanced
              between stability and the danger zone of extinction. While not
              immediately threatened, these species face challenges that could
              push them into more vulnerable categories if left unaddressed.
              Understanding the NT classification and its implications is
              crucial for proactive conservation efforts.{" "}
            </p>
          </Carousel.Item>
          <Carousel.Item className="center">
            <div className="center">
              <p
                style={{
                  height: "2.5em",
                  width: "2.5em",
                  background: "#00aa00",
                  margin: "auto",
                  borderRadius: "50%",
                  fontSize: "2em",
                  paddingTop: ".5em",
                  color: "white",
                }}
              >
                LC
              </p>
            </div>
            <h3>Least Concern</h3>
            <p className="text2">
              A least-concern species is a species that has been categorized by
              the International Union for Conservation of Nature (IUCN) as
              evaluated as not being a focus of species conservation because the
              specific species is still plentiful in the wild.
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default IUCN;
