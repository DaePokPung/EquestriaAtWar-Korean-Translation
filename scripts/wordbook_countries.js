/**
 * 위키아 국가 페이지에 있는 테이블을 보기 쉬운 마크다운 서식으로
 * 변환해주는 스크립트입니다.
 * 위키아 페이지에서 F12 로 콘솔을 열고 스크립트 전체를  붙여 넣은 뒤
 * getCountries() 를 입력해 출력할 수 있습니다.
 * 
 * https://equestria-at-war.fandom.com/wiki/List_of_Countries
 */

function getCountries () {
  const countries = []
  const locale = {
    AET: '그라이프발트 백국',
    ANG: '',
    ARA: '',
    AVI: '아비안 가',
    BAK: '바카라',
    BAN: '',
    BAR: '',
    BOI: '그리핀스톤 왕국',
    BRF: '',
    BRZ: '',
    BUF: '버팔로',
    CHN: '체인질링',
    CRY: '크리스탈',
    CYA: '',
    DED: '',
    DEP: '',
    DMT: '',
    DRG: '드래곤',
    EQC: '',
    EQS: '이퀘스트리아',
    ERI: '',
    EYR: '',
    FAL: '',
    FAR: '',
    FAT: '',
    FEA: '',
    FEZ: '',
    FIR: '',
    FLO: '플로웨나 시',
    FRE: '',
    FRN: '',
    GFF: '그리핀',
    GRF: '그리포니아',
    GRI: '그리포니아 제국',
    GRU: '',
    GRW: '',
    GRY: '',
    HAU: '',
    HEL: '아델라트 백국',
    HLQ: '',
    HLR: '',
    JAK: '재키',
    JEB: '',
    JER: '아퀼레이아 왕국',
    JFT: '',
    JRR: '',
    KAT: '',
    LAK: '',
    LCT: '',
    LNS: '',
    LUS: '',
    MIT: '',
    MNC: '',
    NCH: '',
    NIM: '',
    NTR: '',
    OLE: '올레니아',
    OLV: '',
    PLB: '북극곰',
    PNG: '',
    POM: '',
    PYT: '',
    RCT: '',
    ROU: '',
    SIC: '',
    SRS: '',
    STG: '스탈리온그라드',
    STL: '우리',
    STW: '',
    TAL: '',
    TRD: '',
    VED: '',
    VIN: '',
    WAT: '',
    WIT: '',
    WNG: '',
    YAK: '야크야키스탄',
    YAL: '',
    ZES: '',
  }

  for (let country of document.querySelectorAll('.wikitable.sortable tr')) {
    // 표 헤더 아이템 제외
    if (!country.hasAttribute('style')) {
      continue
    }
  
    // NodeList suck
    const items = []
    for (let item of country.querySelectorAll('td')) {
      items.push(item)
    }

    const code = items[1].innerText
    const name = items[0].innerText
  
    countries.push({
      code,
      name,
      name_ko: locale[code] ? locale[code] : name,
      flag: items[0].querySelector('img').dataset.src
    })
  }
  
  return countries
    .sort((a, b) => a.code.localeCompare(b.code))
    .map(i => `- ![${i.code} flag](${i.flag}) \`${i.code}\` - ${i.name_ko}`)
    .join('\n')
}
