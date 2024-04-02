import { styled } from "styled-components";

import React from "react";

const InfoManage = () => {
  return (
    <LnbAside>
      <Table>
        <TableHead>
          <MenuTitleWrapper>
            <MenuTitleText>방화벽</MenuTitleText>
          </MenuTitleWrapper>
        </TableHead>
        <TableBody>
          <TableRow>
            <SubTitle label="구분: 네트워크 장비" />
          </TableRow>
          <TableRow>
            <DataItem label="OS : Ubuntu" />
          </TableRow>
          <TableRow>
            <DataItem label="CPU : 2" />
          </TableRow>
          <TableRow>
            <DataItem label="메모리 : 4GB" />
          </TableRow>
          <TableRow>
            <DataItem label="HDD : 50GB" />
          </TableRow>
          <TableRow>
            <DataItem label="Network : VM Network" />
          </TableRow>
          <TableRow>
            <DataItem label="" />
          </TableRow>
          <TableRow>
            <DataItem label="" />
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableBody>
          <TableRow>
            <MenuTitleWrapper>
              <MenuTitleText>네트워크</MenuTitleText>
            </MenuTitleWrapper>
          </TableRow>
          <TableRow>
            <SubTitle label="구분: 네트워크 " />
          </TableRow>
          <TableRow>
            <DataItem label="주소 : 10.0.20.0/24" />
          </TableRow>
          <TableRow>
            <DataItem label="IP : " />
          </TableRow>
          <TableRow>
            <DataItem label="HOST : " />
          </TableRow>
          <TableRow>
            <DataItem label="DNS : " />
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableBody>
          <TableRow>
            <MenuTitleWrapper>
              <MenuTitleText>추가 실행 스크립트</MenuTitleText>
            </MenuTitleWrapper>
          </TableRow>
          <TableRow>
            <SubTitle label="1 :" />
          </TableRow>
          <TableRow>
            <DataItem label="2 :" />
          </TableRow>
          <TableRow>
            <DataItem label="3 :" />
          </TableRow>
          <TableRow>
            <DataItem label="4 :" />
          </TableRow>
          <TableRow>
            <DataItem label="5 :" />
          </TableRow>
          <TableRow>
            <DataItem label="6 :" />
          </TableRow>
        </TableBody>
      </Table>
    </LnbAside>
  );
};

export default InfoManage;

const LnbAside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  overflow-y: auto;
  /* padding: 1.5rem; */
  background-color: #262626;

  /* 전체 테이블 셀 배경색 설정 */
  table {
    background-color: #262626;
    width: 100%;
    border-collapse: collapse;
  }

  /* 전체 테이블 헤더 배경색 설정 */
  thead {
    background-color: #000;
  }

  /* 전체 테이블 바디(내용) 배경색 설정 */
  tbody {
    background-color: #333;
  }

  /* 전체 테이블 행 배경색 설정 */
  tr {
    background-color: #333;
  }

  /* 전체 테이블 셀 배경색 설정 */
  td {
    padding: 2rem;
  }
`;

const TitleText = styled.div`
  color: #f2f2f2;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
`;

const TableHead = styled.thead``;

const TableHeadCell = styled.th`
  color: #fff;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const MenuTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1rem;
  border-radius: 0.3125rem;
  background: #1a1a1a;
`;

const MenuTitleText = styled.div`
  color: #f2f2f2;
  font-size: 1rem;
  font-weight: 600;
`;

const GreyBackgroundCell = styled.td`
  background-color: #f2f2f2;
  color: #000;
`;

const BlackBackgroundCell = styled.td`
  color: #fff;
  background-color: #333;
`;

const DataItem = ({ label }) => (
  <GreyBackgroundCell>{label}</GreyBackgroundCell>
);

const SubTitle = ({ label }) => (
  <BlackBackgroundCell>{label}</BlackBackgroundCell>
);
