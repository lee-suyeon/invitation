"use client";

import styled from "@emotion/styled";

function IntroSection() {
  return (
    <SectionLayout>
      <p>👰🏻🤍🤵🏻</p>
      <p>
        여름의 뜨거운 햇살 아래, 사랑을 시작하고 <br />
        우리는 소중한 순간들을 함께 했습니다.{" "}
      </p>
      <p>
        그리고 이제, <br />
        봄의 싱그러움으로 사랑을 피워나가기로 한 <br />
        결심을 함께 나누고자 여러분을 초대합니다.
      </p>
      <Divider />
      <div>
        <p>
          ???, ???의 아들 <span>김다운</span> <br />
          윤영숙의 딸 <span>이수연</span>
        </p>
      </div>
      <div>
        <p>
          2024년 4월 20일 토요일 오후 1시 30분 <br />
          인천 샤펠드미앙
        </p>
      </div>
    </SectionLayout>
  );
}

const SectionLayout = styled.section`
  padding: 60px 16px;
  text-align: center;

  p {
    margin-bottom: 40px;
    line-height: 1.5;
  }

  span {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background: #555;
  transform: rotate(45deg);
  margin: 0 auto 30px;
`;

export default IntroSection;
