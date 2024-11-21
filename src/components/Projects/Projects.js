import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bof from "../../Assets/Projects/bof.png";
import canary from "../../Assets/Projects/canary.png";
import oob from "../../Assets/Projects/oob.png";
import rop from "../../Assets/Projects/rop.png";
import hook from "../../Assets/Projects/hook.png";
import fsb from "../../Assets/Projects/fsb.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Research </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few <span className="purple">Wargames</span> I've researched recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={bof}
                  isBlog={false}
                  title="Stack Overtflow"
                  description="스택 오버플로우는 프로그램에서 사용자가 제공한 데이터가 스택에 할당된 버퍼 크기를 초과할 때 발생하는 취약점입니다.
공격자는 초과된 데이터를 사용해 리턴 주소를 덮어쓰고 프로그램 흐름을 제어합니다."
                  htbLink="https://velog.io/@sylee9809/Dreamhack-Write-up-Return-Address-Overwrite"
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={canary}
                  isBlog={false}
                  title="Stack Canary"
                  description="스택 카나리는 스택 오버플로우를 방지하기위한 보안 매커니즘입니다.
함수 호출시 리턴주소 바로 앞에 무작위 값으로 생성된 카나리 값을 추가합니다.
그 후 나중에 함수 종료 시 카나리 값이 변경되었는지 확인합니다. 만약 카나리 값이 변경되었다면 스택이 손상된것으로 판단하고 프로그램을 종료합니다."
                  htbLink="https://velog.io/@sylee9809/Dreamhack-Stack-Canary"
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={oob}
                  isBlog={false}
                  title="oob"
                  description="OOB 취약점은 프로그램이 메모리 경계를 벗어난 데이터에 접근할 때 발생하는 취약점입니다.
프로그램은 배열이나 버퍼처럼 정해진 크기의 메모리 공간에서 데이터를 저장하고 처리합니다.
하지만 잘못된 계산이나 입력으로 인해 허용된 범위를 넘어서는 위치에 접근하면 취약점이 터지게됩니다."
                  htbLink="https://velog.io/@sylee9809/Hacking-Out-of-Bounds"
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={rop}
                  isBlog={false}
                  title="ROP"
                  description="ROP는 R2L의 변형된 형태로 프로그램 내에 존재하는 작은 코드 조각들(가젯)을 조합하여 공격하는 방법입니다.
이를 통해 스택 실행방지와 ASLR을 우회할 수 있습니다.
스택을 덮어쓰면 가젯의 주소를 차례로 삽입하고 리턴 주소를 통해 가젯을 실행하고 원하는 동작을 수행하게 됩니다."
                  htbLink="https://velog.io/@sylee9809/Hacking-Return-Oriented-Programming"
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={hook}
                  isBlog={false}
                  title="Hook Overwrite"
                  description="훅 오버라이트는 시스템이나 앱의 함수 호출과정을 가로채는 기법입니다.
공격자는 함수 호출을 자신의 악성코드로 연결시켜서 원래 동작을 변조하거나 민감 정보를 탈취합니다.
과정은 이제 특정 API나 함수의 주소 테이블을 수정하구요 그리고 호출된 함수가 원래 함수 대신 악성 코드를 실행하는것으로 이어집니다."
                  htbLink="https://velog.io/@sylee9809/Hacking-Hook-Overwrite"
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={fsb}
                  isBlog={false}
                  title="Format String Bug"
                  description="포맷 스트링 버그는 사용자 입력값을포맷 문자열에 직접 삽입할 때 발생하게 됩니다. 공격자는 %x나 %n 같은 포맷 지정자를 이용해 메모리 읽기/쓰기를 조작할 수 있습니다."
                  htbLink="https://velog.io/@sylee9809/Hacking-format-String-Bug"
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
