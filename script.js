let itemCount = 0;
async function fetchBuyerDetails(gstin) {
  try {
    const gstinSearchUrl = `https://sheet.gstincheck.co.in/check/e212a03b53aa6a2e4d760d222b939d59/${gstin}`;
    const response = await fetch(gstinSearchUrl);
    const data = await response.json();
    
    if (!data.flag || !data.data) {
      alert("GSTIN not found or invalid response");
      console.error("GSTIN not found or invalid response");
      return null;
    }
    
    const buyerData = data.data;
    // Extract pin code and state code (first two digits of GSTIN)
    const address1 = buyerData.pradr?.adr || "";
    const address2 = buyerData.pradr?.addr.dst || "";
    const pin = parseInt(buyerData.pradr?.addr.pncd) || null;
    const stcd = gstin.slice(0, 2); // first 2 digits of GSTIN = state code
    
    // Build object in your ledger format
    const buyerObj = {
      [gstin]: {
        Gstin: gstin,
        LglNm: buyerData.lgnm || buyerData.tradeNam || "N/A",
        Addr1: address1,
        Addr2: address2,
        Loc: address2,
        Pin: pin,
        Pos: stcd,
        Stcd: stcd,
        Ph: null,
        Em: null
      }
    };
    
    return buyerObj;
  } catch (err) {
    alert("Error");
    console.error("Error fetching GSTIN details:", err);
    return null;
  }
}

