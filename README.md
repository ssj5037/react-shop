# [React Shop](https://enchanting-gelato-cf65e2.netlify.app/)

[![Video Label](http://img.youtube.com/vi/Tu89BtpEvnM/0.jpg)](https://youtu.be/Tu89BtpEvnM)

- 배포: https://enchanting-gelato-cf65e2.netlify.app/

# 프로젝트 소개

## 제작 이유

- React.js를 공부를 하는 도중 역량 개발을 위해 쇼핑몰 사이트를 제작하였습니다.
- 수강 강의 : [드림코딩 - 리액트](https://academy.dream-coding.com/courses/react)

## 기능 목록

- 상품 목록 조회
- 상품 상세 정보 조회
- 장바구니 관리 기능
- 신규 상품 등록 기능
- 인증 (경로 보호)
  - 로그인 사용자만 장바구니 기능 사용 가능하도록 제한
  - 어드민 사용자만 신규 제품 등록 가능하도록 제한
- 반응형 UI 적용

## 사용 기술

<p>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/tailwindCss-06B6D4?style=flat&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=reactrouter&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Query-FF4154?style=flat&logo=reactquery&logoColor=white"/>
  <img src="https://img.shields.io/badge/firebase-FFCA28?style=flat&logo=firebase&logoColor=white"/>
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=flat&logo=Cloudinary&logoColor=white"/>
</p>

## 배운 점

### 1. 경로 보호 방법

특정 사용자만 접속할 수 있도록 경로를 보호하고 싶을 때는 보호 라우트 페이지를 추가해주면 된다.
라우트를 다음과 같이 설정해주고,

```javascript
{
  path: "/mypage",
  element: (
    <ProtectedRoute>
      <Mypage />
    </ProtectedRoute>
  ),
},
{
  path: "/admin",
  element: (
    <ProtectedRoute adminRoute>
      <Admin />
    </ProtectedRoute>
  ),
},
```

ProtectedRoute 컴포넌트에서 조건을 걸어 권한이 없는 사용자는 접근할 수 없도록 한다.

```javascript
export default function ProtectedRoute({ children, adminRoute }) {
  const { user } = useAuth();

  // 권한이 있는 유저가 아닐 경우 home으로 이동.
  // Navigate에 replace 옵션을 true로 주면 history가 현재 라우트로 교체가 되기 때문에,
  // 권한 없는 페이지 라우트의 history는 남지 않게 된다.
  if (!user || (adminRoute && !user.admin))
    return <Navigate to={"/"} replace={true}></Navigate>;
  return <div>{children}</div>;
}
```

[관련 커밋](https://github.com/ssj5037/react-shop/commit/c588ba66657b3dfb4597b137ec0e4580328c60b5)

> 추가 참고 링크 : [Setting Up Protected Routes with Firebase and React](https://berkekaragoz.com/p/protected-routes-with-firebase-and-react)

---

### 2. Custom Hooks를 생성하여 UI와 Business Logic를 분리하자

관련된 Business Logic별로 커스텀 훅을 만들어 사용하게 된다면,

1. react query 에서 사용한 query-key들을 파악하는데 용이해지며,
2. 각 query의 stale time을 한 눈에 확인 할 수 있고,
3. 어떤 mutation에서 어떤 query-key를 초기화 시켜주어야 하는지 파악하기 쉽다.
4. 문제가 생긴 부분을 파악하기도 쉽다.

즉, 유지보수성이 높아지고, 페이지에서는 UI만, 커스텀 훅에서는 로직만 확인하면 되니 코드를 파악하기도 수월하다.

[관련 커밋](https://github.com/ssj5037/react-shop/commit/56ff1b5f54c826b346fbbcd28c5adde20b98a9c9)

> 💡 참고 링크
> [Create custom hooks](https://tkdodo.eu/blog/practical-react-query#create-custom-hooks)

---

### 3. Context vs Custom Hook 그리고 상태관리 library

프론트엔드에서 상태(data)를 관리하는데 여러가지 방법이 쓰이고 있는데,
그 차이에 대해 헷갈리는 부분이 있어 정리를 해 보았다.

#### 3-1. 리액트 내장 api

- Context (React 16.3)
  - **컴포넌트가 " 값을 사용 " 하기 위하여 클로저를 생성한다.**
    리액트 앱 내부적으로 사용하는 [공통 데이터]를 저장한다.
- Custom Hook (React 16.8)
  - **컴포넌트 사이에 " 공통 로직" 을 생성한다.**
    [로직만 공유]하고, 데이터는 custom hook이 호출되는 각 인스턴스에 독립적이다.

#### 3-2. 외부 상태 라이브러리

1. server state (서버로부터 읽어오는 데이터를 관리)
   - TanStack Query (React Query), swr...
2. client state (클라이언트 자체 생성 데이터를 관리)
   - Redux, Recoil, jotai, Zustand ...

> 💡 참고 링크
> [What’s the difference between custom hooks and context?](https://www.reddit.com/r/reactjs/comments/w3eocf/whats_the_difference_between_custom_hooks_and/)
