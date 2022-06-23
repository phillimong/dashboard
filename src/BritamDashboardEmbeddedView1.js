import React from "react";
import styled from "styled-components";
export const BritamDashboardEmbeddedView1 = ({}) => {
  const ButtonsFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <BritamDashboardEmbeddedViewRoot>
      <WhiteFlexRow>
        <Image1 src={"https://file.rendit.io/n/9ssdChaZMnCX9iwq7JSr.png"} />
      </WhiteFlexRow>
      <FlexRow>
        <Element18>
          <JaneDoe>Jane{"  "}Doe</JaneDoe>
          <Text1>Nairobi Branch</Text1>
          <Image2 src={"https://file.rendit.io/n/lT5jUf2ZYiFs23fg0XYF.png"} />
        </Element18>
        <Image3 src={"https://file.rendit.io/n/Ngzn3Voqcj9YSdwK2U82.svg"} />
      </FlexRow>
      <Text2>Dashboard</Text2>
      <Text3>Insights</Text3>
      <FlexRow1>
        <WhiteFlexColumn>
          <FlexRow2>
            <Image4 src={"https://file.rendit.io/n/ZPXJsZiaJbLFtICHHcvZ.svg"} />
            <Image5 src={"https://file.rendit.io/n/eX6hJ2okyoDtvUa6IENh.svg"} />
          </FlexRow2>
          <Text4 margin={"0px 0px 9.62px 2.21px"}>Total customers</Text4>
          <FlexRow3>
            <Text5>2,420</Text5>
            <ScreaminGreenFlexRow>
              <Line src={"https://file.rendit.io/n/rNxSb37njUtjcBgGb77u.svg"} />
              <Element16>20% </Element16>
            </ScreaminGreenFlexRow>
          </FlexRow3>
        </WhiteFlexColumn>
        <WhiteFlexColumn1>
          <FlexRow2>
            <Image4 src={"https://file.rendit.io/n/hOpveiYp56DJgK3XakRP.svg"} />
            <Image5 src={"https://file.rendit.io/n/eX6hJ2okyoDtvUa6IENh.svg"} />
          </FlexRow2>
          <Text4 margin={"0px 0px 12.62px 1.21px"}>Total{"  "}Premiums</Text4>
          <FlexRow5>
            <Text6>Kes. 245,200</Text6>
            <ScreaminGreenFlexRow>
              <Line src={"https://file.rendit.io/n/rNxSb37njUtjcBgGb77u.svg"} />
              <Element16>30% </Element16>
            </ScreaminGreenFlexRow>
          </FlexRow5>
        </WhiteFlexColumn1>
        <Buttons onClick={(e) => ButtonsFunction(e, "Buttons")}>
          <BaseButton>
            <Label>Download XLS</Label>
          </BaseButton>
        </Buttons>
      </FlexRow1>
      <FlexRow6>
        <Text7>Filters</Text7>
        <WhiteFlexColumn2 />
        <WhiteFlexRow1 margin={"0px 31px 0px 0px"}>
          <WhiteRectangle width={"141px"}>
            <Text8>Service Voucher</Text8>
            <Arrowrightblackdp4
              src={"https://file.rendit.io/n/drijCgbOl45uHY6n0CLr.svg"}
            />
          </WhiteRectangle>
        </WhiteFlexRow1>
        <WhiteFlexRow1 margin={"0px 44px 0px 0px"}>
          <WhiteRectangle width={"119px"}>
            <Text9>Origin</Text9>
            <Arrowrightblackdp3
              src={"https://file.rendit.io/n/drijCgbOl45uHY6n0CLr.svg"}
              left={"69px"}
            />
          </WhiteRectangle>
        </WhiteFlexRow1>
        <WhiteFlexRow1 margin={"0px 707px 0px 0px"}>
          <WhiteRectangle width={"117px"}>
            <Text10>Dates</Text10>
            <Arrowrightblackdp3
              src={"https://file.rendit.io/n/drijCgbOl45uHY6n0CLr.svg"}
              left={"62px"}
            />
          </WhiteRectangle>
        </WhiteFlexRow1>
        <Text11>View</Text11>
        <FernRectangle>
          <Text12>Embedded</Text12>
          <Arrowrightblackdp
            src={"https://file.rendit.io/n/NnEpZ7CCv8AtMgQUl0sQ.svg"}
          />
        </FernRectangle>
      </FlexRow6>
      <Element19>
        <FlexRow7>
          {[
            {
              childText: "SV Number",
            },
            {
              childText: "Passenger Code",
            },
            {
              childText: "Origin",
            },
            {
              childText: "Destination",
            },
            {
              childText: "Other Destination",
            },
            {
              childText: "Departure Date",
            },
            {
              childText: "Return date",
            },
            {
              childText: "Branch",
            },
            {
              childText: "Premium",
            },
          ].map((data) => (
            <Text13>{data.childText}</Text13>
          ))}
        </FlexRow7>
        <Element20 />
        <SilverFlexRow>
          <Element21 />
        </SilverFlexRow>
        <SilverFlexRow1>
          <Element21 />
        </SilverFlexRow1>
        <SilverFlexRow2>
          <Element21 />
        </SilverFlexRow2>
        <SilverFlexRow3>
          <Element21 />
        </SilverFlexRow3>
        <Element25>
          <SilverFlexRow4>
            <Element21 />
          </SilverFlexRow4>
          <FlexColumn left={"432px"}>
            {[
              {
                childText: "Masai Mara",
                textAlign: "left",
              },
              {
                childText: "Nakuru",
                textAlign: "left",
              },
              {
                childText: "Nairobi",
                textAlign: "left",
              },
              {
                childText: "Masai Mara",
                textAlign: "left",
              },
              {
                childText: "Masai Mara",
                textAlign: "left",
              },
            ].map((data) => (
              <Text22 textAlign={data.textAlign}>{data.childText}</Text22>
            ))}
          </FlexColumn>
          <FlexColumn left={"575px"}>
            {[
              {
                childText: "Mombasa",
                textAlign: "center",
              },
              {
                childText: "Kisumu",
                textAlign: "center",
              },
              {
                childText: "Masai Mara",
                textAlign: "center",
              },
              {
                childText: "Mombasa",
                textAlign: "center",
              },
              {
                childText: "Mombasa",
                textAlign: "center",
              },
            ].map((data) => (
              <Text22 textAlign={data.textAlign}>{data.childText}</Text22>
            ))}
          </FlexColumn>
          <FlexColumn left={"775px"}>
            <Text32>-</Text32>
            <Text32>-</Text32>
            <Text32>-</Text32>
            <Text32>-</Text32>
            <Text22 textAlign={"center"}>Tsavo West</Text22>
          </FlexColumn>
          <FlexColumn left={"1346px"}>
            {[
              {
                childText: "Lavington",
                textAlign: "left",
              },
              {
                childText: "CBD",
                textAlign: "left",
              },
              {
                childText: "Kiambu",
                textAlign: "left",
              },
              {
                childText: "Lavington",
                textAlign: "left",
              },
              {
                childText: "Kiambu",
                textAlign: "left",
              },
            ].map((data) => (
              <Text22 textAlign={data.textAlign}>{data.childText}</Text22>
            ))}
          </FlexColumn>
          <FlexColumn4>
            {[
              {
                childText: "Kes. 100",
              },
              {
                childText: "Kes. 300",
              },
              {
                childText: "Kes. 100",
              },
              {
                childText: "Kes. 300",
              },
              {
                childText: "Kes. 300",
              },
            ].map((data) => (
              <Text42>{data.childText}</Text42>
            ))}
          </FlexColumn4>
          <FlexColumn left={"980px"}>
            {[
              {
                childText: "28-03-2022",
                textAlign: "left",
              },
              {
                childText: "28-04-2022",
                textAlign: "left",
              },
              {
                childText: "28-05-2022",
                textAlign: "left",
              },
              {
                childText: "15-07-2022",
                textAlign: "left",
              },
              {
                childText: "28-03-2022",
                textAlign: "left",
              },
            ].map((data) => (
              <Text22 textAlign={data.textAlign}>{data.childText}</Text22>
            ))}
          </FlexColumn>
          <FlexColumn6>
            <Text32>-</Text32>
            <Text22 textAlign={"left"}>30-04-2022</Text22>
            <Text22 textAlign={"left"}>31-05-2022</Text22>
            <Text22 textAlign={"left"}>18-07-2022</Text22>
            <Text22 textAlign={"left"}>30-03-2022</Text22>
          </FlexColumn6>
          <FlexColumn left={"241px"}>
            {[
              {
                childText: "SV-12345-01",
                textAlign: "left",
              },
              {
                childText: "SV-12346-01",
                textAlign: "left",
              },
              {
                childText: "SV-12347-01",
                textAlign: "left",
              },
              {
                childText: "SV- 12348-01",
                textAlign: "left",
              },
              {
                childText: "SV-12349-01",
                textAlign: "left",
              },
            ].map((data) => (
              <Text22 textAlign={data.textAlign}>{data.childText}</Text22>
            ))}
          </FlexColumn>
          <FlexColumn left={"63px"}>
            {[
              {
                childText: "SV-12345",
                textAlign: "left",
              },
              {
                childText: "SV-12346",
                textAlign: "left",
              },
              {
                childText: "SV-12347",
                textAlign: "left",
              },
              {
                childText: "SV- 12348",
                textAlign: "left",
              },
              {
                childText: "SV-12349",
                textAlign: "left",
              },
            ].map((data) => (
              <Text22 textAlign={data.textAlign}>{data.childText}</Text22>
            ))}
          </FlexColumn>
        </Element25>
        <Element27 />
      </Element19>
      <LoadMore>Load More </LoadMore>
    </BritamDashboardEmbeddedViewRoot>
  );
};
const BritamDashboardEmbeddedViewRoot = styled.div`
  border-width: 0.23px;
  border-color: rgba(0, 0, 0, 0.9);
  border-style: solid;
  height: 1099px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  min-width: 1713px;
  padding: 1px 49px 1px 0px;
`;
const WhiteFlexRow = styled.div`
  width: 1085px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 43px 66px 18px 66px;
  margin: 0px 0px 12.12px 0px;
`;
const Image1 = styled.img`
  width: 104px;
  height: 38px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20.1px;
  align-items: flex-start;
  padding: 0px 40.69px;
  margin: 0px 0px 3.89px 0px;
`;
const Element18 = styled.div`
  align-self: stretch;
  width: 248.53px;
  height: 164.99px;
  position: relative;
  flex-grow: 1;
`;
const JaneDoe = styled.div`
  text-align: center;
  font-size: 23.48px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 32.87px;
  position: absolute;
  top: 26.91px;
  left: 139.53px;
  white-space: pre-wrap;
`;
const Text1 = styled.div`
  font-size: 15.24px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 17.49px;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 61.88px;
  left: 142.53px;
`;
const Image2 = styled.img`
  width: 165.42px;
  height: 164.99px;
  position: absolute;
`;
const Image3 = styled.img`
  width: 3.21px;
  height: 19.76px;
  margin: 36.06px 0px 0px 0px;
`;
const Text2 = styled.div`
  font-size: 35px;
  font-family: DM Sans;
  font-weight: 500;
  letter-spacing: 2.8px;
  align-self: flex-start;
  margin: 0px 0px 10px 66px;
`;
const Text3 = styled.div`
  font-size: 25.96px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 1.3px;
  line-height: 22.42px;
  color: rgba(0, 120, 191, 0.59);
  align-self: flex-start;
  margin: 0px 0px 19px 67.41px;
`;
const FlexRow1 = styled.div`
  height: 137px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 45px;
  margin: 0px 0px 32px 0px;
`;
const WhiteFlexColumn = styled.div`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  height: 124.98px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 7.77px;
  padding: 3.01px 4.69px 3.01px 10px;
  margin: 0px 49px 0px 0px;
`;
const FlexRow3 = styled.div`
  height: 27.03px;
  display: flex;
  flex-direction: row;
  gap: 104px;
  align-items: flex-start;
  padding: 0px 2.31px 0px 3px;
`;
const Text5 = styled.div`
  width: 102px;
  height: 23px;
  display: flex;
  font-size: 31.09px;
  font-family: Inter;
  font-weight: 600;
  line-height: 15.54px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const WhiteFlexColumn1 = styled.div`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  height: 124.98px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 7.77px;
  padding: 3.01px 4.69px 3.01px 11px;
  margin: 0px 872px 0px 0px;
