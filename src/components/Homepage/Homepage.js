import React, { useState, useEffect, useContext } from "react";
import styles from "./Homepage.module.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
import { useAccount, useNetwork } from "wagmi";
import raspberrydao_pic_1 from "../../images/Homepage/Slider/1.svg";
import raspberrydao_pic_2 from "../../images/Homepage/Slider/2.svg";
import raspberrydao_pic_3 from "../../images/Homepage/Slider/3.svg";
import raspberrydao_pic_4 from "../../images/Homepage/Slider/4.svg";
import raspberrydao_pic_5 from "../../images/Homepage/Slider/5.svg";
import raspberrydao_pic_6 from "../../images/Homepage/Slider/6.svg";
import raspberrydao_pic_1w from "../../images/Homepage/Slider/1w.svg";
import raspberrydao_pic_2w from "../../images/Homepage/Slider/2w.svg";
import raspberrydao_pic_3w from "../../images/Homepage/Slider/3w.svg";
import raspberrydao_pic_4w from "../../images/Homepage/Slider/4w.svg";
import raspberrydao_pic_5w from "../../images/Homepage/Slider/5w.svg";
import raspberrydao_pic_6w from "../../images/Homepage/Slider/6w.svg";
import nft1 from "../../images/Homepage/NFTs/1.svg";
import nft2 from "../../images/Homepage/NFTs/2.svg";
import nft3 from "../../images/Homepage/NFTs/3.svg";
import nft4 from "../../images/Homepage/NFTs/4.svg";
import nft1w from "../../images/Homepage/NFTs/1w.svg";
import nft2w from "../../images/Homepage/NFTs/2w.svg";
import nft3w from "../../images/Homepage/NFTs/3w.svg";
import nft4w from "../../images/Homepage/NFTs/4w.svg";
import symbol from "../../images/Homepage/Polygon.svg";
import symbolwhite from "../../images/Homepage/PolygonWhite.svg";
import open from "../../images/Homepage/open.svg";
import close from "../../images/Homepage/close.svg";