// Example usage:
//fetchBuyerDetails("36AAFCL0077Q1Z1").then(console.log);
const actualBuyerMap = {
  0: {
    Gstin: "Select",
    LglNm: "Please select the buyer",
    Addr1: null,
    Addr2: null,
    Loc: null,
    Pin: null,
    Pos: null,
    Stcd: null,
    Ph: null,
    Em: null
  },
  "36EEZPS3505H1ZV": {
    "Gstin": "36EEZPS3505H1ZV",
    "LglNm": "LAXMI DIGITALS",
    "Addr1": "PLOT NO 286,MADHAVA NAGAR,NIZAMABAD",
    "Addr2": "NIZAMABAD",
    "Loc": "NIZAMABAD",
    "Pin": 503001,
    "Pos": "36",
    "Stcd": "36",
    "Ph": 9502363435,
    "Em": null
  },
  "36AAACN4165C3ZQ": {
    "Gstin": "36AAACN4165C3ZQ",
    "LglNm": "THE NEW INDIA ASSURANCE CO LIMITED",
    "Addr1": "New India Assurance Company   Plot No 1,2,&3,Inner Ring Road",
    "Addr2": "Hyderabad",
    "Loc": "Hyderabad",
    "Pin": 500007,
    "Pos": "36",
    "Stcd": "36",
    "Ph": null,
    "Em": null
  },
  "36AAYCA6493L1ZN": {
    "Gstin": "36AAYCA6493L1ZN",
    "LglNm": "ABHINAV AUTO CRAFT PRVATE LIMITED",
    "Addr1": "SY NO.79, 80, 81, 82 PART, PLOT NO.119 AND 120,",
    "Addr2": "DOYENS LAKESIDE TOWNSHIP,serilingampally",
    "Loc": "Hyderabad",
    "Pin": 500050,
    "Pos": "36",
    "Stcd": "36",
    "Ph": null,
    "Em": null
  },
  "36ACJPC7374G1ZI": {
    "Gstin": "36ACJPC7374G1ZI",
    "LglNm": "NIGHTINGALE SCALES COMPANY",
    "Addr1": "KRISHNA MILL ROAD, 6-26-305,NEW GUNJ ROAD",
    "Addr2": "NIZAMABAD",
    "Loc": "NIZAMABAD",
    "Pin": 503003,
    "Pos": "36",
    "Stcd": "36",
    "Ph": null,
    "Em": null
  },
  "36AAACN9967E6ZZ": {
    "Gstin": "36AAACN9967E6ZZ",
    "LglNm": "NATIONAL INSURANCE COMPANY LIMITED",
    "Addr1": "5-8-568,JUBILEE BUILDING",
    "Addr2": "NAMPALLY STATION ROAD",
    "Loc": "HYDERABAD",
    "Pin": 500001,
    "Pos": "36",
    "Stcd": "36",
    "Ph": null,
    "Em": null
  },
  "33AAACS7032B1ZZ": {
    Gstin: "33AAACS7032B1ZZ",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "PB NO-4 HARITHA HOSUR",
    Addr2: "TAMILNADU",
    Loc: "TAMILNADU",
    Pin: 600006,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null
  },
  "29AAACS7032B1ZO": {
    Gstin: "29AAACS7032B1ZO",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "POST BOX 1 KADAKOLA POST,BYTHALI KARNATAK",
    Addr2: "KARNATAKA",
    Loc: "KARNATAKA",
    Pin: 591287,
    Pos: "29",
    Stcd: "29",
    Ph: null,
    Em: null
  },
  3: {
    Gstin: "02AAACS7032B1Z4",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "HIMACHAL PRADESH",
    Addr2: "HIMACHAL PRADESH",
    Loc: "HIMACHAL PRADESH",
    Pin: 176052,
    Pos: "02",
    Stcd: "02",
    Ph: null,
    Em: null
  },
  4: {
    Gstin: "36AAACB5861B1Z1",
    LglNm: "BERAR FINANCE LTD",
    Addr1: "2N, 2, WARANGAL CITY CENTER, MULGU ROAD, INDUSTRIAL ETATE,Hanumakonda",
    Addr2: "WARANGAL",
    Loc: "WARANGAL",
    Pin: 503002,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  5: {
    Gstin: "36AFHFS4680J1ZH",
    LglNm: "SAVERA AUTOCRAFT LLP",
    Addr1: "PLOT NO 22/5-3,NH 7",
    Addr2: "KAMAREDDY",
    Loc: "KAMAREDDY",
    Pin: 503111,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  6: {
    Gstin: "36AAACS7018R1ZU",
    LglNm: "SHRIRAM FINANCE LIMITED",
    Addr1: "3-6-478,4TH FLOOR,ANAND ESTATES,LIBERTY ROAD,HIMAYATH NAGAR",
    Addr2: " 3-6-478,4TH FLOOR,ANAND ESTATES,LIBERTY ROAD,HIMAYATH NAGAR",
    Loc: "HYDERABAD",
    Pin: 500029,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  7: {
    Gstin: "36AADCT0724A1ZY",
    LglNm: "TVS CREDIT SERVICES LIMITED",
    Addr1: "KARIMNAGAR",
    Addr2: "KARIMNAGAR",
    Loc: "KARIMNAGAR",
    Pin: 505001,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  8: {
    Gstin: "33AAJFH7551C1ZL",
    LglNm: "HARITA INSURANCE BROKING LLP",
    Addr1: "NO 29,JAYALAKSHMI ESTATES,SECOND FLOOR,HADDOWS ROAD,NANGAMBAKKAM,CHENNAI",
    Addr2: "CHENNAI",
    Loc: "CHENNAI",
    Pin: 600006,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null
  },
  9: {
    Gstin: "36BPSPK8565G1Z6",
    LglNm: "SRI SAI MOTORS",
    Addr1: "3-39/4/E2,BANSWADA ROAD,PITLAM",
    Addr2: "PITLAM",
    Loc: "PITLAM",
    Pin: 503310,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  10: {
    Gstin: "36AAKCA3283E1ZQ",
    LglNm: "ADARSHA MOTOR SALES PRIVATE LIMITED",
    Addr1: "8-6-301/18,BYPASS ROAD,KARIMNAGAR",
    Addr2: "KARIMNAGAR",
    Loc: "KARIMNAGAR",
    Pin: 505001,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  11: {
    Gstin: "36BCUPG1861Q1ZT",
    LglNm: "AKSHAYA MOTORS",
    Addr1: "14-84/1/A,OPPOSITE HANUMAN MANDIR,BALKONDA",
    Addr2: "BALKONDA",
    Loc: "BALKONDA",
    Pin: 503217,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  12: {
    Gstin: "36AAACI1314G1Z4",
    LglNm: "INDUSIND BANK LTD",
    Addr1: "CONSUMER FINANCE DIVISION CONSUMER FINANCE DIVISION",
    Addr2: "SECUNDERABAD",
    Loc: "SECUNDERABAD",
    Pin: 500003,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  13: {
    Gstin: "27AAECI3370G1ZN",
    LglNm: "INDICOSMIC CAPITAL PVT.LTD",
    Addr1: "OFFICE NO 101,BABA HOUSE NEXT TO WEH METRO STATION ANDHERI EAST,MUMBAI",
    Addr2: "MUMBAI",
    Loc: "MUMBAI",
    Pin: 400093,
    Pos: "27",
    Stcd: "27",
    Ph: null,
    Em: null
  },
  14: {
    Gstin: "36ADWFS8368L1ZT",
    LglNm: "SRI SIDDARAMESHWARA AUTO MOTIVES",
    Addr1: "8-135/1,OPP GOVT HIGH SCHOOL,BHIKNOOR MAIN ROAD 8-135/1,OPP GOVT HIGH",
    Addr2: "SCHOOL,BHIKNOOR MAIN ROAD",
    Loc: "BHIKNOOR",
    Pin: 503101,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  15: {
    Gstin: "36ABVPU7412L1ZS",
    LglNm: "SRI VINAYAKA MOTORS",
    Addr1: "JANNEPALLY ROAD   8-194/1/B,MAIN ROAD,NAVIPET",
    Addr2: "NAVIPET",
    Loc: "NAVIPET",
    Pin: 503245,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  16: {
    Gstin: "36AAMCS8857L2ZC",
    LglNm: "SBI General Insurance company limited",
    Addr1: "Ozone Commercial Complex,3rd,Panjagutta Main Road,Hyderabad",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500082,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  17: {
    Gstin: "36AABCT3518Q1ZX",
    LglNm: "TATA AIG GENERAL INSURANCE CO LTD",
    Addr1: "Imperial Towers,H.No 7-1-6-617/A,5th and 6th Floor,GHMC no - 615,616, Ameerpet,Hyderabad,500016",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500016,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  18: {
    Gstin: "36AAYCA8340E1ZC",
    LglNm: "ANTARIKSH MOTORS PRIVATE LIMITED",
    Addr1: "8-1-351/a/11, RAHUL COLONY,Tolichowki Road,Hyderabad,500008",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500008,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  19: {
    Gstin: "36AAACS7032B1ZT",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "FIRST FLOOR,2-11-30,PLOT NO-11,RUKMINI TOWER,PAIGHA COLONY,SECUNDRABAD",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500003,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  20: {
    Gstin: "36AAFCL0077Q1Z1",
    LglNm: "LAXMI AUTO AGENCIES PRIVATE LIMITED",
    Addr1: "1-13-173,VINAYAK NAGAR,NIZAMABAD",
    Addr2: "NIZAMABAD",
    Loc: "NIZAMABAD",
    Pin: 503001,
    Pos: "36",
    Stcd: "36",
    Ph: 9440090930,
    Em: null,
  },
  21: {
    Gstin: "36AAACU5552C1ZK",
    LglNm: "UNITED INDIA INSURANCE COMPANY LIMITED",
    Addr1: "UNITED INDIA TOWERS 3 - 5 - 817 818,Floor No 2, OLD MLA QRTRS ROAD,BASHEERBAGH",
    Addr2: "BASHEERBAGH",
    Loc: "BASHEERBAGH",
    Pin: 500029,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
  "36AADCI6523Q1Z3": {
    Gstin: "36AADCI6523Q1Z3",
    LglNm: "IDFC FIRST BANK LIMITED",
    Addr1: "Punnaiah Plaza,Plot No 83 and 84,Road No 2,Hyderabad",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500034,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
  "36AAACI7573H1ZD": {
    Gstin: "36AAACI7573H1ZD",
    LglNm: "IFFCO-TOKIO GENERAL INSURANCE COMPANY LTD",
    Addr1: "1st Floor,Municipal No. 6-3-1107 and 6-3-1108, Raj Bhavan Road,SOMAJIGUDA",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500082,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
  
  "36AAACK5934A1ZW": {
    Gstin: "36AAACK5934A1ZW",
    LglNm: "KOTAK MAHINDRA PRIME LIMITED",
    Addr1: "BRR COMPLEX   6-3-1107,1108-301 3RD FLOOR,RAJ BHAVAN ROAD SOMAJIGUDA,HYDERABAD",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500082,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
  "36ACMFS9275M2Z2": {
    Gstin: "36ACMFS9275M2Z2",
    LglNm: "SRI LAXMINARASIMHA MOTORS",
    Addr1: "19/41,,OPPOSITE SBH,RAMAYAMPET",
    Addr2: "RAMAYAMPET",
    Loc: "MEDAK",
    Pin: 502110,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
  "36AAACR5055K1Z8": { Gstin: "36AAACR5055K1Z8", LglNm: "RELIANCE INDUSTRIES LIMITED", Addr1: "Lake Shore Towers, Rajbhavan Road, Somajiguda", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500082, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AABCR1718E1ZQ": { Gstin: "36AABCR1718E1ZQ", LglNm: "RELIANCE RETAIL LIMITED", Addr1: "Lake Shore Towers, Rajbhavan Road, Somajiguda", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500082, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACB2894G1ZO": { Gstin: "36AAACB2894G1ZO", LglNm: "BHARTI AIRTEL LIMITED", Addr1: "Splendid Towers, Huda Road, Begumpet", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500016, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACH7467D1ZL": { Gstin: "36AAACH7467D1ZL", LglNm: "HONDA MOTORCYCLE AND SCOOTER INDIA PRIVATE LIMITED", Addr1: "MB Towers, Road No.10, Banjara Hills", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500034, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACD7999Q1ZL": { Gstin: "36AAACD7999Q1ZL", LglNm: "DR REDDY'S LABORATORIES LTD", Addr1: "Banjara Hills, Road No.3 (principal place)", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500034, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACA5443N3ZH": { Gstin: "36AAACA5443N3ZH", LglNm: "APOLLO HOSPITALS ENTERPRISE LIMITED", Addr1: "Apollo Health City Campus, Jubilee Hills", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500096, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACT2727Q1ZX": { Gstin: "36AAACT2727Q1ZX", LglNm: "TATA MOTORS LIMITED", Addr1: "Gumidelli Towers / Begumpet office (public record)", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500016, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACB2902M1ZU": { Gstin: "36AAACB2902M1ZU", LglNm: "BHARAT PETROLEUM CORPORATION LTD", Addr1: "Banjara Hills state office (public record)", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500034, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACS8577K1ZQ": { Gstin: "36AAACS8577K1ZQ", LglNm: "STATE BANK OF INDIA", Addr1: "Bank Street, Sultan Bazar, Koti", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500095, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACI1195H1ZN": { Gstin: "36AAACI1195H1ZN", LglNm: "ICICI BANK LIMITED", Addr1: "Jayalakshmi Towers / Begumpet (public record)", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500016, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACK5934A1ZW": { Gstin: "36AAACK5934A1ZW", LglNm: "KOTAK MAHINDRA PRIME LIMITED", Addr1: "BRR Complex / Raj Bhavan Road, Somajiguda", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500082, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACA5443N3ZH": { Gstin: "36AAACA5443N3ZH", LglNm: "APOLLO HOSPITALS ENTERPRISE LTD", Addr1: "Apollo Health City Campus, Jubilee Hills", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500096, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "29AAACI4798L1ZU": { Gstin: "29AAACI4798L1ZU", LglNm: "INFOSYS LIMITED", Addr1: "Electronic City, 3rd Cross, Bangalore", Addr2: "Bengaluru", Loc: "Bengaluru", Pin: 560100, Pos: "29", Stcd: "29", Ph: null, Em: null },
  "24AAACM0829Q2Z9": { Gstin: "24AAACM0829Q2Z9", LglNm: "MARUTI SUZUKI INDIA LIMITED", Addr1: "Village Hansalpur, Near Becharaji (Ahmedabad)", Addr2: "Ahmedabad", Loc: "Ahmedabad", Pin: 382130, Pos: "24", Stcd: "24", Ph: null, Em: null },
  "27AAADCS3124K1ZD": { Gstin: "27AAADCS3124K1ZD", LglNm: "SUN PHARMACEUTICAL INDUSTRIES LTD", Addr1: "Sun House, Western Express Hwy, Goregaon East", Addr2: "Mumbai", Loc: "Mumbai", Pin: 400063, Pos: "27", Stcd: "27", Ph: null, Em: null },
  "27AAACI3370G1ZN": { Gstin: "27AAECI3370G1ZN", LglNm: "INDICOSMIC CAPITAL PVT. LTD", Addr1: "Andheri East office listing", Addr2: "Mumbai", Loc: "Mumbai", Pin: 400093, Pos: "27", Stcd: "27", Ph: null, Em: null },
  "36AAACK5934A1ZW": { Gstin: "36AAACK5934A1ZW", LglNm: "KOTAK MAHINDRA PRIME LIMITED", Addr1: "BRR Complex, Raj Bhavan Road, Somajiguda", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500082, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACS8577K1ZQ": { Gstin: "36AAACS8577K1ZQ", LglNm: "STATE BANK OF INDIA", Addr1: "Sultan Bazar / Koti district office listing (public)", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500095, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AADCI6523Q1Z3": { Gstin: "36AADCI6523Q1Z3", LglNm: "IDFC FIRST BANK LIMITED", Addr1: "Punnaiah Plaza, Road No 2, Hyderabad", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500034, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AABCB8091L1ZB": {
    Gstin: "36AABCB8091L1ZB",
    LglNm: "EMDE INSURANCE BROKERS LTD",
    Addr1: "3RD FLOOR, 6-3-1090/A/T-2 AND 6-3-1090/A/S1, Bhupal Towers, 6-3-1090/A, Raj Bhavan Road",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500082,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36AAACE3882D1ZT": {
    Gstin: "36AAACE3882D1ZT",
    LglNm: "EICHER MOTORS LIMITED",
    Addr1: "Ground floor, 8-3-166/B to F, Erragadda Main Road, Besides Gokul Theatre, Erragadda",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500018,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36AAAGC0017Q1ZJ": {
    Gstin: "36AAAGC0017Q1ZJ",
    LglNm: "CANTEEN STORE DEPARTMENT",
    Addr1: "R A LINES, TRIMULGIRY, TRIMULGIRY, SECUNDERABAD",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500015,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "33AAACE3882D1ZZ": {
    Gstin: "33AAACE3882D1ZZ",
    LglNm: "ROYAL ENFIELD (A UNIT OF EICHER MOTORS LIMITED)",
    Addr1: "Plot No 90/3, Block - D, Auto Nagar, Gajuwaka",
    Addr2: "Visakhapatnam",
    Loc: "Visakhapatnam",
    Pin: 530026,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null
  },
  "36AAGFE3946D1ZK": {
    Gstin: "36AAGFE3946D1ZK",
    LglNm: "ELECTRONIC WORLD",
    Addr1: "Ground floor, 1-5-68/2, electronic world, ekalavya nagar, metpally",
    Addr2: "Nizamabad, Telangana",
    Loc: "Nizamabad",
    Pin: 505325,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36DLGPD1299N1ZN": {
    Gstin: "36DLGPD1299N1ZN",
    LglNm: "HM MARKETING",
    Addr1: "0, 5-6-550, SR Mallaiah Complex, Hyderabad Road, Pragathi Nagar",
    Addr2: "Nizamabad, Telangana",
    Loc: "Nizamabad",
    Pin: 503003,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36DOOPB6121J1ZW": {
    Gstin: "36DOOPB6121J1ZW",
    LglNm: "M/S MANA MOBILE STORE",
    Addr1: "H NO 2-3-97/1, MARKET ROAD, METPALLY",
    Addr2: "Jagtial, Telangana",
    Loc: "Jagtial",
    Pin: 505325,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36AZUPP5624Q1Z9": {
    Gstin: "36AZUPP5624Q1Z9",
    LglNm: "MANASA CELL POINT",
    Addr1: "5-1-106, MAIN ROAD KORUTLA, KORUTLA TOWN AND MANDAL",
    Addr2: "Jagtial, Telangana",
    Loc: "Jagtial",
    Pin: 505326,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36BRSPA0493H1ZN": {
    Gstin: "36BRSPA0493H1ZN",
    LglNm: "MITHRA COMMUNICATIONS",
    Addr1: "3-10-104 A, BAHARPET, BHONGIR",
    Addr2: "Yadadri Bhuvanagiri, Telangana",
    Loc: "Yadadri Bhuvanagiri",
    Pin: 508116,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36CFIPB9255B1ZM": {
    Gstin: "36CFIPB9255B1ZM",
    LglNm: "NAKAHATRA ELECTRONICS",
    Addr1: "4-2-320, New Bus stand main Road, Bodhan",
    Addr2: "Nizamabad, Telangana",
    Loc: "Nizamabad",
    Pin: 503180,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36JLTPS8594E1ZW": {
    Gstin: "36JLTPS8594E1ZW",
    LglNm: "M/S PRATHIBHA MOBILES SALES AND SERVICES",
    Addr1: "1-7-118, OLDBUSSTAND, METPALLY",
    Addr2: "Jagtial, Telangana",
    Loc: "Jagtial",
    Pin: 505325,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36CLDPR3100E1ZK": {
    Gstin: "36CLDPR3100E1ZK",
    LglNm: "RAMPALLY MEE MOBILE STORE",
    Addr1: "OPP BAJAJ SHOW ROOM, 1-3-160, OLD BUS STAND, METPALLY, METPALLY",
    Addr2: "Jagtial, Telangana",
    Loc: "Jagtial",
    Pin: 505325,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36APGPB4118P1ZS": {
    Gstin: "36APGPB4118P1ZS",
    LglNm: "M/S SRI SAI BALAJI CELL POINT",
    Addr1: "1-9-52, MAIN ROAD, METPALLY",
    Addr2: "Jagtial, Telangana",
    Loc: "Jagtial",
    Pin: 505325,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36AEFPL6415D1ZR": {
    Gstin: "36AEFPL6415D1ZR",
    LglNm: "VENKATA SAI MOBILES",
    Addr1: "1-1-11/C, Main Road, Banswada",
    Addr2: "Kamareddy, Telangana",
    Loc: "Kamareddy",
    Pin: 503187,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36AAACS5547H1Z9": {
    Gstin: "36AAACS5547H1Z9",
    LglNm: "SAVEX TECHNOLOGIES PRIVATE LIMITED",
    Addr1: "203 and 204-Savex Technologies Private Limited,5-4-94 to 97",
    Addr2: "Second Floor, MG Road,Secunderabad, Telangana",
    Loc: "Secunderabad",
    Pin: 500003,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36AAACS5123K1ZE": {
    Gstin: "36AAACS5123K1ZE",
    LglNm: "SAMSUNG INDIA ELECTRONICS PRIVATE LIMITED",
    Addr1: "Gumidelli Commercial Complex   1-10-39 to 44, 3rd Floor, Old Airport Road",
    Addr2: "Hyderabad, Telangana",
    Loc: "Hyderabad",
    Pin: 500016,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  }
};

function sortBuyerMapByName(buyerMap) {
  const selectEntry = Object.values(buyerMap).find(b => b.Gstin === "Select");
  const sortedOthers = Object.values(buyerMap)
    .filter(b => b.Gstin !== "Select")
    .sort((a, b) => a.LglNm.localeCompare(b.LglNm));
  
  // Keep "Select" entry first
  return [selectEntry, ...sortedOthers];
}
const buyerMap = sortBuyerMapByName(actualBuyerMap);
const allowed = [
  "36AFHFS4680J1ZH",
  "36AAFCL0077Q1Z1",
  '36AAWFD9162A1Z7',
  '36EEZPS3505H1ZV'
]
const unsortedItems = {
  'WARRANTY (outstate)': {
    desc: "WARRANTY",
    hsn: "87141090",
    gst: 18,
    isIGST: true,
    IsServc: "N"
  },
  'WARRANTY (local)': {
    desc: "WARRANTY",
    hsn: "87141090",
    gst: 18,
    isIGST: false,
    IsServc: "N"
  },
  "PETROL VEHICLE (local)": {
    desc: "TVS RAIDER 125",
    hsn: "87112029",
    gst: 18,
    isIGST: false,
    IsServc: "N"
  },
  "EV VEHICLE (local)": {
    desc: "TVS IQUBE",
    hsn: "87112029",
    gst: 5,
    isIGST: false,
    IsServc: "N"
  },
  "PETROL VEHICLE (outstate)": {
    desc: "TVS RAIDER 125",
    hsn: "87112029",
    gst: 18,
    isIGST: true,
    IsServc: "N"
  },
  "EV VEHICLE (outstate)": {
    desc: "TVS IQUBE",
    hsn: "87112029",
    gst: 5,
    isIGST: true,
    IsServc: "N"
  },
  "PARTS SALES (local)": {
    desc: "PARTS SALES",
    hsn: "87141090",
    gst: 18,
    isIGST: false,
    IsServc: "N"
  },
  "PARTS SALES (outstate)": {
    desc: "PARTS SALES",
    hsn: "87141090",
    gst: 18,
    isIGST: true,
    IsServc: "N"
  },
  "COMMISION (local)": {
    desc: "COMMISION",
    hsn: "996211",
    gst: 18,
    isIGST: false,
    IsServc: "Y"
  },
  "COMMISION (outstate)": {
    desc: "COMMISION",
    hsn: "996211",
    gst: 18,
    isIGST: true,
    IsServc: "Y"
  },
  "FSC CLAIM FROM TVSM (outstate)": {
    desc: "FSC CLAIM FROM TVSM",
    hsn: "997161",
    gst: 18,
    isIGST: true,
    IsServc: "Y"
  },
  "FSC CLAIM FROM TVSM (local)": {
    desc: "FSC CLAIM FROM TVSM",
    hsn: "997161",
    gst: 18,
    isIGST: false,
    IsServc: "Y"
  },
  "INCENTIVE FROM TVSM COMPANY (local)": {
    desc: "INCENTIVE FROM TVSM COMPANY",
    hsn: "9983",
    gst: 18,
    isIGST: false,
    IsServc: "Y"
  },
  "INCENTIVE FROM TVSM COMPANY (outstate)": {
    desc: "INCENTIVE FROM TVSM COMPANY",
    hsn: "9983",
    gst: 18,
    isIGST: true,
    IsServc: "Y"
  },
  'LABOUR (local)': {
    desc: "LABOUR",
    hsn: "9954",
    gst: 18,
    isIGST: false,
    IsServc: "Y"
  },
  'LABOUR (outstate)': {
    desc: "Labour Charges for Waranty",
    hsn: "9987",
    gst: 18,
    isIGST: true,
    IsServc: "Y"
  },
  'New Item (service-outstate)': {
    desc: "New item",
    hsn: "87141090",
    gst: 18,
    isIGST: true,
    IsServc: "Y"
  },
  'New Item (non-service-outstate)': {
    desc: "New item",
    hsn: "87141090",
    gst: 18,
    isIGST: true,
    IsServc: "N"
  },
  'New Item (service-local)': {
    desc: "New item",
    hsn: "87141090",
    gst: 18,
    isIGST: false,
    IsServc: "Y"
  },
  'New Item (non-service-local)': {
    desc: "New item",
    hsn: "87141090",
    gst: 18,
    isIGST: false,
    IsServc: "N"
  }
  
};

function sortObjectByKeys(obj) {
  return Object.keys(obj)
    .sort((a, b) => a.localeCompare(b)) // sort keys alphabetically
    .reduce((sorted, key) => {
      sorted[key] = obj[key];
      return sorted;
    }, {});
}

const predefinedItems = sortObjectByKeys(unsortedItems);
const isServer = {
  tillDate: "2025-09-04",
  get down() {
    const currentDate = new Date();
    const till = new Date(this.tillDate);
    return currentDate < till;
  }
};
let createdInvoices = [];

function addItem(isOnLoad = false) {
  if (document.getElementById("buyerGstin").value === 'Select' && !isOnLoad) {
    return alert('Please Select the buyer to add Items!');
  }
  itemCount++;
  const container = document.getElementById("itemsContainer");
  const itemDiv = document.createElement("div");
  itemDiv.className = "item-block";
  const options = Object.keys(predefinedItems)
    .map((key) => `<option value="${key}">${key}</option>`)
    .join("");
  const selectHTML = `
    <label>Choose Item:
      <select class="itemSelect" onchange="onItemSelect(this)">
        <option value="">-- Select Item --</option>
        ${options}
      </select>
    </label><br>
  `;
  itemDiv.innerHTML = `
    <h4>Item ${itemCount}</h4>
    <button type="button" class="delete-btn" onclick="this.parentElement.remove();">Delete</button>
    ${selectHTML}
    Description: <input type="text" class="itemDesc" value="">
    HSN Code: <input type="text" class="hsnCode" value="">
    Quantity: <input type="number" class="qty" value="1" oninput="updateGST(this)">
   <input type="text" class="IsServc hidden" value="" disabled>
  <input type="text" class="unit hidden" value="NOS" disabled>
    Unit Price: <input type="number" step="0.01" class="unitPrice" value="0" oninput="updateGST(this)">
    GST Rate (%): <input type="number" step="0.01" class="gstRate" value="18" oninput="updateGST(this)">
    
    <div class="igstDiv">IGST Amount: <input type="number" step="0.01" class="igstAmt" disabled></div>
    <div class="cgstSgstDiv" style="display:none;">
      CGST Amount: <input type="number" step="0.01" class="cgstAmt" disabled>
      SGST Amount: <input type="number" step="0.01" class="sgstAmt" disabled>
    </div>

    Total Item Value: <input type="number" step="0.01" class="totItemVal" readonly>
  `;
  container.appendChild(itemDiv);
  const sellerStCode = document.getElementById("sellerStcd").value;
  const buyerStCode = document.getElementById("buyerStcd").value || 36;
  
  updateItemListsByState(sellerStCode, buyerStCode);
  
}

function onItemSelect(selectEl) {
  const block = selectEl.closest(".item-block");
  const selected = selectEl.value;
  const descField = block.querySelector(".itemDesc");
  const hsnField = block.querySelector(".hsnCode");
  const gstField = block.querySelector(".gstRate");
  const igstDiv = block.querySelector(".igstDiv");
  const cgstSgstDiv = block.querySelector(".cgstSgstDiv");
  const IsServc = block.querySelector(".IsServc");
  if (selected === "custom") {
    // descField.value = "";
    // hsnField.value = "";
    // gstField.value = "18";
    // igstDiv.style.display = "block";
    // cgstSgstDiv.style.display = "none";
  } else {
    const item = predefinedItems[selected];
    descField.value = item.desc;
    hsnField.value = item.hsn;
    gstField.value = item.gst;
    if (item.isIGST) {
      igstDiv.style.display = "block";
      cgstSgstDiv.style.display = "none";
    } else {
      igstDiv.style.display = "none";
      cgstSgstDiv.style.display = "block";
    }
  }
  const item = predefinedItems[selected];
  IsServc.value = item.IsServc;
  updateGST(selectEl);
}

function updateGST(el) {
  const block = el.closest(".item-block");
  const qty = parseFloat(block.querySelector(".qty").value) || 0;
  const unitPrice = parseFloat(block.querySelector(".unitPrice").value) || 0;
  const gstRate = parseFloat(block.querySelector(".gstRate").value) || 0;
  const total = qty * unitPrice;
  const igstField = block.querySelector(".igstAmt");
  const cgstField = block.querySelector(".cgstAmt");
  const sgstField = block.querySelector(".sgstAmt");
  const igstDiv = block.querySelector(".igstDiv");
  const cgstSgstDiv = block.querySelector(".cgstSgstDiv");
  
  let totalVal = total;
  if (igstDiv.style.display !== "none") {
    const igst = (total * gstRate) / 100;
    igstField.value = igst.toFixed(2);
    if (cgstField) cgstField.value = "0.00";
    if (sgstField) sgstField.value = "0.00";
    totalVal += igst;
  } else {
    const halfGST = gstRate / 2;
    const cgst = (total * halfGST) / 100;
    const sgst = (total * halfGST) / 100;
    cgstField.value = cgst.toFixed(2);
    sgstField.value = sgst.toFixed(2);
    igstField.value = "0.00";
    totalVal += cgst + sgst;
  }
  block.querySelector(".totItemVal").value = totalVal.toFixed(2);
  // 🔽 Add this part to update overall totals
  let totalIgst = 0,
    totalCgst = 0,
    totalSgst = 0,
    totalAmount = 0;
  totalTaxAmount = 0;
  totalTaxable = 0;
  document.querySelectorAll(".item-block").forEach((item) => {
    totalTaxable += parseFloat(item.querySelector(".unitPrice")?.value) || 0;
    totalIgst += parseFloat(item.querySelector(".igstAmt")?.value) || 0;
    totalCgst += parseFloat(item.querySelector(".cgstAmt")?.value) || 0;
    totalSgst += parseFloat(item.querySelector(".sgstAmt")?.value) || 0;
    totalAmount += parseFloat(item.querySelector(".totItemVal")?.value) || 0;
  });
  document.querySelector("#total-taxable").value = totalTaxable.toFixed(2);
  document.querySelector("#total-igst").value = totalIgst.toFixed(2);
  document.querySelector("#total-cgst").value = totalCgst.toFixed(2);
  document.querySelector("#total-sgst").value = totalSgst.toFixed(2);
  document.querySelector("#total-amount").value = totalAmount.toFixed(2);
  totalTaxAmount = totalCgst + totalSgst + totalIgst;
  document.querySelector("#total-tax-amount").value = totalTaxAmount.toFixed(2);
}

function populateBuyerDetails() {
  const selectedKey = document.getElementById("buyerSelector").value;
  
  const buyer = buyerMap[selectedKey];
  if (buyer.Gstin !== 'Select') {
    document.getElementsByClassName("mask")[0].classList.add("hidden");
  } else {
    document.getElementsByClassName("mask")[0].classList.remove("hidden");
  }
  document.getElementById("buyerGstin").value = buyer.Gstin;
  document.getElementById("buyerName").value = buyer.LglNm;
  document.getElementById("buyerAddr1").value = buyer.Addr1;
  document.getElementById("buyerAddr2").value = buyer.Addr2;
  document.getElementById("buyerLoc").value = buyer.Loc;
  document.getElementById("buyerPin").value = buyer.Pin;
  document.getElementById("buyerPos").value = buyer.Pos;
  document.getElementById("buyerStcd").value = buyer.Stcd;
  const sellerStCode = document.getElementById("sellerStcd").value;
  const buyerStCode = buyer.Stcd;
  
  updateItemListsByState(sellerStCode, buyerStCode);
}

function updateItemListsByState(sellerStCode, buyerStCode) {
  if (!sellerStCode || !buyerStCode) return;
  
  const isOutstate = sellerStCode !== buyerStCode;
  
  // Filter items based on state condition
  const filteredItems = Object.entries(predefinedItems)
    .filter(([key, item]) => item.isIGST === isOutstate)
    .map(([key]) => key);
  
  // Generate options HTML
  const optionsHTML = `
    <option value="">-- Select Item --</option>
    ${filteredItems.map((key) => `<option value="${key}">${key}</option>`).join("")}
  `;
  
  // Update all item selects
  document.querySelectorAll(".itemSelect").forEach((select) => {
    const prevValue = select.value; // keep the currently selected one
    select.innerHTML = optionsHTML;
    
    // if the previous value still exists in new list, keep it selected
    if (filteredItems.includes(prevValue)) {
      select.value = prevValue;
    } else {
      select.value = "";
    }
  });
}

function buildBuyerDropdown() {
  const buyerSelector = document.getElementById("buyerSelector");
  buyerSelector.innerHTML = "";
  // Clear existing options
  for (const key in buyerMap) {
    const buyer = buyerMap[key];
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${buyer.LglNm} - ${buyer.Gstin}`;
    buyerSelector.appendChild(option);
  }
  const bulkBuyer = document.getElementById("bulkBuyerSelect");
  bulkBuyer.innerHTML = "";
  for (const key in buyerMap) {
    const buyer = buyerMap[key];
    const option2 = document.createElement("option");
    option2.value = key;
    option2.textContent = `${buyer.LglNm} - ${buyer.Gstin}`;
    bulkBuyer.appendChild(option2);
  }
  
  
}

function checkInvDateRange(dateStr) {
  // Expecting dateStr in dd/mm/yyyy format
  const [year, day, month] = dateStr.split("/").map(Number);
  const inputDate = new Date(year, month - 1, day);
  
  // Today's date (set time to midnight for clean comparison)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Date 30 days ago
  const past30 = new Date(today);
  past30.setDate(today.getDate() - 30);
  
  // Check if inputDate is between past30 and today
  return inputDate >= past30 && inputDate <= today;
}

function formatDate(input) {
  // Split by "-" (day-month-year)
  const parts = input.split("-");
  if (parts.length !== 3) return input; // fallback if invalid
  
  let [day, month, year] = parts;
  
  // Ensure month has 2 digits
  month = month.padStart(2, "0");
  
  // Return in desired format
  return `${day}/${month}/${year}`;
}

function getDocDate() {
  const docDateInput = document.getElementById("docDate");
  const dateValue = docDateInput.value; // "YYYY-MM-DD"
  if (dateValue) {
    const [year, month, day] = dateValue.split("-");
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
}

function generateJSON() {
  const session = localStorage.getItem("loginSession");
  if (!session) return window.location.reload();
  const isGstin = document.getElementById("sellerGstin").value;
  if (!allowed.includes(isGstin)) return window.location.reload();
  const buyerGstin = document.getElementById("buyerGstin").value;
  if (buyerGstin === isGstin) {
    return alert("Cannot create invoice for same buyer and seller!")
  }
  if (isServer.down) return alert("E-invoice Json server is down, please try again later!");
  if (document.getElementById("buyerGstin").value === "Select") {
    alert("please select the buyer")
    return;
  }
  if (isGstin === "") {
    alert("please login first")
    window.location.reload();
    return;
  }
  let assVal = 0;
  let cgstVal = 0;
  let sgstVal = 0;
  let igstVal = 0;
  let totInvVal = 0;
  let docNumber = document
    .getElementById("docNo")
    .value.replace(/\s+/g, "")
    .trim();
  let docDate = getDocDate();
  if (createdInvoices.includes(docNumber)) {
    return alert("Cannot create E-Invoice for same invoice Number: " + docNumber);
  }
  
  createdInvoices.push(docNumber);
  const invoice = {
    Version: "1.1",
    TranDtls: {
      TaxSch: "GST",
      SupTyp: "B2B",
      IgstOnIntra: "N",
      RegRev: "N",
      EcmGstin: null
    },
    DocDtls: {
      Typ: "INV",
      No: docNumber,
      Dt: docDate
    },
    SellerDtls: {
      Gstin: document.getElementById("sellerGstin").value,
      LglNm: document.getElementById("sellerName").value,
      Addr1: document.getElementById("sellerAddr1").value,
      Addr2: null,
      Loc: document.getElementById("sellerLoc").value,
      Pin: parseInt(document.getElementById("sellerPin").value),
      Stcd: document.getElementById("sellerStcd").value,
      Ph: document.getElementById("sellerPh").value,
      Em: null
    },
    BuyerDtls: {
      Gstin: document.getElementById("buyerGstin").value,
      LglNm: document.getElementById("buyerName").value,
      Addr1: document.getElementById("buyerAddr1").value,
      Addr2: document.getElementById("buyerAddr2").value,
      Loc: document.getElementById("buyerLoc").value,
      Pin: parseInt(document.getElementById("buyerPin").value),
      Pos: document.getElementById("buyerPos").value,
      Stcd: document.getElementById("buyerStcd").value,
      Ph: null,
      Em: null
    },
    ValDtls: {},
    RefDtls: {
      InvRm: "NICGEPP2.0"
    },
    ItemList: []
  };
  const itemBlocks = document.querySelectorAll(".item-block");
  itemBlocks.forEach((block, index) => {
    const desc = block.querySelector(".itemDesc").value;
    const hsn = block.querySelector(".hsnCode").value;
    const qty = parseFloat(block.querySelector(".qty").value) || 0;
    const unit = block.querySelector(".unit").value;
    const unitPrice = parseFloat(block.querySelector(".unitPrice").value) || 0;
    const gstRate = parseFloat(block.querySelector(".gstRate").value) || 0;
    const igstAmt = parseFloat(block.querySelector(".igstAmt").value) || 0;
    const cgstAmt = parseFloat(block.querySelector(".cgstAmt").value) || 0;
    const sgstAmt = parseFloat(block.querySelector(".sgstAmt").value) || 0;
    const totItemVal =
      parseFloat(block.querySelector(".totItemVal").value) || 0;
    const itemAssVal = unitPrice * qty;
    const IsServc = block.querySelector(".IsServc").value;
    assVal += itemAssVal;
    igstVal += igstAmt;
    cgstVal += cgstAmt;
    sgstVal += sgstAmt;
    totInvVal += totItemVal;
    invoice.ItemList.push({
      SlNo: String(index + 1),
      PrdDesc: desc,
      IsServc: IsServc,
      HsnCd: hsn,
      Qty: qty,
      FreeQty: 0,
      Unit: unit,
      UnitPrice: unitPrice,
      TotAmt: itemAssVal,
      Discount: 0,
      PreTaxVal: 0,
      AssAmt: itemAssVal,
      GstRt: gstRate,
      IgstAmt: igstAmt,
      CgstAmt: cgstAmt,
      SgstAmt: sgstAmt,
      CesRt: 0,
      CesAmt: 0,
      CesNonAdvlAmt: 0,
      StateCesRt: 0,
      StateCesAmt: 0,
      StateCesNonAdvlAmt: 0,
      OthChrg: 0,
      TotItemVal: totItemVal
    });
  });
  invoice.ValDtls = {
    AssVal: parseFloat(assVal.toFixed(2)),
    IgstVal: parseFloat(igstVal.toFixed(2)),
    CgstVal: parseFloat(cgstVal.toFixed(2)),
    SgstVal: parseFloat(sgstVal.toFixed(2)),
    CesVal: 0,
    StCesVal: 0,
    Discount: 0,
    OthChrg: 0,
    RndOffAmt: 0,
    TotInvVal: parseFloat(totInvVal.toFixed(2))
  };
  document.getElementById("output").textContent = JSON.stringify(
    [invoice],
    null,
    2
  );
  downloadJSON();
  
  function downloadJSON() {
    const jsonText = document.getElementById("output").textContent;
    if (!jsonText.trim()) {
      alert("Please generate JSON first.");
      return;
    }
    const blob = new Blob([jsonText], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const docNo =
      document.getElementById("docNo").value.replace(/\s+/g, "").trim() ||
      "invoice";
    link.download = `${docNo}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

function setDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const docDateInput = document.getElementById("docDate");
  // ✅ Set value in YYYY-MM-DD format (for <input type="date">)
  const formattedForInput = `${year}-${month}-${day}`;
  docDateInput.value = formattedForInput;
  // Calculate date 30 days ago
  const pastDate = new Date();
  pastDate.setDate(today.getDate() - 30);
  const pastDay = String(pastDate.getDate()).padStart(2, "0");
  const pastMonth = String(pastDate.getMonth() + 1).padStart(2, "0");
  const pastYear = pastDate.getFullYear();
  const pastStr = `${pastYear}-${pastMonth}-${pastDay}`;
  // Format today's date for input
  const todayStr = `${year}-${month}-${day}`;
  // Set limits and default
  docDateInput.max = todayStr;
  docDateInput.min = pastStr;
  
}

function applyDefaultSettings() {
  const defaultBuyer = getSetting("defaultBuyer", null);
  
  function getBuyerIndexByGSTIN(gstin) {
    let count = 0;
    for (const key in buyerMap) {
      if (buyerMap[key].Gstin === gstin) { // key itself is the GSTIN
        return String(count); // because your option values are string indexes
      }
      count++;
    }
    return null;
  }
  
  if (defaultBuyer) {
    const indexValue = getBuyerIndexByGSTIN(defaultBuyer);
    if (indexValue !== null) {
      document.getElementById("buyerSelector").value = indexValue;
      populateBuyerDetails()
    } else {
      console.warn("GSTIN not found in buyerMap:", defaultBuyer);
    }
  }
}

window.onload = () => {
  buildBuyerDropdown?.(); // Optional, if defined elsewhere
  populateBuyerDetails?.();
  applyDefaultSettings();
  addItem?.(true); // Optional, if defined elsewhere
  setDate();
  document.addEventListener("keydown", function(e) {
    if (e.ctrlKey) {
      switch (e.key.toLowerCase()) {
        case "e": // Ctrl + E
          e.preventDefault();
          addItem();
          break;
          
        case "s": // Ctrl + S
          e.preventDefault(); // prevent browser save
          generateJSON();
          break;
          
        case "x": // Ctrl + X
          e.preventDefault(); // prevent undo
          logout();
          break;
      }
    }
  });
  
  
  function logout() {
    const logoutBtn = document.getElementById("logoutBtn");
    if (!confirm("Are you sure want to log out?")) return;
    localStorage.removeItem("loginSession");
    location.reload(); // reload page
  }
};
/*
function generateBulkInvoices() {
  const fileInput = document.getElementById("csvFile").files[0];
  if (!fileInput) {
    alert("Please upload a CSV file first!");
    return;
  }
  
  const buyerId = document.getElementById("bulkBuyerSelect").value;
  const buyerDetails = buyerMap[buyerId];
  if (buyerDetails.Gstin === "Select") {
    alert("please select the buyer")
    return;
    if (!buyerDetails) {
      alert("Please select a buyer from Bulk Buyer dropdown!");
      return;
    }
    
  }
  
  const sellerStcd = document.getElementById("sellerStcd").value;
  const sellerGstin = document.getElementById("sellerGstin").value;
  
  Papa.parse(fileInput, {
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      const data = results.data;
      const zip = new JSZip();
      
      // Group rows by invNo
      const invoiceGroups = {};
      data.forEach(row => {
        const invNo = row["invNo"];
        if (!invoiceGroups[invNo]) invoiceGroups[invNo] = [];
        invoiceGroups[invNo].push(row);
      });
      
      // Process each invoice
      Object.keys(invoiceGroups).forEach((invNo, idx) => {
        const rows = invoiceGroups[invNo];
        
        let assVal = 0,
          cgst = 0,
          sgst = 0,
          igst = 0,
          total = 0;
        const itemList = [];
        
        rows.forEach((row, i) => {
          const taxable = parseFloat(row["taxable"]) || 0;
          const gstRate = parseFloat(row["percentage"]) || 0;
          
          let itemCgst = 0,
            itemSgst = 0,
            itemIgst = 0;
          let itemTotal = taxable;
          
          if (sellerStcd === buyerDetails.Stcd) {
            itemCgst = +(taxable * (gstRate / 200)).toFixed(2);
            itemSgst = +(taxable * (gstRate / 200)).toFixed(2);
            itemTotal += itemCgst + itemSgst;
          } else {
            itemIgst = +(taxable * (gstRate / 100)).toFixed(2);
            itemTotal += itemIgst;
          }
          
          // Push item to ItemList
          itemList.push({
            SlNo: (i + 1).toString(),
            PrdDesc: row["description"],
            HsnCd: row["hsn"] || "0000",
            Qty: 1,
            Unit: "NOS",
            UnitPrice: taxable,
            AssAmt: taxable,
            GstRt: gstRate,
            IgstAmt: itemIgst,
            CgstAmt: itemCgst,
            SgstAmt: itemSgst,
            TotItemVal: itemTotal,
            IsServc: row["isService"] || "N"
          });
          
          // Add to totals
          assVal += taxable;
          cgst += itemCgst;
          sgst += itemSgst;
          igst += itemIgst;
          total += itemTotal;
        });
        
        const invoice = {
          Version: "1.1",
          TranDtls: { TaxSch: "GST", SupTyp: "B2B", IgstOnIntra: "N", RegRev: "N", EcmGstin: null },
          DocDtls: { Typ: "INV", No: invNo, Dt: formatDate(rows[0]["invDate"]) },
          SellerDtls: {
            Gstin: sellerGstin,
            LglNm: document.getElementById("sellerName").value,
            Addr1: document.getElementById("sellerAddr1").value,
            Loc: document.getElementById("sellerLoc").value,
            Pin: parseInt(document.getElementById("sellerPin").value),
            Stcd: sellerStcd,
            Ph: document.getElementById("sellerPh").value
          },
          BuyerDtls: buyerDetails,
          ValDtls: {
            AssVal: assVal,
            IgstVal: igst,
            CgstVal: cgst,
            SgstVal: sgst,
            TotInvVal: total
          },
          ItemList: itemList
        };
        
        zip.file(`${invNo}.json`, JSON.stringify([invoice], null, 2));
      });
      
      zip.generateAsync({ type: "blob" }).then(content => {
        saveAs(content, "bulk_invoices.zip");
      });
    }
  });
}
*/

function generateBulkInvoices() {
  const fileInput = document.getElementById("csvFile").files[0];
  if (!fileInput) {
    alert("Please upload a CSV file first!");
    return;
  }
  
  const buyerId = document.getElementById("bulkBuyerSelect").value;
  const buyerDetails = buyerMap[buyerId];
  if (!buyerDetails || buyerDetails.Gstin === "Select") {
    alert("Please select a buyer from Bulk Buyer dropdown!");
    return;
  }
  
  const sellerGstin = document.getElementById("sellerGstin").value;
  const sellerName = document.getElementById("sellerName").value;
  const sellerAddr1 = document.getElementById("sellerAddr1").value;
  const sellerLoc = document.getElementById("sellerLoc").value;
  const sellerPin = parseInt(document.getElementById("sellerPin").value);
  const sellerStcd = document.getElementById("sellerStcd").value;
  const sellerPh = document.getElementById("sellerPh").value;
  
  Papa.parse(fileInput, {
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      const data = results.data;
      const zip = new JSZip();
      
      // Group rows by invNo
      const invoiceGroups = {};
      data.forEach(row => {
        const invNo = row["invNo"];
        if (!invoiceGroups[invNo]) invoiceGroups[invNo] = [];
        invoiceGroups[invNo].push(row);
      });
      
      Object.keys(invoiceGroups).forEach(invNo => {
        const rows = invoiceGroups[invNo];
        
        let assVal = 0,
          cgstVal = 0,
          sgstVal = 0,
          igstVal = 0,
          totInvVal = 0;
        const itemList = [];
        
        rows.forEach((row, i) => {
          const taxable = parseFloat(row["taxable"]) || 0;
          const gstRate = parseFloat(row["percentage"]) || 0;
          const qty = parseFloat(row["qty"]) || 1;
          const desc = row["description"];
          const hsn = row["hsn"] || "0000";
          const isService = row["isService"] || "N";
          
          let itemCgst = 0,
            itemSgst = 0,
            itemIgst = 0;
          let itemTotal = taxable * qty;
          
          if (sellerStcd === buyerDetails.Stcd) {
            itemCgst = +(taxable * (gstRate / 200)).toFixed(2);
            itemSgst = +(taxable * (gstRate / 200)).toFixed(2);
            itemTotal += itemCgst + itemSgst;
          } else {
            itemIgst = +(taxable * (gstRate / 100)).toFixed(2);
            itemTotal += itemIgst;
          }
          
          assVal += taxable;
          cgstVal += itemCgst;
          sgstVal += itemSgst;
          igstVal += itemIgst;
          totInvVal += itemTotal;
          
          itemList.push({
            SlNo: String(i + 1),
            PrdDesc: desc,
            IsServc: isService,
            HsnCd: hsn,
            Qty: qty,
            FreeQty: 0,
            Unit: "NOS",
            UnitPrice: taxable,
            TotAmt: taxable,
            Discount: 0,
            PreTaxVal: 0,
            AssAmt: taxable,
            GstRt: gstRate,
            IgstAmt: itemIgst,
            CgstAmt: itemCgst,
            SgstAmt: itemSgst,
            CesRt: 0,
            CesAmt: 0,
            CesNonAdvlAmt: 0,
            StateCesRt: 0,
            StateCesAmt: 0,
            StateCesNonAdvlAmt: 0,
            OthChrg: 0,
            TotItemVal: itemTotal
          });
        });
        
        const invoice = {
          Version: "1.1",
          TranDtls: {
            TaxSch: "GST",
            SupTyp: "B2B",
            IgstOnIntra: "N",
            RegRev: "N",
            EcmGstin: null
          },
          DocDtls: {
            Typ: "INV",
            No: invNo,
            Dt: formatDate(rows[0]["invDate"])
          },
          SellerDtls: {
            Gstin: sellerGstin,
            LglNm: sellerName,
            Addr1: sellerAddr1,
            Addr2: null,
            Loc: sellerLoc,
            Pin: sellerPin,
            Stcd: sellerStcd,
            Ph: sellerPh,
            Em: null
          },
          BuyerDtls: {
            Gstin: buyerDetails.Gstin,
            LglNm: buyerDetails.LglNm,
            Addr1: buyerDetails.Addr1,
            Addr2: buyerDetails.Addr2 || null,
            Loc: buyerDetails.Loc,
            Pin: parseInt(buyerDetails.Pin),
            Pos: buyerDetails.Pos,
            Stcd: buyerDetails.Stcd,
            Ph: null,
            Em: null
          },
          ValDtls: {
            AssVal: parseFloat(assVal.toFixed(2)),
            IgstVal: parseFloat(igstVal.toFixed(2)),
            CgstVal: parseFloat(cgstVal.toFixed(2)),
            SgstVal: parseFloat(sgstVal.toFixed(2)),
            CesVal: 0,
            StCesVal: 0,
            Discount: 0,
            OthChrg: 0,
            RndOffAmt: 0,
            TotInvVal: parseFloat(totInvVal.toFixed(2))
          },
          RefDtls: {
            InvRm: "NICGEPP2.0"
          },
          ItemList: itemList
        };
        
        zip.file(`${invNo}.json`, JSON.stringify([invoice], null, 2));
      });
      
      zip.generateAsync({ type: "blob" }).then(content => {
        saveAs(content, "bulk_invoices.zip");
      });
    }
  });
}
const csvFileInput = document.getElementById("csvFile");
const csvDrop = document.getElementById("csvDrop");
const fileInfo = document.getElementById("fileInfo");
const fileName = document.getElementById("fileName");
const removeFileBtn = document.getElementById("removeFile");

csvFileInput.addEventListener("change", function() {
  if (this.files.length > 0) {
    const file = this.files[0];
    fileName.textContent = file.name;
    csvDrop.style.display = "none"; // hide dropzone
    fileInfo.style.display = "flex"; // show file info row
  }
});

removeFileBtn.addEventListener("click", function() {
  csvFileInput.value = ""; // clear file
  fileInfo.style.display = "none"; // hide file row
  csvDrop.style.display = "block"; // show dropzone again
});

function generateDMSJSON() {
  const session = localStorage.getItem("loginSession");
  if (!session) return window.location.reload();
  const isGstin = document.getElementById("sellerGstin").value;
  if (!allowed.includes(isGstin)) return window.location.reload();
  const buyerGstin = document.getElementById("buyerGstin").value;
  if (buyerGstin === isGstin) {
    return alert("Cannot create invoice for same buyer and seller!")
  }
  if (isServer.down) return alert("E-invoice Json server is down, please try again later!");
  if (document.getElementById("buyerGstin").value === "Select") {
    alert("please select the buyer")
    return;
  }
  if (isGstin === "") {
    alert("please login first")
    window.location.reload();
    return;
  }
  let assVal = 0;
  let cgstVal = 0;
  let sgstVal = 0;
  let igstVal = 0;
  let totInvVal = 0;
  let docNumber = document
    .getElementById("docNo")
    .value.replace(/\s+/g, "")
    .trim();
  let docDate = getDocDate();
  if (createdInvoices.includes(docNumber)) {
    return alert("Cannot create E-Invoice for same invoice Number: " + docNumber);
  }
  
  createdInvoices.push(docNumber);
  const invoice = {
    Version: "1.1",
    TranDtls: {
      TaxSch: "GST",
      SupTyp: "B2B",
      IgstOnIntra: "N",
      RegRev: "N",
      EcmGstin: null
    },
    DocDtls: {
      Typ: "INV",
      No: docNumber,
      Dt: docDate
    },
    SellerDtls: {
      Gstin: document.getElementById("sellerGstin").value,
      LglNm: document.getElementById("sellerName").value,
      Addr1: document.getElementById("sellerAddr1").value,
      Addr2: null,
      Loc: document.getElementById("sellerLoc").value,
      Pin: parseInt(document.getElementById("sellerPin").value),
      Stcd: document.getElementById("sellerStcd").value,
      Ph: document.getElementById("sellerPh").value,
      Em: null
    },
    BuyerDtls: {
      Gstin: document.getElementById("buyerGstin").value,
      LglNm: document.getElementById("buyerName").value,
      Addr1: document.getElementById("buyerAddr1").value,
      Addr2: document.getElementById("buyerAddr2").value,
      Loc: document.getElementById("buyerLoc").value,
      Pin: parseInt(document.getElementById("buyerPin").value),
      Pos: document.getElementById("buyerPos").value,
      Stcd: document.getElementById("buyerStcd").value,
      Ph: null,
      Em: null
    },
    ValDtls: {},
    RefDtls: {
      InvRm: "NICGEPP2.0"
    },
    ItemList: []
  };
  const itemBlocks = document.querySelectorAll(".item-block");
  itemBlocks.forEach((block, index) => {
    const desc = block.querySelector(".itemDesc").value;
    const hsn = block.querySelector(".hsnCode").value;
    const qty = parseFloat(block.querySelector(".qty").value) || 0;
    const unit = block.querySelector(".unit").value;
    const unitPrice = parseFloat(block.querySelector(".unitPrice").value) || 0;
    const gstRate = parseFloat(block.querySelector(".gstRate").value) || 0;
    const igstAmt = parseFloat(block.querySelector(".igstAmt").value) || 0;
    const cgstAmt = parseFloat(block.querySelector(".cgstAmt").value) || 0;
    const sgstAmt = parseFloat(block.querySelector(".sgstAmt").value) || 0;
    const totItemVal =
      parseFloat(block.querySelector(".totItemVal").value) || 0;
    const itemAssVal = unitPrice * qty;
    const IsServc = block.querySelector(".IsServc").value;
    assVal += itemAssVal;
    igstVal += igstAmt;
    cgstVal += cgstAmt;
    sgstVal += sgstAmt;
    totInvVal += totItemVal;
    invoice.ItemList.push({
      SlNo: String(index + 1),
      PrdDesc: desc,
      IsServc: IsServc,
      HsnCd: hsn,
      Qty: qty,
      FreeQty: 0,
      Unit: unit,
      UnitPrice: unitPrice,
      TotAmt: itemAssVal,
      Discount: 0,
      PreTaxVal: 0,
      AssAmt: itemAssVal,
      GstRt: gstRate,
      IgstAmt: igstAmt,
      CgstAmt: cgstAmt,
      SgstAmt: sgstAmt,
      CesRt: 0,
      CesAmt: 0,
      CesNonAdvlAmt: 0,
      StateCesRt: 0,
      StateCesAmt: 0,
      StateCesNonAdvlAmt: 0,
      OthChrg: 0,
      TotItemVal: totItemVal
    });
  });
  invoice.ValDtls = {
    AssVal: parseFloat(assVal.toFixed(2)),
    IgstVal: parseFloat(igstVal.toFixed(2)),
    CgstVal: parseFloat(cgstVal.toFixed(2)),
    SgstVal: parseFloat(sgstVal.toFixed(2)),
    CesVal: 0,
    StCesVal: 0,
    Discount: 0,
    OthChrg: 0,
    RndOffAmt: 0,
    TotInvVal: parseFloat(totInvVal.toFixed(2))
  };
  document.getElementById("output").textContent = JSON.stringify(
    [invoice],
    null,
    2
  );
  downloadJSON();
  
  function downloadJSON() {
    const jsonText = document.getElementById("output").textContent;
    if (!jsonText.trim()) {
      alert("Please generate JSON first.");
      return;
    }
    const blob = new Blob([jsonText], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const docNo =
      document.getElementById("docNo").value.replace(/\s+/g, "").trim() ||
      "invoice";
    link.download = `${docNo}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

// --- JS code ---

// Utility to chunk array into subarrays of given size
function dmsChunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

// Handle reading multiple files (FileList) and merging JSON arrays
async function dmsReadAndMergeFiles(fileList) {
  const merged = [];
  
  for (const file of fileList) {
    if (!file.name.toLowerCase().endsWith('.json')) continue;
    const text = await file.text(); // FileReader alternative
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (err) {
      console.warn("Skipped invalid JSON file:", file.name, err);
      continue;
    }
    if (Array.isArray(parsed)) {
      merged.push(...parsed);
    } else {
      console.warn("Skipped JSON file not containing array:", file.name);
    }
  }
  
  return merged;
}

// Generate and download ZIP containing merged JSON in chunks of max 20 objects
async function dmsMergeAndDownload(fileList) {
  const mergedArray = await dmsReadAndMergeFiles(fileList);
  if (mergedArray.length === 0) {
    alert("No valid JSON objects found to merge.");
    return;
  }
  
  const chunks = dmsChunkArray(mergedArray, 20);
  const zip = new JSZip();
  
  chunks.forEach((chunk, idx) => {
    const filename = `merged_dms_${idx + 1}.json`;
    zip.file(filename, JSON.stringify(chunk, null, 2));
  });
  
  const zipBlob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(zipBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'merged_dms_invoices.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Setup drag & drop + file selection logic
function dmsSetupDragAndDrop() {
  const dropZone = document.getElementById("dmsDropZone");
  const fileInput = document.getElementById("fileInput");
  const mergeBtn = document.getElementById("dmsMergeBtn");
  let dmsFiles = [];
  
  function updateButtonState() {
    mergeBtn.disabled = dmsFiles.length === 0;
  }
  
  dropZone.addEventListener("click", () => fileInput.click());
  
  fileInput.addEventListener("change", (e) => {
    dmsFiles = Array.from(e.target.files);
    updateButtonState();
  });
  
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("drag-over");
  });
  
  dropZone.addEventListener("dragleave", (e) => {
    dropZone.classList.remove("drag-over");
  });
  
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("drag-over");
    if (e.dataTransfer.files && e.dataTransfer.files.length) {
      dmsFiles = Array.from(e.dataTransfer.files);
      updateButtonState();
    }
  });
  
  mergeBtn.addEventListener("click", () => {
    if (dmsFiles.length === 0) return;
    dmsMergeAndDownload(dmsFiles);
  });
}

// call setup once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  dmsSetupDragAndDrop();
});


document.querySelector('#invoiceForm').addEventListener('submit', (e) => {
  e.preventDefault();
  generateJSON();
})