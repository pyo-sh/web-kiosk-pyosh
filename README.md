<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/woowa-techcamp-2022/web-kiosk-pyosh">
    <img src="https://user-images.githubusercontent.com/55688122/183279819-4f32333e-6a5a-4219-bbf3-cf331dd61925.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">WEB KIOSK</h3>

  <p align="center">
    2022 Woowa-Techcamp-5 :
    <a href="https://github.com/pyo-sh">
      pyo-sh
    </a>
    Project
    <br />
    <a href="https://github.com/woowa-techcamp-2022/web-kiosk-pyosh/wiki">
      <strong>
        Explore the Wiki »
      </strong>
    </a>
    <br />
    <br />
    <a href="http://3.38.154.108/">Demo Page</a>
    ·
    <a href="https://github.com/woowa-techcamp-2022/web-kiosk-pyosh/issues">
      Report Bugs
    </a>
    ·
    <a href="https://github.com/woowa-techcamp-2022/web-kiosk-pyosh/issues">
      Request Features
    </a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
        <li>
      <a href="#documents">Documents</a>
      <ul>
        <li><a href="#eerd">EERD</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

- 2022.08.01 ~ 2022.08.12

Project is in Development...

### Built With

#### 1. Kiosk - Web (Whole Client)

- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

#### 2. Kiosk - API (Whole Server)

- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Project is running with yarn.

You need to install yarn before run this Project

```
npm install yarn -g
```

Also, Project is using yarn berry.

You need to upgrade yarn to yarn berry

```
yarn set version berry && yarn set version latest
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/woowa-techcamp-2022/web-kiosk-pyosh.git
   ```
2. Install packages in workspaces
   ```sh
   yarn install
   ```
3. Set Yarn Berry's IDE (In Development)
   - Select your IDE [Refs](https://yarnpkg.com/getting-started/editor-sdks)
   ```sh
   yarn dlx @yarnpkg/sdks vscode
   ```
4. Set Environments in `.env` (**[Environments](https://chrome-submarine-cd8.notion.site/3042528af9fa4cb2abaab34f557d18f6)**)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## UIs

### 메인 화면

현재 DB에 저장되어 있는 상품 목록을 들고와 제공해줍니다

<img width="820" alt="image" src="https://user-images.githubusercontent.com/55688122/184220720-42f369fe-671d-4c6c-923a-d7ca3dc832cb.png">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 상품 선택 및 옵션 선택

상품을 클릭하면 옵션을 선택할 수 있는 모달 창이 뜹니다

아래와 같이 수량, 옵션들을 선택할 수 있고 주문 목록에 넣을 수 있습니다

|                                                              초기 옵션 선택                                                               |                                                               옵션 선택 후                                                                |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="410" alt="image" src="https://user-images.githubusercontent.com/55688122/184220806-26bb4c78-3180-413e-ab11-39dbe429d41d.png"> | <img width="410" alt="image" src="https://user-images.githubusercontent.com/55688122/184221119-ba3067c2-7f20-4300-974a-5b387136bef4.png"> |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 장바구니 확인

담은 물품들을 확인할 수 있습니다

모바일과 태블릿으로 나누어져 있습니다

|                                                                  태블릿                                                                   |                                                                  모바일                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="615" alt="image" src="https://user-images.githubusercontent.com/55688122/184221430-74a42901-6cda-4741-a902-0ad7a1a2ac20.png"> | <img width="205" alt="image" src="https://user-images.githubusercontent.com/55688122/184221504-cee2c519-857c-4d6c-a4a8-3b44d20cc4a5.png"> |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 결제

어떤 방법으로 결제할 것인지 정할 수 있습니다

카드는 3~7초 후 자동 결제됩니다

현금은 현재 액수를 넘을 때 결제됩니다

|                                                                 방법 선택                                                                 |                                                                 현금 결제                                                                 |                                                                 카드 결제                                                                 |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="266" alt="image" src="https://user-images.githubusercontent.com/55688122/184221664-c64640dd-57e4-446a-80b6-bd2838df9583.png"> | <img width="266" alt="image" src="https://user-images.githubusercontent.com/55688122/184221931-39dc613b-0bf6-4abc-97df-d0bc73ca66c8.png"> | <img width="266" alt="image" src="https://user-images.githubusercontent.com/55688122/184222246-3b568cad-c78f-4fdf-abbb-5843365575c0.png"> |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 영수증 확인

결제 내역을 서버로 부터 받아온 뒤 확인할 수 있습니다

<img width="266" alt="image" src="https://user-images.githubusercontent.com/55688122/184222387-66bf7761-e650-4eb5-ba2d-c97820e383c6.png">

<!-- References -->
<!-- https://github.com/othneildrew/Best-README-Template -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Documents

### [EERD](<https://github.com/woowa-techcamp-2022/web-kiosk-pyosh/wiki/EERD-(Enhanced-Enitity-Relatioship-Diagram)>)

![image](https://user-images.githubusercontent.com/55688122/183259287-319d1fcb-01f2-4cf2-bd29-c524f9aec44d.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
