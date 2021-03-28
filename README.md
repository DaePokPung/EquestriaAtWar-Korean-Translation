# Equestria At War Korean Translation
하츠 오브 아이언 4의 모드 이퀘스트리아 앳 워([Equestria at War](https://steamcommunity.com/sharedfiles/filedetails/?id=1826643372))의 [한국어 번역](https://steamcommunity.com/sharedfiles/filedetails/?id=1912668247) 프로젝트입니다.

***

# 공지사항
- 21.03.12 기준 한패 업데이트되었습니다.

# 번역 추천 국가
현재 번역이 진행중인 국가 문서들입니다. 어떤 나라를 번역해야 할지 모르겠다면 아래 국가들의 번역에 참여해 주세요!

  - [체인질링 랜드](localisation/country_CHN_l_english.yml)
  - [스카이나비아 사회주의 공화국](localisation/country_SRS_l_english.yml)
  - [뉴메어랜드 연방](localisation/country_EQC_l_english.yml)
  - [이퀘스트리아 해방전선](localisation/country_MAN&ELF_l_english.yml)
  - [스탈리온그라드](localisation/country_STG_l_english.yml)
  - [예일 학장국](localisation/country_YAL_l_english.yml)
  - [베디나 공국](localisation/country_VED_l_english.yml)
  - [님부시아](localisation/country_NIM_l_english.yml)
  - [바카라](localisation/country_BAK_l_english.yml)
  - [롱소드 백국](localisation/country_LNS_l_english.yml)
  - [브론즈힐 백국](localisation/country_BRZ_l_english.yml)

***

# 목차
- [번역 방법](#번역-방법)
- [번역 규칙](#번역-규칙)
- [단어장](#단어장)
  - [생명체](#생명체)
  - [이념](#이념)
  - [국가](#국가)
  - [장소](#장소)
  - [기타](#기타)
  - [국가 및 국가코드](#국가-및-국가코드)
- [외부링크](#외부링크)

# 번역 방법
이퀘스트리아 앳 워 한국어 번역은 공개 번역으로 누구나 참여하실 수 있습니다.

먼저 깃허브에 가입한 뒤 [`localisation`](/localisation)을 클릭하고 번역하고 싶은 문서에 들어가 우측 상단 연필 아이콘(`Edit this file`)을 눌러 수정한 뒤 녹색 버튼(`Propose file change` → `Create Pull request` → `Create Pull request`)을 눌러 수정 요청을 한 뒤 관리자의 승인을 기다리면 됩니다.

`localisation` 폴더가 두 개인데, 위쪽 `localisation(원본)` 폴더는 원문과 비교하기 위한 원문 파일입니다. 이 폴더는 번역하지 마시고 아래의 `localisation` 폴더에서 번역해 주세요!

# 번역 규칙
- 번역 전 상단의 `Pull requests` 탭을 눌러 번역할 부분이 이미 다른 사람에 의해 번역 요청이 된 부분인지 확인해 주세요.

- 반드시 큰따옴표(`""`)안의 내용만 번역합니다.

- 대괄호(`[]`)나 달러 기호(`$$`) 사이의 내용은 번역하지 않습니다.

- 파운드 기호(`£`) 다음에 오는 내용은 게임에서 아이콘으로 구현되는 부분으로 번역하지 않습니다.

- 부분 기호(`§§!`) 사이의 첫 대문자 알파벳은 글자 색상을 지정하는 것으로 번역하지 않습니다.
```
번역 예시:
  §YTwilight Sparkle§! and the §YElements of Harmony§!
  §Y트와일라잇 스파클§!과 §Y조화의 원소§!
```
- 개행 기호(`\n`)는 줄바꿈 기호로 번역하지 않습니다.

- 원작에서 나오지 않았거나 한번도 번역되지 않은 지명, 인명들은 적당히 발음나는 대로 적어주세요. (필요시 [한글라이즈](https://hangulize.org)나 Issue탭을 활용해 주세요)

- #으로 시작하는 줄의 경우 게임상에 출력되지 않는 주석 부분이므로 번역하지 않아도 됩니다.
   
- 그 외 번역에 관련된 토론은 상단 `Issues` 탭에 올려주세요.

# 단어장
번역할 국가의 국가코드 3자리가 궁금하다면 [위키의 국가 문서](https://equestria-at-war.fandom.com/wiki/List_of_Countries) 또는 인게임에서 콘솔을 열어 `tdebug` 명령어를 입력해 직접 확인하실 수 있습니다.

## 생명체
- `Pony` 포니
  - `Alicorn` 알리콘
  - `Unicorn` 유니콘
  - `Pegasus` 페가수스
  - `Earth pony` 어스 포니
- `Griffon` 그리폰
- `Changeling` 체인질링
- `Dragon` 드래곤
- `Diamond Dog` 다이아몬드 독

## 이념
- `Harmony` 조화주의 (파시즘, 공산주의랑 구별되는 이념적 의미만으로 보기 애매할 경우 '조화'로 적어도 무방)
- `Harmonist` 조화주의자
- `Supremacism` 우월주의
- `Supremacist` 우월주의자

## 국가
- `State` ~국
- `Commune` 코뮌
- `Duchy` 공국
- `County` 백국
- `Barony` 남국
- `Principality` 후국
- `House` 가문

## 장소
- `Griffenheim` 그리펜하임
- `Herzland` `Heartsland` 헤르츠란트 (중부 그리포니아를 가리킨다고 보기 힘든 경우 "심장부"도 가능)
- `Scheißwald` 샤이스발트

## 기타
- `Archon` 집정관
- `Elements of Harmony` 조화의 원소
- `Boreas` 보레아스 `Idol of Boreas` 보레아스의 성물
- `Eyr` 아이르
- `Arcturius` 아크투리우스
- `Maar` 마아르

## 국가 및 국가코드
> 국가 코드로 검색할 수 있습니다, 우리말이 아니라면 번역이 안 된 것이니 국가명이 들어있는 다음 파일에서 번역을 진행한 뒤 업데이트 해주세요.
>- [countries_l_english.yml](localisation/countries_l_english.yml)
>- [eaw_griffon_continent_countries_l_english.yml](localisation/eaw_griffon_continent_countries_l_english.yml)
>- 국가별 파일(위 두 문서에 나오지 않은 국가명(브론즈힐, 비텐란트, 핑랜드 왕국 등)은 각자의 국가 파일에 따로 들어가 있습니다.)

> 이 부분은 미리 작성된 `wordbook_countries.js` 스크립트를 사용해 번역된 국가 이름만 수정해 쉽게 생성하실 수 있습니다.

- ![AET flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e9/County_of_Greifwald.png/revision/latest/scale-to-width-down/24?cb=20191119202638) `AET` - 그라이프발트 백국
- ![ANG flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e0/Barony_of_Angriver.png/revision/latest/scale-to-width-down/24?cb=20191218200428) `ANG` - 앵그리버 남국
- ![ARA flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/0/0e/Barony_of_Arantiga.png/revision/latest/scale-to-width-down/24?cb=20191119225230) `ARA` - 아란티가 남국
- ![AVI flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/5/57/House_Avian.png/revision/latest/scale-to-width-down/24?cb=20180826161919) `AVI` - 아비안 가문
- ![BAK flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/5/5c/Bakara.png/revision/latest/scale-to-width-down/24?cb=20191119200720) `BAK` - 바카라
- ![BAN flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/b7/Blackrock_Bandits.png/revision/latest/scale-to-width-down/24?cb=20180922041957) `BAN` - 블랙록 도적단
- ![BAR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/ff/Barrad_Magocracy.png/revision/latest/scale-to-width-down/24?cb=20181013051712) `BAR` - 바라드 마권정부
- ![BOI flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/b1/Kingdom_of_Griffinstone.png/revision/latest/scale-to-width-down/24?cb=20180922040831) `BOI` - 그리핀스톤 왕국
- ![BRF flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/c/c9/Kingdom_of_Brodfeld.png/revision/latest/scale-to-width-down/24?cb=20180922044703) `BRF` - 브로드펠트 왕국
- ![BRZ flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/ef/County_of_Bronzehill.png/revision/latest/scale-to-width-down/24?cb=20191119202042) `BRZ` - 브론즈힐 백국
- ![BUF flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/f7/Buffalo_Chiefdom.png/revision/latest/scale-to-width-down/24?cb=20191114180509) `BUF` - 버팔로 부족정
- ![CHN flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/bc/Changeling_Lands.png/revision/latest/scale-to-width-down/24?cb=20190406185820) `CHN` - 체인질링 랜드
- ![CRY flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/6/6b/Crystal_Empire.png/revision/latest/scale-to-width-down/24?cb=20180922045759) `CRY` - 크리스탈 왕국
- ![CYA flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/d/d4/County_of_Cyanolisia.png/revision/latest/scale-to-width-down/24?cb=20191119202433) `CYA` - 사이아놀리시아 백국
- ![DED flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e5/Dread_League.png/revision/latest/scale-to-width-down/24?cb=20180903052251) `DED` - 드레드 리그
- ![DEP flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/f2/Deponya.png/revision/latest/scale-to-width-down/24?cb=20191119204141) `DEP` - 데포니아
- ![DMT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/a/a2/Diamond_Mountain.png/revision/latest/scale-to-width-down/24?cb=20191119203958) `DMT` - 다이아몬드 마운틴
- ![DRG flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e6/Dragon_Tribe.png/revision/latest/scale-to-width-down/24?cb=20191228053933) `DRG` - 드래곤 부족
- ![EQC flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/2/24/Commonwealth_of_New_Mareland.png/revision/latest/scale-to-width-down/24?cb=20180922061032) `EQC` - 뉴메어랜드 연방
- ![EQS flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/0/04/Equestria.png/revision/latest/scale-to-width-down/24?cb=20180922045431) `EQS` - 이퀘스트리아
- ![ERI flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e2/House_Erie.png/revision/latest/scale-to-width-down/24?cb=20191119214306) `ERI` - 에리에 가문
- ![EYR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e5/House_Eyrie.png/revision/latest/scale-to-width-down/24?cb=20191119214518) `EYR` - 이리에 가문
- ![FAL flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/8/89/Falcor_Principality.png/revision/latest/scale-to-width-down/24?cb=20180922042324) `FAL` - 팔코르 후국
- ![FAR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/5/58/Farbrook.png/revision/latest/scale-to-width-down/24?cb=20191119205315) `FAR` - 파브룩
- ![FAT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/bd/Griffonian_Republic.png/revision/latest/scale-to-width-down/24?cb=20191120013627) `FAT` - 그리포니아 공화국
- ![FEA flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/ea/Grand_Duchy_of_Feathisia.png/revision/latest/scale-to-width-down/24?cb=20180922043233) `FEA` - 페디시아 대공국
- ![FEZ flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/c/c4/Township_of_Fezera.png/revision/latest/scale-to-width-down/24?cb=20191119221949) `FEZ` - 페제라 군구
- ![FIR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/8/81/Firtree_Villages.png/revision/latest/scale-to-width-down/24?cb=20191119212127) `FIR` - 피어트리 마을
- ![FLO flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/6/66/City_of_Flowena.png/revision/latest/scale-to-width-down/24?cb=20191126194056) `FLO` - 플로웨나 시
- ![FRE flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/b5/Ponaidhean.png/revision/latest/scale-to-width-down/24?cb=20191119220124) `FRE` - 포나이드헨
- ![FRN flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/c/c9/County_of_Franmistria.png/revision/latest/scale-to-width-down/24?cb=20191119202550) `FRN` - 프란시스트리아 백국
- ![GFF flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/c/cf/Griffon_Frontier.png/revision/latest/scale-to-width-down/24?cb=20180922043901) `GFF` - 그리폰 프론티어
- ![GRF flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/0/06/Nova_Griffonia.png/revision/latest/scale-to-width-down/24?cb=20190905183249) `GRF` - 노바 그리포니아
- ![GRI flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/1/18/Griffonian_Empire.png/revision/latest/scale-to-width-down/24?cb=20191120014612) `GRI` - 그리포니아 제국
- ![GRU flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/1/11/Free_Towns_of_Gryphus.png/revision/latest/scale-to-width-down/24?cb=20191119212351) `GRU` - 그리퍼스 자유마을
- ![GRW flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/4/45/Griffon_Liberation_Army.png/revision/latest/scale-to-width-down/24?cb=20180922042358) `GRW` - 그리폰 해방군
- ![GRY flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/2/25/Gryphian_Host.png/revision/latest/scale-to-width-down/24?cb=20191119213732) `GRY` - 그리피안 호스트
- ![HAU flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/9b/Haukland.png/revision/latest/scale-to-width-down/24?cb=20191119214144) `HAU` - 하우크란트
- ![HEL flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/bb/County_of_Adelart.png/revision/latest/scale-to-width-down/24?cb=20191120013120) `HEL` - 아델라트 백국
- ![HLQ flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/5/51/Knightly_Order_of_Hellquill.png/revision/latest/scale-to-width-down/24?cb=20180922040133) `HLQ` - 헬퀼 기사단
- ![HLR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/8/89/Arcturian_Order.png/revision/latest/scale-to-width-down/24?cb=20180922041522) `HLR` - 아크튜러스 기사단
- ![JAK flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/96/Jaki-Clan.png/revision/latest/scale-to-width-down/24?cb=20191114180721) `JAK` - 재키 부족
- ![JEB flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/6/63/Duchy_of_Rila.png/revision/latest/scale-to-width-down/24?cb=20191119204311) `JEB` - 릴라 공국
- ![JER flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/1/1e/Kingdom_of_Aquileia.png/revision/latest/scale-to-width-down/24?cb=20180922051737) `JER` - 아퀼레이아 왕국
- ![JFT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e0/Barony_of_Pridea.png/revision/latest/scale-to-width-down/24?cb=20191119201437) `JFT` - 프리데아 남국
- ![JRR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/3/35/Marcher-Lordship_of_Westkeep.png/revision/latest/scale-to-width-down/24?cb=20191119215803) `JRR` - 웨스트킵 변경백국
- ![KAT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/5/54/Katerin_Principality.png/revision/latest/scale-to-width-down/24?cb=20191119214738) `KAT` - 카테린 후국
- ![LAK flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/f5/Barony_of_Rumare.png/revision/latest/scale-to-width-down/24?cb=20191119201607) `LAK` - 루메어 남국
- ![LCT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/d/d1/Lake_City.png/revision/latest/scale-to-width-down/24?cb=20181013051430) `LCT` - 레이크 시티
- ![LNS flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/fa/County_of_Longsword.png/revision/latest/scale-to-width-down/24?cb=20191119202858) `LNS` - 롱소드 백국
- ![LUS flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e3/Principality_of_Lushi.png/revision/latest/scale-to-width-down/24?cb=20180922042431) `LUS` - 루시 후국
- ![MIT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/7/71/Asterion.png/revision/latest/scale-to-width-down/24?cb=20190731104027) `MIT` - 아스테리온
- ![MNC flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/a/a3/Sunstriker_Clan.png/revision/latest/scale-to-width-down/24?cb=20191119221306) `MNC` - 선스트라이커 부족
- ![NCH flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/6/69/Greneclyf.png/revision/latest/scale-to-width-down/24?cb=20191119213059) `NCH` - 그레네클리프
- ![NIM flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/b9/Nimbusia.png/revision/latest/scale-to-width-down/24?cb=20181107174106) `NIM` - 님부시아
- ![NTR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/a/a2/Northern_Tribes.png/revision/latest/scale-to-width-down/24?cb=20191119215835) `NTR` - 북부 부족
- ![OLE flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/be/Kingdom_of_Olenia.png/revision/latest/scale-to-width-down/24?cb=20180922041327) `OLE` - 올레니아
- ![OLV flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/d/d1/Nytt_Radjur_Land.png/revision/latest/scale-to-width-down/24?cb=20191119200422) `OLV` - 외이스튀르란드
- ![PLB flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/9a/Polar_Bear_Communities.png/revision/latest/scale-to-width-down/24?cb=20180826162334) `PLB` - 북극곰 공동체
- ![PNG flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/7/76/Kingdom_of_Pingland.png/revision/latest/scale-to-width-down/24?cb=20191114175041) `PNG` - 핑랜드 왕국
- ![POM flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/90/Pomovarra.png/revision/latest/scale-to-width-down/24?cb=20191119220110) `POM` - 포모바라
- ![PYT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/a/af/Greifenmarschen.png/revision/latest?cb=20191201094117) `PYT` - 그라이펜마르센
- ![RCT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/7/71/River_Republic.png/revision/latest/scale-to-width-down/24?cb=20181111053131) `RCT` - 리버 공화국
- ![ROU flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/92/Free_City_of_Romau.png/revision/latest/scale-to-width-down/24?cb=20191119212158) `ROU` - 로마우 자유시
- ![SIC flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/2/21/Sicameon.png/revision/latest/scale-to-width-down/24?cb=20191119212047) `SIC` - 시카메온 신성 연방
- ![SRS flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/9d/Socialist_Republic_of_the_Free_Griffons.png/revision/latest/scale-to-width-down/24?cb=20190505141858) `SRS` - 스카이나비아 사회주의 공화국
- ![STG flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/91/Stalliongrad.png/revision/latest/scale-to-width-down/24?cb=20180922045749) `STG` - 스탈리온그라드
- ![STL flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/2/2e/Our_Town.png/revision/latest/scale-to-width-down/24?cb=20180922052154) `STL` - 우리 마을
- ![STW flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/fc/Strawberry_Duchy.png/revision/latest/scale-to-width-down/24?cb=20191118034657) `STW` - 스트로베리 공국
- ![TAL flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/b6/Duchy_of_Talouse.png/revision/latest/scale-to-width-down/24?cb=20191119204356) `TAL` - 탈로스 공국
- ![TRD flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/c/cb/Skyfall_Trade_Federation.png/revision/latest/scale-to-width-down/24?cb=20180922045452) `TRD` - 스카이폴 무역연합
- ![VED flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/4/42/Kingdom_of_Vedina.png/revision/latest/scale-to-width-down/24?cb=20181105230440) `VED` - 베디나 왕국
- ![VIN flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/1/18/Duchy_of_Vinovia.png/revision/latest/scale-to-width-down/24?cb=20191119204615) `VIN` - 비노비아 공국
- ![WAT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/7/74/Watertowns.png/revision/latest/scale-to-width-down/24?cb=20191119222119) `WAT` - 워터타운
- ![WIT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/8/89/Kingdom_of_Wittenland.png/revision/latest/scale-to-width-down/24?cb=20191119215332) `WIT` - 비텐란트
- ![WNG flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/3/38/Kingdom_of_Wingbardy.png/revision/latest/scale-to-width-down/24?cb=20180922044125) `WNG` - 윙바르디 왕국
- ![YAK flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/90/Kingdom_of_Yakyakistan.png/revision/latest/scale-to-width-down/24?cb=20180922043947) `YAK` - 야크야키스탄
- ![YAL flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/2/26/Yale_Rectorate.png/revision/latest/scale-to-width-down/24?cb=20191201094136) `YAL` - 예일 학술국
- ![ZES flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/6/63/Nyumba_ya_Kaskazini.png/revision/latest/scale-to-width-down/24?cb=20180922041904) `ZES` - 카사 자유국

## 외부링크
- [호이4 한국어패치 단어장(docs.google.com)](https://docs.google.com/spreadsheets/d/1nu5sKDlIa11AMvNF7kq11RSu_a9ZKJsXtD8PB6u3KB8/edit#gid=0)
- [이퀘스트리아 앳 워 위키(영문)](https://equestria-at-war.fandom.com/wiki/Equestria_at_War_Wiki)
