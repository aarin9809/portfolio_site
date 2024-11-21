import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/syl.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { SiVelog } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            제<span className="purple"> 소개를 </span> 하겠습니다.
          </h1>
          <p className="home-about-body">
            <b className="purple">호기심</b> 많고 탐구하는 것을 좋아하며, 특히 
            <b className="purple"> 문제를 해결하는 과정</b>에서 큰 즐거움을 느꼈습니다.
            <br />
            이를 통해 <b className="purple">컴퓨터 공학</b>에 관심을 가지게 되었고, 
            현재는 <b className="purple">웹 해킹</b>과 <b className="purple">시스템 해킹</b>을 중심으로 
            전문성을 키워나가고 있습니다.
            <br />
            <br /> 저는
            <i>
              <b className="purple"> Python, C, Javascript </b>
            </i>
            을 익혀 실질적인 프로젝트 경험을 쌓아왔습니다.
            <br />
            <br />
            주요 관심 분야는 &nbsp;
            <i>
              <b className="purple">모의해킹, CTF 문제 풀이</b>, 그리고{" "}
              <b className="purple">사이버 보안</b> 전반입니다.
            </i>
            <br />
            특히, &nbsp;
            <b className="purple">침투 테스트</b>와{" "}
            <b className="purple">취약점 분석</b>을 통해 
            시스템의 안정성을 높이는 과정에서 큰 보람을 느낍니다.
            <br />
            <br />
            또한, 저는 <b className="purple">Django와 React.js</b> 같은 
            <i>
              <b className="purple"> 모던 웹 프레임워크</b>
            </i>
            {" "}와{" "}
            <i>
              <b className="purple">클라우드 보안</b>
            </i>
            에도 전문성을 키우고 있으며, 
            <b className="purple">정보 보안 전문가</b>로서 
            계속 성장하고자 합니다.
          </p>
        </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aarin9809"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/aarin9809"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://velog.io/@sylee9809/posts"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiVelog />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/zer0_sunday"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