`;
const FlexRow5 = styled.div`
  height: 24.03px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 42px;
  align-items: flex-start;
  padding: 0px 1px;
`;
const Text6 = styled.div`
  width: 165px;
  height: 23.2px;
  display: flex;
  font-size: 24.9px;
  font-family: Inter;
  font-weight: 600;
  line-height: 12.45px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Buttons = styled.button`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 48px 0px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
const BaseButton = styled.div`
  background-color: #64cf82;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 6px 10px;
`;
const Label = styled.div`
  display: flex;
  font-size: 14px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 20px;
  color: #ffffff;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 6px;
`;
const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 40px;
  margin: 0px 0px 14px 0px;
`;
const Text7 = styled.div`
  font-size: 14px;
  font-family: DM Sans;
  font-weight: 700;
  color: #005a1b;
  align-self: flex-start;
  margin: 8px 34px 0px 0px;
`;
const WhiteFlexColumn2 = styled.div`
  width: 84px;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 28px 0px 0px;
`;
const Text8 = styled.div`
  width: 101px;
  height: 17px;
  font-size: 12.29px;
  font-family: DM Sans;
  font-weight: 700;
  color: #606266;
  position: absolute;
  top: 13px;
  left: 10px;
`;
const Arrowrightblackdp4 = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 9px;
  left: 87px;
