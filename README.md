# Equestria At War Korean Translation
하츠 오브 아이언 4의 모드 이퀘스트리아 앳 워(Equestria at War)의 한국어 패치 파일입니다.

# 번역 방법
이퀘스트리아 앳 워 한국어 번역은 공개 번역으로 누구나 참여 가능합니다.

깃허브에 가입한 다음, 번역할 문서에 들어가서 오른쪽 위의 연필 아이콘(Edit this file)을 눌러 수정한 다음

녹색 버튼(Propose file change → Create Pull request → Create Pull request)을 누르면 번역 요청이 가고, 관리자의 승인 후 적용됩니다.

localisation 폴더가 두 개인데, 위쪽의 localisation(원본) 폴더는 원문과 비교하기 위한 원문 파일입니다. 이 폴더는 번역하지 마시고 아래의 localisation 폴더에서 번역해 주세요!

# 번역 규칙

1. 번역하기 전 상단의 Pull requests 탭을 눌러 번역할 부분이 이미 다른 사람에 의해 번역 요청이 된 부분인지 확인해 주세요.

1. 반드시 큰따옴표("")안의 내용만 번역합니다.

1. 대괄호([])나 달러 기호($$) 사이의 내용은 번역하지 않습니다.

1. 파운드 기호(£) 다음에 오는 내용은 번역하지 않습니다. (인게임에서 아이콘으로 구현됨)

1. 부분 기호(§§!) 사이의 내용은 첫 글자를 제외하고 번역합니다. (글자의 색상을 지정하는 부분임. 예-Y:노랑색, R:빨강색)

   ( 예시 : §YTwilight Sparkle§! and the §YElements of Harmony§! → §Y트와일라잇 스파클§!과 §Y조화의 원소§! )
   
1. 개행 기호(\n)는 줄바꿈으로 사용되는 기호이므로 건드리지 않습니다.

1. 원작에 나온 경우들을 제외한 지명, 인명들은 적당히 발음나는 대로 적어주시기 바랍니다.

   단 가급적이면 용어 통일을 위해 이미 번역된 경우가 있는지 확인해 주신 다음 번역해주시면 감사하겠습니다.
   
   1. (추가) 단어들이 붙어있으면 음역, 떨어져있으면 의역 권장 ex) cloudhills - 클라우드힐즈, cloud hills - 구름 언덕
   
1. 번역 관련해서 토론할 사항은 Issues탭 혹은 임페라토르 롬 갤러리에서 해주시면 됩니다.