function Homepage() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;
  const { chain } = useNetwork();
  const { isConnected } = useAccount();

  const [index, setIndex] = useState(0);
  const [firstQuestion, setFirstQuestion] = useState(true);
  const [secondQuestion, setSecondQuestion] = useState(true);
  const [thirdQuestion, setThirdQuestion] = useState(true);

  let first = [
    raspberrydao_pic_2,
    raspberrydao_pic_3,
    raspberrydao_pic_2,
    raspberrydao_pic_3,
  ];
  let second = [
    raspberrydao_pic_1,
    raspberrydao_pic_4,
    raspberrydao_pic_5,
    raspberrydao_pic_6,
  ];
  let third = [
    raspberrydao_pic_5,
    raspberrydao_pic_6,
    raspberrydao_pic_1,
    raspberrydao_pic_4,
  ];
  let fourth = [
    raspberrydao_pic_3,
    raspberrydao_pic_2,
    raspberrydao_pic_3,
    raspberrydao_pic_2,
  ];
  let firstw = [
    raspberrydao_pic_2w,
    raspberrydao_pic_3w,
    raspberrydao_pic_2w,
    raspberrydao_pic_3w,
  ];
  let secondw = [
    raspberrydao_pic_1w,
    raspberrydao_pic_4w,
    raspberrydao_pic_5w,
    raspberrydao_pic_6w,
  ];
  let thirdw = [
    raspberrydao_pic_5w,
    raspberrydao_pic_6w,
    raspberrydao_pic_1w,
    raspberrydao_pic_4w,
  ];
  let fourthw = [
    raspberrydao_pic_3w,
    raspberrydao_pic_2w,
    raspberrydao_pic_3w,
    raspberrydao_pic_2w,
  ];

  useEffect(() => {
    let intervalId = 0;
    const Changing = () => {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => {
          return prevIndex + 1 < first.length ? prevIndex + 1 : 0;
        });
      }, 4000);
    };
    Changing();
    return () => {
      clearInterval(intervalId);
    };
  }, [first, index]);

  return (
    <>
      <div className={theme === "light" ? styles.light : styles.dark}>
        <div className={styles.homepage}>
          <div className={styles.upperhome}>
            <div className={styles.firsttop}>
              Swap your old NFTs for new limited-edition NFTs!
            </div>
            <div className={styles.main}>
              <div className={styles.imageslider}>
                <div className={styles.firstrow}>
                  <div className={styles.left}>
                    {theme == "light" ? (
                      <img src={first[index]} alt="Image"></img>
                    ) : (
                      <img src={firstw[index]} alt="Image"></img>
                    )}
                  </div>
                  <div className={styles.right}>
                    {theme == "light" ? (
                      <img src={second[index]} alt="Image"></img>
                    ) : (
                      <img src={secondw[index]} alt="Image"></img>
                    )}
                  </div>
                </div>
                <div className={styles.secondrow}>
                  <div className={styles.left}>
                    {theme == "light" ? (
                      <img src={third[index]} alt="Image"></img>
                    ) : (
                      <img src={thirdw[index]} alt="Image"></img>
                    )}
                  </div>
                  <div className={styles.right}>
                    {theme == "light" ? (
                      <img src={fourth[index]} alt="Image"></img>
                    ) : (
                      <img src={fourthw[index]} alt="Image"></img>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.maincontent}>
                <div className={styles.first}>
                  Swap your old NFTs for new limited-edition NFTs!
                </div>
                <div className={styles.innercontent}>
                  Raspberry DAO allows you to swap your old NFTs from several
                  popular chains for all-new generative NFTs on Godwoken!
                </div>
                <div
                  className={styles.innercontent}
                  style={{ marginTop: "12px" }}
                >
                  Read more below about what makes Raspberry DAO NFTs different!
                  👇
                </div>
                <div className={styles.buttons}>
                  <Link to="/profile">
                    <div className={styles.firstbutton}>
                      <button className={styles.firstbtn}>View NFTs</button>
                    </div>
                  </Link>
                  <Link to="/swap">
                    <div className={styles.secondbutton}>
                      <button className={styles.secondbtn}>Swap NFTs</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.daodesc}>
            <div className={styles.daocontent}>
              <div className={styles.firstcontent}>
                Raspberry DAO NFTs are not ordinary NFTs!
              </div>
              <div className={styles.secondcontent}>They're upgradeable!</div>
            </div>
            <div className={styles.daosummary}>
              Raspberry DAO will support multiple rounds of new limited-edition
              NFTs. Trading in an old NFT gets you a new NFT in the current
              round. Each round has completely different art than the previous.
              Once a round is sold out, it's gone forever. Unless... you
              upgrade.
            </div>
            <div className={styles.daosummary}>
              A Raspberry DAO NFT from older rounds can be upgraded even when a
              round is closed. Missed out on getting a round 3 NFT before they
              sold out? You can still get one by upgrading a round 1 or round 2
              NFT. This makes the older NFTs more and more valuable over time!
            </div>
            {/*
              Raspberry DAO will support multiple rounds of new limited-edition
              NFTs. Simply trade in one of your old NFTs to get started and join
              the current round. Each round has completely different art than
              the previous. Once a round is sold out, it's gone forever.
              Unless... you upgrade a Raspberry DAO NFT from an older round.
              <span style={{ fontWeight: "700" }}>
                Keep in mind, that when you trade your old NFTs in using
                Raspberry DAO, and when you upgrade your Raspberry DAO NFT, the
                old NFTS are burned!
              </span>
            </div> */}
            <div className={styles.upgradenfts}>
              {theme === "light" ? (
                <img
                  src={nft1}
                  className={styles.nftimage}
                  alt="NFT Image 1"
                ></img>
              ) : (
                <img
                  src={nft1w}
                  className={styles.nftimage}
                  alt="NFT Image 1"
                ></img>
              )}
              <div className={styles.nftarrow}>
                {theme === "light" ? (
                  <img src={symbol} alt="Arrow"></img>
                ) : (
                  <img src={symbolwhite} alt="Arrow"></img>
                )}
                <div className={styles.number}>+ 1 UP</div>
              </div>
              {theme === "light" ? (
                <img
                  src={nft2}
                  className={styles.nftimage}
                  alt="NFT Image 2"
                ></img>
              ) : (
                <img
                  src={nft2w}
                  className={styles.nftimage}
                  alt="NFT Image 2"
                ></img>
              )}
              <div className={styles.nftarrow}>
                {theme === "light" ? (
                  <img src={symbol} alt="Arrow"></img>
                ) : (
                  <img src={symbolwhite} alt="Arrow"></img>
                )}
                <div className={styles.number}>+ 2 UP</div>
              </div>
              {theme === "light" ? (
                <img
                  src={nft3}
                  className={styles.nftimage}
                  alt="NFT Image 3"
                ></img>
              ) : (
                <img
                  src={nft3w}
                  className={styles.nftimage}
                  alt="NFT Image 3"
                ></img>
              )}
              <div className={styles.nftarrow}>
                {theme === "light" ? (
                  <img src={symbol} alt="Arrow"></img>
                ) : (
                  <img src={symbolwhite} alt="Arrow"></img>
                )}
                <div className={styles.number}>+ 3 UP</div>
              </div>
              {theme === "light" ? (
                <img
                  src={nft4}
                  className={styles.nftimage}
                  alt="NFT Image 4"
                ></img>
              ) : (
                <img
                  src={nft4w}
                  className={styles.nftimage}
                  alt="NFT Image 4"
                ></img>
              )}
            </div>
          </div>
          <div className={styles.faq}>
            <div className={styles.firstquestion}>
              <div className={styles.question}>
                <div className={styles.mainquestion}>How it works?</div>
                {firstQuestion ? (
                  <div
                    className={styles.arrow}
                    onClick={() => setFirstQuestion(false)}
                  >
                    <img src={open} alt="Open Arrow"></img>
                  </div>
                ) : (
                  <div
                    className={styles.arrow}
                    onClick={() => setFirstQuestion(true)}
                  >
                    <img src={close} alt="Close Arrow"></img>
                  </div>
                )}
              </div>
              {firstQuestion ? (
                <div className={styles.answer}>
                  <div>
                    When you trade in your old NFTs you will get a brand new one
                    from Raspberry DAO. Your new NFT will be generated and sent
                    to you within minutes. It doesn’t matter what the NFT is,
                    Raspberry DAO will take them all!
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    Support for Polygon NFTs is currently live with more chain
                    support coming soon.
                  </div>
                </div>
              ) : null}
            </div>
            <div className={styles.secondquestion}>
              <div className={styles.question}>
                <div className={styles.mainquestion}>
                  Why trade in your NFTs?
                </div>
                {secondQuestion ? (
                  <div
                    className={styles.arrow}
                    onClick={() => setSecondQuestion(false)}
                  >
                    <img src={open} alt="Open Arrow"></img>
                  </div>
                ) : (
                  <div
                    className={styles.arrow}
                    onClick={() => setSecondQuestion(true)}
                  >
                    <img src={close} alt="Close Arrow"></img>
                  </div>
                )}
              </div>
              {secondQuestion ? (
                <div className={styles.answer}>
                  <div>
                    Many of us have old NFTs sitting around that we don’t want.
                    Maybe they are from an old Web3 game that shut down or they
                    were airdropped to us without our asking for them.
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    There are MILLIONS of these NFTs floating around. Now you
                    can finally use them for something!
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    Our long-term goal is to partner with other projects within
                    the Nervos ecosystem and continue to add more utility to
                    Raspberry DAO NFTs with each new round.
                  </div>
                </div>
              ) : null}
            </div>
            <div className={styles.thirdquestion}>
              <div className={styles.question}>
                <div className={styles.mainquestion}>
                  What are Raspberry DAO rounds?
                </div>
                {thirdQuestion ? (
                  <div
                    className={styles.arrow}
                    onClick={() => setThirdQuestion(false)}
                  >
                    <img src={open} alt="Open Arrow"></img>
                  </div>
                ) : (
                  <div
                    className={styles.arrow}
                    onClick={() => setThirdQuestion(true)}
                  >
                    <img src={close} alt="Close Arrow"></img>
                  </div>
                )}
              </div>
              {thirdQuestion ? (
                <div className={styles.answer}>
                  <div>
                    Every Raspberry DAO round is a unique NFT collection. Every
                    round is completely different. Some might be generative art,
                    and some might be something completely different, like
                    in-game items. All the different rounds are connected
                    through upgradeability, which introduces a level of
                    gamification to every round.
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    Once you own a Raspberry DAO NFT you can choose to hold on
                    to it or upgrade it to the latest collection. When an NFT is
                    upgraded the old NFT is burned. This makes NFTs from
                    previous rounds even more scarce and valuable over time!
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
