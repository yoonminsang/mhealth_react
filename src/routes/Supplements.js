import React from "react";
import "./stylesheets/Supplements.css";
const Supplements = () => {
  return (
    <section className="supplements">
      <h2>보충제</h2>
      <h3>프로틴</h3>
      <p>
        흔히 보충제라고 하면 프로틴(단백질 보충제)을 떠올릴 것이다. 이는 말 그대로 단백질을 공급하는
        보충제이다. 식사로 충분한 단백질을 섭취한다면 굳이 프로틴을 먹을 필요가 없다. 하지만
        한식에는 비정상적으로 단백질이 적다. 그래서 보디빌더나 특수한 경우를 제외하면 대부분
        프로틴을 먹는 것이다. 보통 운동하는 사람들을 기준으로 kg당 1.2~2g 정도 먹는다. 단백질을 과다
        섭취하면 신장에 무리가 갈 수 있기 때문에 적당량을 섭취해야 한다.
      </p>
      <b>
        시간 : 무관
        <br />
        권장 섭취량 : 1.3~2g/kg(단백질 총량)
        <br />
        과량 섭취량 : 2g/kg 이상
      </b>

      <h3>아르기닌</h3>
      <p>
        아르기닌은 혈류를 증가시켜주는 NO(산화질소)생성을 촉진한다. 참고로 산화질소는 근육으로 가는
        혈류량을 늘려줘서, 운동수행능력을 향상시켜준다.
      </p>
      <b>
        시간 : 운동 전 15~60분전 섭취
        <br />
        권장 섭취량 : 3~6mg/kg
        <br />
        과량 섭취량 : 9mg/kg
      </b>

      <h3>카페인</h3>
      <p>
        카페인은 아드레날린 분비를 증가시켜 운동 집중력을 향상시킬 뿐만 아니라,
        에너지원(유리지방산)의 방출을 도와서 근육 내의 에너지원(글리코겐)을 보존시켜 지구력 또한
        향상시킨다. 커피로 섭취를 하던, 알약으로 섭취를 하던지 큰 상관은 없으나, 알약 형태로
        섭취하는게 더 효과가 있다는 연구 결과가 있다.
      </p>
      <b>
        시간 : 운동 전 15~60분전 섭취
        <br />
        권장 섭취량 : 3~6mg/kg
        <br />
        과량 섭취량 : 9mg/kg
      </b>

      <h3>크레아틴</h3>
      <p>
        건강기능식품으로도 인정 받을 만큼 안전하고 효능이 보증된 보충제다. 크레아틴은 고강도 운동에
        필요한 에너지(ATP)공급을 도와서 더 많은 시간동안 운동할 수 있도록 돕는다.
      </p>
      <b>
        시간 : 운동 전 섭취(운동 후 섭취는 아직 연구결과가 부족)
        <br />
        권장 섭취량 : 초기 5~7일 동안은 매일 20g씩, 하루에 4번 쪼개서 5gX4를 복용했다가, 이후 3g씩
        섭취
        <br />
        Loading phase : 5~7일, 이후에는 크레아틴 포화 상태 유지
      </b>

      <h3>BCAA</h3>
      <p>
        BCAA는 필수 아미노산인 류신, 이소류신, 발린 세가지의 아미노산으로 구성된 보충제로, 운동중에
        너무 빨리 지치거나 근지구력이 약한 사람들의 경우, 근육통이 너무 심해서 운동하기 힘든 경우
        많은 도움이 된다.
      </p>
      <b>
        시간 : 운동 전, 운동 후
        <br />
        권장 섭취량 : 남자=12g/day, 여자=9g/day
      </b>

      <h3>베타알라닌</h3>
      <p>
        상당히 많은 부스터 제품에 들어있는 성분 중 하나인 베타알라닌은 운동 중 발생하는 젖산으로
        인한 피로도를 줄여주는 데 도움을 주는 보충제로, 근지구력 운동에 효과가 있는 것으로 나타났다.
        즉, 짧고, 굵게 하는 운동에는 효과가 없을 가능성이 높지만 운동시간이 어느정도 있는 운동에는
        효과가 있다고 한다.
      </p>
      <b>
        시간 : 운동 전
        <br />
        권장 섭취량 : 4~5g/day(단, 부작용이 나타나는 경우, 양을 줄일 것)
      </b>

      <h3>타우린</h3>
      <p>
        타우린은 유명한 보충제 성분이다. 피곤함을 줄여줄 뿐만 아니라, 지방 연소 등에 도움을 주며
        부작용 또한 별로 없기 때문에 건강한 사람이라면 매우 안전하게 복용할 수 있는 보충제다.
      </p>
      <b>
        시간 : 운동 전
        <br />
        권장 섭취량 : 500~3000mg/day
      </b>
    </section>
  );
};

export default Supplements;