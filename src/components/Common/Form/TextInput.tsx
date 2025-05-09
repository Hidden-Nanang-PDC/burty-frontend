// 📄 components/Common/Form/TextInput.tsx
import styled from "styled-components";

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: var(--variable-collection-text-200);
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 16px;
  box-sizing: border-box;
  border: 1px solid var(--variable-collection-bg-300);
  border-radius: 10px;
  font-size: 13px;
  background-color: var(--variable-collection-bg-100);
  color: var(--variable-collection-text-100);

  &:focus {
    outline: none;
    border-color: var(--variable-collection-primary-100);
  }
`;

interface TextInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

const TextInput = ({ label, value, onChange }: TextInputProps) => (
  <InputBlock>
    <Label>{label}</Label>
    <Input value={value} onChange={(e) => onChange(e.target.value)} />
  </InputBlock>
);

export default TextInput;