`;
const Text9 = styled.div`
  width: 41px;
  height: 17px;
  font-size: 12.29px;
  font-family: DM Sans;
  font-weight: 700;
  color: #606266;
  position: absolute;
  top: 14px;
  left: 35px;
`;
const Text10 = styled.div`
  width: 39px;
  height: 17px;
  font-size: 12.29px;
  font-family: DM Sans;
  font-weight: 700;
  color: #606266;
  position: absolute;
  top: 14px;
  left: 29px;
`;
const Text11 = styled.div`
  font-size: 18.12px;
  font-family: DM Sans;
  font-weight: 700;
  align-self: flex-end;
  margin: 0px 35px 7px 0px;
`;
const FernRectangle = styled.div`
  width: 153px;
  height: 36px;
  background-color: rgba(100, 207, 130, 0.59);
  align-self: flex-end;
  position: relative;
  border-radius: 7.85px;
`;
const Text12 = styled.div`
  width: 91.5px;
  height: 22.2px;
  font-size: 16.08px;
  font-family: DM Sans;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.95);
  position: absolute;
  top: 6.69px;
  left: 22.23px;
`;
const Arrowrightblackdp = styled.img`
  width: 31.38px;
  height: 31.38px;
  position: absolute;
  top: 1.77px;
  left: 82.39px;
