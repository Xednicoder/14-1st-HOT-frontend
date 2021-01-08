# Team Name: House Of Tomorrow(H.O.T)
<video src='https://youtu.be/e-y7PCsRhGo'>

# Introduction
> 오늘의집과 정말 정말 똑같이 클론 코딩 해보자.

<iframe width="560" height="315" src="https://youtu.be/e-y7PCsRhGo" frameborder="0" allowfullscreen></iframe>

- 목적 : 클론 코딩을 통한 웹 사이트의 이해도를 높이고 실제 사용되는 기술에 대한 이해도를 높인다.
- 분석 : 오늘의집은 커뮤니티와 스토어를 서로 연결시켜 두었다는 것이 가장 큰 장점이다. 즉, 피드를 구경하다 방을 구성하고 있는 제품들에 대한 정보를 바로 알 수 있고 구매까지 할 수 있다. 
또한 제품을 고르다 해당 제품이 게시된 피드를 보러 커뮤니티로 바로 이동할 수도 있다.
- 목표 : 핵심이 되는 기능을 중심으로 중복되는 페이지는 제외하고 파트를 나누어 클론을 진행한다. 
- 기간 : 2020년 11월 16일 (월) ~ 2020년 11월 26일(목), 11일간 진행

# What did we use

- Language: JavaScript
- Library: React
- Third-party: React-Router, SCSS, React-Slick
 
# Who we are
### Team Members : Front-End

```javascript
  const member = 
        [{id : 0,
          'name': '안상혁(PM)',
          'task': 'Store', 'Cart'},
         {id : 1,
          'name': '이승윤',
          'task': 'Community'},
         {id : 2,
          'name': '공주민',
          'task': 'SignIn', 'SignUp', 'MyPage'}]
```

### Team Members : Back-End

```javascript
  const member = 
        [{id : 0,
          'name': '강두연',
          'task': 'Post'},
         {id : 1,
          'name': '김기용',
          'task': 'Product'},
         {id : 2,
          'name': '김민서',
          'task': 'User', 'Order'}]
```
Back-end <a href='https://github.com/wecode-bootcamp-korea/14-1st-HOT-backend'> (github repo) </a>

# What we did

### 안상혁
#### 완성한 미션
 - [x] Common : CRA, 공용컴포넌트, 공용스타일, 초기세팅구축, Github 관리
 - [x] Layout, CSS : 스토어 카테고리, 제품 상세 페이지, Cart
 - [x] Router : 각각의 페이지로 정상적으로 push 되도록 구현
 - [x] Fuction : 카테고리 선택에 따라 자동 필터 기능 구현
 - [x] Fuction : KeyFrames, Transition으로 카테고리 메뉴 열고 닫는 기능 구현
 - [x] Fuction : React-Slick으로 카테고리 상단 배너 구현
 - [x] Fuction : 제품별 옵션 선택 기능 구현
 - [x] Fuction : React-Slick으로 유저 스타일링샷 구현
 - [x] Fuction : 장바구니 기능 구현(모달 창, 자동 계산 기능 등)
 - [x] Fuction : 북마크 기능 구현(스위치, 마이페이지로 이동)

#### 못다한 미션
 - [ ] 결제 시스템 도입
 
 
### 이승윤
#### 완성한 미션
 - [x] Layout, CSS : 커뮤니티 리스트, 피드 상세 페이지
 - [x] Fuction : 댓글 및 댓글의 댓글 기능, 댓글 삭제 기능
 - [x] Fuction : 피드에 아이템 좌표 설정 기능(스토어로 연결)

#### 못다한 미션

### 공주민
#### 완성한 미션
 - [x] Layout, CSS : 상단 네비게이션바, 마이페이지, 로그인, 회원가입, 풋터
 - [x] Function : 로그인 기능 구현(로컬에 토큰 추가)
 - [x] Function : 회원가입 기능 구현
 - [x] Function : Mypage에 로그인 시 받은 토큰 가져와서 데이터 불러오기
 - [x] Function : 네비게이션바 카테고리에 호버 시 해당하는 Subcategory 구현
 - [x] Function : map을 이용해서 최대한 깔끔한 코드 구현
 - [x] Function : 북마크시 넘어온 데이터를 Mypage에 구현

#### 못다한 미션
 - [ ] Posting 기능 (Multer)
