import { styled } from "styled-components";
import React, { useState } from "react";

const InfoManage = () => {
  const [formData, setFormData] = useState({
    os: "Ubuntu",
    cpu: "2",
    memory: "4GB",
    hdd: "50GB",
    network: "VM Network",
    networkAddress: "",
    ip: "10.0.20.0/24",
    host: "",
    dns: "",
    script: Array(6).fill(""),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleScriptChange = (index, value) => {
    const updatedScript = [...formData.script];
    updatedScript[index] = value;
    setFormData({ ...formData, script: updatedScript });
  };

  return (
    <LnbAside>
      <InfoTable title="방화벽">
        <TableRow>
          <SubTitleCell colSpan="2">구분: 네트워크 장비</SubTitleCell>
        </TableRow>
        <TableRow>
          <SubTitleCell>OS:</SubTitleCell>
          <DataCell>
            <Input name="os" value={formData.os} onChange={handleInputChange} />
          </DataCell>
        </TableRow>
        <TableRow>
          <SubTitleCell>CPU:</SubTitleCell>
          <DataCell>
            <Input
              name="cpu"
              value={formData.cpu}
              onChange={handleInputChange}
            />
          </DataCell>
        </TableRow>
        <TableRow>
          <SubTitleCell>메모리:</SubTitleCell>
          <DataCell>
            <Input
              name="memory"
              value={formData.memory}
              onChange={handleInputChange}
            />
          </DataCell>
        </TableRow>
        <TableRow>
          <SubTitleCell>HDD:</SubTitleCell>
          <DataCell>
            <Input
              name="hdd"
              value={formData.hdd}
              onChange={handleInputChange}
            />
          </DataCell>
        </TableRow>
        <TableRow>
          <SubTitleCell>Network:</SubTitleCell>
          <DataCell>
            <Input
              name="network"
              value={formData.network}
              onChange={handleInputChange}
            />
          </DataCell>
        </TableRow>
      </InfoTable>

      <InfoTable title="네트워크">
        <TableRow>
          <SubTitleCell>구분: 네트워크</SubTitleCell>
          <DataCell>
            <Input
              name="networkAddress"
              value={formData.networkAddress}
              onChange={handleInputChange}
            />
          </DataCell>
        </TableRow>
        <TableRow>
          <SubTitleCell>IP:</SubTitleCell>
          <DataCell>
            <Input name="ip" value={formData.ip} onChange={handleInputChange} />
          </DataCell>
        </TableRow>
        <TableRow>
          <SubTitleCell>HOST:</SubTitleCell>
          <DataCell>
            <Input
              name="host"
              value={formData.host}
              onChange={handleInputChange}
            />
          </DataCell>
        </TableRow>
        <TableRow>
          <SubTitleCell>DNS:</SubTitleCell>
          <DataCell>
            <Input
              name="dns"
              value={formData.dns}
              onChange={handleInputChange}
            />
          </DataCell>
        </TableRow>
      </InfoTable>

      <InfoTable title="추가 실행 스크립트">
        {formData.script.map((script, index) => (
          <TableRow key={index}>
            <SubTitleCell>{`${index + 1}:`}</SubTitleCell>
            <DataCell>
              <ScriptTextarea
                name={`script[${index}]`}
                value={script}
                onChange={(e) => handleScriptChange(index, e.target.value)}
              />
            </DataCell>
          </TableRow>
        ))}
      </InfoTable>
    </LnbAside>
  );
};

const InfoTable = ({ title, children }) => (
  <TableWrapper>
    <thead>
      <tr>
        <MenuTitleCell colSpan="2">{title}</MenuTitleCell>
      </tr>
    </thead>
    <TableBody>{children}</TableBody>
  </TableWrapper>
);

export default InfoManage;

const LnbAside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  overflow-y: auto;
  background-color: #262626;
`;

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #262626;

  thead {
    background-color: #000;
  }

  tbody {
    background-color: #333;
  }

  tr {
    background-color: #333;
  }
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 1rem;
`;

const MenuTitleCell = styled(TableCell)`
  color: #f2f2f2;
  font-size: 1rem;
  font-weight: 600;
  background-color: #1a1a1a;
  text-align: center;
`;

const SubTitleCell = styled(TableCell)`
  color: #333;
  background-color: #f2f2f2;
`;

const DataCell = styled(TableCell)`
  background-color: #f2f2f2;
  color: #000;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  background-color: #f2f2f2;
  border: none;
  color: #000;
`;

const ScriptTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  background-color: #f2f2f2;
  border: none;
  color: #000;
  resize: vertical;
`;