`;
const Element19 = styled.div`
  height: 444px;
  position: relative;
  min-width: 1713px;
  margin: 0px 0px 19px 0px;
`;
const FlexRow7 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 86px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 21px;
  left: 125px;
`;
const Element20 = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 25px;
  left: 88px;
  border-radius: 3px;
`;
const SilverFlexRow = styled.div`
  width: 1580px;
  background-color: rgba(196, 196, 196, 0.22);
  display: flex;
  position: absolute;
  top: 56px;
  left: 73px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 24px 15px;
`;
const SilverFlexRow1 = styled.div`
  width: 1574px;
  background-color: rgba(196, 196, 196, 0.22);
  display: flex;
  position: absolute;
  top: 132px;
  left: 73px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 24px 18px;
`;
const SilverFlexRow2 = styled.div`
  width: 1579px;
  background-color: rgba(196, 196, 196, 0.22);
  display: flex;
  position: absolute;
  top: 209px;
  left: 70px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 24px 19px;
`;
const SilverFlexRow3 = styled.div`
  width: 1577px;
  background-color: rgba(196, 196, 196, 0.22);
  display: flex;
  position: absolute;
  top: 284px;
  left: 70px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 22px 20px 26px 20px;
`;
const Element25 = styled.div`
  width: 1619px;
  height: 58px;
  position: absolute;
  top: 362px;
  left: 68px;