# 단어장
자신이 번역할 나라의 국가코드 3자리가 궁금하다면, [위키](https://equestria-at-war.fandom.com/wiki/Equestria_at_War_Wiki)를 보거나 인게임에서 콘솔창을 열어 tdebug를 쳐서 직접 확인하시면 됩니다.

## 생명체
- `Pony` 포니
  - `Alicorn` 알리콘
  - `Unicorn` 유니콘
  - `Pegasus` 페가수스
  - `Earth pony` 어스 포니
- `Griffon` 그리폰
- `Changeling` 체인질링
- `Harmony` 조화주의 (파시즘, 공산주의랑 구별되는 이념적 의미만으로 보기 애매할 경우 '조화'로 적어도 무방)
- `Harmonist` 조화주의자
- `Elements of Harmony` 조화의 원소
- `Equestria` 이퀘스트리아
- `Crystal Empire` 크리스탈 왕국(크리스탈 '제국' 아님(솜브라가 이끄는 경우 제외, 번역 기준)

## 국가
> 국가 코드로 검색할 수 있습니다, 우리말이 아니라면 번역이 안된 것으로 [countries_l_english.yml](localisation/countries_l_english.yml) 파일에서 번역을 진행한 뒤 업데이트 해주세요.

> 이 부분은 미리 작성된 `wordbook_countries.js` 스크립트를 사용해 번역된 국가 이름만 수정해 쉽게 생성하실 수 있습니다.

- ![AET flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e9/County_of_Greifwald.png/revision/latest/scale-to-width-down/24?cb=20180922041222) `AET` -  County of Greifwald
- ![ANG flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e0/Barony_of_Angriver.png/revision/latest/scale-to-width-down/24?cb=20180826161742) `ANG` -  Barony of Angriver
- ![ARA flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/0/0e/Barony_of_Arantiga.png/revision/latest/scale-to-width-down/24?cb=20180922044948) `ARA` -  Barony of Arantiga
- ![AVI flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/5/57/House_Avian.png/revision/latest/scale-to-width-down/24?cb=20180826161919) `AVI` -  House Avian
- ![BAK flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/5/5c/Bakara.png/revision/latest/scale-to-width-down/24?cb=20181013051207) `BAK` -  Bakara
- ![BAN flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/b7/Blackrock_Bandits.png/revision/latest/scale-to-width-down/24?cb=20180922041957) `BAN` -  Blackrock Bandits
- ![BAR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/ff/Barrad_Magocracy.png/revision/latest/scale-to-width-down/24?cb=20181013051712) `BAR` -  Barrad Magocracy
- ![BOI flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/b1/Kingdom_of_Griffinstone.png/revision/latest/scale-to-width-down/24?cb=20180922040831) `BOI` -  Kingdom of Griffinstone
- ![BRF flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/c/c9/Kingdom_of_Brodfeld.png/revision/latest/scale-to-width-down/24?cb=20180922044703) `BRF` -  Kingdom of Brodfeld
- ![BRZ flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/ef/County_of_Bronzehill.png/revision/latest/scale-to-width-down/24?cb=20180922043112) `BRZ` -  County of Bronzehill
- ![BUF flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/f7/Buffalo_Chiefdom.png/revision/latest/scale-to-width-down/24?cb=20191114180509) `BUF` - 버팔로
- ![CHN flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/bc/Changeling_Lands.png/revision/latest/scale-to-width-down/24?cb=20190406185820) `CHN` - 체인질링
- ![CRY flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/6/6b/Crystal_Empire.png/revision/latest/scale-to-width-down/24?cb=20180922045759) `CRY` - 크리스탈
- ![CYA flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/d/d4/County_of_Cyanolisia.png/revision/latest/scale-to-width-down/24?cb=20180922035514) `CYA` -  County of Cyanolisia
- ![DED flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e5/Dread_League.png/revision/latest/scale-to-width-down/24?cb=20180903052251) `DED` -  Dread League
- ![DEP flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/f2/Deponya.png/revision/latest/scale-to-width-down/24?cb=20181013051300) `DEP` -  Deponya
- ![DMT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/a/a2/Diamond_Mountain.png/revision/latest/scale-to-width-down/24?cb=20181013051327) `DMT` -  Diamond Mountain
- ![DRG flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e6/Dragon_Tribe.png/revision/latest/scale-to-width-down/24?cb=20180922052447) `DRG` - 드래곤
- ![EQC flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/2/24/Commonwealth_of_New_Mareland.png/revision/latest/scale-to-width-down/24?cb=20180922061032) `EQC` -  New Mareland
- ![EQS flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/0/04/Equestria.png/revision/latest/scale-to-width-down/24?cb=20180922045431) `EQS` - 이퀘스트리아
- ![ERI flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e2/House_Erie.png/revision/latest/scale-to-width-down/24?cb=20180922044018) `ERI` -  House Erie
- ![EYR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e5/House_Eyrie.png/revision/latest/scale-to-width-down/24?cb=20180922042935) `EYR` -  House Eyrie
- ![FAL flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/8/89/Falcor_Principality.png/revision/latest/scale-to-width-down/24?cb=20180922042324) `FAL` -  Falcor Principality
- ![FAR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/5/58/Farbrook.png/revision/latest/scale-to-width-down/24?cb=20180922040851) `FAR` -  Farbrook
- ![FAT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/bd/Griffonian_Republic.png/revision/latest/scale-to-width-down/24?cb=20180827041346) `FAT` -  Griffonian Republic
- ![FEA flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/ea/Grand_Duchy_of_Feathisia.png/revision/latest/scale-to-width-down/24?cb=20180922043233) `FEA` -  Grand Duchy of Feathisia
- ![FEZ flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/c/c4/Township_of_Fezera.png/revision/latest/scale-to-width-down/24?cb=20180922041126) `FEZ` -  Township of Fezera
- ![FIR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/8/81/Firtree_Villages.png/revision/latest/scale-to-width-down/24?cb=20180922034501) `FIR` -  Firtree Villages
- ![FLO flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/6/66/City_of_Flowena.png/revision/latest/scale-to-width-down/24?cb=20180922045341) `FLO` -  City of Flowena
- ![FRE flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/b5/Ponaidhean.png/revision/latest/scale-to-width-down/24?cb=20181013051610) `FRE` -  Ponaidhean
- ![FRN flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/c/c9/County_of_Franmistria.png/revision/latest/scale-to-width-down/24?cb=20180922044355) `FRN` -  County of Franmistria
- ![GFF flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/c/cf/Griffon_Frontier.png/revision/latest/scale-to-width-down/24?cb=20180922043901) `GFF` - 그리핀
- ![GRF flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/0/06/Nova_Griffonia.png/revision/latest/scale-to-width-down/24?cb=20190905183249) `GRF` - 그리포니아
- ![GRI flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/1/18/Griffonian_Empire.png/revision/latest/scale-to-width-down/24?cb=20191114175303) `GRI` -  Griffonian Empire
- ![GRU flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/1/11/Free_Towns_of_Gryphus.png/revision/latest/scale-to-width-down/24?cb=20180826162031) `GRU` -  Free Towns of Gryphus
- ![GRW flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/4/45/Griffon_Liberation_Army.png/revision/latest/scale-to-width-down/24?cb=20180922042358) `GRW` -  Griffon Liberation Army
- ![GRY flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/2/25/Gryphian_Host.png/revision/latest/scale-to-width-down/24?cb=20180922051701) `GRY` -  Gryphian Host
- ![HAU flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/9b/Haukland.png/revision/latest/scale-to-width-down/24?cb=20180922042013) `HAU` -  Haukland
- ![HEL flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/bb/County_of_Adelart.png/revision/latest/scale-to-width-down/24?cb=20181105230825) `HEL` -  County of Adelart
- ![HLQ flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/5/51/Knightly_Order_of_Hellquill.png/revision/latest/scale-to-width-down/24?cb=20180922040133) `HLQ` -  Knightly Order of Hellquill
- ![HLR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/8/89/Arcturian_Order.png/revision/latest/scale-to-width-down/24?cb=20180922041522) `HLR` -  Arcturian Order
- ![JAK flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/96/Jaki-Clan.png/revision/latest/scale-to-width-down/24?cb=20191114180721) `JAK` - 재키
- ![JEB flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/6/63/Duchy_of_Rila.png/revision/latest/scale-to-width-down/24?cb=20180922043039) `JEB` -  Duchy of Rila
- ![JER flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/1/1e/Kingdom_of_Aquileia.png/revision/latest/scale-to-width-down/24?cb=20180922051737) `JER` -  Kingdom of Aquileia
- ![JFT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e0/Barony_of_Pridea.png/revision/latest/scale-to-width-down/24?cb=20180922042053) `JFT` -  Barony of Pridea
- ![JRR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/3/35/Marcher-Lordship_of_Westkeep.png/revision/latest/scale-to-width-down/24?cb=20180922041601) `JRR` -  Marcher-Lordship of Westkeep
- ![KAT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/5/54/Katerin_Principality.png/revision/latest/scale-to-width-down/24?cb=20180826162150) `KAT` -  Katerin Principality
- ![LAK flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/f5/Barony_of_Rumare.png/revision/latest/scale-to-width-down/24?cb=20180922041413) `LAK` -  Barony of Rumare
- ![LCT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/d/d1/Lake_City.png/revision/latest/scale-to-width-down/24?cb=20181013051430) `LCT` -  Lake City
- ![LNS flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/fa/County_of_Longsword.png/revision/latest/scale-to-width-down/24?cb=20181104223155) `LNS` -  County of Longsword
- ![LUS flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/e/e3/Principality_of_Lushi.png/revision/latest/scale-to-width-down/24?cb=20180922042431) `LUS` -  Principality of Lushi
- ![MIT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/7/71/Asterion.png/revision/latest/scale-to-width-down/24?cb=20190731104027) `MIT` -  Asterion
- ![MNC flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/a/a3/Sunstriker_Clan.png/revision/latest/scale-to-width-down/24?cb=20180922042105) `MNC` -  Sunstriker Clan
- ![NCH flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/6/69/Greneclyf.png/revision/latest/scale-to-width-down/24?cb=20180922043129) `NCH` -  Greneclyf
- ![NIM flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/b9/Nimbusia.png/revision/latest/scale-to-width-down/24?cb=20181107174106) `NIM` -  Nimbusia
- ![NTR flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/a/a2/Northern_Tribes.png/revision/latest/scale-to-width-down/24?cb=20180922044029) `NTR` -  Northern Tribes
- ![OLE flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/be/Kingdom_of_Olenia.png/revision/latest/scale-to-width-down/24?cb=20180922041327) `OLE` - 올레니아
- ![OLV flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/d/d1/Nytt_Radjur_Land.png/revision/latest/scale-to-width-down/24?cb=20180922041659) `OLV` -  Nytt Radjur Land
- ![PLB flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/9a/Polar_Bear_Communities.png/revision/latest/scale-to-width-down/24?cb=20180826162334) `PLB` - 북극곰
- ![PNG flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/7/76/Kingdom_of_Pingland.png/revision/latest/scale-to-width-down/24?cb=20191114175041) `PNG` -  Kingdom of Pingland
- ![POM flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/90/Pomovarra.png/revision/latest/scale-to-width-down/24?cb=20180826162421) `POM` -  Pomovarra
- ![PYT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/2/23/Duchy_of_Greifenheim.png/revision/latest/scale-to-width-down/24?cb=20181105231046) `PYT` -  Duchy of Greifenheim
- ![RCT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/7/71/River_Republic.png/revision/latest/scale-to-width-down/24?cb=20181111053131) `RCT` -  River Republic
- ![ROU flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/92/Free_City_of_Romau.png/revision/latest/scale-to-width-down/24?cb=20180922042146) `ROU` -  Free City of Romau
- ![SIC flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/2/21/Sicameon.png/revision/latest/scale-to-width-down/24?cb=20181015180736) `SIC` -  Federated Parishes of Sicameon
- ![SRS flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/9d/Socialist_Republic_of_the_Free_Griffons.png/revision/latest/scale-to-width-down/24?cb=20190505141858) `SRS` -  SRFG
- ![STG flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/91/Stalliongrad.png/revision/latest/scale-to-width-down/24?cb=20180922045749) `STG` - 스탈리온그라드
- ![STL flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/2/2e/Our_Town.png/revision/latest/scale-to-width-down/24?cb=20180922052154) `STL` - 우리
- ![STW flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/f/fc/Strawberry_Duchy.png/revision/latest/scale-to-width-down/24?cb=20191118034657) `STW` -  Strawberry Duchy
- ![TAL flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/b/b6/Duchy_of_Talouse.png/revision/latest/scale-to-width-down/24?cb=20180922041630) `TAL` -  Duchy of Talouse
- ![TRD flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/c/cb/Skyfall_Trade_Federation.png/revision/latest/scale-to-width-down/24?cb=20180922045452) `TRD` -  Skyfall Trade Federation
- ![VED flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/4/42/Kingdom_of_Vedina.png/revision/latest/scale-to-width-down/24?cb=20181105230440) `VED` -  Kingdom of Vedina
- ![VIN flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/1/18/Duchy_of_Vinovia.png/revision/latest/scale-to-width-down/24?cb=20180922034452) `VIN` -  Duchy of Vinovia
- ![WAT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/7/74/Watertowns.png/revision/latest/scale-to-width-down/24?cb=20180922041710) `WAT` -  Watertowns
- ![WIT flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/8/89/Kingdom_of_Wittenland.png/revision/latest/scale-to-width-down/24?cb=20181013051741) `WIT` -  Kingdom of Wittenland
- ![WNG flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/3/38/Kingdom_of_Wingbardy.png/revision/latest/scale-to-width-down/24?cb=20180922044125) `WNG` -  Kingdom of Wingbardy
- ![YAK flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/9/90/Kingdom_of_Yakyakistan.png/revision/latest/scale-to-width-down/24?cb=20180922043947) `YAK` - 야크야키스탄
- ![YAL flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/d/dc/Duchy_of_Yaledom.png/revision/latest/scale-to-width-down/24?cb=20180922042204) `YAL` -  Duchy of Yaledom
- ![ZES flag](https://vignette.wikia.nocookie.net/equestria-at-war/images/6/63/Nyumba_ya_Kaskazini.png/revision/latest/scale-to-width-down/24?cb=20180922041904) `ZES` -  Nyumba ya Kaskazini

## 그 외

- [호이4 한국어패치 단어장(docs.google.com)](https://docs.google.com/spreadsheets/d/1nu5sKDlIa11AMvNF7kq11RSu_a9ZKJsXtD8PB6u3KB8/edit#gid=0)
- [이퀘스트리아 앳 워 위키(영문)](https://equestria-at-war.fandom.com/wiki/Equestria_at_War_Wiki)
