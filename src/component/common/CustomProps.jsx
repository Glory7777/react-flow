// import React from "react";

// const CustomProps = (WrappedComponent, additionalProps) => {
//   // 반환되는 함수는 고차 컴포넌트(HOC)
//   const CustomProps = (props) => {
//     // 기존 props와 추가적인 props를 합쳐서 새로운 props를 생성
//     const mergedProps = { ...props, ...additionalProps };
//     // 합쳐진 props를 가지고 기존 컴포넌트를 렌더링
//     return <WrappedComponent {...mergedProps} />;
//   };

//   return CustomProps;
// };

// // CustomProps 컴포넌트에 displayName을 설정
// // eslint-disable-next-line no-undef
// CustomProps.displayName = `CustomProps(${
//   // eslint-disable-next-line no-undef
//   WrappedComponent.displayName || WrappedComponent.name || "Component"
// })`;

// export default CustomProps;