`;
const SilverFlexRow4 = styled.div`
  width: 1577px;
  background-color: rgba(196, 196, 196, 0.22);
  display: flex;
  position: absolute;
  top: -2px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 24px 20px;
`;
const FlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: -286px;
  left: 1485px;
`;
const FlexColumn6 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 57px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: -288px;
  left: 1173px;
`;
const Element27 = styled.div`
  border-width: 1px;
  border-color: #dfdada;
  border-style: solid;
  width: 1672px;
  height: 444px;
  position: absolute;
  left: 41px;
  border-radius: 10px;
`;
const LoadMore = styled.div`
  display: flex;
  font-size: 14.1px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 20.14px;
  color: rgba(54, 47, 47, 0.9);
  align-self: center;
  width: 102px;
  height: 21px;
  background-color: rgba(189, 189, 189, 0.55);
  flex-direction: row;
  justify-content: center;
  border-radius: 15.69px;
  padding: 2.49px 0px 3.01px 0px;
  white-space: pre-wrap;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 17.37px 0px;
`;
const Image4 = styled.img`
  width: 44px;
  height: 44px;
`;
const Image5 = styled.img`
  width: 10.45px;
  height: 15px;
  align-self: flex-start;
  margin: 5.99px 0px 0px 0px;
`;
const Text4 = styled.div`
  font-size: 18px;
  font-family: DM Sans;
  font-weight: 700;
  letter-spacing: 0.9px;
  line-height: 15.54px;
  color: rgba(0, 0, 0, 0.5);
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const ScreaminGreenFlexRow = styled.div`
  height: 14px;
  background-color: rgba(92, 225, 129, 0.19);
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  gap: 5.29px;
  align-items: center;
  border-radius: 32.44px;
  padding: 1.67px 5.67px 1.03px 6.96px;
`;
const Line = styled.img`
  width: 6.08px;
  height: 5.83px;
  align-self: flex-start;
  margin: 3.75px 0px 0px 0px;
`;
const Element16 = styled.div`
  font-size: 9.63px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 13.76px;
  color: #005a1c;
  white-space: pre-wrap;
`;
const WhiteFlexRow1 = styled.div`
  height: 40px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const WhiteRectangle = styled.div`
  height: 41px;
  background-color: #f9f9f9;
  position: relative;
  border-radius: 6px;
  width: ${(props) => props.width};
`;
const Arrowrightblackdp3 = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 11px;
  left: ${(props) => props.left};
`;
const Text13 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 19.6px;
`;
const Element21 = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  width: 12px;
  height: 12px;
  border-radius: 3px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: -286px;
  left: ${(props) => props.left};
`;
const Text22 = styled.div`
  font-size: 14px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 19.6px;
  color: rgba(0, 0, 0, 0.7);
  text-align: ${(props) => props.textAlign};
`;
const Text32 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: DM Sans;
  font-weight: 400;
  line-height: 19.6px;
`;
const Text42 = styled.div`
  font-size: 14px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 19.6px;
`;
