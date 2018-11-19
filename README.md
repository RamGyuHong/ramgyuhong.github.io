# 이력서

- 최규홍 ramgyuhong@gmail.com / 010-4922-6399
- https://ramgyuhong.github.io

</br>

## 자기소개서

수 차례의 스타트업 및 다양한 프로젝트로 인한 주도적인 개발 경험

`4년간 3차례에 걸친 스타트업의 활동으로 프로젝트 진행과 관련된 커뮤니케이션 규칙, 문서화, 설계의 중요함에 눈을 맞추게 되었습니다.`
- 개발적 측면의 중요성도 마찬가지로 필요하나 개인으로 진행하는 업무가 아닌 협업 업무와 관련되어 커뮤니케이션, 이슈 공유, 문서화(JIRA, Confluence, Slack) 및 코드 규칙 등의 룰이 정해진 것과 정해지지 않은 것의 차이가 명확히 눈에 띄었습니다.
> 업무는 개인의 개발 실력 뿐만 아니라 업무의 한 단위마다의 공통된 정의를 가지고 이슈를 공유하며 업무 커뮤니케이션의 타임렉을 최소한으로 하는 것이 가장 중요하다는 것을 배웠습니다.

`보유한 기술만으로 결과를 내는 것이 아닌 끊임없이 개선점을 찾고 반영하게 되었습니다.`
- 새로운 프로젝트 진행시 동일한 환경 구축의 코스트를 줄일 수 없을까 : react, nodejs의 개인 start kit을 docker image로 관리 
- 코드 가독성을 좀 더 높일 순 없을까 : 중첩 쿼리를 롤백이나 하나의 함수로 관리하는 것이 아닌 쿼리를 분할하여 결과 값을 객체로 관리하여 가공 
  - > return ~.then(result => { ~.then(result2 => { return ~ })}) -> const itemResult = await ~; const detailResult = await ~; resolve({item: itemResult, item_detail: detailResult })
- 팀 내에서 중간 개발 결과물 공유를 좀 더 쉽게 할 수 없을까 : test용 instance 업로드, 빌드, 배포 > [Now](https://zeit.co/now) 발견 및 적용 (develop stage CI/CD 환경은 구축되어있지 않았습니다.)
> 실제 열두달에서 개발 업무를 담당하면서 느꼈던 문제와 해결방안입니다. 단순히 과거 자신이 사용한 도구만으로 진행하는 것이 아닌 적극적으로 불편함, 문제점을 찾아내어 보완하는 것이 개발자로써 지향해야 하는 자세라 생각합니다.
</br>

이러한 것들에 흥미와 경험을 가지고 있습니다

- 컨테이너 기반 운영 환경
  - Micro service architecture 
- CI/CD
  - Codepipeline, Codebuild, Github webhook
  - 무중단 배포

> DevOps 환경을 제가 직접 구축한 것은 아닙니다. 다만 해당 환경이 구축된 상황에서 프로젝트를 진행함으로써 DevOps에도 관심을 가져 개인 클라우드에 구축을 해보았습니다.

</br>

현재 구직중으로 현역 산업기능요원으로 복무하는것을 목표로 하고있습니다.

이번 이직으로 4번째의 회사로 4년차로 접어들게 됩니다. 다양한 업무를 맡아 진행하였고 이로인해 얻은 것과 깨달은 것이 많았습니다. 소수의 팀이긴 하였으나 실무와 관련되어 많은 고찰을 하고 외부 인사 분들을 만나 적극적인 자문, 협업 등을 통해 이슈 핸들링 방법에서 코드 퀄리티 까지 업무효율의 좋고 나쁜 예시와 이를 해결하기 위한 실례를 만들어가며 개인 뿐만아니라 팀이 같이 성장할 수있는 계기를 만들었습니다.

다양한 업무와 새로운 업무를 선호하기도 하나 자신의 능력의 효율을 극대화하여 최고의 성과를 내고 싶은 욕심이 있습니다. 
(과거 다양한 프로젝트를 진행하며 모바일, 웹 등의 경험이 있으나 현재 업무에 빠르게 적응하고 진행할 수 있는 분야는 최근 1년 반이상 동안 진행하였던 서버 파트라고 생각합니다.)

구인을 위한 인터뷰를 진행할 때 짧은 인터뷰로는 어떤 사람인지 판단하는 것이 어려울 것이라 생각하고있습니다. 이를 조금이라도 돕고자 제가 생각하는 자신에 대해 전달을 드리고자 작성하였습니다.
읽어주셔서 감사드리며 더 궁금하신 사항은 인터뷰 때 답변 드리겠습니다.

</br>


## 경력사항
### (주) 열두달 (2016~2018)
#### 
- **Gofooda 개발**
  - 푸드트럭 O2O 플랫폼 서비스 개발, 기획 참여
  - 가맹점용 Android App 개발
    - Java
- **Fooding 개발**
  - 푸드트럭, 도시락, 케이터링, 간식 O2O 플랫폼 서비스 API 개발, 기획 참여 및 총괄
  - Back-end 개발 전담 ( Service, admin )
    - API(Node.js, Express, Knexjs, MySQL)
      - 사용자 서비스
      - 관리자 서비스
      - push(EMail, SMS) 서비스
    - MySQL Database 설계
  - front-end 유지보수
    - React.js
  - 프로젝트 커뮤니케이션 및 이슈 트래킹 관련 규칙 설계
    - JIRA, Confluence, Slack, Zeplin
- [Click Link](http://fooding.io)

</br>

### Raonity (2014~2015)
- **RaonTalk 개발**
  - 글로벌 랜덤영상 채팅 Android App 개발
    - AppRTC
    - Java
- **Oh! My Star 개발**
  - 5개 국어지원 별자리 운세 Android App 개발
  - Java

</br>

## 프로젝트
### OpenCVE
- 영상처리 기반 체스 기보인식 솔루션
- 체스 보드, 체스말 인식 알고리즘 최적화
- 카메라 인식 범위 증가
- [Click Link](https://www.youtube.com/watch?v=ZQ_O20HjPL4&t=253s)

### KIZNIC(SW Maestro)
- 위치기반 키즈 피크닉 플랫폼
- Android App 개발
- 기획 및 BM 설계

### 오늘은 내가 동화 요리사
- 키넥트기반 동화 분기 진행 솔루션
- 임베디드 경진대회 LG smart TV 부문
- 스켈레톤 패턴 분석 및 인식

### KIZNIC(SW R&D)
 - 근거리 위치 측위 기반 어린이 안전 솔루션
 - 비콘(AP) 강도 및 디바이스의 자이로 센서 등을 활용한 3차원 측위 지원 솔루션 개발

### JUSTCARE(SW R&D)
 - 센서 기반 긴급 구호 요청 서비스
 - 디바이스 센서 패턴 분석 및 인식으로 인한 위급 상황 판단

</br>

### 활동
- SW Maestro 4기
- 창의도전형 SW R&D 지원사업
- 임베디드 경진대회	LG 스마트TV부문	
- 이화여자대학 CampusCEO 6,7기
- CampusCEO CodeClub Android, C 강사
- 한양대학교 동아리 Forif Android 강사
